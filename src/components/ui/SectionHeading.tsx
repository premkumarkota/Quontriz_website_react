import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}: {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  light?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={clsx(
        'mb-12 max-w-3xl lg:mb-16',
        align === 'center' ? 'mx-auto text-center' : 'text-left',
      )}
    >
      {eyebrow && (
        <p
          className={clsx(
            'mb-3 text-xs font-semibold uppercase tracking-[0.22em]',
            light ? 'text-brand-200' : 'text-brand-600 dark:text-brand-300',
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'font-display text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl',
          light ? 'text-white' : 'text-slate-900 dark:text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-4 text-base leading-relaxed sm:text-lg',
            light ? 'text-slate-200' : 'text-slate-600 dark:text-slate-300',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
