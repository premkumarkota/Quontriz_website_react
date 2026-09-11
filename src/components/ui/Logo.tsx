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
          : 'h-8 w-auto max-w-[220px] sm:h-9 sm:max-w-[250px] lg:h-10 lg:max-w-[270px]',
        className,
      )}
    />
  )
}
