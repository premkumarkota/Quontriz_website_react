import { motion, useReducedMotion } from 'framer-motion'
import { Boxes, Cloud, LineChart, Smartphone } from 'lucide-react'
import { PhoneArtifact } from './PhoneArtifact'

const ease = [0.22, 1, 0.36, 1] as const

const satellites = [
  { id: 'fusion', label: 'Fusion Cloud', sub: 'ERP core', x: '8%', y: '6%', icon: Cloud, accent: true },
  { id: 'ebs', label: 'Oracle EBS', sub: 'System of record', x: '72%', y: '10%', icon: Boxes, accent: false },
  { id: 'mobile', label: 'Field app', sub: 'Flutter · iOS · Android', x: '4%', y: '72%', icon: Smartphone, accent: false },
  { id: 'analytics', label: 'Analytics', sub: 'OAC · BI', x: '70%', y: '76%', icon: LineChart, accent: false },
]

export function FieldSystem() {
  const reduce = useReducedMotion()

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-[460px] sm:aspect-square sm:max-w-[520px]">
      <svg
        viewBox="0 0 100 100"
        className="pointer-events-none absolute inset-0 h-full w-full"
        fill="none"
        aria-hidden="true"
      >
        {[
          { x2: 18, y2: 14 },
          { x2: 82, y2: 18 },
          { x2: 16, y2: 80 },
          { x2: 82, y2: 84 },
        ].map((p, i) => (
          <motion.line
            key={i}
            x1="50"
            y1="50"
            x2={p.x2}
            y2={p.y2}
            stroke="var(--color-signal)"
            strokeWidth="0.45"
            vectorEffect="non-scaling-stroke"
            initial={reduce ? { pathLength: 1, opacity: 0.35 } : { pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.45 }}
            transition={{ delay: reduce ? 0 : 0.85 + i * 0.1, duration: 0.9, ease }}
          />
        ))}
        {!reduce &&
          [
            { x2: 18, y2: 14 },
            { x2: 82, y2: 18 },
            { x2: 16, y2: 80 },
            { x2: 82, y2: 84 },
          ].map((p, i) => (
            <motion.line
              key={`flow-${i}`}
              x1="50"
              y1="50"
              x2={p.x2}
              y2={p.y2}
              stroke="var(--color-signal)"
              strokeWidth="0.9"
              className="flow-path"
              vectorEffect="non-scaling-stroke"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 1.6 }}
            />
          ))}
      </svg>

      {satellites.map((s, i) => {
        const Icon = s.icon
        return (
          <motion.div
            key={s.id}
            className="absolute z-20"
            style={{ left: s.x, top: s.y }}
            initial={reduce ? false : { opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: reduce ? 0 : 0.55 + i * 0.12, duration: 0.65, ease }}
          >
            <div
              className={
                s.accent
                  ? 'flex items-center gap-2.5 rounded-2xl bg-signal px-3 py-2.5 text-white shadow-[0_16px_40px_-18px_rgba(26,79,227,0.85)]'
                  : 'flex items-center gap-2.5 rounded-2xl border border-hairline bg-white/90 px-3 py-2.5 shadow-[0_12px_32px_-20px_rgba(11,27,51,0.35)] backdrop-blur-md dark:border-white/10 dark:bg-brand-950/80'
              }
            >
              <span
                className={
                  s.accent
                    ? 'flex h-8 w-8 items-center justify-center rounded-lg bg-white/15'
                    : 'flex h-8 w-8 items-center justify-center rounded-lg bg-brand-50 text-signal dark:bg-white/10'
                }
              >
                <Icon size={15} />
              </span>
              <span>
                <span
                  className={`block font-display text-[0.78rem] font-bold leading-none ${s.accent ? 'text-white' : 'text-ink dark:text-white'}`}
                >
                  {s.label}
                </span>
                <span
                  className={`mt-1 block font-mono text-[0.55rem] ${s.accent ? 'text-brand-100' : 'text-muted dark:text-slate-400'}`}
                >
                  {s.sub}
                </span>
              </span>
            </div>
          </motion.div>
        )
      })}

      <motion.div
        className="absolute left-1/2 top-1/2 z-10 w-[min(78%,280px)] -translate-x-1/2 -translate-y-1/2 sm:w-[300px]"
        initial={reduce ? false : { opacity: 0, y: 48, rotateX: 12 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ delay: reduce ? 0 : 0.28, duration: 0.9, ease }}
      >
        <div className={reduce ? '' : 'float-soft'}>
          <PhoneArtifact />
        </div>
      </motion.div>
    </div>
  )
}
