import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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

  return (
    <div
      className="relative rounded-[4px] border border-white/12 bg-ink-2/80 backdrop-blur-sm"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3.5">
        <p className="tag text-white/60">ISA-95 · Live trace</p>
        <p className="tag flex items-center gap-2 text-amber">
          <span className="relative flex h-2 w-2">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-60" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          {current.name}
        </p>
      </div>

      <div className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-[1.6rem] top-0 w-px bg-white/10" aria-hidden>
          <motion.div
            className="absolute bottom-0 left-0 w-px bg-amber"
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
            return (
              <li
                key={level.id}
                className="grid grid-cols-[3.2rem_1fr] items-start border-b border-white/[0.07] py-4 pr-5 last:border-b-0 sm:grid-cols-[3.2rem_10.5rem_1fr]"
              >
                <span className="relative flex justify-center pt-1">
                  <span
                    className={clsx(
                      'h-2.5 w-2.5 rounded-full border transition-colors duration-500',
                      on ? 'border-amber bg-amber' : 'border-white/30 bg-ink-2',
                      head && !reduce && 'shadow-[0_0_0_6px_rgb(245_166_35/0.18)]',
                    )}
                  />
                </span>
                <div>
                  <p
                    className={clsx(
                      'font-mono text-xs font-medium transition-colors duration-500',
                      on ? 'text-amber' : 'text-white/40',
                    )}
                  >
                    {level.id} · {level.name}
                  </p>
                  <p className="mt-1 text-[0.8rem] leading-snug text-white/50">{level.system}</p>
                </div>
                <div className="col-start-2 mt-2 min-h-[2.6rem] sm:col-start-3 sm:mt-0">
                  <AnimatePresence mode="wait">
                    {on && (
                      <motion.p
                        key={`${scenario}-${level.id}`}
                        initial={reduce ? false : { opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className={clsx(
                          'text-[0.92rem] leading-snug',
                          level.id === 'L4' ? 'font-semibold text-white' : 'text-white/85',
                        )}
                      >
                        {current.events[level.id]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </li>
            )
          })}
        </ol>
      </div>

      <div className="flex flex-wrap gap-1.5 border-t border-white/10 p-3" role="group" aria-label="Choose a scenario">
        {scenarios.map((s, i) => (
          <button
            key={s.name}
            type="button"
            onClick={() => choose(i)}
            aria-pressed={i === scenario}
            className={clsx(
              'rounded-[3px] px-3 py-1.5 text-[0.8rem] font-medium transition-colors',
              i === scenario ? 'bg-white text-ink' : 'text-white/65 hover:bg-white/10 hover:text-white',
            )}
          >
            {s.name}
          </button>
        ))}
      </div>
    </div>
  )
}
