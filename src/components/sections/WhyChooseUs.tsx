import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { trustPoints, whyChooseUs } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-mist dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Why choose us"
          title="What it’s like to work with QUONTRIZ"
          description="Direct access to founders, honest scoping, and mobile app solutions built for real users."
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease }}
                className="tile tile-hover group p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white dark:bg-white/10 dark:text-brand-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="flex items-center gap-2.5 rounded-xl border border-hairline bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <Check className="shrink-0 text-signal dark:text-brand-400" size={16} strokeWidth={3} />
              <span className="font-mono text-xs text-muted dark:text-slate-300">{point.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
