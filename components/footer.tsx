import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { socials } from "@/lib/socials";

const links = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Projects",
    href: "#projects",
  },
];

export const Footer = () => (
  <footer className="mt-20">
    <div className="mx-auto max-w-3xl">
      <div className="flex flex-col items-center justify-start py-12">
        <Logo />

        <ul className="mt-6 flex flex-wrap items-center gap-4">
          {links.map(({ title, href }) => (
            <li key={title}>
              <Link href={href} className="text-muted-foreground hover:text-foreground">
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <Separator />
      <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-6 sm:flex-row xl:px-0">
        {/* Copyright */}
        <span className="text-muted-foreground text-xs md:text-sm">&copy; {new Date().getFullYear()} Julien Bonvarlet. All rights reserved.</span>

        <div className="text-muted-foreground flex items-center gap-5">
          <Link href={socials.linkedIn} rel="noopener noreferrer" target="_blank">
            <FaLinkedin />
            <span className="sr-only">LinkedIn profile</span>
          </Link>
          <Link href={socials.github} rel="noopener noreferrer" target="_blank">
            <FaGithub />
            <span className="sr-only">GitHub profile</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
