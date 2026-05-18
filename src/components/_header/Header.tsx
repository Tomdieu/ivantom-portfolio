"use client";

import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from '../toggle-theme';

type Props = {
  className?: string;
};

const navLinks = [
  { href: "#work-experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

const Header = ({ className }: Props) => {
  const scrolled = useScrollTop();

  return (
    <header
      className={cn(
        "flex w-full items-center container mx-auto justify-between py-4 sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
        className
      )}
    >
      <Link
        className="flex items-center justify-center cursor-pointer group"
        href="#"
      >
        <span className="text-lg font-bold tracking-tight">
          Tomdieu<span className="text-blue-500">.</span>
        </span>
      </Link>

      <nav className="ml-auto gap-1 items-center hidden sm:flex">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
          >
            {label}
          </Link>
        ))}
        <div className="ml-2">
          <ModeToggle />
        </div>
      </nav>
    </header>
  );
};

export default Header;
