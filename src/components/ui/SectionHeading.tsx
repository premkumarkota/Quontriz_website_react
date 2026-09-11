export function SectionHeading({
  kicker,
  title,
  description,
}: {
  kicker?: string
  title: string
  description?: string
}) {
  return (
    <header className="mb-10 max-w-3xl lg:mb-14">
      {kicker && (
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-signal">{kicker}</p>
      )}
      <h2 className="mt-3 font-display text-[1.85rem] font-semibold leading-[1.22] tracking-[-0.02em] text-ink sm:text-[2.25rem] lg:text-[2.55rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-[1.7] text-ink sm:text-lg">{description}</p>
      )}
    </header>
  )
}
