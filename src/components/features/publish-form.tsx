import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';
import { FiUpload, FiCode, FiEye } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';

export interface ComponentData {
  title: string;
  description: string;
  framework: string;
  category: string;
  code: string;
  language: string;
  image?: string;
  tags: string[];
}

interface PublishFormProps {
  onSubmit: (data: ComponentData) => Promise<void>;
  className?: string;
}

const FRAMEWORKS = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const CATEGORIES = [
  { value: 'buttons', label: 'Buttons' },
  { value: 'cards', label: 'Cards' },
  { value: 'forms', label: 'Forms' },
  { value: 'navigation', label: 'Navigation' },
  { value: 'modals', label: 'Modals' },
  { value: 'tables', label: 'Tables' },
  { value: 'charts', label: 'Charts' },
  { value: 'other', label: 'Other' },
];

export function PublishForm({ onSubmit, className }: PublishFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [showPreview, setShowPreview] = React.useState(false);
  const [formData, setFormData] = React.useState<ComponentData>({
    title: '',
    description: '',
    framework: '',
    category: '',
    code: '',
    language: 'tsx',
    tags: [],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSubmit(formData);
      toast.success('Component published successfully');
    } catch (error) {
      toast.error('Failed to publish component');
    } finally {
      setIsLoading(false);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // TODO: Implement image upload
    toast.error('Image upload coming soon');
  };

  const handleTagsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    setFormData({ ...formData, tags });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.2 }}
      className={className}
    >
      <form onSubmit={handleSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Publish New Component</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter component title"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe your component"
                  rows={3}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="framework">Framework</Label>
                  <Select
                    id="framework"
                    value={formData.framework}
                    onChange={(e) => setFormData({ ...formData, framework: e.target.value })}
                    required
                  >
                    <option value="">Select framework</option>
                    {FRAMEWORKS.map((framework) => (
                      <option key={framework.value} value={framework.value}>
                        {framework.label}
                      </option>
                    ))}
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    id="category"
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    required
                  >
                    <option value="">Select category</option>
                    {CATEGORIES.map((category) => (
                      <option key={category.value} value={category.value}>
                        {category.label}
                      </option>
                    ))}
                  </Select>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="tags">Tags (comma-separated)</Label>
                <Input
                  id="tags"
                  value={formData.tags.join(', ')}
                  onChange={handleTagsChange}
                  placeholder="e.g., button, form, responsive"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="code">Code</Label>
                <div className="relative">
                  <Textarea
                    id="code"
                    value={formData.code}
                    onChange={(e) => setFormData({ ...formData, code: e.target.value })}
                    placeholder="Paste your component code here"
                    rows={10}
                    className="font-mono"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-2 top-2"
                    onClick={() => setShowPreview(!showPreview)}
                  >
                    {showPreview ? (
                      <FiCode className="h-4 w-4 mr-2" />
                    ) : (
                      <FiEye className="h-4 w-4 mr-2" />
                    )}
                    {showPreview ? 'Show Code' : 'Preview'}
                  </Button>
                </div>
              </div>

              <div className="grid gap-2">
                <Label htmlFor="preview-image">Preview Image</Label>
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-32 h-32 border-2 border-dashed rounded-lg flex items-center justify-center">
                      {formData.image ? (
                        <img
                          src={formData.image}
                          alt="Preview"
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <FiUpload className="h-8 w-8 text-muted-foreground" />
                      )}
                    </div>
                    <label
                      htmlFor="preview-image"
                      className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-lg opacity-0 hover:opacity-100 cursor-pointer transition-opacity"
                    >
                      <FiUpload className="h-6 w-6 text-white" />
                    </label>
                    <input
                      id="preview-image"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Upload a preview image for your component. We recommend using a 16:9 aspect ratio.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowPreview(!showPreview)}
              >
                {showPreview ? (
                  <FiCode className="h-4 w-4 mr-2" />
                ) : (
                  <FiEye className="h-4 w-4 mr-2" />
                )}
                {showPreview ? 'Show Code' : 'Preview'}
              </Button>
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Publishing...' : 'Publish Component'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </motion.div>
  );
} 