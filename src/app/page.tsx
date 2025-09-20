"use client";

import AnimatedGridBackground from '@/components/animated-grid-background';
import { Button } from '@/components/ui/button';
import Reel from '@/components/reel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isReelHovered, setIsReelHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInteracted, setIsInteracted] = useState(false);
  const isMobile = useIsMobile();

  const handleInteractionStart = () => {
    if (isMobile) {
      setIsInteracted(true);
    } else {
      setIsReelHovered(true);
    }
  };

  const handleInteractionEnd = () => {
    if (isMobile) {
      setIsInteracted(false);
    } else {
      setIsReelHovered(false);
    }
  };

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <AnimatedGridBackground isReelHovered={isReelHovered} isModalOpen={isModalOpen} isInteracted={isInteracted} />

      <header className={cn(
        "absolute top-0 left-0 right-0 z-20 flex justify-center px-4 pt-8 md:px-8 md:pt-4 transition-transform duration-500 ease-in-out",
        isMobile && isInteracted && "translate-y-8"
      )}>
       
      <Link href="https://www.behance.net/gopichandtalluri" target="_blank"> 
        <Image
          src="https://raw.githubusercontent.com/Gopi434/Media/447711a7a9152b349829c59f6c84920051b9a755/Logo.svg"
          alt="Gopichand Logo"
          width={180}
          height={97}
          className="md:w-[250px] md:h-[135px]"
        />
        </Link>
      </header>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Reel 
          setModalOpen={setIsModalOpen} 
          isModalOpen={isModalOpen} 
          isReelHovered={isReelHovered}
          isInteracted={isInteracted}
          onInteractionStart={handleInteractionStart}
          onInteractionEnd={handleInteractionEnd}
        />
      </div>

      <footer className={cn(
        "absolute bottom-0 left-0 right-0 z-20 flex justify-center px-4 pb-8 md:px-8 md:pt-8 md:pb-[4%] transition-transform duration-500 ease-in-out",
        isMobile && isInteracted && "-translate-y-8"
      )}>
        <Button asChild variant="default" className="h-12 px-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full text-base font-bold">
          <Link href="https://www.behance.net/gopichandtalluri" target="_blank" className="gap-1">
            <Image 
              src="https://raw.githubusercontent.com/Gopi434/Media/9a124b8514e80d33dd060d8168628d072e330573/behance%20icon.svg"
              alt="Behance Icon"
              width={35}
              height={20}
            />
            <span className="mr-5">Portfolio</span>
          </Link>
        </Button>
      </footer>
    </main>
  );
}
