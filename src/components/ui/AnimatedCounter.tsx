import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useCountUp } from '../../hooks/useCountUp'

export function AnimatedCounter({
  value,
  suffix = '',
  label,
  className = '',
}: {
  value: number
  suffix?: string
  label: string
  className?: string
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const count = useCountUp(value, inView)

  return (
    <div ref={ref} className={className}>
      <p className="font-display text-3xl font-extrabold tracking-tight text-brand-700 dark:text-brand-300 sm:text-4xl">
        {count}
        {suffix}
      </p>
      <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{label}</p>
    </div>
  )
}
