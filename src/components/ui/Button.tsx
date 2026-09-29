import { clsx } from 'clsx'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type Variant = 'primary' | 'secondary'

const variants: Record<Variant, string> = {
  primary: 'bg-cobalt text-white shadow-[0_8px_20px_-10px_rgb(26_79_227/0.7)] hover:bg-brand-700',
  secondary: 'border border-line bg-white text-ink hover:border-ink/40 hover:bg-porcelain',
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
