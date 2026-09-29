import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'light' | 'outline' | 'outlineDark'

const variants: Record<Variant, string> = {
  primary: 'bg-cobalt text-white hover:bg-brand-700',
  light: 'bg-white text-ink hover:bg-porcelain',
  outline: 'border border-white/35 text-white hover:border-white hover:bg-white/5',
  outlineDark: 'border border-ink/25 text-ink hover:border-ink',
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
    'group inline-flex items-center justify-center gap-2.5 rounded-[3px] px-6 py-3.5 text-[0.95rem] font-semibold transition-colors duration-200',
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
