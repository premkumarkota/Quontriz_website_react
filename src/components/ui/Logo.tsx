import { clsx } from 'clsx'
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
  return (
    <img
      src={inverted ? wordmarkWhite : wordmark}
      alt="QUONTRIZ"
      className={clsx(
        'shrink-0 object-contain object-left',
        size === 'hero'
          ? 'h-16 w-auto max-w-[280px] sm:h-20 lg:h-24'
          : 'h-5 w-auto max-w-[135px] sm:h-7 sm:max-w-[200px] lg:h-8 lg:max-w-[215px]',
        className,
      )}
    />
  )
}
