import { cn } from '@/lib/utils'

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn('font-sans text-2xl font-extrabold lowercase tracking-wordmark', className)}>
      stati<span className="text-brand-mint">x</span>
    </span>
  )
}

export function Tagline({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'font-mono text-[11px] font-medium uppercase tracking-tagline text-fg-secondary',
        className,
      )}
    >
      markets, decoded
    </span>
  )
}