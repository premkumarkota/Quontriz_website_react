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
            'mb-4 inline-flex items-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em]',
            align === 'center' && 'justify-center',
            light ? 'text-brand-200' : 'text-signal dark:text-brand-300',
          )}
        >
          <span
            className={clsx(
              'h-px w-6',
              light ? 'bg-brand-200/60' : 'bg-signal/40 dark:bg-brand-300/40',
            )}
            aria-hidden="true"
          />
          {eyebrow}
        </p>
      )}
      <h2
        className={clsx(
          'font-display text-[1.9rem] font-bold leading-[1.08] tracking-[-0.02em] sm:text-4xl lg:text-[2.9rem]',
          light ? 'text-white' : 'text-ink dark:text-white',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-5 text-base leading-relaxed sm:text-lg',
            light ? 'text-slate-200' : 'text-muted dark:text-slate-300',
          )}
        >
          {description}
        </p>
      )}
    </motion.div>
  )
}
