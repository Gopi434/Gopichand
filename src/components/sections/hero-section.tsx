"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { PlayCircle } from 'lucide-react';
import { Mail } from 'lucide-react';
import { cn } from '@/lib/utils';

const videoThumbnail = PlaceHolderImages.find(img => img.id === 'hero-video-thumbnail');

const roles = [
  'UI/UX Designer',
  'Graphic Designer',
  'Motion Designer',
  'Web Developer',
  'Video Editor',
  '3D Designer',
];

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section id="home" className="relative w-full min-h-screen flex items-center justify-center text-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-background -z-10" />
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col items-center space-y-6">
            <Image
                src="https://raw.githubusercontent.com/Gopi434/Media/19b73e7aafdff5a45cc130ae2a43b7f2a1e41fbb/Logo%20icon.svg"
                alt="Gopi Icon Logo"
                width={55}
                height={55}
                className="mb-4"
              />
            <p className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tighter text-muted-foreground">Hi, This is Gopichand.</p>
            <div className="flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-headline font-bold tracking-tighter text-foreground h-12 overflow-hidden">
              <p className="mr-2.5">I am a Product Designer &amp;</p>
              <span key={currentRoleIndex} className="text-primary animate-slide-up-and-fade">
                {roles[currentRoleIndex]}
              </span>
            </div>

            <div className={cn(
              "flex flex-col sm:flex-row gap-4 pb-12 transition-opacity duration-300"
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
            <div className="w-full pt-8 pb-16">
              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <div className="group relative aspect-video w-full bg-card rounded-2xl border border-border overflow-hidden cursor-pointer">
                    {videoThumbnail && (
                      <Image
                        src={videoThumbnail.imageUrl}
                        alt={videoThumbnail.description}
                        data-ai-hint={videoThumbnail.imageHint}
                        fill
                        className="object-cover transition-all duration-300 group-hover:scale-105 grayscale group-hover:grayscale-0"
                      />
                    )}
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <PlayCircle className="h-20 w-20 text-white/80 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </DialogTrigger>
                <DialogContent className="w-screen h-screen max-w-full max-h-full p-0 bg-black border-0">
                    <div className="w-full h-full">
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
