"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  animation?: "pulse" | "wave" | "none"
  size?: "sm" | "md" | "lg"
  width?: string | number
  height?: string | number
}

const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  ({ 
    className, 
    variant = "text", 
    animation = "pulse", 
    size = "md",
    width,
    height,
    ...props 
  }, ref) => {
    const variantStyles = {
      text: "rounded",
      circular: "rounded-full",
      rectangular: "rounded-none",
      rounded: "rounded-lg",
    }

    const sizeStyles = {
      sm: "h-3",
      md: "h-4",
      lg: "h-6",
    }

    const animationStyles = {
      pulse: "animate-pulse",
      wave: "animate-wave",
      none: "",
    }

    const style = {
      width: width,
      height: height || sizeStyles[size],
    }

    return (
      <div
        ref={ref}
        className={cn(
          "bg-light-200 dark:bg-dark-200",
          variantStyles[variant],
          animationStyles[animation],
          !height && sizeStyles[size],
          className
        )}
        style={style}
        {...props}
      />
    )
  }
)
Skeleton.displayName = "Skeleton"

export { Skeleton } 