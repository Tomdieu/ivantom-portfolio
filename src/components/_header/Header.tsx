"use client";

import { useState } from 'react';
import { useScrollTop } from '@/hooks/use-scroll-top';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '../toggle-theme';
import { LanguageToggle } from '../language-toggle';
import { useI18n } from '@/locales/client';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  className?: string;
};

const Header = ({ className }: Props) => {
  const scrolled = useScrollTop();
  const t = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#work-experience", label: t('nav.experience') },
    { href: "/#projects", label: t('nav.projects') },
    { href: "/#skills", label: t('nav.skills') },
    { href: "/blog", label: t('nav.blog' as any) },
    { href: "/#contact", label: t('nav.contact') },
  ];

  return (
    <header
      className={cn(
        "w-full sticky top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent",
        className
      )}
    >
      <div className="flex w-full items-center container mx-auto justify-between py-4 relative z-50">
        <div className="flex-1 flex justify-start">
          <Link
            className="flex items-center justify-center cursor-pointer group"
            href="/"
            onClick={() => setIsOpen(false)}
          >
            <Image 
              src="/ti.png" 
              alt="Tomdieu Logo" 
              width={40} 
              height={40} 
              className="object-contain dark:invert"
              priority
            />
          </Link>
        </div>

        <nav className="hidden sm:flex flex-1 gap-1 items-center justify-center">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 flex justify-end gap-2 items-center">
          <LanguageToggle />
          <ModeToggle />
          <div className="flex items-center sm:hidden ml-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-9 w-9" 
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Full-Width Dropdown */}
      <div 
        className={cn(
          "sm:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-md transition-all duration-300 ease-in-out overflow-hidden flex flex-col items-center",
          isOpen ? "opacity-100 max-h-96 py-4 gap-4" : "opacity-0 max-h-0 py-0 border-transparent shadow-none"
        )}
      >
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="w-full text-center px-4 py-3 text-lg font-medium text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            onClick={() => setIsOpen(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
