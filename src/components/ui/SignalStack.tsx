import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion'
import { clsx } from 'clsx'
import { levels, scenarios } from '../../data/content'

const STEP_MS = 1400
const HOLD_STEPS = 3 // extra ticks to rest on a completed trace
const CYCLE_TICKS = levels.length + HOLD_STEPS + 1
const ease = [0.16, 1, 0.3, 1] as const

/** Check mark that draws itself in. */
function DrawnCheck({ animate }: { animate: boolean }) {
  return (
    <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" aria-hidden>
      <motion.path
        d="M3.5 8.5 L6.5 11.5 L12.5 4.5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={animate ? { pathLength: 0 } : false}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.45, delay: 0.25, ease }}
      />
    </svg>
  )
}

/**
 * A single plant event travelling up the ISA-95 stack, L0 → L4.
 * `reached` counts how many levels (from the bottom) the event has reached.
 */
export function SignalStack() {
  const reduce = useReducedMotion()
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { amount: 0.4 })
  const [{ scenario, tick }, setTrace] = useState({ scenario: 0, tick: reduce ? levels.length : 0 })
  const [paused, setPaused] = useState(false)
  const started = useRef(false)

  // Start the first trace from the bottom the moment the card comes into view.
  useEffect(() => {
    if (inView && !started.current && !reduce) {
      started.current = true
      setTrace({ scenario: 0, tick: 0 })
    }
  }, [inView, reduce])

  useEffect(() => {
    if (reduce || paused || !inView) return
    const id = window.setInterval(() => {
      setTrace((prev) =>
        prev.tick >= CYCLE_TICKS - 1
          ? { scenario: (prev.scenario + 1) % scenarios.length, tick: 0 }
          : { ...prev, tick: prev.tick + 1 },
      )
    }, STEP_MS)
    return () => window.clearInterval(id)
  }, [reduce, paused, inView])

  const reached = Math.min(tick, levels.length)
  const current = scenarios[scenario]
  // Rail fill runs bottom-up; each row is 1/5 of the rail.
  const fill = reached === 0 ? 0 : ((reached - 0.5) / levels.length) * 100
  const posted = reached === levels.length
  const progress = reduce ? 1 : Math.min((tick + 1) / CYCLE_TICKS, 1)

  const choose = (i: number) => {
    setTrace({ scenario: i, tick: reduce ? levels.length : 0 })
  }

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-2xl border border-line bg-white shadow-[0_40px_80px_-40px_rgb(10_22_40/0.35),0_2px_6px_-2px_rgb(10_22_40/0.06)]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="flex items-center justify-between gap-4 border-b border-line bg-porcelain px-5 py-3.5">
        <p className="tag text-steel">Live · Machine to Oracle</p>
        <div className="flex items-center gap-2 overflow-hidden text-[0.82rem] font-semibold text-ink">
          <span className="relative flex h-2 w-2 shrink-0">
            {!reduce && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-70" />
            )}
            <span className="relative inline-flex h-2 w-2 rounded-full bg-amber" />
          </span>
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={current.name}
              initial={reduce ? false : { y: 14, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={reduce ? undefined : { y: -14, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              className="whitespace-nowrap"
            >
              {current.name}
            </motion.span>
          </AnimatePresence>
        </div>
      </div>

      <div className="relative">
        {/* Rail */}
        <div className="absolute bottom-0 left-[1.6rem] top-0 w-0.5 -translate-x-1/2 bg-line-2" aria-hidden>
          <motion.div
            className="absolute bottom-0 left-0 w-full overflow-hidden bg-cobalt"
            animate={{ height: `${fill}%` }}
            transition={{ duration: reduce ? 0 : 0.7, ease }}
          >
            {!reduce && <span className="rail-flow absolute inset-x-0 h-16 bg-gradient-to-t from-transparent via-white/80 to-transparent" />}
          </motion.div>
          {/* Travelling pulse at the head of the signal */}
          {!reduce && reached > 0 && !posted && (
            <span
              className="absolute left-1/2 h-4 w-4 -translate-x-1/2 translate-y-1/2 rounded-full bg-cobalt/30 blur-[3px] transition-[bottom] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
              style={{ bottom: `${fill}%` }}
            />
          )}
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
                  'relative grid grid-cols-[3.2rem_1fr] items-start border-b border-line-2 py-4 pr-5 last:border-b-0 sm:grid-cols-[3.2rem_10.5rem_1fr]',
                )}
              >
                {/* Row highlight that sweeps in as the signal arrives */}
                <AnimatePresence>
                  {(head || (ledger && posted)) && (
                    <motion.span
                      key={`${scenario}-${level.id}-bg`}
                      className={clsx('absolute inset-0 origin-left', ledger && posted ? 'bg-brand-50' : 'bg-brand-50/60')}
                      initial={reduce ? false : { scaleX: 0, opacity: 0.6 }}
                      animate={{ scaleX: 1, opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6, ease }}
                      aria-hidden
                    />
                  )}
                </AnimatePresence>

                <span className="relative flex justify-center pt-1">
                  {head && !reduce && (
                    <motion.span
                      key={`${scenario}-${level.id}-ripple`}
                      className="absolute top-1 h-3 w-3 rounded-full border-2 border-cobalt"
                      initial={{ scale: 1, opacity: 0.7 }}
                      animate={{ scale: 3, opacity: 0 }}
                      transition={{ duration: 1.1, ease: 'easeOut', repeat: Infinity, repeatDelay: 0.2 }}
                      aria-hidden
                    />
                  )}
                  <motion.span
                    key={`${scenario}-${level.id}-${on}`}
                    className={clsx(
                      'relative h-3 w-3 rounded-full border-2',
                      on ? 'border-cobalt bg-cobalt' : 'border-line bg-white',
                    )}
                    initial={on && !reduce ? { scale: 0.3 } : false}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 500, damping: 14 }}
                  />
                </span>
                <div className="relative">
                  <p
                    className={clsx(
                      'font-mono text-xs font-medium transition-colors duration-500',
                      on ? 'text-cobalt' : 'text-steel/60',
                    )}
                  >
                    {level.id} · {level.name}
                  </p>
                  <p
                    className={clsx(
                      'mt-1 text-[0.8rem] leading-snug transition-colors duration-500',
                      on ? 'text-steel' : 'text-steel/50',
                    )}
                  >
                    {level.system}
                  </p>
                </div>
                <div
                  className={clsx(
                    'relative col-start-2 mt-2 sm:col-start-3 sm:mt-0',
                    ledger ? 'min-h-[5.6rem]' : 'min-h-[2.6rem]',
                  )}
                >
                  <AnimatePresence mode="wait">
                    {on ? (
                      <motion.div
                        key={`${scenario}-${level.id}`}
                        initial={reduce ? false : { opacity: 0, x: -14, filter: 'blur(3px)' }}
                        animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                        exit={reduce ? undefined : { opacity: 0, y: -6, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.5, ease }}
                      >
                        <p className={clsx('text-[0.92rem] leading-snug text-ink', ledger && 'font-semibold')}>
                          {current.events[level.id]}
                        </p>
                        {ledger && (
                          <motion.p
                            className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-cobalt px-2.5 py-1 text-[0.75rem] font-semibold text-white shadow-[0_6px_16px_-6px_rgb(26_79_227/0.8)]"
                            initial={reduce ? false : { opacity: 0, scale: 0.7, y: 4 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ type: 'spring', stiffness: 420, damping: 18, delay: 0.15 }}
                          >
                            <DrawnCheck animate={!reduce} />
                            Posted to Oracle
                          </motion.p>
                        )}
                      </motion.div>
                    ) : (
                      <motion.div
                        key={`${scenario}-${level.id}-wait`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex h-[1.4rem] items-center gap-1.5"
                        aria-hidden
                      >
                        <span className="h-1.5 w-24 rounded-full bg-line-2" />
                        <span className="h-1.5 w-10 rounded-full bg-line-2" />
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
        {scenarios.map((s, i) => {
          const on = i === scenario
          return (
            <button
              key={s.name}
              type="button"
              onClick={() => choose(i)}
              aria-pressed={on}
              className={clsx(
                'relative overflow-hidden rounded-full px-3.5 py-1.5 text-[0.8rem] font-medium transition-colors duration-300',
                on ? 'text-white' : 'text-steel hover:bg-white hover:text-ink',
              )}
            >
              {on && (
                <motion.span
                  layoutId="scenario-pill"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduce ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                  aria-hidden
                >
                  {/* Time left on this example */}
                  <motion.span
                    className="absolute bottom-0 left-0 h-[2px] bg-brand-300"
                    initial={false}
                    animate={{ width: reduce ? '100%' : [`${(tick / CYCLE_TICKS) * 100}%`, `${progress * 100}%`] }}
                    transition={{ duration: STEP_MS / 1000, ease: 'linear' }}
                  />
                </motion.span>
              )}
              <span className="relative">{s.name}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
