"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import Image from 'next/image';

const Reel = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div className="relative flex h-[140px] w-[140px] items-center justify-center sm:h-[200px] sm:w-[200px] md:h-[250px] md:w-[250px]">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-10 animate-spin-slow rounded-full backdrop-blur-sm bg-white/5">
            <Image
              src="https://raw.githubusercontent.com/Gopi434/Media/9aee124131edd2d8fff23f985d2d36e42538a1ef/round%20with%20text-01.svg"
              alt="Watch showreel text"
              fill
              className="object-contain"
            />
          </div>

          <div className="relative h-full w-full overflow-hidden rounded-full shadow-2xl group p-6">
            <video
              className="absolute inset-0 h-full w-full object-cover rounded-full"
              src="https://silver.agency/wp-content/uploads/2022/09/100852_Silver2022Showreel_LoopWebBanner_15s_V15_2-5.mp4"
              autoPlay
              loop
              muted
              playsInline
              aria-label="Showreel video preview"
            />
          </div>

          <DialogTrigger asChild>
            <button
              aria-label="Play Showreel"
              className="group absolute z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-black text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
            >
              <Play className="ml-1 h-8 w-8 fill-white stroke-none transition-transform duration-300 group-hover:scale-125" />
            </button>
          </DialogTrigger>
        </div>
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
