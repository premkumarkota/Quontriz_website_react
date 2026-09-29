import { Check, Minus } from 'lucide-react'
import { outcomes } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Outcomes() {
  return (
    <section id="outcomes" className="section-pad bg-white">
      <Container>
        <SectionHeading
          kicker="Outcomes"
          title="What changes when the floor talks to the ERP."
          description="The same five operating questions, before and after a connected architecture."
        />

        <div className="mt-14 overflow-x-auto rounded-[6px] border border-line">
          <table className="w-full min-w-[44rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-line">
                <th scope="col" className="tag w-[18%] bg-porcelain px-6 py-4 font-medium text-steel">
                  Area
                </th>
                <th scope="col" className="tag w-[41%] bg-porcelain px-6 py-4 font-medium text-steel">
                  Today
                </th>
                <th scope="col" className="tag w-[41%] bg-cobalt px-6 py-4 font-medium text-white">
                  With QUONTRIZ
                </th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o) => (
                <tr key={o.topic} className="border-b border-line align-top last:border-b-0">
                  <th scope="row" className="px-6 py-6">
                    <span className="display text-lg text-ink">{o.topic}</span>
                  </th>
                  <td className="px-6 py-6 leading-[1.65] text-steel">
                    <span className="flex gap-3">
                      <Minus size={16} className="mt-1 shrink-0 text-steel/50" aria-hidden />
                      {o.before}
                    </span>
                  </td>
                  <td className="bg-brand-50/70 px-6 py-6 leading-[1.65] text-ink">
                    <span className="flex gap-3">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cobalt text-white">
                        <Check size={12} strokeWidth={3} aria-hidden />
                      </span>
                      {o.after}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </section>
  )
}
