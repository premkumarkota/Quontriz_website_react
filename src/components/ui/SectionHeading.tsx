import { clsx } from 'clsx'

export function SectionHeading({
  kicker,
  title,
  description,
  dark = false,
  className,
}: {
  kicker?: string
  title: string
  description?: string
  dark?: boolean
  className?: string
}) {
  return (
    <header className={clsx('max-w-3xl', className)}>
      {kicker && (
        <p className={clsx('tag flex items-center gap-3', dark ? 'text-brand-200' : 'text-cobalt')}>
          <span className={clsx('h-px w-8', dark ? 'bg-brand-200' : 'bg-cobalt')} aria-hidden />
          {kicker}
        </p>
      )}
      <h2
        className={clsx(
          'display mt-5 text-[2rem] leading-[1.1] sm:text-[2.6rem] lg:text-[3.1rem]',
          dark ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={clsx(
            'mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] sm:text-lg',
            dark ? 'text-white/75' : 'text-steel',
          )}
        >
          {description}
        </p>
      )}
    </header>
  )
}
