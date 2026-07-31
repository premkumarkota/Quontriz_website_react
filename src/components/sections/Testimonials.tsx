import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad bg-slate-50/80 dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What people are saying"
          description="Feedback from partners exploring our mobile app solutions and consulting work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex h-full flex-col rounded-3xl border border-slate-200/80 bg-white p-7 dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex gap-1" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                    aria-hidden
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5 dark:border-white/10">
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.name}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.position}, {item.company}
                  </p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
