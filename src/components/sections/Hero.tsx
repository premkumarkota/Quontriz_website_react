import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { PhoneArtifact } from '../ui/PhoneArtifact'

const trustStrip = ['Flutter + FastAPI', 'Founder-led', 'Gachibowli, Hyderabad', 'Oracle practice']

export function Hero() {
  const reduce = useReducedMotion()

  const rise = (delay: number) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 22 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <section id="home" className="relative overflow-hidden" aria-label="QUONTRIZ Technologies">
      {/* ambient background */}
      <div aria-hidden="true" className="hairline-grid pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] bg-[radial-gradient(60%_60%_at_70%_10%,rgba(26,79,227,0.08),transparent_70%)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-paper dark:to-brand-950" />

      <Container className="relative grid min-h-[100svh] items-center gap-12 pt-28 pb-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-24">
        {/* left — copy */}
        <div className="max-w-2xl">
          <motion.p {...rise(0)} className="inline-flex items-center gap-2 rounded-full border border-hairline bg-white/70 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-muted backdrop-blur dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-signal" />
            </span>
            Mobile app studio · Hyderabad
          </motion.p>

          <motion.h1
            {...rise(0.08)}
            className="mt-6 text-balance font-display text-[2.6rem] font-bold leading-[1.05] tracking-[-0.03em] text-ink sm:text-5xl lg:text-[3.6rem] dark:text-white"
          >
            We build mobile apps people rely on&nbsp;— and the{' '}
            <span className="text-signal">Oracle</span> systems behind them.
          </motion.h1>

          <motion.p
            {...rise(0.16)}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted dark:text-slate-300"
          >
            QUONTRIZ Technologies is a founder-led studio in Hyderabad. We design and ship iOS and
            Android apps end to end — and bring hands-on Oracle ERP and high-tech consulting to the
            enterprises that run on them.
          </motion.p>

          <motion.div {...rise(0.24)} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" className="w-full sm:w-auto">
              Start a project
              <ArrowRight size={16} />
            </Button>
            <Button href="#services" variant="ghost" className="w-full sm:w-auto">
              View services
            </Button>
          </motion.div>

          <motion.ul
            {...rise(0.32)}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-hairline pt-6 dark:border-white/10"
          >
            {trustStrip.map((item) => (
              <li key={item} className="flex items-center gap-2 font-mono text-xs text-muted dark:text-slate-400">
                <span className="h-1 w-1 rounded-full bg-brand-300" aria-hidden="true" />
                {item}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* right — signature phone artifact */}
        <div className="relative flex justify-center lg:justify-end">
          <PhoneArtifact />
        </div>
      </Container>
    </section>
  )
}
