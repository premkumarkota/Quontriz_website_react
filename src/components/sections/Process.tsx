import { motion } from 'framer-motion'
import { processSteps } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Process() {
  return (
    <section id="process" className="section-pad overflow-hidden bg-slate-50/80 dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Our Process"
          title="A simple path from first chat to first win"
          description="Built for early-stage partnerships — short cycles, clear scopes, and fast learning."
        />

        <div className="relative">
          <div className="pointer-events-none absolute left-0 right-0 top-[2.25rem] hidden h-px bg-gradient-to-r from-transparent via-brand-400 to-transparent lg:block" />

          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory lg:grid lg:grid-cols-7 lg:gap-3 lg:overflow-visible lg:pb-0">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="min-w-[220px] snap-center lg:min-w-0"
              >
                <div className="relative z-10 mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 font-display text-sm font-extrabold text-white shadow-lg shadow-brand-700/25">
                  {step.step}
                </div>
                <div className="rounded-2xl border border-slate-200/80 bg-white p-4 text-center dark:border-white/10 dark:bg-white/5">
                  <h3 className="font-display font-bold text-slate-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
