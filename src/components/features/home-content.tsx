"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MotionDiv, MotionH1, MotionP } from '@/components/ui/motion'
import Link from 'next/link'
import { FiArrowRight, FiCode, FiGithub, FiTwitter, FiLinkedin, FiYoutube, FiHeart, FiDownload, FiEye, FiLayers } from 'react-icons/fi'
import HeroWithIsometric from './hero-content'

// Placeholder data - replace with actual data fetching
const codeBlocks = [
  {
    id: '1',
    title: 'Animated Button',
    description: 'A beautiful button with hover and click animations',
    code: `import { Button } from "@/components/ui/button"

export function AnimatedButton() {
  t
}`,
    author: 'John Doe',
    stars: 1234,
    downloads: 5678,
    tags: ['Animation', 'Interactive'],
  },
  {
    id: '2',
    title: 'Card Grid',
    description: 'Responsive card grid layout with masonry effect',
    code: `import { Card } from "@/components/ui/card"

export function CardGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <Card>Card 3</Card>
    </div>
  )
}`,
    author: 'Jane Smith',
    stars: 856,
    downloads: 2345,
    tags: ['Layout', 'Responsive', 'Grid', 'Modern', 'UI'],
  },
  {
    id: '3',
    title: 'Neon Form',
    description: 'Futuristic form with neon glow effects',
    code: `import { Input } from "@/components/ui/input"

export function NeonForm() {
  return (
    <form className="space-y-4">
      <Input className="neon-glow" />
    </form>
  )
}`,
    author: 'Alex Johnson',
    stars: 2345,
    downloads: 7890,
    tags: ['Form', 'Neon'],
  },
  {
    id: '4',
    title: 'Animated Modal',
    description: 'Smooth modal with backdrop blur',
    code: `import { Dialog } from "@/components/ui/dialog"

export function AnimatedModal() {
  return (
    <Dialog>
      <DialogContent>Content</DialogContent>
    </Dialog>
  )
}`,
    author: 'Sarah Chen',
    stars: 987,
    downloads: 3456,
    tags: ['Modal', 'Animation'],
  },
  {
    id: '5',
    title: 'Gradient Card',
    description: 'Beautiful card with gradient background',
    code: `import { Card } from "@/components/ui/card"

export function GradientCard() {
  return (
    <Card className="bg-gradient-to-r from-primary to-secondary">
      Content
    </Card>
  )
}`,
    author: 'Mike Wilson',
    stars: 765,
    downloads: 2345,
    tags: ['Card', 'Gradient'],
  },
  {
    id: '6',
    title: 'Animated Navbar',
    description: 'Responsive navbar with smooth animations',
    code: `import { NavigationMenu } from "@/components/ui/navigation-menu"

export function AnimatedNavbar() {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>Home</NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}`,
    author: 'Emma Davis',
    stars: 543,
    downloads: 1234,
    tags: ['Navbar', 'Animation'],
  },
  {
    id: '7',
    title: 'Loading Spinner',
    description: 'Simple loading spinner component',
    code: `export function Spinner() {
  return (
    <div className="animate-spin">
      Loading...
    </div>
  )
}`,
    author: 'Tom Brown',
    stars: 432,
    downloads: 987,
    tags: ['Loading', 'Animation'],
  },
  {
    id: '8',
    title: 'Toast Notification',
    description: 'Elegant toast notification system',
    code: `import { Toast } from "@/components/ui/toast"

export function ToastDemo() {
  return (
    <Toast>Hello World</Toast>
  )
}`,
    author: 'Lisa Wang',
    stars: 876,
    downloads: 2345,
    tags: ['Toast', 'Notification'],
  },
]

const socialLinks = [
  { icon: FiGithub, href: "https://github.com", label: "GitHub" },
  { icon: FiTwitter, href: "https://twitter.com", label: "Twitter" },
  { icon: FiLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: FiYoutube, href: "https://youtube.com", label: "YouTube" },
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

const cardVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const codeBlockVariants = {
  initial: {
    opacity: 0,
    scale: 0.95
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const tagVariants = {
  initial: {
    opacity: 0,
    x: -10
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

const floatingAnimation = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse"
    }
  }
}

const shimmerAnimation = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 8,
      ease: "linear",
      repeat: Infinity
    }
  }
}

const columnAVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

const columnBVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, 20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

const columnCVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const
    }
  }
}

export function HomeContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/20">
        {/* Background Elements */}

        <HeroWithIsometric />
      </section>

      {/* Code Blocks Grid */}
      <section className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-24">
        <div className="container relative z-10">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center mb-12">
            <MotionH1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold leading-[1.1] sm:text-3xl md:text-4xl bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent"
            >
              Featured Code Blocks
            </MotionH1>
            <MotionP
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"
            >
              Discover our most popular and recently added code blocks
            </MotionP>
          </div>

          <MotionDiv
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {/* Column 1 - 3 cards */}
            <MotionDiv
              variants={columnAVariants}
              animate="animate"
              className="flex flex-col gap-6"
            >
              {codeBlocks.slice(0, 3).map((block, index) => (
                <MotionDiv
                  key={block.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.3 }}
                >
                  <Card className="group overflow-hidden transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>
                          {block.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                            Featured
                          </span>
                        </div>
                      </div>
                      <CardDescription>By {block.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {block.description}
                      </p>
                      <div className="mb-4 rounded-lg bg-muted/50 backdrop-blur-sm p-4">
                        <pre className="overflow-x-auto">
                          <code className="text-sm text-muted-foreground">{block.code}</code>
                        </pre>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted/50 backdrop-blur-sm px-2 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FiHeart className="mr-1" /> {block.stars}
                          </span>
                          <span className="flex items-center">
                            <FiDownload className="mr-1" /> {block.downloads}
                          </span>
                        </div>
                        <Button asChild>
                          <Link href={`/code-blocks/${block.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* Column 2 - 2 cards */}
            <MotionDiv
              variants={columnBVariants}
              animate="animate"
              className="flex flex-col gap-6"
            >
              {codeBlocks.slice(3, 5).map((block, index) => (
                <MotionDiv
                  key={block.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.3 }}
                >
                  <Card className="group overflow-hidden transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>
                          {block.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                            Featured
                          </span>
                        </div>
                      </div>
                      <CardDescription>By {block.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {block.description}
                      </p>
                      <div className="mb-4 rounded-lg bg-muted/50 backdrop-blur-sm p-4">
                        <pre className="overflow-x-auto">
                          <code className="text-sm text-muted-foreground">{block.code}</code>
                        </pre>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted/50 backdrop-blur-sm px-2 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FiHeart className="mr-1" /> {block.stars}
                          </span>
                          <span className="flex items-center">
                            <FiDownload className="mr-1" /> {block.downloads}
                          </span>
                        </div>
                        <Button asChild>
                          <Link href={`/code-blocks/${block.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>

            {/* Column 3 - 3 cards */}
            <MotionDiv
              variants={columnCVariants}
              animate="animate"
              className="flex flex-col gap-6"
            >
              {codeBlocks.slice(5, 8).map((block, index) => (
                <MotionDiv
                  key={block.id}
                  variants={cardVariants}
                  initial="initial"
                  animate="animate"
                  transition={{ delay: index * 0.3 }}
                >
                  <Card className="group overflow-hidden transition-all">
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>
                          {block.title}
                        </CardTitle>
                        <div className="flex items-center space-x-2">
                          <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                            Featured
                          </span>
                        </div>
                      </div>
                      <CardDescription>By {block.author}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">
                        {block.description}
                      </p>
                      <div className="mb-4 rounded-lg bg-muted/50 backdrop-blur-sm p-4">
                        <pre className="overflow-x-auto">
                          <code className="text-sm text-muted-foreground">{block.code}</code>
                        </pre>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {block.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-muted/50 backdrop-blur-sm px-2 py-1 text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center space-x-4">
                          <span className="flex items-center">
                            <FiHeart className="mr-1" /> {block.stars}
                          </span>
                          <span className="flex items-center">
                            <FiDownload className="mr-1" /> {block.downloads}
                          </span>
                        </div>
                        <Button asChild>
                          <Link href={`/code-blocks/${block.id}`}>
                            View Details
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </MotionDiv>
              ))}
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-hidden bg-gradient-to-b from-muted/20 to-background py-12">
        <div className="container relative z-10">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">UIDOCK</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful UI sections and code blocks for modern web applications
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary"
                  >
                    <link.icon className="h-5 w-5" />
                    <span className="sr-only">{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs">Documentation</Link></li>
                <li><Link href="/sections">UI Sections</Link></li>
                <li><Link href="/code-blocks">Code Blocks</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Community</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/discord">Discord</Link></li>
                <li><Link href="/github">GitHub</Link></li>
                <li><Link href="/twitter">Twitter</Link></li>
                <li><Link href="/blog">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/privacy">Privacy Policy</Link></li>
                <li><Link href="/terms">Terms of Service</Link></li>
                <li><Link href="/cookies">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} UIDOCK. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
} 