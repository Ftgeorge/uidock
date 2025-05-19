"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export interface RadioProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: boolean
  helperText?: string
  size?: "sm" | "md" | "lg"
  variant?: "default" | "outline" | "filled"
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ 
    className, 
    label, 
    error, 
    helperText,
    size = "md",
    variant = "default",
    ...props 
  }, ref) => {
    const sizeStyles = {
      sm: "h-3.5 w-3.5",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    }

    const dotSizeStyles = {
      sm: "h-1.5 w-1.5",
      md: "h-2 w-2",
      lg: "h-2.5 w-2.5",
    }

    const variantStyles = {
      default: "border-light-200 dark:border-dark-200 bg-white dark:bg-[#111] checked:border-primary",
      outline: "border-2 border-light-300 dark:border-dark-300 bg-transparent checked:border-primary",
      filled: "border-none bg-light-200 dark:bg-dark-200 checked:bg-primary",
    }

    return (
      <div className="space-y-1.5">
        <div className="flex items-start space-x-2">
          <div className="relative flex items-center">
            <input
              type="radio"
              className={cn(
                "peer appearance-none rounded-full border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50",
                sizeStyles[size],
                variantStyles[variant],
                error && "border-red-500 dark:border-red-500 focus-visible:ring-red-500",
                className
              )}
              ref={ref}
              {...props}
            />
            <div 
              className={cn(
                "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity duration-200",
                dotSizeStyles[size]
              )} 
            />
          </div>
          {label && (
            <div className="space-y-1">
              <label
                className={cn(
                  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                  error ? "text-red-500 dark:text-red-500" : "text-dark dark:text-light"
                )}
              >
                {label}
              </label>
              {helperText && (
                <p className={cn(
                  "text-xs",
                  error ? "text-red-500 dark:text-red-500" : "text-dark-600 dark:text-light-600"
                )}>
                  {helperText}
                </p>
              )}
            </div>
          )}
        </div>
      </div>
    )
  }
)
Radio.displayName = "Radio"

export { Radio } 