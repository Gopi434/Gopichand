"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';

const Reel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="relative flex h-[140px] w-[140px] items-center justify-center sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px] rounded-full bg-white/10 backdrop-blur-sm">
        <div className="absolute inset-0 animate-spin-slow z-10 p-2 ">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/e46057285648f43e82da418a13e52d48c997e521/text-ring.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>

        <div className="relative h-full w-full rounded-full shadow-2xl overflow-hidden group">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src="https://silver.agency/wp-content/uploads/2022/09/100852_Silver2022Showreel_LoopWebBanner_15s_V15_2-5.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Showreel video preview"
          />
          <div className="absolute inset-0 rounded-full border-[2.5rem] border-background"></div>
        </div>

        <DialogTrigger asChild>
          <button
            aria-label="Play Showreel"
            className="group absolute z-20 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
          >
            <Play className="ml-1 h-8 w-8 fill-white stroke-none transition-transform duration-300 group-hover:scale-125" />
          </button>
        </DialogTrigger>
      </div>

      <DialogOverlay className="bg-white/30 backdrop-blur-sm" />
      <DialogContent className="h-auto w-auto max-w-full p-0 bg-transparent border-0 sm:h-[80vh] sm:w-[80vw] sm:max-w-[80vw] grid place-items-center">
        <div className="relative w-full h-full aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1119668489?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
            title="Gopichand Product Designer | Showreel"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Reel;
