import type { InputHTMLAttributes, TextareaHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

const fieldBaseStyles =
  'w-full rounded-soft border border-semantic-borderSoft bg-semantic-surface px-4 py-2.5 text-sm text-semantic-textPrimary placeholder:text-semantic-textMuted transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-semantic-focus focus-visible:ring-offset-2 focus-visible:ring-offset-semantic-canvas'

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
}

export function TextInput({ className, label, id, ...props }: TextInputProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      {label ? <span className="text-sm font-medium text-semantic-textSecondary">{label}</span> : null}
      <input id={id} className={cn(fieldBaseStyles, className)} {...props} />
    </label>
  )
}

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
}

export function TextArea({ className, label, id, ...props }: TextAreaProps) {
  return (
    <label className="block space-y-2" htmlFor={id}>
      {label ? <span className="text-sm font-medium text-semantic-textSecondary">{label}</span> : null}
      <textarea
        id={id}
        className={cn(fieldBaseStyles, 'min-h-28 resize-y', className)}
        {...props}
      />
    </label>
  )
}
