import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { socials } from '@/lib/socials'
import { cn } from '@/lib/utils'
import { Download } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'
import { FaGithub } from 'react-icons/fa6'

export const About = () => (
  <section id='about' className='relative px-6 pt-24'>
    <div className='mx-auto max-w-screen-md'>
      <div className='flex flex-col gap-12 md:flex-row-reverse'>
        <ProfileImage className='hidden md:block' />

        {/* Content */}
        <div className='flex-1 md:text-left'>
          <Badge variant='secondary' className='mb-4'>
            About Me
          </Badge>
          <ProfileImage className='mt-3 mb-8 block md:hidden' />
          <h2 className='mb-4 text-4xl font-bold tracking-tight'>
            Passionate about creating impactful web experiences
          </h2>
          <p className='text-muted-foreground mb-6'>
            With over 15 years of experience in full-stack development, I specialize in building scalable web
            applications using modern technologies. My expertise includes Symfony, API Platform, Typescript, React,
            Vue.js, and cloud architecture. I&apos;m passionate about creating elegant solutions to complex problems and
            sharing knowledge with the developer community.
          </p>
          <div className='flex flex-wrap justify-start gap-4'>
            <Button asChild className='rounded-full'>
              <Link href={socials.github} rel='noopener noreferrer' target='_blank'>
                <FaGithub />
                View Github
              </Link>
            </Button>

            <Button asChild variant='outline' className='rounded-full'>
              <Link href={socials.resume} rel='noopener noreferrer' target='_blank'>
                <Download />
                Download CV
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
)

const ProfileImage = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => (
  <div className={cn('mt-10 h-48 w-48 md:h-64 md:w-64', className)} {...props}>
    <div className='bg-accent relative h-full w-full overflow-hidden rounded-2xl'>
      <Image src='/julien-bonvarlet.webp' alt='Julien Bonvarlet' className='object-cover' fill />
    </div>
  </div>
)
