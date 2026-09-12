import { blogPosts } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Blog() {
  const [lead] = blogPosts

  return (
    <section id="blog" className="border-t border-hairline bg-white">
      <Container className="section-pad">
        <SectionHeading kicker="Notes" title="From the studio." />

        <div className="grid gap-8 border-t border-hairline pt-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-12 lg:min-h-[28rem]">
          <a href="#contact" className="relative block min-h-[240px] lg:min-h-0">
            <img
              src={lead.image}
              alt=""
              className="h-full min-h-[240px] w-full object-cover lg:absolute lg:inset-0 lg:min-h-0"
              loading="lazy"
              decoding="async"
            />
          </a>
          <ul className="flex h-full flex-col divide-y divide-hairline border-y border-hairline">
            {blogPosts.map((post) => (
              <li key={post.title} className="flex flex-1 flex-col justify-center py-6">
                <a href="#contact" className="block hover:text-signal">
                  <p className="font-mono text-sm uppercase tracking-[0.14em] text-ink">
                    {post.category} · {post.date}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold leading-snug text-ink sm:text-xl">
                    {post.title}
                  </h3>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
