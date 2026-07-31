import { motion } from 'framer-motion'
import { coreValues, missionPoints } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function About() {
  return (
    <section id="about" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute -right-24 top-20 h-72 w-72 rounded-full bg-brand-400/10 blur-3xl" />
      <Container>
        <SectionHeading
          eyebrow="About Us"
          title="Building mobile apps and ERP consulting for modern teams"
          description="QUONTRIZ Technologies is a Hyderabad-based company focused on mobile app solutions, Oracle ERP, semiconductor, and high-tech manufacturing consulting."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5"
          >
            <h3 className="font-display text-xl font-bold text-brand-700 dark:text-brand-300">
              Our Vision
            </h3>
            <p className="mt-3 text-slate-600 leading-relaxed dark:text-slate-300">
              To grow into a trusted technology partner for semiconductor and high-tech teams —
              starting with useful mobile apps and honest consulting, not inflated claims.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="rounded-3xl border border-slate-200/80 bg-gradient-to-br from-brand-700 to-brand-500 p-8 text-white shadow-[0_20px_60px_rgba(11,61,145,0.25)]"
          >
            <h3 className="font-display text-xl font-bold">Our Mission</h3>
            <ul className="mt-4 space-y-3">
              {missionPoints.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-brand-50">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coreValues.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="rounded-2xl border border-slate-200/80 bg-white/80 p-6 backdrop-blur-sm dark:border-white/10 dark:bg-white/5"
            >
              <h4 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                {value.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
