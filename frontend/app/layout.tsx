import type { Metadata } from 'next'
import { JetBrains_Mono, Manrope } from 'next/font/google'

import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'statix: markets, decoded',
  description: 'Pre-market briefings, verified trade logs and mutual fund analysis for Indian markets.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          themes={['dark', 'light']}
          enableSystem={false}
          disableTransitionOnChange
          storageKey="statix-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}