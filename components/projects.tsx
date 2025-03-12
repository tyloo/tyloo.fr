import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects } from '@/lib/projects'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa6'

export const Projects = () => (
  <section id='projects' className='relative px-6 pt-24'>
    <div className='mx-auto max-w-screen-md'>
      <div className='mb-12 text-center'>
        <Badge variant='secondary' className='mb-4'>
          Projects
        </Badge>
        <h2 className='text-4xl font-bold tracking-tight sm:text-5xl'>Featured Work</h2>
        <p className='text-muted-foreground mt-2 text-lg sm:mt-4'>
          Showcasing some of my best projects and technical achievements
        </p>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </div>
  </section>
)

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl
}: {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}) => (
  <div className='group border-accent hover:border-primary/50 relative flex flex-col overflow-hidden rounded-xl border transition-all'>
    {/* Project Image */}
    <div className='bg-accent relative h-64 overflow-hidden'>
      <Image
        src={image}
        alt={title}
        className='object-cover transition-transform duration-300 group-hover:scale-105'
        fill
      />
    </div>

    {/* Content */}
    <div className='flex flex-1 flex-col p-6'>
      <h3 className='mb-2 text-xl font-semibold'>{title}</h3>
      <p className='text-muted-foreground mb-4'>{description}</p>

      {/* Technologies */}
      <div className='mb-6 flex flex-wrap gap-2'>
        {technologies.map((tech) => (
          <Badge key={tech} variant='secondary' className='rounded-full'>
            {tech}
          </Badge>
        ))}
      </div>

      {/* Actions */}
      <div className='mt-auto flex gap-3'>
        {liveUrl && (
          <Button variant='default' className='rounded-full' asChild>
            <a href={liveUrl} target='_blank' rel='noopener noreferrer'>
              <ExternalLink className='mr-1 h-4 w-4' />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant='outline' className='rounded-full shadow-none' asChild>
            <a href={githubUrl} target='_blank' rel='noopener noreferrer'>
              <FaGithub className='mr-1 h-4 w-4' />
              View Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
)
