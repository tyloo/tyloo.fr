'use client'

import { Button } from '@/components/ui/button'
import { Moon, Sun } from 'lucide-react'
import { ThemeProvider as NextThemesProvider, useTheme } from 'next-themes'
import * as React from 'react'

export const ThemeProvider = ({ children, ...props }: React.ComponentProps<typeof NextThemesProvider>) => (
  <NextThemesProvider {...props}>{children}</NextThemesProvider>
)

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div>
      <Button
        variant='outline'
        size='icon'
        className='cursor-pointer rounded-full shadow-none'
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <Sun className='h-[1.2rem] w-[1.2rem] scale-100 rotate-0 text-amber-400 transition-all dark:scale-0 dark:-rotate-90' />
        <Moon
          className='absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 text-slate-400 transition-all dark:scale-100 dark:rotate-0'
          onClick={() => setTheme('dark')}
        />
      </Button>
    </div>
  )
}
