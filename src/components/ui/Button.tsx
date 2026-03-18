import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-semantic-actionPrimary text-semantic-canvas shadow-soft hover:-translate-y-px hover:bg-semantic-actionPrimaryHover',
  secondary:
    'border border-semantic-borderStrong/55 bg-brand-almond/60 text-semantic-textSecondary hover:border-semantic-borderStrong/70 hover:bg-brand-muted/20 hover:text-semantic-textPrimary',
  ghost:
    'border border-transparent bg-transparent text-semantic-textSecondary/90 hover:border-semantic-borderSoft hover:bg-semantic-actionGhostHover/30',
}

export function Button({
  className,
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        'inline-flex items-center justify-center rounded-soft px-5 py-2.5 text-sm font-semibold tracking-[0.005em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas',
        variantStyles[variant],
        className,
      )}
      {...props}
    />
  )
}
