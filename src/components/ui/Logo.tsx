import { clsx } from 'clsx'
import wordmark from '../../assets/logo/quontriz-wordmark.png'
import wordmarkOnDark from '../../assets/logo/quontriz-wordmark-white.png'
import { useTheme } from '../../context/ThemeContext'

export function Logo({
  className,
  inverted = false,
  size = 'nav',
}: {
  className?: string
  inverted?: boolean
  size?: 'nav' | 'hero'
}) {
  const { theme } = useTheme()
  const onDark = inverted || theme === 'dark'

  return (
    <img
      src={onDark ? wordmarkOnDark : wordmark}
      alt="QUONTRIZ"
      className={clsx(
        'w-auto object-contain object-left',
        size === 'hero'
          ? 'h-12 max-w-[min(100%,22rem)] sm:h-16 sm:max-w-[28rem] lg:h-[4.75rem] lg:max-w-[34rem]'
          : 'h-8 max-w-[168px] sm:h-9 sm:max-w-[200px] lg:h-10 lg:max-w-[228px]',
        className,
      )}
    />
  )
}
