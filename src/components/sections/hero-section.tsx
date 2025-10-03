import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-background -z-10" />
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-headline font-bold tracking-tighter text-foreground">
            Product Designer | Team Lead | Multidisciplinary
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            A brief, impactful summary about 5+ years of experience across FinTech, Web3, and AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="https://gopichand-murex.vercel.app" target="_blank" rel="noopener noreferrer">
                Portfolio
              </Link>
            </Button>
          </div>
          <div className="w-full max-w-4xl pt-8">
            <div className="aspect-video w-full bg-card rounded-lg border border-border overflow-hidden">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/L4a_p2R19Fc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
