import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { heroSlides, industries, platforms, practices } from '../../data/content'
import { BrandScene } from '../ui/BrandScene'
import { Container } from '../ui/Container'

/** How long each slide stays up before the next one plays. */
const SLIDE_MS = 4000

const ease = [0.16, 1, 0.3, 1] as const

const toolCount = platforms.reduce((n, p) => n + p.items.length, 0)

const stats = [
  { value: practices.length, plus: false, label: 'Service practices' },
  { value: industries.length, plus: false, label: 'Industries served' },
  { value: Math.floor(toolCount / 10) * 10, plus: true, label: 'Platforms and tools' },
  { value: 4, plus: false, label: 'Regions we support' },
]

export function Hero() {
  const reduce = useReducedMotion()
  const [index, setIndex] = useState(0)
  const [hidden, setHidden] = useState(false)
  const slide = heroSlides[index]

  // Hold the slide while the browser tab is in the background.
  useEffect(() => {
    const onVisibility = () => setHidden(document.hidden)
    onVisibility()
    document.addEventListener('visibilitychange', onVisibility)
    return () => document.removeEventListener('visibilitychange', onVisibility)
  }, [])

  useEffect(() => {
    if (reduce || hidden) return
    const timer = window.setTimeout(() => setIndex((i) => (i + 1) % heroSlides.length), SLIDE_MS)
    return () => window.clearTimeout(timer)
  }, [index, reduce, hidden])

  // Each line of text rises in after the one before it.
  const rise = (step: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.12 + step * 0.08, ease } },
          exit: { opacity: 0, y: -12, transition: { duration: 0.25, ease } },
        }

  const Heading = index === 0 ? 'h1' : 'h2'

  return (
    <section
      id="home"
      className="relative flex h-[100svh] min-h-[700px] flex-col overflow-hidden bg-ink text-white md:h-[78svh] md:min-h-[600px]"
      aria-roledescription="carousel"
      aria-label="Introduction"
    >
      {/* Background: a slow-zooming photo per slide, or the animated brand scene. */}
      <AnimatePresence initial={false}>
        <motion.div
          key={index}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.9, ease: 'easeOut' } }}
          exit={{ opacity: 0, transition: { duration: 0.9, ease: 'easeIn' } }}
          aria-hidden
        >
          {slide.image ? (
            <motion.img
              src={slide.image}
              alt=""
              className="h-full w-full object-cover"
              initial={{ scale: reduce ? 1 : 1.12 }}
              animate={{ scale: 1, transition: { duration: 5, ease: 'linear' } }}
              decoding="async"
            />
          ) : (
            <BrandScene />
          )}
          {/* Shade so the text always reads clearly. */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent" aria-hidden />

      {/* Slide text */}
      <Container className="relative flex flex-1 items-center pb-8 pt-24 lg:pt-28">
        <div className="max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div key={index}>
              <motion.p
                {...rise(0)}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3.5 py-1 text-[0.8rem] font-medium text-white/90 backdrop-blur-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden />
                {slide.tag}
              </motion.p>

              <Heading className="display mt-5 text-[2.1rem] leading-[1.08] sm:text-[2.8rem] lg:text-[3.4rem]">
                <motion.span {...rise(1)} className="block">
                  {slide.title[0]}
                </motion.span>
                <motion.span {...rise(2)} className="block text-brand-300">
                  {slide.title[1]}
                </motion.span>
              </Heading>

              <motion.p {...rise(3)} className="mt-5 max-w-2xl text-[1.05rem] leading-[1.65] text-white/80 sm:text-lg">
                {slide.body}
              </motion.p>

              <motion.div {...rise(4)} className="mt-7">
                <a
                  href={slide.cta.href}
                  className="group inline-flex items-center gap-2.5 rounded-[3px] border border-white/80 px-6 py-3 text-[0.95rem] font-semibold text-white transition-colors duration-200 hover:bg-white hover:text-ink"
                >
                  {slide.cta.label}
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
                </a>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </Container>

      {/* Numbers bar */}
      <div className="relative border-t border-white/15 bg-gradient-to-r from-black/45 via-black/30 to-white/10 backdrop-blur-md">
        <ul className="mx-auto grid w-full max-w-[84rem] grid-cols-2 md:grid-cols-4">
          {stats.map((s) => (
            <li
              key={s.label}
              className="flex flex-col items-center justify-center gap-1 px-2 py-4 text-center max-md:[&:nth-child(n+3)]:border-t max-md:[&:nth-child(even)]:border-l md:py-5 md:[&:not(:first-child)]:border-l border-white/15"
            >
              <span className="display text-[2rem] leading-none sm:text-[2.6rem]">
                {s.value}
                {s.plus && <span className="ml-0.5 text-[0.6em] align-top">+</span>}
              </span>
              <span className="text-[0.9rem] text-white/85 sm:text-base">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
