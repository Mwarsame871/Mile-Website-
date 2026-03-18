import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function ContentWidth({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('mx-auto w-full max-w-content space-y-8 md:space-y-10', className)} {...props} />
  )
}
