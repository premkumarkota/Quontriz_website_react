import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { clsx } from 'clsx'
import { levels, scenarios } from '../../data/content'

const STEP_MS = 1400
const HOLD_STEPS = 3 // extra ticks to rest on a completed trace

/**
 * A single plant event travelling up the ISA-95 stack, L0 → L4.
 * `reached` counts how many levels (from the bottom) the event has reached.
 */
export function SignalStack() {
  const reduce = useReducedMotion()
  const [{ scenario, tick }, setTrace] = useState({ scenario: 0, tick: reduce ? levels.length : 0 })
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (reduce || paused) return
    const id = window.setInterval(() => {
      setTrace((prev) =>
        prev.tick >= levels.length + HOLD_STEPS
          ? { scenario: (prev.scenario + 1) % scenarios.length, tick: 0 }
          : { ...prev, tick: prev.tick + 1 },
      )
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [reduce, paused])

  const reached = Math.min(tick, levels.length)
  const current = scenarios[scenario]
  // Rail fill runs bottom-up; each row is 1/5 of the rail.
  const fill = reached === 0 ? 0 : ((reached - 0.5) / levels.length) * 100

  const choose = (i: number) => {
    setTrace({ scenario: i, tick: reduce ? levels.length : 0 })
  }

  const posted = reached === levels.length

  return (
    <div
      className="relative overflow-hidden rounded-[6px] border border-line bg-white shadow-[0_40px_80px_-40px_rgb(10_22_40/0.35),0_2px_6px_-2px_rgb(10_22_40/0.06)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line bg-porcelain px-5 py-3.5">
        <p className="tag text-steel">Live · Machine to Oracle</p>
        <p className="flex items-center gap-2 text-[0.82rem] font-semibold text-ink">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-70" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          {current.name}
        </p>
      </div>

      <div className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-[1.6rem] top-0 w-0.5 -translate-x-1/2 bg-line-2" aria-hidden>
          <motion.div
            className="absolute bottom-0 left-0 w-full bg-cobalt"
            animate={{ height: `${fill}%` }}
            transition={{ duration: reduce ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        <ol className="relative" aria-live="polite">
          {levels.map((level, idx) => {
            // idx 0 is L4 (top); position from bottom is levels.length - 1 - idx
            const fromBottom = levels.length - 1 - idx
            const on = fromBottom < reached
            const head = fromBottom === reached - 1
            const ledger = level.id === 'L4'
            return (
              <li
                key={level.id}
                className={clsx(
                  'grid grid-cols-[3.2rem_1fr] items-start border-b border-line-2 py-4 pr-5 transition-colors duration-500 last:border-b-0 sm:grid-cols-[3.2rem_10.5rem_1fr]',
                  ledger && posted && 'bg-brand-50',
                )}
              >
                <span className="relative flex justify-center pt-1">
                  <span
                    className={clsx(
                      'h-3 w-3 rounded-full border-2 transition-colors duration-500',
                      on ? 'border-cobalt bg-cobalt' : 'border-line bg-white',
                      head && !reduce && 'shadow-[0_0_0_5px_rgb(26_79_227/0.15)]',
                    )}
                  />
                </span>
                <div>
                  <p
                    className={clsx(
                      'font-mono text-xs font-medium transition-colors duration-500',
                      on ? 'text-cobalt' : 'text-steel/70',
                    )}
                  >
                    {level.id} · {level.name}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-snug text-steel">{level.system}</p>
                </div>
                <div className="col-start-2 mt-2 min-h-[2.6rem] sm:col-start-3 sm:mt-0">
                  <AnimatePresence mode="wait">
                    {on && (
                      <motion.div
                        key={`${scenario}-${level.id}`}
                        initial={reduce ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                      >
                        <p className={clsx('text-[0.92rem] leading-snug text-ink', ledger && 'font-semibold')}>
                          {current.events[level.id]}
                        </p>
                        {ledger && (
                          <p className="mt-1.5 inline-flex items-center gap-1.5 text-[0.78rem] font-semibold text-cobalt">
                            <Check size={13} strokeWidth={3} aria-hidden />
                            Posted to Oracle
                          </p>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-t border-line bg-porcelain p-3" role="group" aria-label="Choose a scenario">
        {scenarios.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => choose(i)}
            aria-pressed={i === scenario}
            className={clsx(
              'rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors',
              i === scenario ? 'bg-ink text-white' : 'text-steel hover:bg-white hover:text-ink',
            )}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}
