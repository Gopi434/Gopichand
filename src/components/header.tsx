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
      // Trigger when user scrolls more than 300px
      setScrolled(window.scrollY > 300);
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
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className={cn(
          "flex items-center transition-all duration-500",
          scrolled ? "justify-between h-16" : "justify-center h-24"
        )}>
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-foreground">
              <div 
                className={cn(
                  "transition-all duration-500 ease-in-out",
                   // When not scrolled, show a clipped version. When scrolled, show full logo.
                  scrolled ? "w-10 h-10" : "w-80 h-20"
                )}
                style={{
                  clipPath: scrolled ? 'inset(0 0 0 0)' : 'inset(0 80% 0 0)',
                }}
              >
                <Image 
                  src="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Logo%202.O.svg"
                  alt="Gopi Logo"
                  width={320}
                  height={80}
                  className={cn(
                    "transition-all duration-500 ease-in-out",
                     // Adjust position and scale on scroll
                    scrolled ? "w-10 h-10" : "w-80 h-20"
                  )}
                />
              </div>
            </Link>
          </div>
          
          <div className={cn(
            "flex items-center gap-4 transition-all duration-500",
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
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
