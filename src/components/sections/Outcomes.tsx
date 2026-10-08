import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check, X } from 'lucide-react'
import { outcomes } from '../../data/content'
import { Container } from '../ui/Container'
import { pageEase, pageViewport } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Outcomes() {
  const reduce = useReducedMotion()

  return (
    <section id="outcomes" className="section-pad relative overflow-hidden bg-white">
      <div
        className="absolute right-0 top-0 h-[36rem] w-[50rem] translate-x-1/3 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(26_79_227/0.07),transparent)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="Outcomes" title="What gets better" />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            Five everyday tasks: how they work today, and how they work once your systems are connected.
          </p>
        </div>

        {/* Column labels (desktop) */}
        <div className="mt-14 hidden grid-cols-[13rem_1fr_3rem_1fr] items-center gap-4 px-3 lg:grid">
          <span />
          <span className="flex items-center gap-2 text-[0.9rem] font-semibold text-steel">
            <span className="h-2 w-2 rounded-full bg-steel/40" aria-hidden />
            Today
          </span>
          <span />
          <span className="flex items-center gap-2 text-[0.9rem] font-semibold text-cobalt">
            <span className="h-2 w-2 rounded-full bg-cobalt" aria-hidden />
            With QUONTRIZ
          </span>
        </div>

        <ul className="mt-8 space-y-4 lg:mt-4">
          {outcomes.map(({ icon: Icon, topic, before, after }, i) => (
            <motion.li
              key={topic}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={pageViewport}
              transition={{ duration: 0.7, delay: i * 0.06, ease: pageEase }}
              className="group grid gap-3 rounded-[22px] border border-line bg-white p-3 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_24px_50px_-34px_rgb(10_22_40/0.4)] lg:grid-cols-[13rem_1fr_3rem_1fr] lg:items-stretch lg:gap-4"
            >
              {/* Topic */}
              <div className="flex items-center gap-3.5 px-3 pt-2 lg:py-3 lg:pt-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white group-hover:ring-cobalt">
                  <Icon size={20} strokeWidth={1.8} aria-hidden />
                </span>
                <h3 className="display text-lg text-ink">{topic}</h3>
              </div>

              {/* Today */}
              <div className="flex gap-3 rounded-2xl bg-porcelain p-4 lg:p-5">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-steel/15 text-steel">
                  <X size={11} strokeWidth={3} aria-hidden />
                </span>
                <p className="leading-[1.65] text-steel">
                  <span className="mb-1 block text-[0.78rem] font-semibold text-steel/80 lg:sr-only">Today</span>
                  {before}
                </p>
              </div>

              {/* Arrow */}
              <div className="flex items-center justify-center" aria-hidden>
                <span className="flex h-9 w-9 rotate-90 items-center justify-center rounded-full border border-line bg-white text-cobalt transition-transform duration-300 lg:rotate-0 lg:group-hover:translate-x-0.5">
                  <ArrowRight size={16} />
                </span>
              </div>

              {/* After */}
              <div className="relative flex gap-3 overflow-hidden rounded-2xl bg-brand-50 p-4 ring-1 ring-inset ring-brand-100 lg:p-5">
                <span className="absolute inset-y-0 left-0 w-1 bg-cobalt" aria-hidden />
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                  <Check size={11} strokeWidth={3.2} aria-hidden />
                </span>
                <p className="font-medium leading-[1.65] text-ink">
                  <span className="mb-1 block text-[0.78rem] font-semibold text-cobalt lg:sr-only">With QUONTRIZ</span>
                  {after}
                </p>
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
