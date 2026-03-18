import type { AnchorHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

export function TextLink({ className, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      className={cn(
        'font-medium text-semantic-link underline decoration-semantic-borderStrong/40 underline-offset-4 transition-colors duration-200 hover:text-semantic-linkHover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas',
        className,
      )}
      {...props}
    />
  )
}
