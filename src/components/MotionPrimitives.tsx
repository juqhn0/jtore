"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useEffect } from "react"

export function PageMotion({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, ease: "easeOut" }} className={className}>{children}</motion.div>
}

export function AnimatedNumber({ value }: { value: number }) {
  const motionValue = useMotionValue(value)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20 })
  const rounded = useTransform(spring, (latest) => Math.round(latest).toLocaleString("en-US"))
  useEffect(() => { motionValue.set(value) }, [motionValue, value])
  return <motion.span>{rounded}</motion.span>
}

export { motion }
