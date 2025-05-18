"use client"

import * as React from 'react'
import { motion, type HTMLMotionProps } from 'framer-motion'

export const MotionDiv = React.forwardRef<HTMLDivElement, HTMLMotionProps<"div">>(
  (props, ref) => {
    return <motion.div ref={ref} {...props} />
  }
)
MotionDiv.displayName = 'MotionDiv'

export const MotionButton = React.forwardRef<HTMLButtonElement, HTMLMotionProps<"button">>(
  (props, ref) => {
    return <motion.button ref={ref} {...props} />
  }
)
MotionButton.displayName = 'MotionButton'

export const MotionSpan = React.forwardRef<HTMLSpanElement, HTMLMotionProps<"span">>(
  (props, ref) => {
    return <motion.span ref={ref} {...props} />
  }
)
MotionSpan.displayName = 'MotionSpan'

export const MotionA = React.forwardRef<HTMLAnchorElement, HTMLMotionProps<"a">>(
  (props, ref) => {
    return <motion.a ref={ref} {...props} />
  }
)
MotionA.displayName = 'MotionA'

export const MotionH1 = React.forwardRef<HTMLHeadingElement, HTMLMotionProps<"h1">>(
  (props, ref) => {
    return <motion.h1 ref={ref} {...props} />
  }
)
MotionH1.displayName = 'MotionH1'

export const MotionP = React.forwardRef<HTMLParagraphElement, HTMLMotionProps<"p">>(
  (props, ref) => {
    return <motion.p ref={ref} {...props} />
  }
)
MotionP.displayName = 'MotionP' 