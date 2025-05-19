"use client"

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90 dark:bg-primary dark:text-black dark:hover:bg-primary/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        destructive: 'bg-red-500 text-white hover:bg-red-600 dark:bg-red-600 dark:hover:bg-red-700',
        success: 'bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3 py-1 text-xs',
        lg: 'h-11 rounded-md px-8 py-3 text-base',
        xl: 'h-12 rounded-lg px-10 py-4 text-lg',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
        none: 'rounded-none',
      },
      animation: {
        none: '',
        pulse: 'animate-pulse',
        bounce: 'animate-bounce',
      },
      width: {
        auto: 'w-auto',
        full: 'w-full',
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      rounded: 'default',
      animation: 'none',
      width: 'auto',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  loadingText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    rounded,
    animation,
    width,
    asChild = false, 
    href, 
    isExternal = false,
    leftIcon,
    rightIcon,
    isLoading = false,
    loadingText,
    children,
    onClick,
    ...props 
  }, ref) => {
    const Comp = asChild ? React.Fragment : href ? Link : 'button';
    
    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      if (isLoading) {
        e.preventDefault();
        return;
      }
      
      if (onClick) {
        onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };
    
    const content = (
      <>
        {isLoading && (
          <span className="inline-block animate-spin mr-2">
            <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          </span>
        )}
        {isLoading && loadingText ? loadingText : (
          <>
            {leftIcon && <span className="inline-flex">{leftIcon}</span>}
            {children}
            {rightIcon && <span className="inline-flex">{rightIcon}</span>}
          </>
        )}
      </>
    );
    
    if (href) {
      return (
        <Link
          href={href}
          onClick={handleClick as any}
          className={cn(buttonVariants({ variant, size, rounded, animation, width, className }))}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...props as any}
        >
          {content}
        </Link>
      );
    }
    
    return (
      <button
        className={cn(buttonVariants({ variant, size, rounded, animation, width, className }))}
        ref={ref}
        onClick={handleClick}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };