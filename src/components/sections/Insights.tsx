import { ArrowUpRight } from 'lucide-react'
import { insights } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Insights() {
  return (
    <section id="insights" className="section-pad border-t border-line bg-porcelain">
      <Container>
        <SectionHeading
          kicker="Insights"
          title="Field notes for operations and IT leaders."
          description="Short, practical briefings from our work. Ask for any of them and we will send the full version."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.title} delay={i * 0.08}>
              <a
                href="#contact"
                className="group flex h-full flex-col overflow-hidden rounded-[4px] border border-line bg-white transition-shadow hover:shadow-[0_20px_40px_-24px_rgb(10_22_40/0.35)]"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <p className="tag text-cobalt">
                    {post.category} <span className="text-steel">· {post.readingTime}</span>
                  </p>
                  <h3 className="display mt-4 text-xl leading-snug text-ink">{post.title}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.65] text-steel">{post.summary}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[0.92rem] font-semibold text-ink group-hover:text-cobalt">
                    Request this briefing <ArrowUpRight size={16} />
                  </span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
