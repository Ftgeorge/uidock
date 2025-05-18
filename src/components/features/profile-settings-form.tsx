import * as React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Avatar } from '@/components/ui/avatar';
import { FiUpload } from 'react-icons/fi';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/toast';
import type { Profile } from './profile-card';

interface ProfileSettingsFormProps {
  profile: Profile;
  onSave: (profile: Partial<Profile>) => Promise<void>;
  className?: string;
}

export function ProfileSettingsForm({ profile, onSave, className }: ProfileSettingsFormProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: profile.name,
    username: profile.username,
    bio: profile.bio || '',
    location: profile.location || '',
    social: {
      github: profile.social?.github || '',
      twitter: profile.social?.twitter || '',
      website: profile.social?.website || '',
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await onSave(formData);
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
    } finally {
      setIsLoading(false);
    }
  };

  const handleAvatarChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // TODO: Implement avatar upload
    toast.error('Avatar upload coming soon');
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
            <CardTitle>Profile Settings</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <Avatar
                  src={profile.avatar}
                  name={profile.name}
                  size={96}
                  className="border-4 border-background"
                />
                <label
                  htmlFor="avatar-upload"
                  className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 hover:opacity-100 cursor-pointer transition-opacity"
                >
                  <FiUpload className="h-6 w-6 text-white" />
                </label>
                <input
                  id="avatar-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleAvatarChange}
                />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  Upload a new avatar. We recommend using a square image.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="bio">Bio</Label>
                <Textarea
                  id="bio"
                  value={formData.bio}
                  onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="github">GitHub Profile</Label>
                <Input
                  id="github"
                  value={formData.social.github}
                  onChange={(e) => setFormData({
                    ...formData,
                    social: { ...formData.social, github: e.target.value }
                  })}
                  placeholder="https://github.com/username"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="twitter">Twitter Profile</Label>
                <Input
                  id="twitter"
                  value={formData.social.twitter}
                  onChange={(e) => setFormData({
                    ...formData,
                    social: { ...formData.social, twitter: e.target.value }
                  })}
                  placeholder="https://twitter.com/username"
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="website">Website</Label>
                <Input
                  id="website"
                  value={formData.social.website}
                  onChange={(e) => setFormData({
                    ...formData,
                    social: { ...formData.social, website: e.target.value }
                  })}
                  placeholder="https://example.com"
                />
              </div>
            </div>

            <div className="flex justify-end">
              <Button type="submit" disabled={isLoading}>
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </CardContent>
        </Card>
      </form>
    </motion.div>
  );
} 