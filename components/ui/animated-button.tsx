'use client'

import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import Link from 'next/link'
import { ButtonHTMLAttributes, ReactNode } from 'react'

const buttonVariants = cva(
  'group inline-flex w-full items-center justify-center rounded-full font-medium transition-all sm:w-auto',
  {
    variants: {
      variant: {
        default:
          'bg-gradient-to-tr from-zinc-300/20 via-zinc-400/30 to-transparent hover:from-zinc-300/30 hover:via-zinc-400/40 hover:to-transparent dark:from-zinc-300/5 dark:via-zinc-400/20 dark:hover:from-zinc-300/10 dark:hover:via-zinc-400/30',
        dark: 'bg-gradient-to-tr from-black/20 via-black/30 to-transparent hover:from-black/30 hover:via-black/40 hover:to-transparent dark:from-black/20 dark:via-black/30 dark:hover:from-black/30 dark:hover:via-black/40',
        slate:
          'bg-gradient-to-tr from-slate-300/20 via-slate-400/30 to-transparent hover:from-slate-300/30 hover:via-slate-400/40 hover:to-transparent dark:from-slate-300/5 dark:via-slate-400/20 dark:hover:from-slate-300/10 dark:hover:via-slate-400/30',
        gray: 'bg-gradient-to-tr from-gray-300/20 via-gray-400/30 to-transparent hover:from-gray-300/30 hover:via-gray-400/40 hover:to-transparent dark:from-gray-300/5 dark:via-gray-400/20 dark:hover:from-gray-300/10 dark:hover:via-gray-400/30',
        neutral:
          'bg-gradient-to-tr from-neutral-300/20 via-neutral-400/30 to-transparent hover:from-neutral-300/30 hover:via-neutral-400/40 hover:to-transparent dark:from-neutral-300/5 dark:via-neutral-400/20 dark:hover:from-neutral-300/10 dark:hover:via-neutral-400/30',
        stone:
          'bg-gradient-to-tr from-stone-300/20 via-stone-400/30 to-transparent hover:from-stone-300/30 hover:via-stone-400/40 hover:to-transparent dark:from-stone-300/5 dark:via-stone-400/20 dark:hover:from-stone-300/10 dark:hover:via-stone-400/30',
        red: 'bg-gradient-to-tr from-red-300/20 via-red-400/30 to-transparent hover:from-red-300/30 hover:via-red-400/40 hover:to-transparent dark:from-red-300/5 dark:via-red-400/20 dark:hover:from-red-300/10 dark:hover:via-red-400/30',
        orange:
          'bg-gradient-to-tr from-orange-300/20 via-orange-400/30 to-transparent hover:from-orange-300/30 hover:via-orange-400/40 hover:to-transparent dark:from-orange-300/5 dark:via-orange-400/20 dark:hover:from-orange-300/10 dark:hover:via-orange-400/30',
        amber:
          'bg-gradient-to-tr from-amber-300/20 via-amber-400/30 to-transparent hover:from-amber-300/30 hover:via-amber-400/40 hover:to-transparent dark:from-amber-300/5 dark:via-amber-400/20 dark:hover:from-amber-300/10 dark:hover:via-amber-400/30',
        yellow:
          'bg-gradient-to-tr from-yellow-300/20 via-yellow-400/30 to-transparent hover:from-yellow-300/30 hover:via-yellow-400/40 hover:to-transparent dark:from-yellow-300/5 dark:via-yellow-400/20 dark:hover:from-yellow-300/10 dark:hover:via-yellow-400/30',
        lime: 'bg-gradient-to-tr from-lime-300/20 via-lime-400/30 to-transparent hover:from-lime-300/30 hover:via-lime-400/40 hover:to-transparent dark:from-lime-300/5 dark:via-lime-400/20 dark:hover:from-lime-300/10 dark:hover:via-lime-400/30',
        green:
          'bg-gradient-to-tr from-green-300/20 via-green-400/30 to-transparent hover:from-green-300/30 hover:via-green-400/40 hover:to-transparent dark:from-green-300/5 dark:via-green-400/20 dark:hover:from-green-300/10 dark:hover:via-green-400/30',
        emerald:
          'bg-gradient-to-tr from-emerald-300/20 via-emerald-400/30 to-transparent hover:from-emerald-300/30 hover:via-emerald-400/40 hover:to-transparent dark:from-emerald-300/5 dark:via-emerald-400/20 dark:hover:from-emerald-300/10 dark:hover:via-emerald-400/30',
        teal: 'bg-gradient-to-tr from-teal-300/20 via-teal-400/30 to-transparent hover:from-teal-300/30 hover:via-teal-400/40 hover:to-transparent dark:from-teal-300/5 dark:via-teal-400/20 dark:hover:from-teal-300/10 dark:hover:via-teal-400/30',
        cyan: 'bg-gradient-to-tr from-cyan-300/20 via-cyan-400/30 to-transparent hover:from-cyan-300/30 hover:via-cyan-400/40 hover:to-transparent dark:from-cyan-300/5 dark:via-cyan-400/20 dark:hover:from-cyan-300/10 dark:hover:via-cyan-400/30',
        sky: 'bg-gradient-to-tr from-sky-300/20 via-sky-400/30 to-transparent hover:from-sky-300/30 hover:via-sky-400/40 hover:to-transparent dark:from-sky-300/5 dark:via-sky-400/20 dark:hover:from-sky-300/10 dark:hover:via-sky-400/30',
        blue: 'bg-gradient-to-tr from-blue-300/20 via-blue-400/30 to-transparent hover:from-blue-300/30 hover:via-blue-400/40 hover:to-transparent dark:from-blue-300/5 dark:via-blue-400/20 dark:hover:from-blue-300/10 dark:hover:via-blue-400/30',
        indigo:
          'bg-gradient-to-tr from-indigo-300/20 via-indigo-400/30 to-transparent hover:from-indigo-300/30 hover:via-indigo-400/40 hover:to-transparent dark:from-indigo-300/5 dark:via-indigo-400/20 dark:hover:from-indigo-300/10 dark:hover:via-indigo-400/30',
        violet:
          'bg-gradient-to-tr from-violet-300/20 via-violet-400/30 to-transparent hover:from-violet-300/30 hover:via-violet-400/40 hover:to-transparent dark:from-violet-300/5 dark:via-violet-400/20 dark:hover:from-violet-300/10 dark:hover:via-violet-400/30',
        purple:
          'bg-gradient-to-tr from-purple-300/20 via-purple-400/30 to-transparent hover:from-purple-300/30 hover:via-purple-400/40 hover:to-transparent dark:from-purple-300/5 dark:via-purple-400/20 dark:hover:from-purple-300/10 dark:hover:via-purple-400/30',
        fuchsia:
          'bg-gradient-to-tr from-fuchsia-300/20 via-fuchsia-400/30 to-transparent hover:from-fuchsia-300/30 hover:via-fuchsia-400/40 hover:to-transparent dark:from-fuchsia-300/5 dark:via-fuchsia-400/20 dark:hover:from-fuchsia-300/10 dark:hover:via-fuchsia-400/30',
        pink: 'bg-gradient-to-tr from-pink-300/20 via-pink-400/30 to-transparent hover:from-pink-300/30 hover:via-pink-400/40 hover:to-transparent dark:from-pink-300/5 dark:via-pink-400/20 dark:hover:from-pink-300/10 dark:hover:via-pink-400/30',
        rose: 'bg-gradient-to-tr from-rose-300/20 via-rose-400/30 to-transparent hover:from-rose-300/30 hover:via-rose-400/40 hover:to-transparent dark:from-rose-300/5 dark:via-rose-400/20 dark:hover:from-rose-300/10 dark:hover:via-rose-400/30'
      },
      size: {
        default: 'px-6 py-2 text-sm',
        sm: 'px-4 py-1.5 text-xs',
        lg: 'px-8 py-3 text-base',
        xl: 'px-10 py-4 text-lg'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

const gradientColors = {
  default: ['oklch(0.92 0.02 240)', 'oklch(0.23 0.02 240)', 'oklch(0.92 0.02 240)'],
  dark: ['oklch(0.0 0.0 0)', 'oklch(0.23 0.02 240)', 'oklch(0.0 0.0 0)'],
  slate: ['oklch(0.89 0.02 240)', 'oklch(0.23 0.02 240)', 'oklch(0.89 0.02 240)'],
  gray: ['oklch(0.87 0.02 240)', 'oklch(0.24 0.02 240)', 'oklch(0.87 0.02 240)'],
  neutral: ['oklch(0.91 0.02 240)', 'oklch(0.24 0.02 240)', 'oklch(0.91 0.02 240)'],
  stone: ['oklch(0.85 0.02 40)', 'oklch(0.19 0.02 40)', 'oklch(0.85 0.02 40)'],
  red: ['oklch(0.8 0.15 25)', 'oklch(0.4 0.15 25)', 'oklch(0.8 0.15 25)'],
  orange: ['oklch(0.82 0.12 45)', 'oklch(0.42 0.12 45)', 'oklch(0.82 0.12 45)'],
  amber: ['oklch(0.88 0.15 80)', 'oklch(0.48 0.15 80)', 'oklch(0.88 0.15 80)'],
  yellow: ['oklch(0.97 0.15 100)', 'oklch(0.57 0.15 100)', 'oklch(0.97 0.15 100)'],
  lime: ['oklch(0.92 0.15 125)', 'oklch(0.42 0.15 125)', 'oklch(0.92 0.15 125)'],
  green: ['oklch(0.88 0.15 145)', 'oklch(0.38 0.15 145)', 'oklch(0.88 0.15 145)'],
  emerald: ['oklch(0.88 0.12 165)', 'oklch(0.38 0.12 165)', 'oklch(0.88 0.12 165)'],
  teal: ['oklch(0.88 0.1 185)', 'oklch(0.38 0.1 185)', 'oklch(0.88 0.1 185)'],
  cyan: ['oklch(0.9 0.1 200)', 'oklch(0.4 0.1 200)', 'oklch(0.9 0.1 200)'],
  sky: ['oklch(0.88 0.1 220)', 'oklch(0.38 0.1 220)', 'oklch(0.88 0.1 220)'],
  blue: ['oklch(0.85 0.1 240)', 'oklch(0.35 0.1 240)', 'oklch(0.85 0.1 240)'],
  indigo: ['oklch(0.82 0.15 260)', 'oklch(0.32 0.15 260)', 'oklch(0.82 0.15 260)'],
  violet: ['oklch(0.85 0.15 280)', 'oklch(0.35 0.15 280)', 'oklch(0.85 0.15 280)'],
  purple: ['oklch(0.85 0.15 300)', 'oklch(0.35 0.15 300)', 'oklch(0.85 0.15 300)'],
  fuchsia: ['oklch(0.88 0.15 320)', 'oklch(0.38 0.15 320)', 'oklch(0.88 0.15 320)'],
  pink: ['oklch(0.85 0.15 340)', 'oklch(0.35 0.15 340)', 'oklch(0.85 0.15 340)'],
  rose: ['oklch(0.88 0.15 10)', 'oklch(0.38 0.15 10)', 'oklch(0.88 0.15 10)']
}

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  href: string
  children: ReactNode
  className?: string
  openInNewTab?: boolean
}

export function AnimatedButton({
  href,
  children,
  variant,
  size,
  className,
  openInNewTab = false
}: AnimatedButtonProps) {
  const linkProps = openInNewTab ? { target: '_blank', rel: 'noopener noreferrer' } : {}

  return (
    <GradientBorder variant={variant}>
      <Link
        href={href}
        {...linkProps}
        className={cn(buttonVariants({ variant, size }), 'border-input border', className)}
      >
        {children}
      </Link>
    </GradientBorder>
  )
}

interface GradientBorderProps {
  children: ReactNode
  className?: string
  variant?: VariantProps<typeof buttonVariants>['variant']
}

export function GradientBorder({ children, className, variant = 'default' }: GradientBorderProps) {
  const [startColor, middleColor, endColor] = gradientColors[variant as keyof typeof gradientColors]

  return (
    <span className={cn('relative inline-block overflow-hidden rounded-full p-0.5', className)}>
      <span
        className='absolute inset-[-1000%] animate-[spin_2s_linear_infinite]'
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, ${startColor} 0%, ${middleColor} 50%, ${endColor} 100%)`
        }}
      />
      <div className='inline-flex h-full w-full items-center justify-center rounded-full bg-white backdrop-blur-3xl dark:bg-gray-950'>
        {children}
      </div>
    </span>
  )
}
