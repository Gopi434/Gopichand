import AnimatedGridBackground from '@/components/animated-grid-background';
import Reel from '@/components/reel';

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden bg-background">
      <AnimatedGridBackground />
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg" aria-hidden="true" />
      <div className="relative z-10 flex h-full w-full items-center justify-center">
        <Reel />
      </div>
    </main>
  );
}
