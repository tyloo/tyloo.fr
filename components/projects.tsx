import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/projects";

export const Projects = () => (
  <section id="projects" className="relative px-6 pt-24">
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Projects
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Featured Work</h2>
        <p className="text-muted-foreground mt-2 text-lg sm:mt-4">Showcasing some of my best projects and technical achievements</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  </section>
);

export const ProjectCard = ({
  title,
  description,
  image,
  technologies,
  liveUrl,
  githubUrl,
}: {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}) => (
  <div className="bg-card group relative flex h-full flex-col overflow-hidden rounded-xl border shadow-sm transition-all hover:shadow-md">
    {/* Project Image */}
    <div className="bg-muted relative aspect-video overflow-hidden">
      <Image src={image} alt={title} className="object-cover transition-transform duration-300 group-hover:scale-105" fill sizes="(min-width: 768px) 372px, 100vw" />
    </div>

    {/* Content */}
    <div className="flex flex-1 flex-col p-5">
      {/* Title */}
      <h3 className="text-lg font-semibold leading-tight">{title}</h3>

      {/* Description - fixed height with line clamp */}
      <p className="text-muted-foreground mt-2 line-clamp-3 min-h-18 text-sm leading-relaxed">{description}</p>

      {/* Technologies */}
      <div className="mt-4 flex min-h-14 flex-wrap content-start gap-1.5">
        {technologies.slice(0, 5).map((tech) => (
          <Badge key={tech} variant="secondary" className="h-6 rounded-full px-2.5 text-xs font-normal">
            {tech}
          </Badge>
        ))}
        {technologies.length > 5 && (
          <Badge variant="outline" className="h-6 rounded-full px-2.5 text-xs font-normal">
            +{technologies.length - 5}
          </Badge>
        )}
      </div>

      {/* Actions - always at bottom */}
      <div className="mt-auto flex gap-2 pt-4">
        {liveUrl && (
          <Button size="sm" className="h-8 flex-1 rounded-full text-xs" asChild>
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-1.5 size-3.5" />
              Live Demo
            </a>
          </Button>
        )}
        {githubUrl && (
          <Button variant="outline" size="sm" className="h-8 flex-1 rounded-full text-xs shadow-none" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer">
              <FaGithub className="mr-1.5 size-3.5" />
              Code
            </a>
          </Button>
        )}
      </div>
    </div>
  </div>
);
