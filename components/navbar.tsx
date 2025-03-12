'use client'

import { Logo } from '@/components/logo'
import { ThemeSwitcher } from '@/components/theme-provider'
import { Button } from '@/components/ui/button'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList
} from '@/components/ui/navigation-menu'
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { NavigationMenuProps } from '@radix-ui/react-navigation-menu'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export const Navbar = () => (
  <nav className='bg-background fixed inset-x-4 top-6 z-10 mx-auto h-14 max-w-screen-md rounded-full border dark:border-slate-700/70'>
    <div className='mx-auto flex h-full items-center justify-between pr-3 pl-6'>
      <Logo />

      {/* Desktop Menu */}
      <NavMenu className='hidden md:block' />
      <div className='flex items-center gap-2'>
        <ThemeSwitcher />
        <Button asChild variant='outline' size='icon' className='rounded-full shadow-none'>
          <Link href='https://www.linkedin.com/in/julien-bonvarlet/' rel='noopener noreferrer' target='_blank'>
            <FaLinkedinIn />
          </Link>
        </Button>
        <Button variant='outline' size='icon' className='rounded-full shadow-none'>
          <Link href='https://github.com/tyloo' rel='noopener noreferrer' target='_blank'>
            <FaGithub />
          </Link>
        </Button>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          <NavigationSheet />
        </div>
      </div>
    </div>
  </nav>
)

const NavMenu = ({ className, ...props }: NavigationMenuProps) => (
  <NavigationMenu className={cn('data-[orientation=vertical]:items-start', className)} {...props}>
    <NavigationMenuList className='gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start'>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className='rounded-full px-4'>
          <Link href='#about'>About</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className='rounded-full px-4'>
          <Link href='#experience'>Experience</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink asChild className='rounded-full px-4'>
          <Link href='#projects'>Projects</Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
)

const NavigationSheet = () => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant='outline' size='icon' className='rounded-full'>
        <Menu />
      </Button>
    </SheetTrigger>
    <SheetContent className='px-6 pt-3'>
      <SheetTitle>
        <Logo />
      </SheetTitle>
      <NavMenu orientation='vertical' className='mt-12' />
    </SheetContent>
  </Sheet>
)
