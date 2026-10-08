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
          {heroServices.map(({ icon: Icon, title, body, href, image }, i) => (
            <li key={title}>
              <Reveal delay={0.3 + i * 0.07} className="h-full">
                <a
                  href={href}
                  className="group flex h-full flex-col rounded-[24px] border border-line bg-white p-2 shadow-[0_1px_2px_rgb(10_22_40/0.04)] transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-brand-200 hover:shadow-[0_36px_70px_-36px_rgb(26_79_227/0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cobalt"
                >
                  <div className="relative aspect-[16/11] overflow-hidden rounded-[18px] bg-porcelain">
                    <img
                      src={image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
                      loading="eager"
                      decoding="async"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent" aria-hidden />
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4 pt-5">
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white group-hover:ring-cobalt">
                        <Icon size={19} strokeWidth={1.8} />
                      </span>
                      <h2 className="text-[1.08rem] font-semibold tracking-[-0.01em] text-ink">{title}</h2>
                    </div>
                    <p className="mt-3.5 text-[0.93rem] leading-[1.62] text-steel">{body}</p>

                    <span className="mt-auto flex items-center justify-between pt-6 text-[0.88rem] font-semibold text-ink transition-colors duration-300 group-hover:text-cobalt">
                      Learn more
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-porcelain text-ink transition-all duration-300 group-hover:bg-cobalt group-hover:text-white">
                        <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:-translate-y-px group-hover:translate-x-px" />
                      </span>
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
