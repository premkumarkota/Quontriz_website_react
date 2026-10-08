import { motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { clsx } from 'clsx'
import { engagements, phases } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal, pageEase, pageViewport } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Approach() {
  const reduce = useReducedMotion()

  return (
    <section id="approach" className="section-pad bg-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="Approach" title="How we work" />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            Every project follows the same four steps, so you know what you get and when, before we start.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting rail behind the step markers (desktop) */}
          <div className="absolute left-[12.5%] right-[12.5%] top-6 hidden h-0.5 bg-line-2 lg:block" aria-hidden>
            <motion.div
              className="h-full origin-left bg-gradient-to-r from-cobalt to-brand-300"
              initial={reduce ? false : { scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={pageViewport}
              transition={{ duration: 1.4, ease: pageEase }}
            />
          </div>

          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {phases.map((ph, i) => (
              <li key={ph.name} className="relative flex flex-col">
                <Reveal delay={i * 0.12} className="flex h-full flex-col">
                  <div className="flex justify-center">
                    <span
                      className={clsx(
                        'relative z-10 flex h-12 w-12 items-center justify-center rounded-full font-display text-lg font-semibold ring-8 ring-white',
                        i === 0
                          ? 'bg-cobalt text-white shadow-[0_10px_24px_-10px_rgb(26_79_227/0.9)]'
                          : 'border-2 border-cobalt bg-white text-cobalt',
                      )}
                    >
                      {i + 1}
                    </span>
                  </div>
                  <div className="mt-6 flex flex-1 flex-col rounded-[22px] border border-line bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_28px_60px_-38px_rgb(10_22_40/0.45)]">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="display text-2xl text-ink">{ph.name}</h3>
                      <span className="whitespace-nowrap rounded-full bg-brand-50 px-3 py-1 text-[0.78rem] font-semibold text-cobalt">
                        {ph.duration}
                      </span>
                    </div>
                    <p className="mt-3 leading-[1.65] text-steel">{ph.body}</p>
                    <div className="mt-auto pt-7">
                      <div className="rounded-2xl bg-porcelain p-4">
                        <p className="text-[0.82rem] font-semibold text-ink">You receive</p>
                        <ul className="mt-3 space-y-2.5">
                          {ph.deliverables.map((d) => (
                            <li key={d} className="flex gap-2.5 text-[0.9rem] leading-snug text-ink">
                              <span className="mt-px flex h-[1.1rem] w-[1.1rem] shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                                <Check size={10} strokeWidth={3.4} aria-hidden />
                              </span>
                              {d}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>

        {/* Engagement models */}
        <div className="mt-24 rounded-[28px] border border-line bg-porcelain p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-14">
            <div>
              <h3 className="display text-[1.75rem] leading-tight text-ink sm:text-[2.1rem]">Ways to work with us</h3>
              <p className="mt-4 leading-[1.7] text-steel">
                Pick the model that fits where you are. Most clients start with an assessment and decide the
                rest with a roadmap in hand.
              </p>
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {engagements.map(({ name, body, icon: Icon }, i) => (
                <li
                  key={name}
                  className={clsx(
                    'group relative rounded-[20px] border bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:shadow-[0_24px_50px_-34px_rgb(10_22_40/0.4)]',
                    i === 0 ? 'border-brand-200 ring-1 ring-brand-100' : 'border-line hover:border-brand-200',
                  )}
                >
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100">
                      <Icon size={20} strokeWidth={1.8} aria-hidden />
                    </span>
                    {i === 0 && (
                      <span className="rounded-full bg-cobalt px-2.5 py-1 text-[0.72rem] font-semibold text-white">
                        Where most start
                      </span>
                    )}
                  </div>
                  <h4 className="mt-5 font-semibold text-ink">{name}</h4>
                  <p className="mt-2 text-[0.93rem] leading-[1.65] text-steel">{body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}
