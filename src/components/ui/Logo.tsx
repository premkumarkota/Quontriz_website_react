import { clsx } from 'clsx'
import lockup from '../../assets/logo/quontriz-lockup.png'
import lockupOnDark from '../../assets/logo/quontriz-lockup-white.png'

export function Logo({
  className,
  inverted = false,
}: {
  className?: string
  inverted?: boolean
}) {
  return (
    <img
      src={inverted ? lockupOnDark : lockup}
      alt="QUONTRIZ Technologies"
      className={clsx(
        'h-7 w-auto max-w-[180px] object-contain object-left sm:h-8 sm:max-w-[210px] lg:h-9 lg:max-w-[240px]',
        className,
      )}
    />
  )
}
