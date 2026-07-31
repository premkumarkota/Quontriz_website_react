import { motion } from 'framer-motion'
import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  return (
    <section id="industries" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Industries"
          title="Where we’re focusing first"
          description="As a new company, we’re concentrating on high-tech and manufacturing environments where Oracle ERP and integrations matter most."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-600/0 to-brand-500/0 transition duration-300 group-hover:from-brand-600/5 group-hover:to-brand-500/10" />
              <div className="relative">
                <div className="mb-4 h-1 w-10 rounded-full bg-gradient-to-r from-brand-700 to-brand-400" />
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {industry.name}
                </h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
