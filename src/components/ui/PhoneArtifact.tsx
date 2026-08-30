import { motion, useReducedMotion } from 'framer-motion'
import { Bell, Check, Home, LayoutGrid, MapPin, User } from 'lucide-react'
import qMark from '../../assets/logo/quontriz-q.svg'

const rows = [
  { label: 'Route sync', meta: 'Gachibowli · 4 stops', done: true },
  { label: 'Order #4821', meta: 'Delivered', done: true },
  { label: 'Inventory push', meta: 'FastAPI · live', done: false },
]

export function PhoneArtifact() {
  const reduce = useReducedMotion()

  const enter = (delay: number) =>
    reduce
      ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] as const },
        }

  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      {/* ambient glow */}
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 rounded-[3rem] bg-[radial-gradient(60%_50%_at_50%_40%,rgba(26,79,227,0.18),transparent_70%)] blur-2xl"
      />

      {/* floating tile — depth, top-left */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="tile absolute -left-8 top-16 z-20 hidden items-center gap-2.5 px-3.5 py-2.5 sm:flex"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-signal dark:bg-white/10">
          <Check size={16} strokeWidth={2.5} />
        </span>
        <div>
          <p className="font-display text-xs font-bold leading-none text-ink dark:text-white">Build shipped</p>
          <p className="mt-1 font-mono text-[0.6rem] text-muted dark:text-slate-400">v1.4 · Play Store</p>
        </div>
      </motion.div>

      {/* floating tile — depth, bottom-right */}
      <motion.div
        aria-hidden="true"
        initial={reduce ? false : { opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="tile absolute -right-6 bottom-20 z-20 hidden px-3.5 py-3 sm:block"
      >
        <p className="font-mono text-[0.6rem] uppercase tracking-widest text-muted dark:text-slate-400">Stack</p>
        <p className="mt-1 font-display text-xs font-bold text-ink dark:text-white">Flutter · FastAPI</p>
      </motion.div>

      {/* phone */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 rounded-[2.6rem] border border-white/10 bg-deep p-2.5 shadow-[0_2px_4px_rgba(11,27,51,0.1),0_40px_80px_-32px_rgba(11,27,51,0.5)]"
      >
        {/* screen */}
        <div className="relative overflow-hidden rounded-[2.1rem] bg-mist dark:bg-brand-950">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-deep" />

          <div className="px-5 pb-5 pt-9">
            {/* status row */}
            <div className="flex items-center justify-between font-mono text-[0.65rem] text-muted dark:text-slate-400">
              <span>9:41</span>
              <span className="flex items-center gap-1" aria-hidden="true">
                <span className="h-1 w-1 rounded-full bg-signal" />
                <span className="h-1 w-1 rounded-full bg-signal" />
                <span className="h-1 w-1 rounded-full bg-muted/40" />
              </span>
            </div>

            {/* app bar — brand lockup */}
            <div className="mt-3 flex items-center justify-between border-b border-hairline pb-3 dark:border-white/10">
              <img src={qMark} alt="QUONTRIZ" className="h-7 w-7 rounded-md" />
              <span className="font-mono text-[0.55rem] uppercase tracking-[0.16em] text-muted dark:text-slate-400">
                Field Ops
              </span>
            </div>

            {/* progress card */}
            <motion.div {...enter(0.25)} className="mt-4 rounded-2xl bg-signal p-4 text-white shadow-[0_12px_30px_-14px_rgba(26,79,227,0.9)]">
              <div className="flex items-center justify-between">
                <p className="font-mono text-[0.6rem] uppercase tracking-widest text-brand-100">Today</p>
                <Bell size={13} className="text-brand-100" />
              </div>
              <p className="mt-2 font-display text-2xl font-bold leading-none">18 / 20</p>
              <p className="mt-1 text-[0.7rem] text-brand-100">deliveries confirmed</p>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/25">
                <motion.div
                  initial={reduce ? false : { width: 0 }}
                  animate={{ width: '90%' }}
                  transition={{ duration: 1.1, delay: 0.5, ease: 'easeOut' }}
                  className="h-full rounded-full bg-white"
                />
              </div>
            </motion.div>

            {/* task rows */}
            <div className="mt-4 space-y-2.5">
              {rows.map((row, i) => (
                <motion.div
                  key={row.label}
                  {...enter(0.4 + i * 0.12)}
                  className="flex items-center gap-3 rounded-xl border border-hairline bg-white px-3 py-2.5 dark:border-white/10 dark:bg-white/[0.04]"
                >
                  {row.done ? (
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-50 text-signal dark:bg-white/10">
                      <Check size={13} strokeWidth={3} />
                    </span>
                  ) : (
                    <LiveToggle reduce={!!reduce} />
                  )}
                  <div className="min-w-0">
                    <p className="truncate font-display text-xs font-semibold text-ink dark:text-white">{row.label}</p>
                    <p className="truncate font-mono text-[0.6rem] text-muted dark:text-slate-400">{row.meta}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* tab bar */}
          <div className="flex items-center justify-around border-t border-hairline bg-white/70 py-3 backdrop-blur dark:border-white/10 dark:bg-white/[0.03]">
            {[Home, LayoutGrid, MapPin, User].map((Icon, i) => (
              <Icon key={i} size={17} className={i === 0 ? 'text-signal' : 'text-muted dark:text-slate-500'} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

// The continuous micro-interaction: a toggle that flips on a loop —
// quiet, ongoing proof that we ship working apps.
function LiveToggle({ reduce }: { reduce: boolean }) {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center">
      <span className="relative h-3.5 w-6 rounded-full bg-brand-100 dark:bg-white/15">
        <motion.span
          className="absolute top-0.5 h-2.5 w-2.5 rounded-full bg-signal shadow-sm"
          initial={{ left: 2 }}
          animate={reduce ? { left: 13 } : { left: [2, 13, 13, 2] }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: 3, times: [0, 0.3, 0.85, 1], repeat: Infinity, repeatDelay: 0.8, ease: 'easeInOut' }
          }
        />
      </span>
    </span>
  )
}
