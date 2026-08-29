import { clsx } from 'clsx'
import wordmark from '../../assets/logo/quontriz-wordmark.png'
import wordmarkOnDark from '../../assets/logo/quontriz-wordmark-white.png'

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <img
      src={inverted ? wordmarkOnDark : wordmark}
        alt="QUONTRIZ Technologies"
      className={clsx(
        'h-8 w-auto max-w-[160px] object-contain object-left sm:h-9 sm:max-w-[200px] lg:h-10 lg:max-w-[220px]',
        className,
      )}
    />
  )
}
