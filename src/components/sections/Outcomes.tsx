import { outcomes } from '../../data/content'
import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'

export function Outcomes() {
  return (
    <section id="outcomes" className="section-pad relative overflow-hidden bg-ink text-white">
      <div className="drawing-grid absolute inset-0" aria-hidden />
      <Container className="relative">
        <SectionHeading
          dark
          kicker="Outcomes"
          title="What changes when the floor talks to the ERP."
          description="The same five operating questions, before and after a connected architecture."
        />

        <div className="mt-14 overflow-x-auto">
          <table className="w-full min-w-[40rem] border-collapse text-left">
            <thead>
              <tr className="border-b border-white/15">
                <th scope="col" className="tag w-[18%] py-4 pr-6 font-medium text-white/50">Area</th>
                <th scope="col" className="tag w-[41%] py-4 pr-8 font-medium text-white/50">Today</th>
                <th scope="col" className="tag w-[41%] py-4 font-medium text-amber">Connected</th>
              </tr>
            </thead>
            <tbody>
              {outcomes.map((o) => (
                <tr key={o.topic} className="border-b border-white/10 align-top">
                  <th scope="row" className="py-7 pr-6">
                    <span className="display text-xl text-white">{o.topic}</span>
                  </th>
                  <td className="py-7 pr-8 leading-[1.65] text-white/60">{o.before}</td>
                  <td className="py-7 leading-[1.65] text-white">
                    <span className="flex gap-3">
                      <span className="mt-[0.6rem] h-1.5 w-1.5 shrink-0 bg-amber" aria-hidden />
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
