import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function PageContainer({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'min-h-screen bg-semantic-canvas px-5 py-8 md:px-8 md:py-12',
        className,
      )}
      {...props}
    />
  )
}
