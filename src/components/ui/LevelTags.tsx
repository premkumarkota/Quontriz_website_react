import { clsx } from 'clsx'
import type { Level } from '../../data/content'

const all: Level[] = ['L0', 'L1', 'L2', 'L3', 'L4']

/** Shows which ISA-95 levels a practice covers. */
export function LevelTags({ active }: { active: Level[] }) {
  return (
    <div className="flex items-center gap-1" aria-label={`ISA-95 levels ${active.join(', ')}`}>
      {all.map((l) => {
        const on = active.includes(l)
        return (
          <span
            key={l}
            className={clsx(
              'font-mono text-[0.7rem] font-medium leading-none px-1.5 py-1 rounded-[2px]',
              on ? 'bg-cobalt text-white' : 'text-steel/60 ring-1 ring-inset ring-line',
            )}
          >
            {l}
          </span>
        )
      })}
    </div>
  )
}
