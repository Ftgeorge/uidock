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

const frameworks = ['All Frameworks', 'React', 'Vue', 'Angular', 'Svelte']
const categories = ['All Categories', 'Buttons', 'Layout', 'Forms', 'Navigation', 'Data Display']

const stats = [
  { label: 'Total Components', value: '1,234', icon: FiGrid },
  { label: 'Active Developers', value: '567', icon: FiCode },
  { label: 'Total Downloads', value: '89.2K', icon: FiDownload },
  { label: 'Community Stars', value: '12.5K', icon: FiStar },
]

export function ComponentsContent() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedFramework, setSelectedFramework] = useState('All Frameworks')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')

  const filteredComponents = components.filter((component) => {
    const matchesSearch = component.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesFramework = selectedFramework === 'All Frameworks' || component.framework === selectedFramework
    const matchesCategory = selectedCategory === 'All Categories' || component.category === selectedCategory
    return matchesSearch && matchesFramework && matchesCategory
  })

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="relative z-10">
          {/* Stats Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat, index) => (
              <Card key={stat.label} className="border-none bg-background/50 backdrop-blur">
                <CardContent className="flex items-center gap-4 p-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <stat.icon className="size-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xl font-bold">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Filters Section */}
      <section className="sticky top-14 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="py-4">
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
      <section className="py-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
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