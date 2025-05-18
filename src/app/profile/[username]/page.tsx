import * as React from 'react';
import { MainLayout } from '@/components/layout/main-layout';
import { ProfileCard } from '@/components/features/profile-card';
import { ComponentList } from '@/components/features/component-list';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

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

const mockComponents = [
  {
    id: '1',
    title: 'Animated Button',
    description: 'A beautiful animated button component with hover effects.',
    author: {
      name: 'John Doe',
      avatar: 'https://github.com/shadcn.png',
    },
    framework: 'react',
    category: 'buttons',
    stats: {
      stars: 123,
      downloads: 456,
      views: 789,
    },
    image: 'https://picsum.photos/400/225',
  },
  // Add more mock components as needed
];

export default function ProfilePage({ params }: { params: { username: string } }) {
  return (
    <MainLayout>
      <div className="container py-8 space-y-8">
        <ProfileCard profile={mockProfile} />

        <Tabs defaultValue="components" className="space-y-4">
          <TabsList>
            <TabsTrigger value="components">Components</TabsTrigger>
            <TabsTrigger value="likes">Likes</TabsTrigger>
            <TabsTrigger value="collections">Collections</TabsTrigger>
          </TabsList>

          <TabsContent value="components" className="space-y-4">
            <ComponentList components={mockComponents} />
          </TabsContent>

          <TabsContent value="likes" className="space-y-4">
            <p className="text-muted-foreground">Liked components coming soon...</p>
          </TabsContent>

          <TabsContent value="collections" className="space-y-4">
            <p className="text-muted-foreground">Collections coming soon...</p>
          </TabsContent>
        </Tabs>
      </div>
    </MainLayout>
  );
} 