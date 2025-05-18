"use client"

import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signOut } from '@/lib/auth'

interface Session {
  user?: {
    name?: string | null
    email?: string | null
    image?: string | null
  }
}

export function useAuth() {
  const router = useRouter()
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch session on mount
    fetch('/api/auth/session')
      .then((res) => res.json())
      .then((data) => {
        setSession(data)
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  const login = useCallback(async () => {
    await signIn('github')
  }, [])

  const logout = useCallback(async () => {
    await signOut()
    setSession(null)
    router.push('/')
  }, [router])

  return {
    session,
    loading,
    login,
    logout,
  }
} 