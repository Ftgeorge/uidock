"use client"

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { FiSearch, FiFilter, FiGrid, FiCode, FiDownload, FiStar, FiTrendingUp, FiClock } from 'react-icons/fi'

// Placeholder data - replace with actual data fetching
const components = [
  {
    id: '1',
    title: 'Animated Button',
    description: 'A beautiful button component with hover and click animations',
    author: 'John Doe',
    framework: 'React',
    category: 'Buttons',
    downloads: 1234,
    stars: 89,
    tags: ['Animation', 'Interactive', 'Modern'],
  },
  {
    id: '2',
    title: 'Card Grid',
    description: 'Responsive card grid layout with masonry effect',
    author: 'Jane Smith',
    framework: 'React',
    category: 'Layout',
    downloads: 856,
    stars: 45,
    tags: ['Layout', 'Responsive', 'Grid'],
  },
  // Add more components...
]

const frameworks = ['All', 'React', 'Vue', 'Angular', 'Svelte']
const categories = ['All', 'Buttons', 'Layout', 'Forms', 'Navigation', 'Data Display']

const stats = [
  { label: 'Total Components', value: '1,234', icon: FiGrid },
  { label: 'Active Developers', value: '567', icon: FiCode },
  { label: 'Total Downloads', value: '89.2K', icon: FiDownload },
  { label: 'Community Stars', value: '12.5K', icon: FiStar },
]

export function ComponentsContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFramework, setSelectedFramework] = useState('All')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFramework = selectedFramework === 'All' || component.framework === selectedFramework
    const matchesCategory = selectedCategory === 'All' || component.category === selectedCategory
    return matchesSearch && matchesFramework && matchesCategory
  })

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-20">
        <div className="container relative z-10">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Discover
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              {" "}Beautiful Components
            </span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground"
          >
            Explore our collection of modern, accessible, and customizable UI components
            for your next project.
          </MotionP>

          {/* Stats Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} className="border-none bg-background/50 backdrop-blur">
                <CardContent className="flex items-center space-x-4 p-6">
                  <div className="rounded-lg bg-primary/10 p-3">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </MotionDiv>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-14 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container py-4">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <Select value={selectedFramework} onValueChange={setSelectedFramework}>
              <SelectTrigger>
                <SelectValue placeholder="Select framework" />
              </SelectTrigger>
              <SelectContent>
                {frameworks.map((framework) => (
                  <SelectItem key={framework} value={framework}>
                    {framework}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((category) => (
                  <SelectItem key={category} value={category}>
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Component Grid */}
      <section className="container py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredComponents.map((component) => (
            <MotionDiv
              key={component.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Link href={`/components/${component.id}`}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-primary">
                        {component.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                          {component.framework}
                        </span>
                      </div>
                    </div>
                    <CardDescription>By {component.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-sm text-muted-foreground">
                      {component.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {component.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2 py-1 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <FiStar className="mr-1" /> {component.stars}
                        </span>
                        <span className="flex items-center">
                          <FiDownload className="mr-1" /> {component.downloads}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </MotionDiv>
          ))}
        </div>

        {/* Empty State */}
        {filteredComponents.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <FiFilter className="mb-4 h-12 w-12 text-muted-foreground" />
            <h3 className="mb-2 text-lg font-semibold">No components found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </section>
    </div>
  )
} 