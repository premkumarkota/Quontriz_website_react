import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { useRef } from 'react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { heroStats } from '../../data/content'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.35])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="Hero"
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2000&q=80"
          alt="Corporate leadership team collaborating in a modern office"
          className="h-full w-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-900/85 to-brand-800/55" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(47,106,247,0.35),transparent_50%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/20" />
      </motion.div>

      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <motion.div style={{ opacity }} className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 font-display text-sm font-bold uppercase tracking-[0.28em] text-brand-200"
          >
            QUONTRIZ Technologies
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Building powerful{' '}
            <span className="bg-gradient-to-r from-white via-brand-100 to-brand-300 bg-clip-text text-transparent">
              ERP solutions
            </span>{' '}
            for high-tech enterprises
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-relaxed text-slate-200 sm:text-lg"
          >
            Based in Hyderabad. Our in-house products — LuxeHome and MyMentor — are live, alongside
            founder-led Oracle and high-tech consulting.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Button href="#contact" className="min-w-[200px]">
              Schedule Consultation
              <ArrowRight size={16} />
            </Button>
            <Button href="#services" variant="ghost" className="min-w-[180px]">
              <Play size={16} />
              View Services
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 border-t border-white/15 pt-8 sm:grid-cols-4"
        >
          {heroStats.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="[&_p:first-child]:text-white [&_p:last-child]:text-slate-300"
            />
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
