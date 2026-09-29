import { gaps } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Gap() {
  return (
    <section id="challenge" className="section-pad bg-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.35fr] lg:gap-20">
          <SectionHeading
            kicker="The challenge"
            title="Most plants run on two versions of the truth."
            description="The control room knows what happened a second ago. The ERP finds out hours or days later, often by hand. Every decision in between — planning, costing, maintenance, quality — is made on stale data."
          />
          <div className="divide-y divide-line border-y border-line">
            {gaps.map((g, i) => (
              <Reveal key={g.title} delay={i * 0.08}>
                <div className="grid gap-2 py-7 sm:grid-cols-[14rem_1fr] sm:gap-10">
                  <h3 className="display text-xl leading-snug text-ink">{g.title}</h3>
                  <p className="text-steel leading-[1.7]">{g.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="lg:col-start-2">
            <p className="-mt-6 border-l-2 border-amber pl-5 text-lg font-medium leading-relaxed text-ink">
              We close that gap: one data path from the machine to Oracle, designed once and owned end
              to end.
            </p>
          </div>
        </div>
      </Container>
    </section>
  )
}
