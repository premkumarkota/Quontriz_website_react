import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  const featured = industries.filter((i) => i.image)
  const rest = industries.filter((i) => !i.image)

  return (
    <section id="industries" className="section-pad bg-porcelain">
      <Container>
        <SectionHeading
          kicker="Industries"
          title="Built for discrete, process and hybrid manufacturing."
          description="Different plants, the same question: can the business see what the floor is doing, right now? Here is where that question costs the most."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[6px] border border-line bg-white transition-shadow hover:shadow-[0_24px_48px_-28px_rgb(10_22_40/0.35)]">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={ind.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex-1 border-t-2 border-cobalt p-6">
                  <h3 className="display text-lg leading-tight text-ink">{ind.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.6] text-steel">{ind.useCase}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <ul className="mt-5 grid gap-px overflow-hidden rounded-[4px] border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((ind) => (
            <li key={ind.name} className="bg-white p-6 transition-colors hover:bg-porcelain">
              <h3 className="font-semibold text-ink">{ind.name}</h3>
              <p className="mt-2 text-[0.92rem] leading-[1.6] text-steel">{ind.useCase}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
