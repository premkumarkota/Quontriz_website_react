import { motion } from 'framer-motion'
import { MapPin, Briefcase, Clock } from 'lucide-react'
import { careers } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Careers() {
  return (
    <section id="careers" className="section-pad">
      <Container>
        <SectionHeading
          eyebrow="Careers"
          title="Join a founding team — not a corporate ladder"
          description="We’re hiring people who want ownership, speed, and a real say in what we build next."
        />

        <div className="mx-auto max-w-4xl space-y-4">
          {careers.map((job, i) => (
            <motion.article
              key={job.position}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ scale: 1.01 }}
              className="flex flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-white/10 dark:bg-white/5"
            >
              <div>
                <h3 className="font-display text-lg font-bold text-slate-900 dark:text-white">
                  {job.position}
                </h3>
                <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={14} /> {job.location}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Briefcase size={14} /> {job.experience}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={14} /> {job.type}
                  </span>
                </div>
              </div>
              <Button href="#contact" variant="outline" className="shrink-0">
                Apply Now
              </Button>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
