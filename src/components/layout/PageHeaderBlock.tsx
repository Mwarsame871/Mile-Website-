import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type HeaderTone = 'rose' | 'almond'

interface PageHeaderBlockProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
  tone?: HeaderTone
}

const toneStyles: Record<HeaderTone, string> = {
  rose: 'bg-brand-muted/12 border-semantic-borderStrong/35',
  almond: 'bg-brand-almond/32 border-semantic-borderStrong/35',
}

export function PageHeaderBlock({
  className,
  title,
  description,
  tone = 'rose',
  ...props
}: PageHeaderBlockProps) {
  return (
    <header
      className={cn(
        'arch-edge space-y-3 rounded-panel border px-6 py-6 md:px-8 md:py-7',
        toneStyles[tone],
        className,
      )}
      {...props}
    >
      <h1 className="type-h1">{title}</h1>
      <p className="type-body max-w-prose">{description}</p>
    </header>
  )
}
