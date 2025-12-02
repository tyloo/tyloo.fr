import { Building2, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/lib/experiences";

export const Experience = () => (
  <section id="experience" className="relative px-6 pt-24">
    <div className="mx-auto max-w-3xl">
      <div className="mb-12 text-center">
        <Badge variant="secondary" className="mb-4">
          Experience
        </Badge>
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Professional Journey</h2>
        <p className="text-muted-foreground mt-2 text-lg sm:mt-4">A timeline of my professional growth and key achievements</p>
      </div>

      <div className="relative">
        {experiences.map((experience) => (
          <ExperienceItem key={experience.company} {...experience} />
        ))}
      </div>
    </div>
  </section>
);

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export const ExperienceItem = ({ title, company, period, description, technologies }: ExperienceItemProps) => (
  <div className="relative pl-8 not-last:pb-12">
    {/* Timeline line */}
    <div className="bg-muted absolute top-2.5 left-0 h-full w-[2px] group-first:top-6 group-first:h-[calc(100%-24px)]">
      <div className="border-primary bg-background absolute top-0 -left-[5px] h-3 w-3 rounded-full border-2" />
    </div>

    {/* Content */}
    <div className="space-y-3">
      <div className="flex items-center gap-3">
        <div className="bg-accent flex size-9 shrink-0 items-center justify-center rounded-full">
          <Building2 className="text-muted-foreground size-5" />
        </div>
        <span className="text-lg font-semibold">{company}</span>
      </div>
      <div>
        <h3 className="text-xl font-medium">{title}</h3>
        <div className="mt-1 flex items-center gap-2 text-sm">
          <Calendar className="size-4" />
          <span>{period}</span>
        </div>
      </div>
      <p className="text-muted-foreground">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge key={tech} variant="secondary" className="rounded-full">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  </div>
);
