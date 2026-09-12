import { services } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="border-y border-hairline bg-white">
      <Container className="section-pad">
        <SectionHeading
          kicker="Work"
          title="What we take on"
          description="Mobile delivery we own end to end. Oracle work we sit in — including lights-out semiconductor stores."
        />

        <ul className="divide-y divide-hairline border-y border-hairline">
          {services.map((service, i) => (
            <li key={service.title} className="grid gap-3 py-7 sm:grid-cols-[4rem_1fr_auto] sm:items-baseline sm:gap-8">
              <span className="font-mono text-sm text-ink">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">{service.title}</h3>
                <p className="mt-2 max-w-2xl text-base leading-relaxed text-ink">{service.description}</p>
                <p className="mt-3 font-mono text-sm uppercase tracking-[0.1em] text-ink">
                  {service.points.join(' · ')}
                </p>
              </div>
              <a
                href="#contact"
                className="font-mono text-sm uppercase tracking-[0.12em] text-signal hover:text-brand-800"
              >
                Discuss
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
