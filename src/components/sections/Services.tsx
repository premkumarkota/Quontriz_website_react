import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { clsx } from 'clsx'
import { practices } from '../../data/content'
import { Container } from '../ui/Container'
import { LevelTags } from '../ui/LevelTags'
import { SectionHeading } from '../ui/SectionHeading'

export function Services() {
  const [active, setActive] = useState(0)
  const reduce = useReducedMotion()
  const p = practices[active]

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
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            kicker="Services"
            title="Five practices, one data path."
            description="Each practice is mapped to the ISA-95 levels it works in, so you can see exactly where we fit in your plant."
          />
          <div className="flex items-center gap-3 text-sm text-steel">
            <LevelTags active={['L0', 'L1', 'L2', 'L3', 'L4']} />
            <span>Field → Enterprise</span>
          </div>
        </div>

        <div className="mt-14 grid overflow-hidden rounded-[4px] border border-line bg-white lg:grid-cols-[22rem_1fr]">
          {/* Practice list */}
          <div role="tablist" aria-label="Practices" className="flex overflow-x-auto border-b border-line lg:flex-col lg:border-b-0 lg:border-r">
            {practices.map((x, i) => {
              const on = i === active
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
                    'relative shrink-0 border-line px-5 py-4 text-left transition-colors lg:border-b lg:px-7 lg:py-6 lg:last:border-b-0',
                    on ? 'bg-brand-50 text-ink' : 'text-ink hover:bg-porcelain',
                  )}
                >
                  {on && <span className="absolute inset-y-0 left-0 hidden w-1 bg-cobalt lg:block" aria-hidden />}
                  <span className={clsx('block whitespace-nowrap font-semibold lg:whitespace-normal lg:text-[1.05rem]', on && 'text-cobalt')}>
                    {x.name}
                  </span>
                  <span className="mt-1 hidden text-[0.88rem] leading-snug text-steel lg:block">
                    {x.short}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Detail */}
          <div id="practice-panel" role="tabpanel" className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={p.id}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid gap-6 border-b border-line p-6 sm:p-10 md:grid-cols-[1fr_14rem] md:items-center md:gap-10">
                  <div>
                    <LevelTags active={p.levels} />
                    <h3 className="display mt-4 text-2xl text-ink sm:text-[2rem]">{p.name}</h3>
                    <p className="mt-4 max-w-2xl text-lg leading-[1.7] text-steel">{p.summary}</p>
                  </div>
                  <img
                    src={p.image}
                    alt=""
                    className="hidden aspect-[4/3] w-full rounded-[4px] object-cover md:block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-6 sm:p-10">
                  <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
                    {p.capabilities.map((c) => (
                      <li key={c.title} className="border-t border-line pt-5">
                        <h4 className="font-semibold text-ink">{c.title}</h4>
                        <p className="mt-2 text-[0.95rem] leading-[1.65] text-steel">{c.body}</p>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className="mt-10 inline-flex items-center gap-2 font-semibold text-cobalt transition-all hover:gap-3"
                  >
                    Discuss this practice with us <ArrowRight size={17} />
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  )
}
