"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { FiDownload, FiStar, FiEye, FiCode, FiCopy } from 'react-icons/fi'

// Placeholder data - replace with actual data fetching
const componentData = {
  id: '1',
  name: 'Animated Button',
  description: 'A beautiful button component with hover and click animations',
  author: 'John Doe',
  framework: 'React',
  category: 'Buttons',
  code: `import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedButton = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );
};`,
  dependencies: ['react', 'framer-motion'],
  stats: {
    downloads: 1234,
    stars: 89,
    views: 5678,
  },
}

export function ComponentDetailContent() {
  return (
    <div className="container py-8">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{componentData.name}</h1>
              <p className="text-muted-foreground">By {componentData.author}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline">
                <FiStar className="mr-2" /> Star
              </Button>
              <Button>
                <FiDownload className="mr-2" /> Download
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <p className="text-muted-foreground">Component Preview</p>
              </div>
            </CardContent>
          </Card>

          <Tabs defaultValue="code">
            <TabsList>
              <TabsTrigger value="code">Code</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
            </TabsList>
            <TabsContent value="code" className="space-y-4">
              <div className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-2 top-2"
                  onClick={() => navigator.clipboard.writeText(componentData.code)}
                >
                  <FiCopy className="mr-2" /> Copy
                </Button>
                <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                  <code>{componentData.code}</code>
                </pre>
              </div>
            </TabsContent>
            <TabsContent value="usage">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Basic Usage</h3>
                  <pre className="p-4 bg-muted rounded-lg overflow-x-auto">
                    <code>{`import { AnimatedButton } from './AnimatedButton';

function App() {
  return (
    <AnimatedButton onClick={() => console.log('clicked')}>
      Click Me
    </AnimatedButton>
  );
}`}</code>
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="dependencies">
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-2">
                    {componentData.dependencies.map((dep) => (
                      <li key={dep} className="flex items-center">
                        <FiCode className="mr-2" />
                        {dep}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Component Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-semibold">Framework</h3>
                <p className="text-muted-foreground">{componentData.framework}</p>
              </div>
              <div>
                <h3 className="font-semibold">Category</h3>
                <p className="text-muted-foreground">{componentData.category}</p>
              </div>
              <div>
                <h3 className="font-semibold">Stats</h3>
                <div className="grid grid-cols-3 gap-4 mt-2">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{componentData.stats.downloads}</div>
                    <div className="text-sm text-muted-foreground">Downloads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{componentData.stats.stars}</div>
                    <div className="text-sm text-muted-foreground">Stars</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{componentData.stats.views}</div>
                    <div className="text-sm text-muted-foreground">Views</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 