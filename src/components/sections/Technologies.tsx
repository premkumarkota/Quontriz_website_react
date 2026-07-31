import { motion } from 'framer-motion'
import { technologies } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Technologies() {
  const row = [...technologies, ...technologies]

  return (
    <section id="technologies" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Technology Stack"
          title="What we’re building with"
          description="Flutter and FastAPI for LuxeHome and MyMentor — plus Oracle platforms for our consulting practice."
        />
      </Container>

      <div className="relative mt-4 overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent dark:from-brand-950" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent dark:from-brand-950" />

        <motion.div
          className="flex w-max gap-4"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, ease: 'linear', repeat: Infinity }}
        >
          {row.map((tech, i) => (
            <div
              key={`${tech}-${i}`}
              className="flex h-16 min-w-[200px] items-center justify-center rounded-2xl border border-slate-200/80 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        <motion.div
          className="mt-4 flex w-max gap-4"
          animate={{ x: ['-50%', '0%'] }}
          transition={{ duration: 45, ease: 'linear', repeat: Infinity }}
        >
          {[...row].reverse().map((tech, i) => (
            <div
              key={`rev-${tech}-${i}`}
              className="flex h-16 min-w-[200px] items-center justify-center rounded-2xl border border-slate-200/80 bg-gradient-to-r from-brand-50 to-white px-6 text-sm font-semibold text-brand-800 shadow-sm dark:border-white/10 dark:from-brand-900/40 dark:to-white/5 dark:text-brand-100"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
