import { motion } from 'framer-motion'
import { coreValues, missionPoints } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <Container>
        <SectionHeading
          eyebrow="About us"
          title="Building mobile apps and ERP consulting for modern teams"
          description="QUONTRIZ Technologies is a Hyderabad-based company focused on mobile app solutions, Oracle ERP, semiconductor, and high-tech manufacturing consulting."
          align="left"
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, ease }}
            className="tile flex flex-col justify-center p-8 lg:p-10"
          >
            <p className="eyebrow">Our vision</p>
            <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-ink dark:text-white">
              A trusted partner for high-tech teams.
            </h3>
            <p className="mt-4 leading-relaxed text-muted dark:text-slate-300">
              We want to grow into a dependable technology partner for semiconductor and high-tech
              teams — starting with useful mobile apps and honest consulting, not inflated claims.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.08, ease }}
            className="relative overflow-hidden rounded-2xl bg-deep p-8 text-white lg:p-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_100%_0%,rgba(94,140,251,0.35),transparent_60%)]"
            />
            <div className="relative">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-200">
                Our mission
              </p>
              <ul className="mt-5 space-y-4">
                {missionPoints.map((point) => (
                  <li key={point} className="flex gap-3 leading-relaxed text-brand-50">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-300" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5, ease }}
              className="tile tile-hover p-6"
            >
              <span className="font-mono text-xs font-medium text-brand-300">
                0{i + 1}
              </span>
              <h4 className="mt-3 font-display text-lg font-bold text-ink dark:text-white">
                {value.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
