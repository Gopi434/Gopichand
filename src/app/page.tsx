import AnimatedGridBackground from '@/components/animated-grid-background';
import { Button } from '@/components/ui/button';
import Reel from '@/components/reel';
import Image from 'next/image';
import Link from 'next/link';

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M7.875 10.312H3v6.375h4.875a2.531 2.531 0 0 0 2.532-2.531c0-1.4-1.132-2.532-2.532-2.532zm-.75 3.812H6v-2.5h1.125a1.25 1.25 0 0 1 0 2.5zM8.25 3h-5.25v5.25h5.25a2.625 2.625 0 1 0 0-5.25zm-.75 3.75H6V4.5h1.5a1.125 1.125 0 1 1 0 2.25zM21 9.75h-4.125a.75.75 0 0 0 0 1.5H21v1.5h-3.75a.75.75 0 0 0 0 1.5H21v1.5h-5.25a2.25 2.25 0 0 1-2.25-2.25V9A2.25 2.25 0 0 1 15.75 6.75h5.25v3zm-4.125-.75H18v-1.5h-1.125a.75.75 0 0 0 0 1.5z"></path>
  </svg>
);

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <AnimatedGridBackground />

      <header className="absolute top-0 left-0 right-0 z-20 flex justify-center p-8">
        <Image
          src="https://raw.githubusercontent.com/Gopi434/Media/447711a7a9152b349829c59f6c84920051b9a755/Logo.svg"
          alt="ReelVerse Logo"
          width={120}
          height={40}
        />
      </header>

      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Reel />
      </div>

      <footer className="absolute bottom-0 left-0 right-0 z-20 flex justify-center p-8">
        <Button asChild variant="outline" className="bg-background/20 backdrop-blur-sm">
          <Link href="https://www.behance.net" target="_blank">
            <BehanceIcon className="h-5 w-5 mr-2" />
            Explore on Behance
          </Link>
        </Button>
      </footer>
    </main>
  );
}
