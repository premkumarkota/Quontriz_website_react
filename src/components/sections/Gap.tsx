import type { ReactNode } from 'react'
import { ArrowRight, Check, HelpCircle } from 'lucide-react'
import { gaps } from '../../data/content'
import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Reveal } from '../ui/Reveal'
import { SectionHeading } from '../ui/SectionHeading'
import { SignalStack } from '../ui/SignalStack'

/** Hand-keyed shift log: the reasons are vague and arrive late. */
function ShiftLogVisual() {
  const rows = [
    { time: '07:42', text: 'Line 3 stopped — jam?' },
    { time: '10:15', text: 'CNC-07 down, reason unclear' },
    { time: '13:30', text: 'Short stop, not recorded' },
  ]
  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-[0_12px_30px_-20px_rgb(10_22_40/0.35)]">
      <div className="flex items-center justify-between">
        <span className="text-[0.8rem] font-semibold text-ink">Shift log</span>
        <span className="rounded-full bg-amber/15 px-2 py-0.5 text-[0.7rem] font-semibold text-[#9a5b00]">
          Written by hand
        </span>
      </div>
      <ul className="mt-3 space-y-2">
        {rows.map((r) => (
          <li key={r.time} className="flex items-center gap-3 border-b border-dashed border-line pb-2 last:border-b-0 last:pb-0">
            <span className="font-mono text-[0.72rem] text-steel">{r.time}</span>
            <span className="text-[0.82rem] italic text-ink/80">{r.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** The machine knows at 09:14; the ERP finds out at end of day. */
function LagVisual() {
  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-[0_12px_30px_-20px_rgb(10_22_40/0.35)]">
      <div className="flex items-center justify-between text-[0.78rem]">
        <span className="font-semibold text-ink">Machine stops</span>
        <span className="font-semibold text-ink">Office system updated</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="h-3 w-3 shrink-0 rounded-full bg-cobalt ring-4 ring-brand-100" />
        <span
          className="h-2 flex-1 rounded-full bg-[repeating-linear-gradient(135deg,rgb(245_166_35/0.55)_0_6px,rgb(245_166_35/0.18)_6px_12px)]"
          aria-hidden
        />
        <span className="h-3 w-3 shrink-0 rounded-full border-2 border-steel/40 bg-white" />
      </div>
      <div className="mt-2 flex items-center justify-between font-mono text-[0.72rem] text-steel">
        <span>09:14</span>
        <span className="rounded-md bg-amber/15 px-2 py-0.5 font-sans font-semibold text-[#9a5b00]">
          Hours behind
        </span>
        <span>End of day</span>
      </div>
    </div>
  )
}

/** A failed lot whose origins can't be found without digging. */
function TraceVisual() {
  const links = ['Machine', 'Recipe', 'Supplier']
  return (
    <div className="rounded-xl border border-line bg-white p-4 shadow-[0_12px_30px_-20px_rgb(10_22_40/0.35)]">
      <div className="flex items-center gap-2">
        <span className="rounded-md bg-red-50 px-2 py-1 font-mono text-[0.72rem] font-semibold text-red-700 ring-1 ring-inset ring-red-100">
          Batch 88-2210 failed
        </span>
      </div>
      <ul className="mt-3 space-y-2 border-l-2 border-dashed border-line pl-4">
        {links.map((l) => (
          <li key={l} className="relative flex items-center justify-between text-[0.82rem]">
            <span className="absolute -left-4 top-1/2 h-px w-3 border-t-2 border-dashed border-line" aria-hidden />
            <span className="text-ink/80">{l}</span>
            <HelpCircle size={15} className="text-steel/50" aria-label="Unknown" />
          </li>
        ))}
      </ul>
    </div>
  )
}

const visuals: ReactNode[] = [<ShiftLogVisual key="log" />, <LagVisual key="lag" />, <TraceVisual key="trace" />]

const fixes = [
  'Machine data is recorded automatically, with no typing',
  'Production and stock update in Oracle straight away',
  'Any batch can be traced to its machine and supplier in seconds',
]

export function Gap() {
  return (
    <section id="challenge" className="section-pad bg-white">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[1.15fr_1fr] lg:items-end lg:gap-16">
          <SectionHeading kicker="The challenge" title="Your machines and your office software don’t talk to each other." />
          <p className="max-w-xl text-[1.0625rem] leading-[1.7] text-steel sm:text-lg lg:pb-2">
            Your machines know what is happening right now. Your business software finds out hours later,
            often typed in by hand. So planning, costs, maintenance and quality all run on old numbers.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {gaps.map(({ icon: Icon, title, body }, i) => (
            <li key={title}>
              <Reveal delay={i * 0.08} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white">
                  <div className="relative flex min-h-[12rem] items-center bg-porcelain p-6">
                    <div className="drawing-grid absolute inset-0 opacity-60" aria-hidden />
                    <div className="relative w-full">{visuals[i]}</div>
                  </div>
                  <div className="flex flex-1 flex-col border-t border-line p-6 lg:p-7">
                    <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-cobalt ring-1 ring-inset ring-brand-100">
                      <Icon size={19} strokeWidth={1.8} aria-hidden />
                    </span>
                    <h3 className="display mt-5 text-xl leading-snug text-ink">{title}</h3>
                    <p className="mt-2.5 leading-[1.7] text-steel">{body}</p>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="relative mt-8 overflow-hidden rounded-[28px] border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-white p-6 sm:p-10 lg:p-14">
          <div className="drawing-grid absolute inset-0" aria-hidden />
          <div className="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[0.82rem] font-semibold text-cobalt ring-1 ring-inset ring-brand-100">
                <span className="h-1.5 w-1.5 rounded-full bg-cobalt" aria-hidden />
                How we fix it
              </p>
              <h3 className="display mt-6 text-[1.75rem] leading-[1.15] text-ink sm:text-[2.2rem]">
                We connect your machines to your business software.
              </h3>
              <p className="mt-4 max-w-lg text-lg leading-[1.7] text-steel">
                We set up the whole connection for you, so your team always works with up-to-date numbers. Pick
                an example on the right to see it in action.
              </p>
              <ul className="mt-8 space-y-4">
                {fixes.map((f) => (
                  <li key={f} className="flex gap-3.5 text-ink">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cobalt text-white shadow-[0_6px_14px_-6px_rgb(26_79_227/0.8)]">
                      <Check size={13} strokeWidth={3} aria-hidden />
                    </span>
                    <span className="leading-[1.6]">{f}</span>
                  </li>
                ))}
              </ul>
              <Button href="#approach" variant="secondary" className="mt-10 rounded-lg">
                See how we work
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Button>
            </div>
            <SignalStack />
          </div>
        </div>
      </Container>
    </section>
  )
}
