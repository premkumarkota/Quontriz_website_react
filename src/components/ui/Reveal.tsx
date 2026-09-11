import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { clsx } from 'clsx'

export const pageEase = [0.16, 1, 0.3, 1] as const

export const pageViewport = { once: true, amount: 0.28, margin: '-8% 0px' } as const

const fromMap = {
  up: { x: 0, y: 56 },
  down: { x: 0, y: -40 },
  left: { x: -72, y: 0 },
  right: { x: 72, y: 0 },
  none: { x: 0, y: 0 },
}

export function Reveal({
  children,
  from = 'up',
  delay = 0,
  duration = 0.85,
  className,
}: {
  children: ReactNode
  from?: keyof typeof fromMap
  delay?: number
  duration?: number
  className?: string
}) {
  const reduce = useReducedMotion()
  const offset = fromMap[from]

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={pageViewport}
      transition={{ duration, delay, ease: pageEase }}
    >
      {children}
    </motion.div>
  )
}

export function ClipRise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={clsx('overflow-hidden', className)}>
      <motion.div
        initial={{ y: '110%' }}
        whileInView={{ y: 0 }}
        viewport={pageViewport}
        transition={{ duration: 0.9, delay, ease: pageEase }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function ClipSlide({
  children,
  from = 'left',
  delay = 0,
  className,
}: {
  children: ReactNode
  from?: 'left' | 'right'
  delay?: number
  className?: string
}) {
  const reduce = useReducedMotion()

  if (reduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <div className={clsx('overflow-hidden', className)}>
      <motion.div
        initial={{ x: from === 'left' ? '-108%' : '108%' }}
        whileInView={{ x: 0 }}
        viewport={pageViewport}
        transition={{ duration: 0.95, delay, ease: pageEase }}
      >
        {children}
      </motion.div>
    </div>
  )
}
