"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { SplashScreen } from "@/components/ui/splash-screen"

interface SplashContextType {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
}

const SplashContext = createContext<SplashContextType | undefined>(undefined)

export function SplashProvider({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Hide splash screen after initial load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000) // Show splash screen for at least 2 seconds

    return () => clearTimeout(timer)
  }, [])

  return (
    <SplashContext.Provider value={{ isLoading, setIsLoading }}>
      {isLoading && <SplashScreen />}
      {children}
    </SplashContext.Provider>
  )
}

export function useSplash() {
  const context = useContext(SplashContext)
  if (context === undefined) {
    throw new Error("useSplash must be used within a SplashProvider")
  }
  return context
} 