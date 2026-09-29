import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { credentials } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SignalStack } from '../ui/SignalStack'

export function Hero() {
  const reduce = useReducedMotion()
  const delay = (s: number) => ({ animationDelay: reduce ? '0s' : `${s}s` })

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-porcelain"
      aria-label="Introduction"
    >
      <div className="drawing-grid absolute inset-0" aria-hidden />

      <Container className="relative grid items-center gap-14 pb-20 pt-32 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pb-24 lg:pt-40">
        <div>
          <p className="tag inline-flex items-center gap-2.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden />
            Industrial automation · Oracle ERP
          </p>
          <h1 className="display mt-7 text-[2.75rem] leading-[1.02] text-ink sm:text-[3.75rem] lg:text-[4.4rem]">
            <span className="reveal-line">
              <span style={delay(0.08)}>From the sensor</span>
            </span>
            <span className="reveal-line">
              <span style={delay(0.2)}>
                to the <span className="text-cobalt">ledger.</span>
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-[1.65] text-steel sm:text-xl">
            QUONTRIZ connects plant-floor automation to Oracle Fusion Cloud and E-Business Suite, so
            every machine event becomes a business decision in minutes, not a spreadsheet at month-end.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact">
              Book a readiness assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#services" variant="secondary">
              Explore services
            </Button>
          </div>
        </div>

        <SignalStack />
      </Container>

      <div className="relative border-t border-line bg-white/70 backdrop-blur-sm">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-line py-5 text-[0.92rem] font-medium text-ink [&:nth-child(odd)]:pr-4 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-cobalt" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}
