import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { portfolio } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Portfolio() {
  return (
    <section id="portfolio" className="section-pad bg-slate-50/80 dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Our Products"
          title="LuxeHome & MyMentor — our first two in-house products"
          description="A premium furniture platform and a student–teacher learning app — built in-house by QUONTRIZ."
        />

        <div className="grid gap-8 lg:grid-cols-2">
          {portfolio.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_16px_50px_rgba(15,23,42,0.06)] dark:border-white/10 dark:bg-white/5"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="rounded-lg bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                    {project.industry}
                  </span>
                  <span className="text-xs font-medium text-white/90">{project.client}</span>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <h3 className="font-display text-2xl font-bold text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5">
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                    Apps
                  </p>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {project.apps.map((app) => (
                      <span
                        key={app}
                        className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-medium text-brand-700 dark:bg-brand-500/15 dark:text-brand-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-xl bg-slate-50 p-3 dark:bg-white/5">
                    <p className="text-xs uppercase tracking-wide text-slate-400">Before</p>
                    <p className="mt-1 font-medium text-slate-700 dark:text-slate-200">
                      {project.before}
                    </p>
                  </div>
                  <div className="rounded-xl bg-brand-50 p-3 dark:bg-brand-500/10">
                    <p className="text-xs uppercase tracking-wide text-brand-500">After</p>
                    <p className="mt-1 font-medium text-brand-800 dark:text-brand-100">
                      {project.after}
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-2">
                  {project.results.map((result) => (
                    <li
                      key={result}
                      className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                      {result}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300"
                >
                  Talk to us about {project.title}
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
