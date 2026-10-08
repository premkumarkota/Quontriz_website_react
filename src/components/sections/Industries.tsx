import { clsx } from 'clsx'
import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

// Bento placement for the four photo cards (lg and up).
const featuredLayout = [
  'lg:col-span-2 lg:row-span-2',
  'lg:col-span-2',
  'lg:col-span-1',
  'lg:col-span-1',
]

export function Industries() {
  const featured = industries.filter((i) => i.image)
  const rest = industries.filter((i) => !i.image)

  return (
    <section id="industries" className="section-pad bg-porcelain">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="Industries" title="Industries we work with" />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            We build software for factories, warehouses and the businesses around them. Here is what we do
            in each.
          </p>
        </div>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:auto-rows-[17rem] lg:grid-cols-4">
          {featured.map(({ name, useCase, image, icon: Icon }, i) => (
            <Reveal key={name} delay={i * 0.06} className={clsx('h-full', featuredLayout[i])}>
              <article className="group relative flex h-full min-h-[17rem] flex-col justify-end lg:min-h-0 overflow-hidden rounded-[22px] bg-ink">
                <img
                  src={image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/0" aria-hidden />
                <div className="relative p-6 sm:p-7">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                    <Icon size={19} strokeWidth={1.8} aria-hidden />
                  </span>
                  <h3
                    className={clsx(
                      'display mt-4 leading-tight text-white',
                      i === 0 ? 'text-2xl sm:text-[1.9rem]' : 'text-xl',
                    )}
                  >
                    {name}
                  </h3>
                  <p className={clsx('mt-2 leading-[1.6] text-white/80', i === 0 ? 'max-w-md' : 'max-w-sm text-[0.92rem]')}>
                    {useCase}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map(({ name, useCase, icon: Icon }, i) => (
            <li key={name}>
              <Reveal delay={(i % 3) * 0.06} className="h-full">
                <div className="group flex h-full gap-4 rounded-[20px] border border-line bg-white p-6 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_24px_50px_-34px_rgb(10_22_40/0.4)]">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100 transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white group-hover:ring-cobalt">
                    <Icon size={20} strokeWidth={1.8} aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-semibold text-ink">{name}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-[1.6] text-steel">{useCase}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
