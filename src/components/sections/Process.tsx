import { processSteps } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="border-y border-hairline bg-white">
      <Container className="section-pad">
        <SectionHeading
          kicker="How we work"
          title="A short traveler, not a 40-slide plan."
          description="Discovery through a first live increment. Order matters — we do not skip the shop-floor conversation."
        />
        <ol className="grid gap-0 sm:grid-cols-2 lg:grid-cols-7">
          {processSteps.map((step, i) => (
            <li
              key={step.step}
              className="border-t border-hairline py-6 pr-6 lg:border-t-0 lg:border-l lg:pl-5 lg:pr-4 first:lg:border-l-0 first:lg:pl-0"
            >
              <p className="font-mono text-sm text-signal">{step.step}</p>
              <h3 className="mt-3 font-display text-base font-semibold text-ink sm:text-lg">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink sm:text-base">{step.description}</p>
              {i < processSteps.length - 1 && (
                <span className="mt-4 hidden font-mono text-hairline lg:block" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
