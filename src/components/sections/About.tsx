import fieldErp from '../../assets/media/field-erp.jpg'
import { coreValues } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-20">
          <SectionHeading
            kicker="Studio"
            title="A Hyderabad practice for plants that still run on Oracle — and teams that live on a phone."
            description="QUONTRIZ is founder-led. We build mobile apps and sit with Fusion Cloud and EBS landscapes. We are early. We say what we can ship now."
          />
          <figure className="lg:mt-10">
            <img
              src={fieldErp}
              alt="Field tablet in an industrial setting"
              className="aspect-[4/3] w-full object-cover"
            />
            <figcaption className="mt-3 font-mono text-sm uppercase tracking-[0.14em] text-ink">
              Field ops · the same process, off the shop floor
            </figcaption>
          </figure>
        </div>

        <ul className="mt-16 grid gap-10 border-t border-hairline pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value) => (
            <li key={value.title}>
              <h3 className="font-display text-lg font-semibold text-ink sm:text-xl">{value.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{value.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
