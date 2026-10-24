import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { useTheme } from 'next-themes'

import { ThemeToggle } from '@/components/theme-toggle'

jest.mock('next-themes', () => ({ useTheme: jest.fn() }))
const mockedUseTheme = jest.mocked(useTheme)

function setup(resolvedTheme: string | undefined) {
  const setTheme = jest.fn()
  mockedUseTheme.mockReturnValue({ resolvedTheme, setTheme } as unknown as ReturnType<typeof useTheme>)
  render(<ThemeToggle />)
  return setTheme
}

describe('ThemeToggle', () => {
  it('switches dark to light', async () => {
    const setTheme = setup('dark')
    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    expect(setTheme).toHaveBeenCalledWith('light')
  })

  it('switches light to dark', async () => {
    const setTheme = setup('light')
    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    expect(setTheme).toHaveBeenCalledWith('dark')
  })

  it('treats an unresolved theme as the dark default', async () => {
    const setTheme = setup(undefined)
    await userEvent.click(screen.getByRole('button', { name: /toggle theme/i }))
    expect(setTheme).toHaveBeenCalledWith('light')
  })
})