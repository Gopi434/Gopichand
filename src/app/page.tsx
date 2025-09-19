"use client";

import AnimatedGridBackground from '@/components/animated-grid-background';
import { Button } from '@/components/ui/button';
import Reel from '@/components/reel';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isReelHovered, setIsReelHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <AnimatedGridBackground isReelHovered={isReelHovered} isModalOpen={isModalOpen} />

      <header className="absolute top-0 left-0 right-0 z-20 flex justify-center p-8 pt-[3%]">
       
      <Link href="https://www.behance.net/gopichandtalluri" target="_blank"> 
        <Image
          src="https://raw.githubusercontent.com/Gopi434/Media/447711a7a9152b349829c59f6c84920051b9a755/Logo.svg"
          alt="Gopichand Logo"
          width={250}
          height={135}
        />
        </Link>
      </header>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Reel setIsReelHovered={setIsReelHovered} setModalOpen={setIsModalOpen} isModalOpen={isModalOpen} isReelHovered={isReelHovered} />
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex justify-center px-8 pt-8 pb-[4%]">
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
