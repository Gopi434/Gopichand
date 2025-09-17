"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';

const Reel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
        <div className="absolute inset-8 rounded-full bg-gradient-to-tr from-white/10 to-transparent" />
        <div className="absolute inset-0 animate-spin-slow">
          <Image
            src="https://drive.google.com/uc?export=view&id=1VQV9l9k-6aPpgB_brWKBeEclYoGI1gvg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative h-full w-full rounded-full shadow-2xl backdrop-blur-lg">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              padding: '3rem',
              maskImage: 'radial-gradient(transparent 0%, black 1px)',
              WebkitMaskImage: 'radial-gradient(transparent 0%, black 1px)',
              maskPosition: 'center',
              maskRepeat: 'no-repeat',
            }}
          >
            <video
              className="h-full w-full rounded-full object-cover"
              src="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_30fps.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Showreel video preview"
            />
          </div>
        </div>

        <DialogTrigger asChild>
          <button
            aria-label="Play Showreel"
            className="group absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 text-background backdrop-blur-sm transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
          >
            <Play className="ml-1 h-8 w-8 transition-transform duration-300 group-hover:scale-125" />
          </button>
        </DialogTrigger>
      </div>

      <DialogContent className="h-dvh w-dvh max-w-full p-0 sm:h-[80vh] sm:w-[80vw] sm:max-w-[80vw]">
        <video
          className="h-full w-full object-contain"
          src="https://videos.pexels.com/video-files/3209828/3209828-hd_1280_720_30fps.mp4"
          controls
          autoPlay
          aria-label="Showreel video"
        />
      </DialogContent>
    </Dialog>
  );
};

export default Reel;
