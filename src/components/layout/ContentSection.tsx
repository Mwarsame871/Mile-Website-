import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type SectionSurfaceTone = 'default' | 'almond' | 'rose'

interface ContentSectionProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionSurfaceTone
}

const toneStyles: Record<SectionSurfaceTone, string> = {
  default: '',
  almond: 'bg-brand-almond/18',
  rose: 'bg-brand-muted/10',
}

export function ContentSection({
  className,
  tone = 'default',
  ...props
}: ContentSectionProps) {
  return (
    <section
      className={cn(
        'rounded-panel px-3 py-6 md:px-4 md:py-8',
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  )
}
