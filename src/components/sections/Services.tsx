import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

export function Services() {
  return (
    <section id="services" className="section-pad relative bg-mist dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="Mobile app solutions, end to end"
          description="Full-cycle mobile development for iOS and Android, plus Oracle and high-tech consulting for teams that need more than an app."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease }}
                className="tile tile-hover group relative flex flex-col overflow-hidden p-7"
              >
                <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-signal transition-transform duration-300 group-hover:scale-x-100" />
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white dark:bg-white/10 dark:text-brand-300 dark:group-hover:bg-signal dark:group-hover:text-white">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold tracking-tight text-ink dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-5 space-y-2 border-t border-hairline pt-4 dark:border-white/10">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-2 font-mono text-xs text-muted dark:text-slate-400"
                    >
                      <span className="h-1 w-1 rounded-full bg-brand-300" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-signal transition-all group-hover:gap-2.5 dark:text-brand-300"
                >
                  Discuss this
                  <ArrowUpRight size={16} />
                </a>
              </motion.article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
