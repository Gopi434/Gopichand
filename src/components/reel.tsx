"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogOverlay, DialogTrigger } from '@/components/ui/dialog';
import { useState, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';

interface ReelProps {
  setIsReelHovered: Dispatch<SetStateAction<boolean>>;
}

const Reel = ({ setIsReelHovered }: ReelProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div
        className="relative flex h-[140px] w-[140px] items-center justify-center 
                   sm:h-[200px] sm:w-[200px] md:h-[350px] md:w-[350px] 
                   rounded-full"
        onMouseEnter={() => setIsReelHovered(true)}
        onMouseLeave={() => setIsReelHovered(false)}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/border.svg"
            alt="Showreel border"
            fill
            className="object-contain"
          />
        </div>
        <div className="absolute inset-0 z-10 animate-spin-slow">
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/stamp.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>
        
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

        <DialogTrigger asChild>
          <button
            aria-label="Play Showreel"
            className="group absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-black/80 text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)] backdrop-blur-sm"
          >
            <Play className="ml-1 h-8 w-8 fill-white stroke-none transition-transform duration-300 group-hover:scale-125" />
          </button>
        </DialogTrigger>
      </div>

      <DialogOverlay className="bg-white/30" />
      <DialogContent className="w-screen h-screen max-w-none sm:max-w-none p-0 bg-transparent border-0 flex items-center justify-center">
        <div className="relative w-[80vw] h-auto aspect-video">
          <iframe
            src="https://player.vimeo.com/video/1119668489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&autoplay=1"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            style={{ width: '100%', height: '100%' }}
            title="Gopichand Product Designer | Showreel"
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Reel;
