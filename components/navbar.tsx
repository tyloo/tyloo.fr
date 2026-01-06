"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { type ComponentProps, useEffect, useState } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { Logo } from "@/components/logo";
import { ThemeSwitcher } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu";
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
      { rootMargin: "-40% 0px -40% 0px" }
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
            </Link>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full shadow-none">
            <Link href="https://github.com/tyloo" rel="noopener noreferrer" target="_blank">
              <FaGithub />
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

interface NavMenuProps extends ComponentProps<typeof NavigationMenu> {
  activeSection: Section | null;
}

const navItems = [
  { href: "#about", label: "About", section: "about" },
  { href: "#experience", label: "Experience", section: "experience" },
  { href: "#projects", label: "Projects", section: "projects" },
] as const;

const NavMenu = ({ className, activeSection, ...props }: NavMenuProps) => (
  <NavigationMenu className={cn("data-[orientation=vertical]:items-start", className)} {...props}>
    <NavigationMenuList className="gap-1 space-x-0 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start">
      {navItems.map((item) => (
        <NavigationMenuItem key={item.href}>
          <NavigationMenuLink
            asChild
            className={cn("rounded-full px-4", activeSection === item.section && "bg-accent text-accent-foreground")}
          >
            <Link href={item.href}>{item.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  </NavigationMenu>
);

const NavigationSheet = ({ activeSection }: { activeSection: Section | null }) => (
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline" size="icon" className="rounded-full">
        <Menu />
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
