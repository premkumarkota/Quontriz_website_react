import { netStills } from '../../data/content'
import { Container } from '../ui/Container'

export function CoreField() {
  return (
    <section
      id="core"
      className="page-panel relative z-10 flex min-h-[100svh] flex-col bg-paper shadow-[0_-24px_80px_rgba(11,27,51,0.28)]"
      aria-label="Core to field"
    >
      <Container className="flex flex-1 flex-col justify-center py-24 lg:py-28">
        <p className="font-mono text-sm uppercase tracking-[0.16em] text-signal">Routing ticket · QT–001</p>
        <h2 className="mt-4 max-w-3xl font-display text-[1.85rem] font-semibold leading-[1.22] tracking-[-0.02em] text-ink sm:text-[2.25rem] lg:text-[2.55rem]">
          Oracle in the core. The same process in the field.
        </h2>

        <div className="mt-12 grid overflow-hidden border border-hairline lg:grid-cols-2">
          <div className="bg-ink px-6 py-10 text-white sm:px-10 sm:py-14">
            <p className="font-mono text-sm uppercase tracking-[0.16em] text-brand-200">Core</p>
            <p className="mt-4 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
              Oracle Fusion Cloud
            </p>
            <p className="mt-3 max-w-sm text-base leading-relaxed text-white sm:text-lg">
              E-Business Suite, planning, and supply — including lights-out stores the plant already runs on.
            </p>
          </div>
          <div className="relative min-h-[280px] bg-white">
            <img
              src={netStills.darkHall}
              alt="Empty industrial hall — stock still of a lights-out floor"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="font-mono text-sm uppercase tracking-[0.16em] text-white">Field</p>
              <p className="mt-3 font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Flutter field app
              </p>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-white sm:text-lg">
                When the store is dark, a technician’s phone is the exception path.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 font-mono text-sm uppercase tracking-[0.16em] text-ink" aria-hidden="true">
          <span>Core</span>
          <span className="relative h-px min-w-0 flex-1 bg-ink">
            <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-signal" />
            <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-signal" />
          </span>
          <span>Field</span>
        </div>
      </Container>
    </section>
  )
}
