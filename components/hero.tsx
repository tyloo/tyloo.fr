import { ArrowDownIcon, Download, Zap } from "lucide-react";
import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animated-button";
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RotatingText } from "@/components/ui/rotating-text";
import { socials } from "@/lib/socials";
import { cn } from "@/lib/utils";

const titles = ["Engineering Manager", "Technical Lead", "Senior Software Engineer", "Rugby Player", "Proud Dad", "Metal Head"];

export const Hero = () => (
  <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-6">
    <AnimatedGridPattern
      numSquares={30}
      maxOpacity={0.1}
      duration={3}
      className={cn("mask-[radial-gradient(500px_circle_at_center,white,transparent)]", "inset-x-0 h-full skew-y-12")}
    />
    <div className="relative z-1 max-w-3xl text-center">
      <Badge className="rounded-full border-none">
        <Zap className="fill-current" />
        <RotatingText texts={titles} />
      </Badge>
      <h1 className="mt-6 text-4xl leading-[1.2]! font-bold tracking-tight sm:text-5xl md:text-6xl">Building Scalable & Engaging Web Experiences</h1>
      <p className="mt-6 text-[17px] md:text-lg">
        Hey there! I&apos;m a <strong>Julien &apos;Tyloo&apos; Bonvarlet</strong>, a Senior Software Engineer who loves building cool and scalable web experiences. From crafting
        beautiful frontends to powering robust backends, I bring ideas to life with clean code and great design.
      </p>
      <p className="mt-6 text-[17px] md:text-lg">Let&apos;s create something amazing together! 🚀</p>
      <div className="mt-12 flex items-center justify-center gap-4">
        <AnimatedButton href={socials.resume} variant="blue" openInNewTab>
          <Download className="mr-2 size-4!" /> Download CV
        </AnimatedButton>

        <Button asChild size="lg" className="rounded-full text-base">
          <Link href="#about">
            Who am I? <ArrowDownIcon className="size-4!" />
          </Link>
        </Button>
      </div>
    </div>
  </div>
);
