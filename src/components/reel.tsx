"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';

const Reel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        className="relative flex h-[140px] w-[140px] items-center justify-center 
                   sm:h-[200px] sm:w-[200px] md:h-[350px] md:w-[350px] 
                   rounded-full"
      >
        {/* Layer 1: Static Border */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/border.svg"
            alt="Showreel border"
            fill
            className="object-contain"
          />
        </div>

        {/* Layer 2: Spinning Stamp */}
        <div className="absolute inset-0 z-10  animate-spin-slow">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/stamp.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>

        {/* Layer 3: Video Preview */}
        <div className="relative z-20 h-2/3 w-2/3 overflow-hidden rounded-full shadow-2xl group">
          <video
            className="absolute inset-0 h-full w-full object-cover rounded-full p-3"
            src="https://silver.agency/wp-content/uploads/2022/09/100852_Silver2022Showreel_LoopWebBanner_15s_V15_2-5.mp4"
            autoPlay
            loop
            muted
            playsInline
            aria-label="Showreel video preview"
          />
        </div>

        {/* Layer 4: Play Button */}
        <DialogTrigger asChild>
          <button
            aria-label="Play Showreel"
            className="group absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-black/80 text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)] backdrop-blur-sm"
          >
            <Play className="ml-1 h-8 w-8 fill-white stroke-none transition-transform duration-300 group-hover:scale-125" />
          </button>
        </DialogTrigger>
      </div>

      <DialogOverlay className="bg-white/30 backdrop-blur-sm" />
      <DialogContent className="h-auto w-auto max-w-full p-0 bg-transparent border-0 sm:h-[80vh] sm:w-[80vw] sm:max-w-[80vw] grid place-items-center">
        <div className="relative w-full h-full aspect-video">
          <div style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
            <iframe
              src="https://player.vimeo.com/video/1119668489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
              title="Gopichand Product Designer | Showreel"
            ></iframe>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Reel;
