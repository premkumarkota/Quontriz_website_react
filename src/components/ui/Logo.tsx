import { clsx } from 'clsx'
import qMark from '../../assets/logo/quontriz-q.svg'
import wordmark from '../../assets/logo/quontriz-wordmark-2.png'
import wordmarkWhite from '../../assets/logo/quontriz-wordmark-2-white.png'

export function Logo({
  className,
  inverted = false,
  size = 'nav',
}: {
  className?: string
  inverted?: boolean
  size?: 'nav' | 'hero'
}) {
  // Hero keeps the standalone Q mark as its centerpiece.
  if (size === 'hero') {
    return (
      <img
        src={qMark}
        alt="QUONTRIZ"
        className={clsx(
          'shrink-0 object-contain h-16 w-16 sm:h-20 sm:w-20 lg:h-24 lg:w-24',
          className,
        )}
      />
    )
  }

  // Header / footer use the full wordmark.
  return (
    <img
      src={inverted ? wordmarkWhite : wordmark}
      alt="QUONTRIZ"
      className={clsx(
        'shrink-0 object-contain object-left h-6 w-auto max-w-[170px] sm:h-7 sm:max-w-[195px]',
        className,
      )}
    />
  )
}
