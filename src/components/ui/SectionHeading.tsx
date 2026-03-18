import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface SectionHeadingProps extends HTMLAttributes<HTMLDivElement> {
  eyebrow?: string
  title: string
  description?: string
  action?: ReactNode
}

export function SectionHeading({
  className,
  eyebrow,
  title,
  description,
  action,
  ...props
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 border-b border-semantic-borderSoft pb-6 md:flex-row md:items-end md:justify-between',
        className,
      )}
      {...props}
    >
      <div className="space-y-2.5">
        {eyebrow ? (
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-semantic-textSecondary/75">
            <span className="h-px w-6 rounded-full bg-semantic-borderStrong/70" aria-hidden />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="type-h2">{title}</h2>
        {description ? <p className="type-body max-w-prose">{description}</p> : null}
      </div>
      {action ? <div className="md:shrink-0">{action}</div> : null}
    </div>
  )
}
