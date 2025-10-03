"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';

const videoThumbnail = PlaceHolderImages.find(img => img.id === 'hero-video-thumbnail');

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative w-full h-screen flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-background -z-10" />
        <div className="container mx-auto px-4 md:px-6">
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
            <div className="w-full max-w-5xl pt-8">
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-video w-full bg-card rounded-2xl border border-border overflow-hidden cursor-pointer shadow-lg hover:shadow-primary/20 transition-shadow">
                    {videoThumbnail && (
                      <Image
                        src={videoThumbnail.imageUrl}
                        alt={videoThumbnail.description}
                        data-ai-hint={videoThumbnail.imageHint}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="max-w-4xl p-0 border-0">
                    <div className="aspect-video">
                        <iframe
                            className="w-full h-full"
                            src="https://player.vimeo.com/video/1122408996?autoplay=1&title=0&byline=0&portrait=0"
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
