"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg"
  variant?: "default" | "primary" | "success" | "warning" | "error"
  thickness?: "thin" | "normal" | "thick"
  speed?: "slow" | "normal" | "fast"
  label?: string
}

const Spinner = React.forwardRef<HTMLDivElement, SpinnerProps>(
  ({ 
    className, 
    size = "md", 
    variant = "default", 
    thickness = "normal",
    speed = "normal",
    label,
    ...props 
  }, ref) => {
    const sizeStyles = {
      sm: "h-4 w-4",
      md: "h-8 w-8",
      lg: "h-12 w-12",
    }

    const variantStyles = {
      default: "text-dark dark:text-light",
      primary: "text-primary",
      success: "text-green-500",
      warning: "text-yellow-500",
      error: "text-red-500",
    }

    const thicknessStyles = {
      thin: "stroke-2",
      normal: "stroke-3",
      thick: "stroke-4",
    }

    const speedStyles = {
      slow: "animate-[spin_2s_linear_infinite]",
      normal: "animate-[spin_1s_linear_infinite]",
      fast: "animate-[spin_0.5s_linear_infinite]",
    }

    return (
      <div className="inline-flex flex-col items-center gap-2">
        <div
          ref={ref}
          className={cn(
            "animate-spin",
            sizeStyles[size],
            variantStyles[variant],
            speedStyles[speed],
            className
          )}
          {...props}
        >
          <svg
            className="h-full w-full"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className={cn("opacity-25", thicknessStyles[thickness])}
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
            />
            <path
              className={cn("opacity-75", thicknessStyles[thickness])}
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        </div>
        {label && (
          <span className={cn(
            "text-sm font-medium",
            variantStyles[variant]
          )}>
            {label}
          </span>
        )}
      </div>
    )
  }
)
Spinner.displayName = "Spinner"

export { Spinner } 