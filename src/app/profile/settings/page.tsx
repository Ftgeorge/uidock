import * as React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { ProfileSettingsForm } from '@/components/features/profile-settings-form';

// Mock data for demonstration
const mockProfile = {
  id: '1',
  name: 'John Doe',
  username: 'johndoe',
  avatar: 'https://github.com/shadcn.png',
  bio: 'Frontend developer passionate about UI/UX design and React.',
  location: 'San Francisco, CA',
  joinedAt: '2024-01-01',
  stats: {
    components: 12,
    followers: 234,
    following: 45,
  },
  social: {
    github: 'https://github.com/johndoe',
    twitter: 'https://twitter.com/johndoe',
    website: 'https://johndoe.dev',
  },
};

export default function ProfileSettingsPage() {
  const handleSaveProfile = async (data: any) => {
    // TODO: Implement profile update logic
    console.log('Saving profile:', data);
    return new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
  };

  return (
    <MainLayout>
      <div className="container py-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-8">Profile Settings</h1>
          <ProfileSettingsForm
            profile={mockProfile}
            onSave={handleSaveProfile}
          />
        </div>
      </div>
    </MainLayout>
  );
} 