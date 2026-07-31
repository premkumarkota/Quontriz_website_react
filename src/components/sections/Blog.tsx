import { motion } from 'framer-motion'
import { ArrowUpRight, Calendar, Clock } from 'lucide-react'
import { blogPosts } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Blog() {
  return (
    <section id="blog" className="section-pad bg-slate-50/80 dark:bg-brand-950/40">
      <Container>
        <SectionHeading
          eyebrow="Journal"
          title="Notes from the QUONTRIZ team"
          description="Product updates, company news, and what we’re looking for in partners."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -5 }}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white dark:border-white/10 dark:bg-white/5"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <span className="rounded-lg bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/15 dark:text-brand-200">
                  {post.category}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-snug text-slate-900 dark:text-white">
                  {post.title}
                </h3>
                <div className="mt-3 flex flex-wrap gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} /> {post.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} /> {post.readingTime}
                  </span>
                </div>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-700 dark:text-brand-300"
                >
                  Learn More
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  )
}
