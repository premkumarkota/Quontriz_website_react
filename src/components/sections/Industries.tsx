import { motion } from 'framer-motion'
import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

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
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease }}
              className="tile tile-hover group relative p-6"
            >
              <div className="mb-4 h-1 w-8 rounded-full bg-brand-200 transition-all duration-300 group-hover:w-12 group-hover:bg-signal" />
              <h3 className="font-display text-lg font-bold tracking-tight text-ink dark:text-white">
                {industry.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-300">
                {industry.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
