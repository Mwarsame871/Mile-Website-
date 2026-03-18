import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type SectionTone = 'default' | 'almond' | 'rose'

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  tone?: SectionTone
}

const toneStyles: Record<SectionTone, string> = {
  default: 'bg-semantic-surface border-semantic-borderStrong/30',
  almond: 'bg-brand-almond/30 border-semantic-borderStrong/35',
  rose: 'bg-brand-muted/12 border-semantic-borderStrong/35',
}

export function SectionWrapper({
  className,
  tone = 'default',
  ...props
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        'arch-edge space-y-7 rounded-panel border p-6 shadow-card md:space-y-8 md:p-8',
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  )
}
