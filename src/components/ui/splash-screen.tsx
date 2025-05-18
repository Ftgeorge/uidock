"use client"

import { MotionDiv } from "@/components/ui/motion"
import { cn } from "@/lib/utils"

interface SplashScreenProps {
  className?: string
}

export function SplashScreen({ className }: SplashScreenProps) {
  return (
    <MotionDiv
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background",
        className
      )}
    >
      <div className="flex flex-col items-center space-y-4">
        <MotionDiv
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="relative"
        >
          <div className="h-16 w-16 rounded-lg bg-primary" />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">U</span>
          </div>
        </MotionDiv>
        <MotionDiv
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg font-semibold"
        >
          UIDOCK
        </MotionDiv>
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex space-x-2"
        >
          {[0, 1, 2].map((i) => (
            <MotionDiv
              key={i}
              className="h-2 w-2 rounded-full bg-primary"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </MotionDiv>
      </div>
    </MotionDiv>
  )
} 