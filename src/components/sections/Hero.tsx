import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { credentials, media } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { SignalStack } from '../ui/SignalStack'

export function Hero() {
  const reduce = useReducedMotion()
  const delay = (s: number) => ({ animationDelay: reduce ? '0s' : `${s}s` })

  return (
    <section id="home" className="relative flex flex-col overflow-hidden bg-ink text-white lg:min-h-[min(100svh,62rem)]" aria-label="Introduction">
      <img
        src={media.opsRoom}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-[0.28]"
      />
      <div className="drawing-grid absolute inset-0" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/60" aria-hidden />

      <Container className="relative grid items-center gap-14 pb-20 pt-32 lg:flex-1 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-16 lg:pt-28">
        <div>
          <p className="tag flex items-center gap-3 text-brand-200">
            <span className="h-px w-8 bg-brand-200" aria-hidden />
            Industrial automation · Oracle ERP
          </p>
          <h1 className="display mt-6 text-[2.75rem] leading-[1.02] sm:text-[3.75rem] lg:text-[4.4rem]">
            <span className="reveal-line">
              <span style={delay(0.08)}>From the sensor</span>
            </span>
            <span className="reveal-line">
              <span style={delay(0.2)}>
                to the <span className="text-amber">ledger.</span>
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-[34rem] text-lg leading-[1.65] text-white/80 sm:text-xl">
            QUONTRIZ connects plant-floor automation to Oracle Fusion Cloud and E-Business Suite, so
            every machine event becomes a business decision in minutes, not a spreadsheet at month-end.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#contact" variant="light">
              Book a readiness assessment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#services" variant="outline">
              Explore services
            </Button>
          </div>
        </div>

        <SignalStack />
      </Container>

      <div className="relative border-t border-white/10 bg-ink/60">
        <Container>
          <ul className="grid grid-cols-2 lg:grid-cols-4">
            {credentials.map((c) => (
              <li
                key={c}
                className="flex items-center gap-3 border-white/10 py-5 text-[0.9rem] text-white/75 [&:nth-child(odd)]:pr-4 lg:border-l lg:px-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="h-1.5 w-1.5 shrink-0 bg-amber" aria-hidden />
                {c}
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </section>
  )
}
