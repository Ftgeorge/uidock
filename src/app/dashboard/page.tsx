import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiDownload, FiStar, FiEye, FiCode, FiEdit, FiTrash2 } from 'react-icons/fi';

// Placeholder data - replace with actual data fetching
const userData = {
  name: 'John Doe',
  email: 'john@example.com',
  stats: {
    components: 12,
    downloads: 1234,
    stars: 89,
    views: 5678,
  },
  recentComponents: [
    {
      id: '1',
      name: 'Animated Button',
      downloads: 123,
      stars: 45,
      views: 789,
    },
    {
      id: '2',
      name: 'Card Grid',
      downloads: 456,
      stars: 67,
      views: 1234,
    },
  ],
  starredComponents: [
    {
      id: '3',
      name: 'Modal Dialog',
      author: 'Jane Smith',
      stars: 234,
    },
    {
      id: '4',
      name: 'Form Builder',
      author: 'Mike Johnson',
      stars: 567,
    },
  ],
};

export default function DashboardPage() {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="grid gap-8">
          {/* User Info */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">{userData.name}</h1>
                  <p className="text-muted-foreground">{userData.email}</p>
                </div>
                <Button variant="outline">Edit Profile</Button>
              </div>
            </CardContent>
          </Card>

          {/* Stats */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userData.stats.components}</div>
                  <div className="text-sm text-muted-foreground">Components</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userData.stats.downloads}</div>
                  <div className="text-sm text-muted-foreground">Downloads</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userData.stats.stars}</div>
                  <div className="text-sm text-muted-foreground">Stars</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold">{userData.stats.views}</div>
                  <div className="text-sm text-muted-foreground">Views</div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Components and Stars */}
          <Tabs defaultValue="components">
            <TabsList>
              <TabsTrigger value="components">My Components</TabsTrigger>
              <TabsTrigger value="stars">Starred</TabsTrigger>
            </TabsList>
            <TabsContent value="components">
              <Card>
                <CardHeader>
                  <CardTitle>My Components</CardTitle>
                  <CardDescription>Manage your published components</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.recentComponents.map((component) => (
                      <div
                        key={component.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{component.name}</h3>
                          <div className="flex gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <FiDownload className="mr-1" /> {component.downloads}
                            </span>
                            <span className="flex items-center">
                              <FiStar className="mr-1" /> {component.stars}
                            </span>
                            <span className="flex items-center">
                              <FiEye className="mr-1" /> {component.views}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="ghost" size="sm">
                            <FiEdit className="mr-2" /> Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="text-destructive">
                            <FiTrash2 className="mr-2" /> Delete
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="stars">
              <Card>
                <CardHeader>
                  <CardTitle>Starred Components</CardTitle>
                  <CardDescription>Components you've starred</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {userData.starredComponents.map((component) => (
                      <div
                        key={component.id}
                        className="flex items-center justify-between p-4 border rounded-lg"
                      >
                        <div>
                          <h3 className="font-semibold">{component.name}</h3>
                          <p className="text-sm text-muted-foreground">
                            By {component.author}
                          </p>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FiStar className="mr-1" /> {component.stars}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </MainLayout>
  );
} 