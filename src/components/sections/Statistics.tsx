import { statistics } from '../../data/content'
import { AnimatedCounter } from '../ui/AnimatedCounter'
import { Container } from '../ui/Container'

export function Statistics() {
  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-gradient-to-br from-brand-800 via-brand-700 to-brand-600 py-16 text-white lg:py-20"
      aria-label="Company statistics"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.12),transparent_40%)]" />
      <Container className="relative">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {statistics.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              className="text-center [&_p:first-child]:text-white [&_p:last-child]:text-brand-100"
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
