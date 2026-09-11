import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import opsRoom from '../../assets/media/ops-room.jpg'
import wafer from '../../assets/media/wafer.jpg'
import warehouse from '../../assets/media/warehouse.jpg'
import { trustPoints, whyChooseUs } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

const ease = [0.22, 1, 0.36, 1] as const

const stills = [
  { src: wafer, alt: 'Semiconductor wafer inspection in a cleanroom', caption: 'High-tech' },
  { src: warehouse, alt: 'Warehouse aisle with an inventory tablet', caption: 'Field ops' },
  { src: opsRoom, alt: 'Quiet ERP operations room with wall dashboards', caption: 'Consulting' },
]

export function WhyChooseUs() {
  return (
    <section id="why-us" className="section-pad bg-mist dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          kicker="Why choose us"
          title="What it’s like to work with QUONTRIZ"
          description="Direct access to founders, honest scoping, and mobile app solutions built for real users."
        />

        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {stills.map((still, i) => (
            <motion.figure
              key={still.caption}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.07, duration: 0.5, ease }}
              className="relative overflow-hidden rounded-2xl"
            >
              <img src={still.src} alt={still.alt} className="aspect-[4/3] w-full object-cover" />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/75 to-transparent px-4 py-3 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-white/90">
                {still.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {whyChooseUs.map((item, i) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: (i % 3) * 0.06, duration: 0.5, ease }}
                className="tile tile-hover group p-7"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-signal transition-colors duration-300 group-hover:bg-signal group-hover:text-white dark:bg-white/10 dark:text-brand-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight text-ink dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted dark:text-slate-300">
                  {item.description}
                </p>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map((point, i) => (
            <motion.div
              key={point.label}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="flex items-center gap-2.5 rounded-xl border border-hairline bg-white px-4 py-3 dark:border-white/10 dark:bg-white/[0.03]"
            >
              <Check className="shrink-0 text-signal dark:text-brand-400" size={16} strokeWidth={3} />
              <span className="font-mono text-xs text-muted dark:text-slate-300">{point.label}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
