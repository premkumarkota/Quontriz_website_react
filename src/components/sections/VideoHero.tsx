import { useReducedMotion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

const capabilities = [
  'Oracle Fusion Cloud',
  'Oracle E-Business Suite',
  'Integration Cloud',
  'Oracle APEX',
  'Flutter',
  'FastAPI',
  'BI Publisher',
  'Analytics Cloud',
]

export function VideoHero() {
  const reduce = useReducedMotion()

  return (
    <section id="home" className="relative min-h-[100svh] overflow-hidden bg-brand-950" aria-label="QUONTRIZ Technologies">
      {/* background video (meta.com-style full-bleed autoplay loop) */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        poster="/hero-poster.jpg"
        autoPlay={!reduce}
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src="/hero-loop.mp4" type="video/mp4" />
      </video>

      {/* legibility scrims */}
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-r from-brand-950/85 via-brand-950/55 to-brand-950/20" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/40" />

      {/* content */}
      <Container className="relative flex min-h-[100svh] flex-col justify-center pt-32 pb-32">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 font-mono text-[0.7rem] font-medium uppercase tracking-[0.16em] text-brand-100 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              {!reduce && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-300 opacity-60" />
              )}
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-300" />
            </span>
            Oracle ERP · Mobile app solutions · Hyderabad
          </p>

          <h1 className="mt-7 font-display text-[2.7rem] font-bold leading-[1.02] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.1rem]">
            <span className="reveal-line">
              <span style={{ animationDelay: '0.05s' }}>The <span className="text-brand-300">Oracle</span> systems</span>
            </span>
            <span className="reveal-line">
              <span style={{ animationDelay: '0.16s' }}>your enterprise</span>
            </span>
            <span className="reveal-line">
              <span style={{ animationDelay: '0.27s' }}>runs on.</span>
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-200">
            QUONTRIZ Technologies is a founder-led firm in Hyderabad. We implement and modernize
            Oracle Fusion Cloud and E-Business Suite — and build the mobile apps that extend them
            to the field.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href="#contact" className="w-full sm:w-auto">
              Start a project
              <ArrowRight size={16} />
            </Button>
            <Button href="#services" variant="ghost" className="w-full sm:w-auto">
              Explore capabilities
            </Button>
          </div>
        </div>
      </Container>

      {/* capability marquee pinned to the bottom of the video */}
      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-brand-950/40 py-4 backdrop-blur-sm">
        <div className="marquee-mask overflow-hidden">
          <div className="marquee-track">
            {[0, 1].map((dup) => (
              <div key={dup} className="flex shrink-0 items-center" aria-hidden={dup === 1}>
                {capabilities.map((cap) => (
                  <span key={cap} className="flex items-center">
                    <span className="mx-4 font-mono text-xs uppercase tracking-[0.14em] text-slate-300">{cap}</span>
                    <span className="h-1 w-1 rounded-full bg-brand-400" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
