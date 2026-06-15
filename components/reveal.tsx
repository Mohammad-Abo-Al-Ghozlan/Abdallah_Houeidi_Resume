"use client"

import type { ReactNode } from "react"
import { motion, useReducedMotion, type Variants } from "framer-motion"
import { fadeInUp } from "@/lib/motion"

type RevealProps = {
  children: ReactNode
  className?: string
  variants?: Variants
  as?: "div" | "section" | "li" | "ul" | "header"
  delay?: number
}

export function Reveal({
  children,
  className,
  variants = fadeInUp,
  as = "div",
  delay,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  const MotionTag = motion[as]

  // Respect prefers-reduced-motion: render content without movement.
  if (shouldReduceMotion) {
    const StaticTag = as
    return <StaticTag className={className}>{children}</StaticTag>
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </MotionTag>
  )
}
