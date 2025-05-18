"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion'
import Link from 'next/link'
import { FiArrowRight, FiStar, FiClock, FiTrendingUp, FiCode, FiDownload, FiUsers, FiGithub, FiCheck, FiZap, FiLayers, FiShield, FiHeart, FiMessageSquare, FiAward } from 'react-icons/fi'

// Placeholder data - replace with actual data fetching
const featuredComponents = [
  {
    id: '1',
    title: 'Animated Button',
    description: 'A beautiful button component with hover and click animations',
    author: 'John Doe',
    image: '/placeholder.jpg',
    stars: 1234,
    downloads: 5678,
    tags: ['Animation', 'Interactive', 'Modern'],
  },
  {
    id: '2',
    title: 'Card Grid',
    description: 'Responsive card grid layout with masonry effect',
    author: 'Jane Smith',
    image: '/placeholder.jpg',
    stars: 856,
    downloads: 2345,
    tags: ['Layout', 'Responsive', 'Grid'],
  },
  {
    id: '3',
    title: 'Neon Form',
    description: 'Futuristic form component with neon glow effects',
    author: 'Alex Johnson',
    image: '/placeholder.jpg',
    stars: 2345,
    downloads: 7890,
    tags: ['Form', 'Neon', 'Modern'],
  },
]

const stats = [
  { label: 'Components', value: '10K+', icon: FiCode },
  { label: 'Downloads', value: '1M+', icon: FiDownload },
  { label: 'Developers', value: '50K+', icon: FiUsers },
  { label: 'Stars', value: '25K+', icon: FiGithub },
]

const features = [
  {
    title: 'Modern Design',
    description: 'Beautiful, accessible, and customizable components',
    icon: FiLayers,
  },
  {
    title: 'Fast Performance',
    description: 'Optimized for speed and efficiency',
    icon: FiZap,
  },
  {
    title: 'Secure & Reliable',
    description: 'Built with security and reliability in mind',
    icon: FiShield,
  },
  {
    title: 'Active Community',
    description: 'Join thousands of developers and designers',
    icon: FiUsers,
  },
]

const testimonials = [
  {
    content: "UIDOCK has transformed how we build our applications. The components are beautiful and easy to customize.",
    author: "Sarah Chen",
    role: "Lead Developer at TechCorp",
    avatar: "/avatars/sarah.jpg",
  },
  {
    content: "The quality of components here is outstanding. It's become an essential part of our development workflow.",
    author: "Michael Rodriguez",
    role: "Frontend Architect",
    avatar: "/avatars/michael.jpg",
  },
  {
    content: "I love how easy it is to find and implement these components. The documentation is clear and comprehensive.",
    author: "Emma Thompson",
    role: "UI/UX Designer",
    avatar: "/avatars/emma.jpg",
  },
]

const communityStats = [
  { label: 'Discussions', value: '25K+', icon: FiMessageSquare },
  { label: 'Contributors', value: '5K+', icon: FiUsers },
  { label: 'Awards', value: '100+', icon: FiAward },
  { label: 'Stars', value: '25K+', icon: FiHeart },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
}

export function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-b from-background to-muted/20">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="container relative z-10 flex min-h-[90vh] flex-col items-center justify-center">
          <MotionH1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Share and Discover
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              {" "}Beautiful UI Components
            </span>
          </MotionH1>
          <MotionP
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mx-auto mt-6 max-w-2xl text-center text-lg text-muted-foreground"
          >
            Join our community of developers and designers to share, discover, and
            collaborate on the best UI components.
          </MotionP>
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4"
          >
            <Button asChild className="group">
              <Link href="/components">
                Browse Components
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="group">
              <Link href="/publish">
                Publish Component
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </MotionDiv>

          {/* Stats Grid */}
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 grid w-full max-w-4xl gap-6 sm:grid-cols-2 lg:grid-cols-4"
          >
            {stats.map((stat) => (
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
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Why Choose UIDOCK?
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              Everything you need to build beautiful and functional user interfaces
            </MotionP>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="rounded-lg bg-primary/10 p-3 w-fit">
                      <feature.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="mt-4">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Components */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Featured Components
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              Discover our most popular and recently added UI components
            </MotionP>
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {featuredComponents.map((component) => (
              <MotionDiv key={component.id} variants={itemVariants}>
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="group-hover:text-primary">
                        {component.title}
                      </CardTitle>
                      <div className="flex items-center space-x-2">
                        <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                          Featured
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
                      <Button className="group-hover:text-primary">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </MotionDiv>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl"
            >
              What Our Community Says
            </MotionH1>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <MotionDiv
                key={testimonial.author}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex items-center space-x-4">
                      <div className="h-12 w-12 overflow-hidden rounded-full bg-muted">
                        {/* Add avatar image here */}
                      </div>
                      <div>
                        <p className="font-semibold">{testimonial.author}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{testimonial.content}</p>
                  </CardContent>
                </Card>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20 py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Join Our Community
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              Connect with developers and designers from around the world
            </MotionP>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communityStats.map((stat, index) => (
              <MotionDiv
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none bg-background/50 backdrop-blur">
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
              </MotionDiv>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Button asChild className="group">
              <Link href="/community">
                Join Community
                <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-6xl"
            >
              Browse by Category
            </MotionH1>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="rounded-lg bg-primary/10 p-3 w-fit">
                    <FiStar className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Popular</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Most downloaded and starred components
                  </p>
                  <Button className="mt-4 group-hover:text-primary">
                    View Popular
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="rounded-lg bg-primary/10 p-3 w-fit">
                    <FiClock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">New Releases</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Recently published components
                  </p>
                  <Button className="mt-4 group-hover:text-primary">
                    View New
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="rounded-lg bg-primary/10 p-3 w-fit">
                    <FiTrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="mt-4">Trending</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Components gaining popularity
                  </p>
                  <Button className="mt-4 group-hover:text-primary">
                    View Trending
                  </Button>
                </CardContent>
              </Card>
            </MotionDiv>
          </div>
        </div>
      </section>
    </>
  )
} 