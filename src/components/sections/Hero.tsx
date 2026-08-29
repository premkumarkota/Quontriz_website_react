import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'
import { PhoneArtifact } from '../ui/PhoneArtifact'

const trustStrip = ['Oracle Fusion + EBS', 'Founder-led', 'Gachibowli, Hyderabad', 'Flutter + FastAPI']

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
          <motion.div {...rise(0)}>
            <Logo size="hero" />
          </motion.div>

          <h1 className="sr-only">QUONTRIZ</h1>

          <motion.p
            {...rise(0.08)}
            className="mt-8 max-w-xl text-lg leading-relaxed text-muted dark:text-slate-300 sm:text-xl"
          >
            QUONTRIZ Technologies is a founder-led firm in Hyderabad. We implement and modernize
            Oracle Fusion Cloud and E-Business Suite — and build the mobile apps that extend them
            to the field.
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
