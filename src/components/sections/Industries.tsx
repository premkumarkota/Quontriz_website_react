import { useState } from 'react'
import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  const [active, setActive] = useState(0)
  const current = industries[active]

  return (
    <section id="industries" className="section-pad">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <SectionHeading
              kicker="Where first"
              title="Dark factories. High-tech floors. Oracle in the back."
              description="Lights-out semiconductor stores with no people on the floor. ERP and the few remaining phones still have to tell the same story."
            />
            <ul className="border-t border-hairline">
              {industries.map((industry, i) => {
                const on = i === active
                return (
                  <li key={industry.name} className="border-b border-hairline">
                    <button
                      type="button"
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      className="flex w-full items-baseline justify-between gap-4 py-3.5 text-left"
                    >
                      <span
                        className={
                          on
                            ? 'font-display text-xl font-semibold text-ink'
                            : 'text-base text-ink hover:text-signal sm:text-lg'
                        }
                      >
                        {industry.name}
                      </span>
                      <span className="font-mono text-sm text-ink">{String(i + 1).padStart(2, '0')}</span>
                    </button>
                  </li>
                )
              })}
            </ul>
          </div>

          <figure className="lg:sticky lg:top-28">
            <img
              src={current.image}
              alt={current.credit ?? current.name}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-4 max-w-md">
              <p className="font-display text-xl font-semibold text-ink">{current.name}</p>
              <p className="mt-2 text-base leading-relaxed text-ink">{current.description}</p>
              {current.credit && (
                <p className="mt-2 font-mono text-sm uppercase tracking-[0.14em] text-ink/70">
                  {current.credit}
                </p>
              )}
            </figcaption>
          </figure>
        </div>
      </Container>
    </section>
  )
}
