import { ArrowRight } from 'lucide-react'
import { insights } from '../../data/content'
import { Container } from '../ui/Container'

/** Three short reads right under the hero. */
export function Highlights() {
  return (
    <section className="bg-white py-14 sm:py-16" aria-label="Latest guides">
      <Container>
        <ul className="grid gap-10 md:grid-cols-3 md:gap-12">
          {insights.map((post) => (
            <li key={post.title}>
              <a href="#insights" className="group flex h-full flex-col">
                <span className="text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-ink">
                  {post.category}
                </span>
                <span className="mt-2.5 block h-[2px] w-6 bg-cobalt" aria-hidden />
                <h3 className="mt-4 text-[1.3rem] font-medium leading-[1.3] text-ink transition-colors group-hover:text-cobalt sm:text-[1.4rem]">
                  {post.title}
                </h3>
                <span className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.95rem] text-ink">
                  Read the guide
                  <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
