import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function PublishPage() {
  return (
    <MainLayout>
      <div className="container max-w-4xl py-8">
        <Card>
          <CardHeader>
            <CardTitle>Publish Component</CardTitle>
            <CardDescription>Share your UI component with the community</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Component Name</Label>
                <Input id="name" placeholder="e.g., Animated Button" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your component and its features..."
                  className="min-h-[100px]"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="buttons">Buttons</SelectItem>
                    <SelectItem value="cards">Cards</SelectItem>
                    <SelectItem value="forms">Forms</SelectItem>
                    <SelectItem value="navigation">Navigation</SelectItem>
                    <SelectItem value="layout">Layout</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="framework">Framework</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a framework" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="react">React</SelectItem>
                    <SelectItem value="vue">Vue</SelectItem>
                    <SelectItem value="angular">Angular</SelectItem>
                    <SelectItem value="svelte">Svelte</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="code">Component Code</Label>
                <Textarea
                  id="code"
                  placeholder="Paste your component code here..."
                  className="min-h-[200px] font-mono"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="preview">Preview Image</Label>
                <Input id="preview" type="file" accept="image/*" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="dependencies">Dependencies</Label>
                <Textarea
                  id="dependencies"
                  placeholder="List any dependencies (one per line)"
                  className="min-h-[100px]"
                />
              </div>

              <Button className="w-full">Publish Component</Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  );
} 