"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled ? 'bg-background/90 backdrop-blur-sm border-b border-border' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-20">
        <div className="relative flex items-center justify-between h-full">
          
          {/* Logo container - Transitions from center to left */}
          <Link href="/" className={cn(
            "absolute top-1/2 -translate-y-1/2 transition-all duration-500 ease-in-out",
            scrolled ? "left-0" : "left-1/2 -translate-x-1/2"
          )}>
            <div className="relative flex items-center h-10 w-40">
                {/* Full Logo - Fades in on scroll */}
                <Image 
                  src="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Logo%202.O.svg"
                  alt="Gopi Full Logo"
                  width={160}
                  height={40}
                  className={cn(
                    "absolute left-0 top-0 transition-opacity duration-500 ease-in-out",
                    scrolled ? "opacity-100" : "opacity-0"
                  )}
                />
                {/* Icon Logo - Fades out on scroll */}
                <Image 
                  src="https://raw.githubusercontent.com/Gopi434/Media/19b73e7aafdff5a45cc130ae2a43b7f2a1e41fbb/Logo%20icon.svg"
                  alt="Gopi Icon Logo"
                  width={40}
                  height={40}
                  className={cn(
                    "transition-opacity duration-500 ease-in-out",
                    scrolled ? "opacity-0" : "opacity-100"
                  )}
                />
            </div>
          </Link>
          
          {/* Buttons container - Fades in on the right */}
          <div className={cn(
            "flex items-center gap-4 transition-all duration-500 ml-auto",
            scrolled ? "opacity-100" : "opacity-0 pointer-events-none"
          )}>
            <Button size="default" variant="default" asChild className="font-bold">
              <a href="https://www.behance.net/gopichandtlr" target="_blank" rel="noopener noreferrer">
                <Image 
                  src="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/behance%20icon.svg"
                  alt="Behance"
                  width={24}
                  height={24}
                  className="h-6 w-6"
                />
                Portfolio
              </a>
            </Button>
            <Button size="default" variant="secondary" asChild className="font-bold">
              <a href="mailto:gopichandtlr@gmail.com" target="_blank" rel="noopener noreferrer">
                <Mail />
                Mail me
              </a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
