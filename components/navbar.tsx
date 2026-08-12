"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Logo } from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const sections = ["about", "experience", "projects"] as const;
type Section = (typeof sections)[number];

const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  useEffect(() => {
    const visibleSections = new Set<Section>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const sectionId = entry.target.id as Section;
          if (entry.isIntersecting) {
            visibleSections.add(sectionId);
          } else {
            visibleSections.delete(sectionId);
          }
        }

        // Pick the first visible section in DOM order
        const active = sections.find((s) => visibleSections.has(s)) ?? null;
        setActiveSection(active);
      },
      { rootMargin: "-40% 0px -40% 0px" },
    );

    for (const sectionId of sections) {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    }

    return () => observer.disconnect();
  }, []);

  return activeSection;
};

export const Navbar = () => {
  const activeSection = useActiveSection();

  // Update URL hash when active section changes
  useEffect(() => {
    if (activeSection) {
      window.history.replaceState(null, "", `#${activeSection}`);
    } else {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, [activeSection]);

  return (
    <nav className="bg-background fixed inset-x-4 top-6 z-10 mx-auto h-14 max-w-3xl rounded-full border dark:border-slate-700/70">
      <div className="mx-auto flex h-full items-center justify-between pr-3 pl-6">
        <Logo />

        {/* Desktop Menu */}
        <NavMenu className="hidden md:block" activeSection={activeSection} />
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <Button asChild variant="outline" size="icon" className="rounded-full shadow-none">
            <Link href="https://www.linkedin.com/in/julien-bonvarlet/" rel="noopener noreferrer" target="_blank">
              <FaLinkedinIn />
              <span className="sr-only">LinkedIn profile</span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full shadow-none">
            <Link href="https://github.com/tyloo" rel="noopener noreferrer" target="_blank">
              <FaGithub />
              <span className="sr-only">GitHub profile</span>
            </Link>
          </Button>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <NavigationSheet activeSection={activeSection} />
          </div>
        </div>
      </div>
    </nav>
  );
};

interface NavMenuProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
  activeSection: Section | null;
}

const navItems = [
  { href: "#about", label: "About", section: "about" },
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#projects", label: "Projects", section: "projects" },
] as const;

const NavMenu = ({ className, orientation = "horizontal", activeSection }: NavMenuProps) => (
  <div data-orientation={orientation} className={cn("relative flex max-w-max flex-1 items-center justify-center data-[orientation=vertical]:items-start", className)}>
    <ul
      data-orientation={orientation}
      className="flex flex-1 list-none items-center justify-center gap-1 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start"
    >
      {navItems.map((item) => (
        <li className="relative" key={item.href}>
          <Link
            href={item.href}
            aria-current={activeSection === item.section ? "true" : undefined}
            className={cn(
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus-visible:ring-ring/50 flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1",
              "rounded-full px-4",
              activeSection === item.section && "bg-accent text-accent-foreground",
            )}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const NavigationSheet = ({ activeSection }: { activeSection: Section | null }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="rounded-full">
        <Menu />
        <span className="sr-only">Open menu</span>
      </Button>
    </SheetTrigger>
    <SheetContent className="px-6 pt-3">
      <SheetTitle>
        <Logo />
      </SheetTitle>
      <NavMenu orientation="vertical" className="mt-12" activeSection={activeSection} />
    </SheetContent>
  </Sheet>
);
