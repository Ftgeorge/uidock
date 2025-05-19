"use client"

import { MainLayout } from '@/components/layout/main-layout'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion'
import { FiStar, FiDownload, FiEye, FiCode, FiCopy, FiGithub, FiExternalLink, FiHeart, FiShare2, FiArrowLeft } from 'react-icons/fi'
import { useState } from 'react'
import Link from 'next/link'

// Placeholder data - replace with actual data fetching
const componentData = {
  id: '1',
  title: 'Animated Button',
  description: 'A beautiful button component with hover and click animations',
  author: 'John Doe',
  framework: 'React',
  category: 'Buttons',
  downloads: 1234,
  stars: 89,
  views: 5678,
  code: `import { Button } from "@/components/ui/button"

export function AnimatedButton() {
  return (
    <Button className="group">
      Click me
    </Button>
  )
}`,
  usage: `// Import the component
import { AnimatedButton } from "@/components/animated-button"

// Use it in your code
export default function Page() {
  return (
    <AnimatedButton />
  )
}`,
  dependencies: [
    { name: 'react', version: '^18.0.0' },
    { name: 'framer-motion', version: '^10.0.0' },
  ],
  tags: ['Animation', 'Interactive', 'Modern'],
  demo: {
    title: 'Interactive Demo',
    description: 'Try out the component with different props',
  },
}

export default function ComponentDetailPage() {
  const [copied, setCopied] = useState(false)

  const copyCode = () => {
    navigator.clipboard.writeText(componentData.code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <MainLayout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20">
          {/* Background Elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          </div>

          <div className="container relative z-10">
            {/* Back Button */}
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-8"
            >
              <Button asChild variant="ghost" className="group">
                <Link href="/components">
                  <FiArrowLeft className="mr-2 transition-transform group-hover:-translate-x-1" />
                  Back to Components
                </Link>
              </Button>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-start space-y-4"
            >
              <div className="flex items-center space-x-2">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">
                  {componentData.framework}
                </span>
                <span className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground">
                  {componentData.category}
                </span>
              </div>
              <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl font-bold sm:text-5xl md:text-6xl"
              >
                {componentData.title}
              </MotionH1>
              <MotionP
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="max-w-2xl text-lg text-muted-foreground"
              >
                {componentData.description}
              </MotionP>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  <span className="flex items-center">
                    <FiStar className="mr-1" /> {componentData.stars}
                  </span>
                  <span className="flex items-center">
                    <FiDownload className="mr-1" /> {componentData.downloads}
                  </span>
                  <span className="flex items-center">
                    <FiEye className="mr-1" /> {componentData.views}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Button className="group">
                    <FiHeart className="mr-2" /> Star
                  </Button>
                  <Button variant="outline" className="group">
                    <FiShare2 className="mr-2" /> Share
                  </Button>
                </div>
              </div>
            </MotionDiv>
          </div>
        </section>

        {/* Main Content */}
        <section className="container py-12">
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Left Column - Preview and Demo */}
            <div className="lg:col-span-2 space-y-8">
              {/* Preview */}
              <Card className="overflow-hidden">
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>See the component in action</CardDescription>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="relative aspect-video bg-muted/50">
                    {/* Add component preview here */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Button className="group">
                        Click me
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Interactive Demo */}
              <Card>
                <CardHeader>
                  <CardTitle>{componentData.demo.title}</CardTitle>
                  <CardDescription>{componentData.demo.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Add interactive demo controls here */}
                    <div className="rounded-lg border p-4">
                      <h4 className="mb-2 font-semibold">Props</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Variant</span>
                          <select className="rounded-md border bg-background px-2 py-1 text-sm">
                            <option>Default</option>
                            <option>Outline</option>
                            <option>Ghost</option>
                          </select>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Size</span>
                          <select className="rounded-md border bg-background px-2 py-1 text-sm">
                            <option>Default</option>
                            <option>Small</option>
                            <option>Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Code and Usage */}
              <Card>
                <CardHeader>
                  <Tabs defaultValue="code" className="w-full">
                    <TabsList>
                      <TabsTrigger value="code">Code</TabsTrigger>
                      <TabsTrigger value="usage">Usage</TabsTrigger>
                      <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
                    </TabsList>
                    <TabsContent value="code" className="mt-4">
                      <div className="relative">
                        <pre className="rounded-lg bg-muted p-4">
                          <code>{componentData.code}</code>
                        </pre>
                        <Button
                          onClick={copyCode}
                          className="absolute right-2 top-2"
                          variant="ghost"
                          size="sm"
                        >
                          {copied ? <FiCheck className="mr-2" /> : <FiCopy className="mr-2" />}
                          {copied ? 'Copied!' : 'Copy'}
                        </Button>
                      </div>
                    </TabsContent>
                    <TabsContent value="usage" className="mt-4">
                      <div className="rounded-lg bg-muted p-4">
                        <pre>
                          <code>{componentData.usage}</code>
                        </pre>
                      </div>
                    </TabsContent>
                    <TabsContent value="dependencies" className="mt-4">
                      <div className="space-y-2">
                        {componentData.dependencies.map((dep) => (
                          <div
                            key={dep.name}
                            className="flex items-center justify-between rounded-lg border p-3"
                          >
                            <span className="font-mono">{dep.name}</span>
                            <span className="text-sm text-muted-foreground">{dep.version}</span>
                          </div>
                        ))}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardHeader>
              </Card>
            </div>

            {/* Right Column - Info and Stats */}
            <div className="space-y-8">
              {/* Author Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Author</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                      {/* Add author avatar here */}
                    </div>
                    <div>
                      <p className="font-semibold">{componentData.author}</p>
                      <p className="text-sm text-muted-foreground">Component Creator</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Downloads</span>
                      <span className="font-semibold">{componentData.downloads}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Stars</span>
                      <span className="font-semibold">{componentData.stars}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Views</span>
                      <span className="font-semibold">{componentData.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tags */}
              <Card>
                <CardHeader>
                  <CardTitle>Tags</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {componentData.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button className="w-full justify-start" variant="outline">
                      <FiGithub className="mr-2" /> View on GitHub
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <FiExternalLink className="mr-2" /> Documentation
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  )
}