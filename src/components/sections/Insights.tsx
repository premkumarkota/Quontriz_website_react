import { ArrowUpRight, Clock } from 'lucide-react'
import { clsx } from 'clsx'
import { insights } from '../../data/content'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'

export function Insights() {
  const [lead, ...others] = insights

  return (
    <section id="insights" className="section-pad bg-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="Insights" title="Guides and articles" />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            Short, practical guides from our project work. Ask for any of them and we will send the full version.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="h-full">
            <PostCard post={lead} large />
          </Reveal>
          <div className="grid gap-5">
            {others.map((post, i) => (
              <Reveal key={post.title} delay={0.08 + i * 0.08} className="h-full">
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function PostCard({ post, large }: { post: (typeof insights)[number]; large?: boolean }) {
  return (
    <a
      href="#contact"
      className={clsx(
        'group flex h-full overflow-hidden rounded-[24px] border border-line bg-white p-2 transition-[border-color,box-shadow] duration-300 hover:border-brand-200 hover:shadow-[0_32px_64px_-40px_rgb(10_22_40/0.45)]',
        large ? 'flex-col' : 'flex-col sm:flex-row',
      )}
    >
      <div
        className={clsx(
          'shrink-0 overflow-hidden rounded-[18px]',
          large ? 'aspect-[16/9]' : 'aspect-[16/9] sm:aspect-auto sm:w-[42%]',
        )}
      >
        <img
          src={post.image}
          alt=""
          className="h-full w-full object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className={clsx('flex flex-1 flex-col', large ? 'p-5 sm:p-7' : 'p-5 sm:p-6')}>
        <div className="flex flex-wrap items-center gap-3 text-[0.8rem]">
          <span className="rounded-full bg-brand-50 px-3 py-1 font-semibold text-cobalt">{post.category}</span>
          <span className="flex items-center gap-1.5 text-steel">
            <Clock size={13} aria-hidden />
            {post.readingTime}
          </span>
        </div>
        <h3
          className={clsx(
            'display mt-4 leading-snug text-ink transition-colors group-hover:text-cobalt',
            large ? 'text-2xl sm:text-[1.75rem]' : 'text-lg',
          )}
        >
          {post.title}
        </h3>
        <p className={clsx('mt-2.5 leading-[1.65] text-steel', large ? 'text-[1.02rem]' : 'text-[0.92rem]')}>
          {post.summary}
        </p>
        <span className="mt-auto flex items-center justify-between pt-6 text-[0.9rem] font-semibold text-ink group-hover:text-cobalt">
          Request this briefing
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-porcelain transition-colors duration-300 group-hover:bg-cobalt group-hover:text-white">
            <ArrowUpRight size={15} aria-hidden />
          </span>
        </span>
      </div>
    </a>
  )
}
