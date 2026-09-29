import { clsx } from 'clsx'

export function SectionHeading({
  kicker,
  title,
  description,
  className,
}: {
  kicker?: string
  title: string
  description?: string
  className?: string
}) {
  return (
    <header className={clsx('max-w-3xl', className)}>
      {kicker && (
        <p className="tag flex items-center gap-3 text-cobalt">
          <span className="h-px w-8 bg-cobalt" aria-hidden />
          {kicker}
        </p>
      )}
      <h2 className="display mt-5 text-[2rem] leading-[1.1] text-ink sm:text-[2.6rem] lg:text-[3.1rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 max-w-2xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg">{description}</p>
      )}
    </header>
  )
}
