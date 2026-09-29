import { engagements, phases } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Approach() {
  return (
    <section id="approach" className="section-pad bg-porcelain">
      <Container>
        <SectionHeading
          kicker="Approach"
          title="Start with one line. Prove it. Then scale."
          description="Every engagement follows the same four phases, so you know what you will receive, and when, before any work starts."
        />

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {phases.map((ph, i) => (
            <li key={ph.name} className="relative">
              <Reveal delay={i * 0.08} className="flex h-full flex-col rounded-[4px] border border-line bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-medium text-cobalt">Phase {i + 1}</span>
                  <span className="tag text-steel">{ph.duration}</span>
                </div>
                <h3 className="display mt-6 text-2xl text-ink">{ph.name}</h3>
                <p className="mt-3 leading-[1.65] text-steel">{ph.body}</p>
                <div className="pt-7">
                  <p className="tag border-t border-line pt-5 text-ink">You receive</p>
                  <ul className="mt-3 space-y-2">
                    {ph.deliverables.map((d) => (
                      <li key={d} className="flex gap-2.5 text-[0.92rem] text-ink">
                        <span className="mt-[0.55rem] h-1 w-3 shrink-0 bg-cobalt" aria-hidden />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
              {i < phases.length - 1 && (
                <span
                  className="absolute -right-[1.3rem] top-9 z-10 hidden h-px w-5 bg-cobalt lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-20 grid gap-10 border-t border-line pt-14 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <h3 className="display text-[1.6rem] leading-tight text-ink sm:text-3xl">Ways to work with us</h3>
            <p className="mt-4 leading-[1.7] text-steel">
              Pick the model that matches your stage. Most clients begin with an assessment and decide
              the rest with a roadmap in hand.
            </p>
          </div>
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {engagements.map((e) => (
              <li key={e.name} className="border-l-2 border-ink pl-5">
                <h4 className="font-semibold text-ink">{e.name}</h4>
                <p className="mt-2 text-[0.95rem] leading-[1.65] text-steel">{e.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
