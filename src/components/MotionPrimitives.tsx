"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

export function PageMotion({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.08 }} transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
}

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>{children}</motion.div>
}

export function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(value)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 })
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString("en-US"))
  useEffect(() => { motionValue.set(value) }, [motionValue, value])
  return <motion.span>{rounded}</motion.span>
}

export { motion }
