import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { testimonials } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

export function Testimonials() {
  return (
    <section id="testimonials" className="section-pad relative overflow-hidden">
      <Container>
        <SectionHeading
          kicker="Testimonials"
          title="What partners are saying"
          description="Feedback from teams exploring our mobile app solutions and consulting work."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <motion.figure
              key={item.name}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.1, duration: 0.5, ease }}
              className="tile tile-hover group relative flex h-full flex-col p-8"
            >
              {/* oversized quote mark */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-6 top-3 font-display text-7xl leading-none text-brand-100 transition-colors duration-300 group-hover:text-brand-200"
              >
                &rdquo;
              </span>

              <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
                {Array.from({ length: item.rating }).map((_, idx) => (
                  <Star key={idx} size={15} className="fill-signal text-signal" aria-hidden />
                ))}
              </div>

              <blockquote className="relative mt-5 flex-1 text-[0.95rem] leading-relaxed text-ink/80">
                {item.quote}
              </blockquote>

              <figcaption className="mt-7 flex items-center gap-3 border-t border-hairline pt-5">
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="h-11 w-11 rounded-full object-cover ring-2 ring-brand-100"
                />
                <div>
                  <p className="font-display text-sm font-bold text-ink">{item.name}</p>
                  <p className="font-mono text-[0.68rem] text-muted">
                    {item.position} · {item.company}
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
