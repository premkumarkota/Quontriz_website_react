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

        <ul className="mt-20 grid gap-4 sm:grid-cols-2 lg:mt-24 lg:grid-cols-4">
          {heroServices.map(({ icon: Icon, title, body, href }, i) => (
            <li key={title}>
              <Reveal delay={0.3 + i * 0.07} className="h-full">
                <a
                  href={href}
                  className="group flex h-full flex-col rounded-xl border border-line bg-white p-6 transition duration-200 hover:-translate-y-0.5 hover:border-cobalt/40 hover:shadow-[0_20px_40px_-24px_rgb(26_79_227/0.45)]"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-50 text-cobalt transition-colors group-hover:bg-cobalt group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <h2 className="mt-5 text-[1.05rem] font-semibold text-ink">{title}</h2>
                  <p className="mt-2 text-[0.93rem] leading-[1.6] text-steel">{body}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-[0.88rem] font-semibold text-cobalt">
                    Learn more
                    <ArrowUpRight size={15} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
