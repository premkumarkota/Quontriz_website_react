import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'ghost' | 'invert'

const variants: Record<Variant, string> = {
  primary: 'bg-signal text-white hover:bg-brand-700',
  ghost: 'bg-white text-ink hover:bg-mist',
  invert: 'bg-ink text-white hover:bg-brand-900',
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
    'inline-flex items-center justify-center gap-2 rounded-[2px] px-7 py-3.5 text-base font-normal tracking-[0.04em] uppercase transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal focus-visible:ring-offset-2 focus-visible:ring-offset-paper',
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
