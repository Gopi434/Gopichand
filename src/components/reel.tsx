"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';

const Reel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="relative flex h-[140px] w-[140px] items-center justify-center sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]">
        <div className="absolute inset-0 animate-spin-slow z-10 p-4">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/e46057285648f43e82da418a13e52d48c997e521/text-ring.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative h-full w-full rounded-full shadow-2xl backdrop-blur-lg border-[0.3rem] border-white p-[2%]">
          <div
            className="absolute inset-0 rounded-full"
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
            className="group absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 text-background backdrop-blur-sm transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
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
