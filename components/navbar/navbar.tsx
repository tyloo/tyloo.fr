import { Button } from '@/components/ui/button'
import { GithubLogo, XLogo } from '../icons'
import { Logo } from './logo'
import { NavMenu } from './nav-menu'
import { NavigationSheet } from './navigation-sheet'

const Navbar = () => {
  return (
    <nav className='bg-background fixed inset-x-4 top-6 z-10 mx-auto h-14 max-w-screen-md rounded-full border dark:border-slate-700/70'>
      <div className='mx-auto flex h-full items-center justify-between px-3'>
        <Logo />
        {/* Desktop Menu */}
        <NavMenu className='hidden md:block' />
        <div className='flex items-center gap-2'>
          <Button variant='outline' className='hidden rounded-full shadow-none sm:inline-flex' size='icon'>
            <XLogo />
          </Button>
          <Button variant='outline' className='rounded-full shadow-none' size='icon'>
            <GithubLogo className='h-5! w-5!' />
          </Button>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
