import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { services } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  return (
    <section id="services" className="section-pad bg-slate-50/80 dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="We provide mobile app solutions"
          description="End-to-end mobile development for iOS and Android, plus Oracle and high-tech consulting for teams that need more than an app."
        />

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.05, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_10px_40px_rgba(15,23,42,0.04)] transition-shadow hover:shadow-[0_24px_60px_rgba(11,61,145,0.12)] dark:border-white/10 dark:bg-white/5 dark:hover:shadow-[0_24px_60px_rgba(0,0,0,0.35)]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-700 to-brand-500 text-white shadow-lg shadow-brand-700/20 transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} aria-hidden />
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-slate-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-1.5">
                  {service.points.map((point) => (
                    <li
                      key={point}
                      className="text-xs font-medium text-slate-500 dark:text-slate-400"
                    >
                      · {point}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 transition group-hover:gap-2.5 dark:text-brand-300"
                >
                  Learn More
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
