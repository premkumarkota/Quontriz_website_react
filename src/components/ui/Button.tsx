import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-brand-700 to-brand-500 text-white shadow-lg shadow-brand-700/25 hover:shadow-brand-600/35 hover:brightness-105',
  secondary:
    'bg-white text-brand-800 border border-slate-200 shadow-sm hover:border-brand-300 hover:bg-brand-50 dark:bg-white/10 dark:text-white dark:border-white/15 dark:hover:bg-white/15',
  ghost: 'bg-transparent text-white border border-white/40 hover:bg-white/10',
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
    'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-brand-950',
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
