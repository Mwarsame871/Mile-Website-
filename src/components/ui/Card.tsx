import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type CardTone = 'default' | 'rose'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CardTone
}

const toneStyles: Record<CardTone, string> = {
  default: 'bg-semantic-surface border-semantic-borderStrong/30',
  rose: 'bg-brand-muted/12 border-semantic-borderStrong/40',
}

export function Card({
  className,
  tone = 'default',
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-panel border p-6 shadow-card md:p-8',
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  )
}
