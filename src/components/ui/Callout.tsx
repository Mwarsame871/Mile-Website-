import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type CalloutTone = 'info' | 'subtle'

interface CalloutProps extends HTMLAttributes<HTMLDivElement> {
  tone?: CalloutTone
}

const toneStyles: Record<CalloutTone, string> = {
  info: 'bg-brand-almond/35 border-semantic-borderStrong/50 text-semantic-textPrimary',
  subtle: 'bg-semantic-surface border-semantic-borderSoft text-semantic-textSecondary',
}

export function Callout({
  className,
  tone = 'info',
  ...props
}: CalloutProps) {
  return (
    <div
      className={cn(
        'rounded-soft border px-4 py-3 text-sm leading-6 shadow-soft',
        toneStyles[tone],
        className,
      )}
      {...props}
    />
  )
}
