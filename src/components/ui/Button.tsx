import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

const variants: Record<Variant, string> = {
  primary:
    'bg-signal text-white shadow-[0_1px_2px_rgba(11,27,51,0.12),0_10px_24px_-12px_rgba(26,79,227,0.55)] hover:bg-brand-700 hover:-translate-y-0.5 active:translate-y-0',
  secondary:
    'bg-white text-ink border border-hairline shadow-[0_1px_2px_rgba(11,27,51,0.05)] hover:border-brand-300 hover:text-brand-700 hover:-translate-y-0.5 dark:bg-white/10 dark:text-white dark:border-white/15 dark:hover:bg-white/15',
  ghost:
    'bg-transparent text-ink border border-hairline hover:border-brand-300 hover:bg-mist hover:-translate-y-0.5 dark:text-white dark:border-white/20 dark:hover:bg-white/10',
  outline:
    'border border-brand-600/30 text-brand-700 hover:bg-brand-50 dark:text-brand-200 dark:border-brand-400/30 dark:hover:bg-white/5',
}

type CommonProps = {
  children: ReactNode
  variant?: Variant
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const { children, variant = 'primary', className } = props
  const classes = clsx(
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-paper dark:focus-visible:ring-offset-brand-950',
    variants[variant],
    className,
  )

  if ('href' in props && props.href) {
    const { href, children: _c, variant: _v, className: _cl, ...anchorProps } = props
    return (
      <a href={href} className={classes} {...anchorProps}>
        {children}
      </a>
    )
  }

  const { children: _c, variant: _v, className: _cl, ...buttonProps } = props as ButtonAsButton
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  )
}
