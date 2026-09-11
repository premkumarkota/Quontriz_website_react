import { technologies } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Technologies() {
  return (
    <section id="technologies" className="section-pad">
      <Container>
        <SectionHeading
          kicker="Stack"
          title="What sits on the ticket."
          description="Flutter and FastAPI when we own the app. Fusion, EBS, and the usual Oracle tools when we sit with the core."
        />
        <p className="max-w-4xl text-base leading-[1.75] text-ink sm:text-lg">
          {technologies.map((tech, i) => (
            <span key={tech}>
              <span className="text-ink">{tech}</span>
              {i < technologies.length - 1 && <span className="text-ink/50"> · </span>}
            </span>
          ))}
        </p>
      </Container>
    </section>
  )
}
