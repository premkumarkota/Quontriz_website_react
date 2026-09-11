import { clsx } from 'clsx'

export function RoutingTicket({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        'border border-hairline bg-white text-ink',
        className,
      )}
    >
      <div className="flex items-center justify-between border-b border-hairline px-4 py-2 font-mono text-[0.62rem] uppercase tracking-[0.18em] text-steel sm:px-6">
        <span>Routing ticket</span>
        <span>QT–001 · Hyderabad</span>
      </div>
      <div className="grid sm:grid-cols-2">
        <div className="border-b border-hairline px-4 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:py-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-signal">Core</p>
          <p className="mt-2 font-display text-lg font-semibold tracking-tight">Oracle Fusion Cloud</p>
          <p className="mt-1 text-sm text-muted">E-Business Suite · planning · supply</p>
        </div>
        <div className="px-4 py-5 sm:px-6 sm:py-6">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.18em] text-signal">Field</p>
          <p className="mt-2 font-display text-lg font-semibold tracking-tight">Flutter field app</p>
          <p className="mt-1 text-sm text-muted">iOS · Android · the same process, in a phone</p>
        </div>
      </div>
      <div className="relative border-t border-hairline px-4 py-4 sm:px-6" aria-hidden="true">
        <div className="flex items-center gap-3 font-mono text-[0.62rem] uppercase tracking-[0.16em] text-steel">
          <span>Core</span>
          <span className="relative h-px min-w-0 flex-1 bg-ink">
            <span className="absolute left-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal" />
            <span className="absolute right-0 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-signal" />
          </span>
          <span>Field</span>
        </div>
      </div>
    </div>
  )
}
