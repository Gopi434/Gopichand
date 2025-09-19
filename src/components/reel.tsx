"use client";

import { Play, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogClose, DialogPortal } from '@/components/ui/dialog';
import { Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import * as DialogPrimitive from "@radix-ui/react-dialog"


interface ReelProps {
  setIsReelHovered: Dispatch<SetStateAction<boolean>>;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
}

const Reel = ({ setIsReelHovered, setModalOpen, isModalOpen }: ReelProps) => {

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
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
        <div className={cn(
          "absolute inset-0 z-10 animate-spin-slow",
          isModalOpen && "[animation-play-state:paused]"
        )}>
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/stamp.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="relative z-20 h-2/3 w-2/3 overflow-hidden rounded-full shadow-2xl group">
          <div className="absolute inset-0 h-full w-full rounded-full p-3 overflow-hidden">
            <div style={{width:'300%', height:'100%', position:'relative', left: '-100%'}}>
              <iframe 
                src="https://player.vimeo.com/video/1119668489?background=1&autoplay=1&loop=1&byline=0&title=0"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                title="Gopichand Product Designer | Showreel Preview">
              </iframe>
            </div>
          </div>
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
      
      <DialogPortal>
         <DialogClose asChild>
            <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-white/30" />
         </DialogClose>
        <DialogContent className="w-screen h-screen max-w-none sm:max-w-none p-0 bg-transparent border-0 flex items-center justify-center z-50">
          <DialogClose className="absolute right-4 top-4 z-50 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <X className="h-8 w-8" />
            <span className="sr-only">Close</span>
          </DialogClose>
          <div className="w-[80vw]" style={{padding:'56.25% 0 0 0',position:'relative'}}>
            <iframe 
              src="https://player.vimeo.com/video/1119668489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1" 
              frameBorder="0" 
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" d
              style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
              title="Gopichand Product Designer | Showreel">
            </iframe>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default Reel;
