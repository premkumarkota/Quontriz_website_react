import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import { trustPoints, whyChooseUs } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Why work with us at QUONTRIZ"
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
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="rounded-3xl border border-slate-200/80 bg-white p-7 dark:border-white/10 dark:bg-white/5"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-700 dark:bg-brand-500/15 dark:text-brand-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-2xl border border-slate-200/70 bg-slate-50/80 px-4 py-3 dark:border-white/10 dark:bg-white/5"
            >
              <CheckCircle2 className="shrink-0 text-brand-600 dark:text-brand-400" size={18} />
              <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                {point.label}
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
