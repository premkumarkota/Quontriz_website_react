import { useReducedMotion } from 'framer-motion'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { heroServices } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'

export function Hero() {
  const reduce = useReducedMotion()
  const delay = (s: number) => ({ animationDelay: reduce ? '0s' : `${s}s` })

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-white to-porcelain"
      aria-label="Introduction"
    >
      <div
        className="absolute left-1/2 top-0 h-[34rem] w-[60rem] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(26_79_227/0.08),transparent)]"
        aria-hidden
      />

      <Container className="relative pb-20 pt-36 lg:pb-28 lg:pt-44">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-[0.85rem] font-medium text-steel">
            <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden />
            Enterprise software company · Hyderabad, India
          </p>

          <h1 className="display mt-8 text-[2.5rem] leading-[1.08] text-ink sm:text-[3.5rem] lg:text-[4.5rem]">
            <span className="reveal-line">
              <span style={delay(0.08)}>We build your ideas</span>
            </span>
            <span className="reveal-line">
              <span style={delay(0.2)}>
                into <span className="text-cobalt">enterprise products.</span>
              </span>
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-[1.7] text-steel sm:text-xl">
            From Oracle ERP to factory automation, mobile apps and AI, QUONTRIZ designs, builds and
            supports the software your business runs on.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href="#contact" className="sm:px-8">
              Start your project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </Button>
            <Button href="#services" variant="secondary" className="sm:px-8">
              Explore services
            </Button>
          </div>
        </div>

        <ul className="mt-20 grid gap-5 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {heroServices.map(({ icon: Icon, title, body, href }, i) => (
            <li key={title}>
              <Reveal delay={0.3 + i * 0.07} className="h-full">
                <a
                  href={href}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white p-7 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:border-cobalt/30 hover:shadow-[0_28px_60px_-32px_rgb(10_22_40/0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                >
                  {/* Accent rule that draws across the top edge on hover. */}
                  <span
                    className="pointer-events-none absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-cobalt to-brand-300 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                    aria-hidden
                  />
                  {/* Faint tint that warms the surface as the card lifts. */}
                  <span
                    className="pointer-events-none absolute inset-0 bg-gradient-to-b from-brand-50/0 to-brand-50/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    aria-hidden
                  />

                  <div className="relative flex items-start justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:bg-cobalt group-hover:text-white group-hover:ring-cobalt">
                      <Icon size={21} strokeWidth={1.8} className="transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110" />
                    </span>
                    <span className="tag text-steel/50 transition-colors duration-500 group-hover:text-cobalt">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>

                  <h2 className="relative mt-6 text-[1.1rem] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
                  <p className="relative mt-2.5 text-[0.93rem] leading-[1.62] text-steel">{body}</p>

                  <span className="relative mt-auto flex items-center gap-2.5 pt-6 text-[0.85rem] font-semibold text-steel transition-colors duration-300 group-hover:text-cobalt">
                    <span className="relative">
                      Learn more
                      <span
                        className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-cobalt transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100"
                        aria-hidden
                      />
                    </span>
                    <span className="flex h-6 w-6 items-center justify-center rounded-full border border-line text-steel transition-all duration-300 group-hover:border-cobalt group-hover:bg-cobalt group-hover:text-white">
                      <ArrowUpRight size={13} className="transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
                    </span>
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
