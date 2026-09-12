import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import gachibowli from '../../assets/media/gachibowli.jpg'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function Hero() {
  const reduce = useReducedMotion()

  return (
    <section
      id="home"
      className="page-panel relative z-0 overflow-hidden bg-ink"
      aria-label="QUONTRIZ Technologies"
    >
      <img
        src={gachibowli}
        alt="Glass IT campus at dusk along the Gachibowli corridor"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25" />

      <Container className="relative flex h-full min-h-[100svh] flex-col justify-center pt-28 pb-16">
        <p className="font-mono text-lg uppercase tracking-[0.16em] text-white">
          Gachibowli · Hyderabad
        </p>
        <h1 className="mt-5 max-w-3xl font-display text-[2.5rem] font-semibold leading-[1.18] tracking-[-0.02em] text-white sm:text-[3.15rem] lg:text-[3.75rem]">
          <span className="reveal-line">
            <span style={{ animationDelay: reduce ? '0s' : '0.08s' }}>Oracle in the core.</span>
          </span>
          <span className="reveal-line">
            <span style={{ animationDelay: reduce ? '0s' : '0.22s' }}>Apps in the field.</span>
          </span>
        </h1>
        <p className="mt-7 max-w-2xl text-2xl leading-[1.6] text-white">
          We modernize Fusion Cloud and E-Business Suite — including dark factories, where the store
          runs with no floor workforce — then put exceptions in a phone a technician can actually use.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button href="#contact">
            Start a project
            <ArrowRight size={15} />
          </Button>
          <Button href="#core" variant="ghost">
            See how we work
          </Button>
        </div>
      </Container>
    </section>
  )
}
