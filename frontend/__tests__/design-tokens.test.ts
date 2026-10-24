import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const css = readFileSync(join(process.cwd(), 'app/globals.css'), 'utf8')

function tokens(selector: string): Record<string, string> {
  const start = css.indexOf(`${selector} {`)
  if (start === -1) throw new Error(`Missing CSS block: ${selector}`)
  const body = css.slice(start, css.indexOf('}', start))
  const out: Record<string, string> = {}
  for (const m of body.matchAll(/--([\w-]+):\s*([^;]+);/g)) out[m[1]] = m[2].trim().toUpperCase()
  return out
}

const DARK = {
  background: '#080C14', card: '#0F131C', 'surface-low': '#141C2B', 'surface-high': '#1B2436',
  border: '#182338', foreground: '#FFFFFF', 'fg-secondary': '#94A3B8', 'fg-inactive': '#64748B',
  gain: '#00E599', loss: '#FF4B55', primary: '#0052FF', warning: '#F59E0B',
}
const LIGHT = {
  background: '#F8FAFC', card: '#FFFFFF', 'surface-low': '#F1F5F9', 'surface-high': '#FFFFFF',
  border: '#E2E8F0', foreground: '#0F172A', 'fg-secondary': '#475569', 'fg-inactive': '#94A3B8',
  gain: '#00B87A', loss: '#E11D48', primary: '#0052FF', warning: '#D97706',
}

describe('design tokens match DESIGN_SYSTEM.md', () => {
  const dark = tokens(':root, .dark')
  const light = tokens('.light')

  it.each(Object.entries(DARK))('dark --%s', (name, hex) => expect(dark[name]).toBe(hex))
  it.each(Object.entries(LIGHT))('light --%s', (name, hex) => expect(light[name]).toBe(hex))

  it('defines every dark token in the light theme (no gaps)', () => {
    expect(Object.keys(light).sort()).toEqual(Object.keys(dark).sort())
  })

  it('keeps cobalt out of loss colors', () => {
    expect(dark.loss).not.toBe(dark.primary)
    expect(light.loss).not.toBe(light.primary)
  })

  it('declares typography tokens and the num utility', () => {
    expect(css).toContain('--tracking-wordmark: -0.04em')
    expect(css).toContain('--tracking-tagline: 0.32em')
    expect(css).toContain('@utility num')
    expect(css).toContain('var(--font-manrope)')
    expect(css).toContain('var(--font-jetbrains-mono)')
  })

  it('throws a clear error when a theme block is missing', () => {
    expect(() => tokens('.does-not-exist')).toThrow('Missing CSS block')
  })
})