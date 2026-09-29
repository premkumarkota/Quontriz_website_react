import { differentiators, media, platforms } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Company() {
  return (
    <section id="company" className="section-pad bg-white">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <SectionHeading
            kicker="Why QUONTRIZ"
            title="Automation engineers and Oracle consultants, on one team."
            description="Most manufacturers hire a systems integrator for the floor and an ERP partner for the business, then spend months reconciling the two. QUONTRIZ was founded in Hyderabad to be both."
          />
          <figure className="relative overflow-hidden rounded-[4px]">
            <img
              src={media.hitecNight}
              alt="HITEC City technology corridor in Hyderabad at dusk"
              className="aspect-[16/10] w-full object-cover"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((d, i) => (
            <li key={d.title} className="bg-white">
              <Reveal delay={(i % 3) * 0.06} className="h-full p-7 lg:p-8">
                <h3 className="display text-lg leading-snug text-ink">{d.title}</h3>
                <p className="mt-3 text-[0.95rem] leading-[1.65] text-steel">{d.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        {/* Platforms, grouped by layer */}
        <div className="mt-24">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <h3 className="display text-[1.6rem] leading-tight text-ink sm:text-3xl">Platforms we work across</h3>
            <p className="max-w-md text-[0.95rem] text-steel">
              Vendor-neutral on the floor, Oracle-native in the enterprise.
            </p>
          </div>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            {platforms.map((pl) => (
              <div key={pl.layer} className="grid gap-3 py-6 md:grid-cols-[14rem_1fr] md:gap-10">
                <dt className="tag pt-1.5 text-cobalt">{pl.layer}</dt>
                <dd className="flex flex-wrap gap-2">
                  {pl.items.map((it) => (
                    <span
                      key={it}
                      className="rounded-[3px] border border-line bg-porcelain px-3 py-1.5 text-[0.88rem] text-ink"
                    >
                      {it}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-[0.8rem] text-steel">
            Product names are trademarks of their respective owners and are listed to describe technical
            experience, not partnership status.
          </p>
        </div>
      </Container>
    </section>
  )
}
