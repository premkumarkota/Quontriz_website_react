import { motion } from 'framer-motion'
import { statistics } from '../../data/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Container } from '../ui/Container'

export function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-brand-950 py-20 text-white lg:py-28"
      aria-label="Company statistics"
    >
      {/* soft-3D ambiance */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_20%_0%,rgba(94,140,251,0.22),transparent_60%)]" />
      <div aria-hidden="true" className="orb float-a pointer-events-none absolute -right-16 top-1/2 h-56 w-56 -translate-y-1/2 opacity-40 [filter:blur(6px)]" />

      <Container className="relative">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-4 inline-flex items-center justify-center gap-2 font-mono text-xs font-medium uppercase tracking-[0.2em] text-brand-300">
            <span className="h-px w-6 bg-brand-300/50" /> By the numbers
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
            Small team, honest scope, real delivery.
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
          {statistics.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: (i % 6) * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                className="[&_p:first-child]:font-display [&_p:first-child]:text-4xl [&_p:first-child]:font-bold [&_p:first-child]:text-white sm:[&_p:first-child]:text-5xl [&_p:last-child]:mt-3 [&_p:last-child]:font-mono [&_p:last-child]:text-[0.7rem] [&_p:last-child]:uppercase [&_p:last-child]:tracking-[0.12em] [&_p:last-child]:text-brand-200"
              />
              <span className="mx-auto mt-4 block h-px w-8 bg-brand-400/40" aria-hidden="true" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
