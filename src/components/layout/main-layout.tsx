"use client"

import * as React from 'react';
import { useTheme } from '@/lib/hooks/use-theme';
import { useAuth } from '@/lib/hooks/use-auth';
import { useUIStore } from '@/lib/hooks/use-ui-store';
import { Button } from '@/components/ui/button';
import { AnimatePresence } from 'framer-motion';
import { MotionDiv } from '@/components/ui/motion';
import Link from 'next/link';
import { FiMenu, FiX, FiSun, FiMoon, FiGithub } from 'react-icons/fi';

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const { theme, toggleTheme } = useTheme();
  const { user, isAuthenticated, login, logout } = useAuth();
  const { isSidebarOpen, toggleSidebar } = useUIStore();

  return (
    <div className="flex min-h-screen flex-col bg-light dark:bg-dark">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-light dark:bg-dark backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Button
            variant="ghost"
            size="icon"
            className="mr-2 md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FiX /> : <FiMenu />}
          </Button>

          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">UIDOCK</span>
          </Link>

          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <nav className="flex items-center space-x-2">
              <Button variant="ghost" size="icon" onClick={toggleTheme}>
                {theme === 'dark' ? <FiSun /> : <FiMoon />}
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/yourusername/uidock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiGithub />
                </a>
              </Button>
              {isAuthenticated ? (
                <Button variant="ghost" onClick={logout}>
                  Sign Out
                </Button>
              ) : (
                <Button onClick={login}>Sign In</Button>
              )}
            </nav>
          </div>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <AnimatePresence mode="wait">
          {isSidebarOpen && (
            <MotionDiv
              initial={{ x: -300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              className="fixed inset-y-0 left-0 z-30 mt-14 hidden w-[220px] shrink-0 overflow-y-auto border-r md:sticky md:block lg:w-[240px]"
            >
              <nav className="grid items-start px-4 py-4 text-sm font-medium">
                <Link
                  href="/components"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  Components
                </Link>
                <Link
                  href="/suggestions"
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                >
                  Suggestions
                </Link>
                {isAuthenticated && (
                  <>
                    <Link
                      href="/profile"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                    >
                      Profile
                    </Link>
                    <Link
                      href="/publish"
                      className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-foreground"
                    >
                      Publish
                    </Link>
                  </>
                )}
              </nav>
            </MotionDiv>
          )}
        </AnimatePresence>

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Built with ❤️ by the UIDOCK team
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
} 