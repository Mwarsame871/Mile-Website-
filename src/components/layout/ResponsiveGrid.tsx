import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

type GridColumns = 2 | 3 | 4

interface ResponsiveGridProps extends HTMLAttributes<HTMLDivElement> {
  columns?: GridColumns
}

const columnStyles: Record<GridColumns, string> = {
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-4',
}

export function ResponsiveGrid({
  className,
  columns = 3,
  ...props
}: ResponsiveGridProps) {
  return (
    <div className={cn('grid gap-4 md:gap-5', columnStyles[columns], className)} {...props} />
  )
}
