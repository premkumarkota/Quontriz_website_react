import { MapPin } from 'lucide-react'
import { differentiators, media, offices, platforms } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Company() {
  const office = offices[0]

  return (
    <section id="company" className="section-pad bg-porcelain">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
          <SectionHeading
            kicker="Why QUONTRIZ"
            title="One team for your factory and your business software"
            description="Most companies hire one partner for the factory and another for Oracle, then spend months getting them to work together. QUONTRIZ was started in Hyderabad to do both."
          />
          <figure className="relative">
            <div className="overflow-hidden rounded-[28px] shadow-[0_40px_80px_-50px_rgb(10_22_40/0.5)]">
              <img
                src={media.hitecNight}
                alt="HITEC City technology corridor in Hyderabad at dusk"
                className="aspect-[16/11] w-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="absolute -bottom-6 left-5 right-5 flex items-center gap-4 rounded-2xl border border-line bg-white/95 p-4 shadow-[0_24px_50px_-28px_rgb(10_22_40/0.45)] backdrop-blur sm:left-auto sm:right-6 sm:max-w-sm">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cobalt text-white">
                <MapPin size={20} strokeWidth={1.8} aria-hidden />
              </span>
              <div>
                <p className="font-semibold text-ink">{office.city}, India</p>
                <p className="text-[0.88rem] text-steel">{office.label}</p>
              </div>
            </figcaption>
          </figure>
        </div>

        <ul className="mt-24 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map(({ title, body, icon: Icon }, i) => (
            <li key={title}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <div className="group h-full rounded-[22px] border border-line bg-white p-7 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_28px_60px_-38px_rgb(10_22_40/0.45)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-50 to-brand-100 text-cobalt ring-1 ring-inset ring-brand-200/60 transition-colors duration-300 group-hover:from-cobalt group-hover:to-brand-700 group-hover:text-white">
                    <Icon size={21} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3 className="display mt-6 text-lg leading-snug text-ink">{title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-[1.65] text-steel">{body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Platforms, grouped by layer */}
        <div className="mt-24 rounded-[28px] border border-line bg-white p-6 sm:p-10">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <h3 className="display text-[1.6rem] leading-tight text-ink sm:text-3xl">Platforms we work with</h3>
            <p className="max-w-md text-[0.95rem] text-steel">
              We work with the systems you already have, and we specialise in Oracle.
            </p>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {platforms.map(({ layer, items, icon: Icon }) => (
              <div key={layer} className="rounded-[20px] bg-porcelain p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-cobalt ring-1 ring-inset ring-line">
                    <Icon size={17} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h4 className="font-semibold text-ink">{layer}</h4>
                </div>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-line bg-white px-3 py-1.5 text-[0.85rem] text-ink transition-colors hover:border-brand-200 hover:text-cobalt"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[0.8rem] text-steel">
            Product names are trademarks of their respective owners and are listed to describe technical
            experience, not partnership status.
          </p>
        </div>
      </Container>
    </section>
  )
}
