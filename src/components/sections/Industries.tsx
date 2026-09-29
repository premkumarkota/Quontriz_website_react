import { industries } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Industries() {
  const featured = industries.filter((i) => i.image)
  const rest = industries.filter((i) => !i.image)

  return (
    <section id="industries" className="section-pad bg-white">
      <Container>
        <SectionHeading
          kicker="Industries"
          title="Built for discrete, process and hybrid manufacturing."
          description="Different plants, the same question: can the business see what the floor is doing, right now? Here is where that question costs the most."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((ind, i) => (
            <Reveal key={ind.name} delay={i * 0.06}>
              <article className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-[4px] bg-ink">
                <img
                  src={ind.image}
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 group-hover:scale-[1.04]"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-transparent" />
                <div className="relative p-6">
                  <h3 className="display text-xl leading-tight text-white">{ind.name}</h3>
                  <p className="mt-3 text-[0.92rem] leading-[1.6] text-white/80">{ind.useCase}</p>
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
