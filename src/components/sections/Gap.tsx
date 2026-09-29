import { gaps } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SignalStack } from '../ui/SignalStack'

export function Gap() {
  return (
    <section id="challenge" className="section-pad bg-white">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <div>
            <SectionHeading
              kicker="The challenge"
              title="Most plants run on two versions of the truth."
              description="The control room knows what happened a second ago. The ERP finds out hours or days later, often by hand. Every decision in between — planning, costing, maintenance, quality — is made on stale data."
            />
            <p className="mt-8 border-l-2 border-cobalt pl-5 text-lg font-medium leading-relaxed text-ink">
              We close that gap: one data path from the machine to Oracle, designed once and owned end
              to end. Watch one event travel the whole way.
            </p>
          </div>
          <SignalStack />
        </div>

        <div className="mt-20 grid gap-px overflow-hidden rounded-[6px] border border-line bg-line md:grid-cols-3">
          {gaps.map((g, i) => (
            <div key={g.title} className="bg-white">
              <Reveal delay={i * 0.08} className="h-full p-7 lg:p-8">
                <h3 className="display text-xl leading-snug text-ink">{g.title}</h3>
                <p className="mt-3 leading-[1.7] text-steel">{g.body}</p>
              </Reveal>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
