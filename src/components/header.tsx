"use client";

import Link from 'next/link';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export default function Header() {
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl h-20">
        <div className="relative flex items-center justify-center h-full">
          <Link href="/" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image 
                src="https://raw.githubusercontent.com/Gopi434/Media/19b73e7aafdff5a45cc130ae2a43b7f2a1e41fbb/Logo%20icon.svg"
                alt="Gopi Icon Logo"
                width={55}
                height={55}
              />
          </Link>
        </div>
      </nav>
    </header>
  );
}
