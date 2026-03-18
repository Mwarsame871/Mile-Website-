import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border border-semantic-borderStrong/50 bg-brand-almond/45 px-3 py-1 text-xs font-medium text-semantic-textSecondary',
        className,
      )}
      {...props}
    />
  )
}
