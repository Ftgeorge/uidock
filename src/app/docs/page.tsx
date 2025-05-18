import { MainLayout } from '@/components/layout/main-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FiBook, FiCode, FiFileText, FiHelpCircle, FiUsers } from 'react-icons/fi';

const documentationSections = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    description: 'Learn the basics of UIDOCK',
    icon: FiBook,
    content: `
# Getting Started with UIDOCK

UIDOCK is a platform for sharing and discovering UI components. This guide will help you get started with using our platform.

## Installation

To use UIDOCK components in your project, you can install them via npm:

\`\`\`bash
npm install @uidock/components
\`\`\`

## Basic Usage

Here's a simple example of using a UIDOCK component:

\`\`\`jsx
import { Button } from '@uidock/components';

function App() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}
\`\`\`
    `,
  },
  {
    id: 'components',
    title: 'Components',
    description: 'Browse our component library',
    icon: FiCode,
    content: `
# Component Library

UIDOCK provides a wide range of pre-built components that you can use in your projects.

## Available Components

- Buttons
- Cards
- Forms
- Navigation
- Layout
- Modals
- And more...

## Component Documentation

Each component comes with detailed documentation, including:

- Props
- Examples
- Best practices
- Accessibility guidelines
    `,
  },
  {
    id: 'contributing',
    title: 'Contributing',
    description: 'How to contribute to UIDOCK',
    icon: FiUsers,
    content: `
# Contributing to UIDOCK

We welcome contributions from the community! Here's how you can help:

## Guidelines

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

## Code Style

We follow these coding standards:

- Use TypeScript
- Follow ESLint rules
- Write tests for new features
- Update documentation
    `,
  },
  {
    id: 'faq',
    title: 'FAQ',
    description: 'Frequently asked questions',
    icon: FiHelpCircle,
    content: `
# Frequently Asked Questions

## General Questions

### What is UIDOCK?
UIDOCK is a platform for sharing and discovering UI components.

### Is it free to use?
Yes, UIDOCK is free for personal and commercial use.

## Technical Questions

### How do I report a bug?
You can report bugs through our GitHub issues page.

### Can I use UIDOCK with any framework?
Currently, we support React, Vue, and Angular.
    `,
  },
];

export default function DocumentationPage() {
  return (
    <MainLayout>
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Documentation</CardTitle>
                <CardDescription>Learn how to use UIDOCK</CardDescription>
              </CardHeader>
              <CardContent>
                <nav className="space-y-2">
                  {documentationSections.map((section) => (
                    <Button
                      key={section.id}
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      <section.icon className="mr-2 h-4 w-4" />
                      {section.title}
                    </Button>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="pt-6">
                <Tabs defaultValue="getting-started">
                  <TabsList>
                    {documentationSections.map((section) => (
                      <TabsTrigger key={section.id} value={section.id}>
                        <section.icon className="mr-2 h-4 w-4" />
                        {section.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {documentationSections.map((section) => (
                    <TabsContent key={section.id} value={section.id}>
                      <div className="prose prose-slate max-w-none">
                        <h1>{section.title}</h1>
                        <p className="text-muted-foreground">
                          {section.description}
                        </p>
                        <div
                          className="mt-6"
                          dangerouslySetInnerHTML={{
                            __html: section.content
                              .split('\n')
                              .map((line) => {
                                if (line.startsWith('```')) {
                                  return `<pre><code>${line
                                    .replace('```', '')
                                    .replace('```', '')}</code></pre>`;
                                }
                                return line;
                              })
                              .join('\n'),
                          }}
                        />
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
} 