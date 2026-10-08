import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { clsx } from 'clsx'
import { practices } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { LevelTags } from '../ui/LevelTags'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const p = practices[active]
  const PanelIcon = p.icon

  // Mega-menu links point at #service-<id>; open the matching tab.
  useEffect(() => {
    const sync = () => {
      const i = practices.findIndex((x) => `#service-${x.id}` === window.location.hash)
      if (i >= 0) {
        setActive(i)
        document.getElementById('services')?.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth' })
      }
    }
    sync()
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [reduce])

  return (
    <section id="services" className="section-pad bg-porcelain">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="Services" title="Our services" />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            Factory systems, Oracle, apps and AI, all built by one team. Choose a service to see what is
            included.
          </p>
        </div>

        {/* Service picker */}
        <div
          role="tablist"
          aria-label="Services"
          className="mt-14 flex gap-1.5 overflow-x-auto rounded-2xl border border-line bg-white p-1.5 shadow-[0_1px_2px_rgb(10_22_40/0.04)] lg:grid lg:grid-cols-5 lg:overflow-visible"
        >
          {practices.map((x, i) => {
            const on = i === active
            const Icon = x.icon
            return (
              <button
                key={x.id}
                id={`service-${x.id}`}
                role="tab"
                type="button"
                aria-selected={on}
                aria-controls="practice-panel"
                onClick={() => setActive(i)}
                className={clsx(
                  'relative flex shrink-0 items-center gap-3 rounded-xl px-4 py-3 text-left transition-colors lg:px-4 lg:py-3.5',
                  on ? 'text-white' : 'text-ink hover:bg-porcelain',
                )}
              >
                {on && (
                  <motion.span
                    layoutId="service-pill"
                    className="absolute inset-0 rounded-xl bg-cobalt shadow-[0_10px_24px_-12px_rgb(26_79_227/0.9)]"
                    transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 36 }}
                    aria-hidden
                  />
                )}
                <span
                  className={clsx(
                    'relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors',
                    on ? 'bg-white/15 text-white' : 'bg-brand-50 text-cobalt',
                  )}
                >
                  <Icon size={18} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="relative whitespace-nowrap text-[0.92rem] font-semibold leading-tight lg:whitespace-normal">
                  {x.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Detail */}
        <div
          id="practice-panel"
          role="tabpanel"
          aria-labelledby={`service-${p.id}`}
          className="mt-5 overflow-hidden rounded-[28px] border border-line bg-white p-3 shadow-[0_40px_80px_-50px_rgb(10_22_40/0.35)] sm:p-4"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={p.id}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduce ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-4 lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Image card */}
              <figure className="relative min-h-[18rem] overflow-hidden rounded-[20px] bg-ink sm:min-h-[22rem] lg:min-h-full">
                <motion.img
                  src={p.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={reduce ? false : { scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  loading="lazy"
                  decoding="async"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent"
                  aria-hidden
                />
                <div className="absolute left-4 top-4 rounded-xl bg-white/95 px-3.5 py-2.5 shadow-lg backdrop-blur sm:left-5 sm:top-5">
                  <p className="mb-1.5 text-[0.72rem] font-semibold text-steel">Where it fits in your plant</p>
                  <LevelTags active={p.levels} />
                </div>
                <figcaption className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                    <PanelIcon size={22} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="display mt-5 text-2xl leading-tight text-white sm:text-[2rem]">{p.name}</h3>
                  <p className="mt-2 max-w-sm text-[0.98rem] leading-relaxed text-white/80">{p.short}</p>
                </figcaption>
              </figure>

              {/* Content */}
              <div className="flex flex-col p-3 sm:p-6 lg:p-8">
                <p className="text-lg leading-[1.7] text-ink/85">{p.summary}</p>

                <h4 className="mt-9 text-[0.9rem] font-semibold text-steel">What’s included</h4>
                <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                  {p.capabilities.map((c, i) => (
                    <motion.li
                      key={c.title}
                      initial={reduce ? false : { opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: reduce ? 0 : 0.08 + i * 0.04 }}
                      className="rounded-xl border border-line-2 bg-porcelain/60 p-4 transition-colors hover:border-brand-200 hover:bg-brand-50/60"
                    >
                      <div className="flex gap-3">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                          <Check size={11} strokeWidth={3.2} aria-hidden />
                        </span>
                        <div>
                          <p className="font-semibold leading-snug text-ink">{c.title}</p>
                          <p className="mt-1.5 text-[0.9rem] leading-[1.6] text-steel">{c.body}</p>
                        </div>
                      </div>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-col gap-4 pt-9 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.95rem] text-steel">Have a project in mind? We reply within one business day.</p>
                  <Button href="#contact" className="shrink-0 rounded-lg">
                    Talk to us
                    <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>
    </section>
  )
}
