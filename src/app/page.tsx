import AnimatedGridBackground from '@/components/animated-grid-background';
import { Button } from '@/components/ui/button';
import Reel from '@/components/reel';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <AnimatedGridBackground />

      <header className="absolute top-0 left-0 right-0 z-20 flex justify-center p-8 pt-[2%]">
        <Image
          src="https://raw.githubusercontent.com/Gopi434/Media/447711a7a9152b349829c59f6c84920051b9a755/Logo.svg"
          alt="ReelVerse Logo"
          width={300}
          height={135}
        />
      </header>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Reel />
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex justify-center p-8">
        <Button asChild variant="default" className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
          <Link href="https://www.behance.net" target="_blank">
            <Image 
              src="https://raw.githubusercontent.com/Gopi434/Media/9a124b8514e80d33dd060d8168628d072e330573/behance%20icon.svg"
              alt="Behance Icon"
              width={20}
              height={20}
              className="mr-2"
            />
            Portfolio
          </Link>
        </Button>
      </footer>
    </main>
  );
}
