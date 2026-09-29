import { clsx } from 'clsx'
import type { Level } from '../../data/content'

const all: Level[] = ['L0', 'L1', 'L2', 'L3', 'L4']

/** Shows which ISA-95 levels a practice covers. */
export function LevelTags({ active, dark = false }: { active: Level[]; dark?: boolean }) {
  return (
    <div className="flex items-center gap-1" aria-label={`ISA-95 levels ${active.join(', ')}`}>
      {all.map((l) => {
        const on = active.includes(l)
        return (
          <span
            key={l}
            className={clsx(
              'font-mono text-[0.7rem] font-medium leading-none px-1.5 py-1 rounded-[2px]',
              on
                ? dark
                  ? 'bg-amber text-ink'
                  : 'bg-ink text-white'
                : dark
                  ? 'text-white/30 ring-1 ring-inset ring-white/15'
                  : 'text-steel/60 ring-1 ring-inset ring-line',
            )}
          >
            {l}
          </span>
        )
      })}
    </div>
  )
}
