"use client"

import * as React from 'react'
import { motion, type HTMLMotionProps, Variants } from 'framer-motion'
import { cn } from "@/lib/utils"

// Create more specific types for each component
type MotionDivProps = HTMLMotionProps<"div"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionButtonProps = HTMLMotionProps<"button"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionSpanProps = HTMLMotionProps<"span"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionAnchorProps = HTMLMotionProps<"a"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionHeadingProps = HTMLMotionProps<"h1"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionParagraphProps = HTMLMotionProps<"p"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionSectionProps = HTMLMotionProps<"section"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionUlProps = HTMLMotionProps<"ul"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionLiProps = HTMLMotionProps<"li"> & {
  children?: React.ReactNode;
  className?: string;
}

type MotionImgProps = HTMLMotionProps<"img"> & {
  className?: string;
}

const defaultTransition = {
  type: "spring",
  stiffness: 400,
  damping: 17,
};

export const MotionDiv = React.forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.div
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

export const MotionButton = React.forwardRef<HTMLButtonElement, MotionButtonProps>(
  ({ children, className, transition, whileHover, whileTap, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    const defaultHover = { scale: 1.02 };
    const defaultTap = { scale: 0.98 };
    
    const combinedHover = whileHover 
      ? typeof whileHover === 'object' ? { ...defaultHover, ...whileHover } : whileHover
      : defaultHover;
      
    const combinedTap = whileTap
      ? typeof whileTap === 'object' ? { ...defaultTap, ...whileTap } : whileTap
      : defaultTap;
      
    return (
      <motion.button
        ref={ref}
        className={cn(className)}
        whileHover={combinedHover}
        whileTap={combinedTap}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

export const MotionSpan = React.forwardRef<HTMLSpanElement, MotionSpanProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.span
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.span>
    );
  }
);

export const MotionA = React.forwardRef<HTMLAnchorElement, MotionAnchorProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.a
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.a>
    );
  }
);

export const MotionH1 = React.forwardRef<HTMLHeadingElement, MotionHeadingProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.h1
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.h1>
    );
  }
);

export const MotionP = React.forwardRef<HTMLParagraphElement, MotionParagraphProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.p
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.p>
    );
  }
);

// Additional commonly used motion components
export const MotionSection = React.forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.section
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.section>
    );
  }
);

export const MotionUl = React.forwardRef<HTMLUListElement, MotionUlProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.ul
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.ul>
    );
  }
);

export const MotionLi = React.forwardRef<HTMLLIElement, MotionLiProps>(
  ({ children, className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.li
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      >
        {children}
      </motion.li>
    );
  }
);

export const MotionImg = React.forwardRef<HTMLImageElement, MotionImgProps>(
  ({ className, transition, ...props }, ref) => {
    const combinedTransition = transition 
      ? { ...defaultTransition, ...transition } 
      : defaultTransition;
      
    return (
      <motion.img
        ref={ref}
        className={cn(className)}
        transition={combinedTransition}
        {...props}
      />
    );
  }
);

// Add displayName to all components
MotionDiv.displayName = 'MotionDiv';
MotionButton.displayName = 'MotionButton';
MotionSpan.displayName = 'MotionSpan';
MotionA.displayName = 'MotionA';
MotionH1.displayName = 'MotionH1';
MotionP.displayName = 'MotionP';
MotionSection.displayName = 'MotionSection';
MotionUl.displayName = 'MotionUl';
MotionLi.displayName = 'MotionLi';
MotionImg.displayName = 'MotionImg';

// Export useful animation presets
export const fadeIn = (delay: number = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay }
});

export const fadeInUp = (delay: number = 0, y: number = 20) => ({
  initial: { opacity: 0, y },
  animate: { opacity: 1, y: 0 },
  transition: { delay }
});

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      staggerChildren: 0.1 
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0
  }
};