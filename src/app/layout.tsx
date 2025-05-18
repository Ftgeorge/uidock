import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { cn } from '@/lib/utils'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { SplashProvider } from '@/components/providers/splash-provider'
import './globals.css'

const fontSans = GeistSans
const fontMono = GeistMono

export const metadata = {
  title: 'UIDOCK - Share and Discover UI Components',
  description: 'A platform for sharing and discovering beautiful UI components',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable,
          fontMono.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <SplashProvider>
            {children}
            <Toaster />
            <Analytics />
            <SpeedInsights />
          </SplashProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
