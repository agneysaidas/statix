import { Tagline, Wordmark } from '@/components/brand/wordmark'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'

const QUOTES = [
  { name: 'NIFTY 50', level: '₹24,850.40', delta: '+348.20 pts', pct: '+1.42%', up: true },
  { name: 'BANK NIFTY', level: '₹53,120.15', delta: '-212.60 pts', pct: '-0.40%', up: false },
]

const SWATCHES = [
  ['Canvas', 'bg-background'],
  ['Card', 'bg-card'],
  ['Low', 'bg-surface-low'],
  ['High', 'bg-surface-high'],
  ['Gain', 'bg-gain'],
  ['Loss', 'bg-loss'],
  ['Warning', 'bg-warning'],
  ['Cobalt', 'bg-brand-cobalt'],
] as const

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen max-w-6xl flex-col gap-8 px-6 py-8">
      <header className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <Wordmark />
          <Tagline />
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-fg-secondary">
            <span className="size-1.5 animate-pulse rounded-full bg-gain" />
            Market Open
          </span>
          <ThemeToggle />
        </div>
      </header>

      <section className="grid gap-4 md:grid-cols-2">
        {QUOTES.map((q) => (
          <article key={q.name} className="rounded-lg border border-border bg-card p-5">
            <p className="text-sm text-fg-secondary">{q.name}</p>
            <p className="num mt-2 text-3xl font-semibold">{q.level}</p>
            <p className={`num mt-1 text-sm ${q.up ? 'text-gain' : 'text-loss'}`}>
              {q.up ? '▲' : '▼'} {q.delta} ({q.pct})
            </p>
          </article>
        ))}
      </section>

      <section className="rounded-lg border border-border bg-card p-5 shadow-elevated">
        <div className="flex items-start justify-between">
          <div>
            <p className="num text-base font-medium">NIFTY 24800 CE</p>
            <p className="num mt-1 text-xs text-fg-inactive">09:18:24 IST</p>
          </div>
          <p className="num text-xl font-semibold text-gain">+₹18,450.00</p>
        </div>
        <p className="num mt-4 text-sm text-fg-secondary">SL: 142.50 | TGT: 185.00</p>
        <p className="mt-4 text-sm text-fg-secondary">
          Prose renders in Manrope: breakout above the prior day high on rising volume.
        </p>
      </section>

      <section className="flex flex-wrap items-center gap-3">
        <Button>Primary CTA</Button>
        <Button variant="outline">Outline</Button>
        <span className="rounded-full bg-warning/15 px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-warning">
          F&amp;O Ban
        </span>
        <span className="rounded-full bg-primary px-3 py-1 font-mono text-[11px] font-medium uppercase tracking-widest text-primary-foreground">
          Verified
        </span>
      </section>

      <section className="grid grid-cols-4 gap-3 md:grid-cols-8">
        {SWATCHES.map(([label, cls]) => (
          <div key={label} className="space-y-2">
            <div className={`h-12 rounded-md border border-border ${cls}`} />
            <p className="font-mono text-[10px] uppercase tracking-widest text-fg-secondary">{label}</p>
          </div>
        ))}
      </section>

      <p className="text-xs text-fg-inactive">Sample data for design verification only.</p>
    </main>
  )
}