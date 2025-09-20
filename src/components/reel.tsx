"use client";

import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger, DialogPortal, DialogOverlay } from '@/components/ui/dialog';
import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ReelProps {
  setModalOpen: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  isReelHovered: boolean;
  isInteracted: boolean;
  onInteractionStart: () => void;
  onInteractionEnd: () => void;
}

const Reel = ({ setModalOpen, isModalOpen, isReelHovered, isInteracted, onInteractionStart, onInteractionEnd }: ReelProps) => {
  const playerRef = useRef<HTMLIFrameElement>(null);
  const playerInstance = useRef<any>(null);

  useEffect(() => {
    if (playerRef.current && (window as any).Vimeo) {
      if (!playerInstance.current) {
        playerInstance.current = new (window as any).Vimeo.Player(playerRef.current);
        playerInstance.current.ready().then(() => {
          if (playerInstance.current) {
            playerInstance.current.setPlaybackRate(3);
            // Autoplay only if not hovered and modal is not open initially
            if (!isReelHovered && !isModalOpen) {
              playerInstance.current.play();
            }
          }
        });
      }

      const player = playerInstance.current;
      if (player) {
        player.ready().then(() => {
          if (isReelHovered) {
            player.pause();
          } else if (!isModalOpen) {
            player.play();
          }
        });
      }
    }
  }, [isReelHovered, isModalOpen]);


  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <div
        className={cn(
          "relative flex h-[280px] w-[280px] items-center justify-center",
          "md:h-[350px] md:w-[350px]",
          "rounded-full transition-transform duration-500 ease-in-out",
          isInteracted && "scale-110"
        )}
        onMouseEnter={onInteractionStart}
        onMouseLeave={onInteractionEnd}
        onTouchStart={onInteractionStart}
        onTouchEnd={onInteractionEnd}
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
          (isModalOpen || isReelHovered || isInteracted) && "[animation-play-state:paused]"
        )}>
          <Image
            src="https://raw.githubusercontent.com/Gopi434/Media/b6ab7369beb33d35b99360ba95fe27752abe4fbf/stamp.svg"
            alt="Watch showreel text"
            fill
            className="object-contain"
          />
        </div>
        
        <div className="relative z-20 h-2/3 w-2/3 overflow-hidden rounded-full shadow-2xl group">
          <div className="absolute inset-0 h-full w-full overflow-hidden rounded-full">
            <div style={{width:'300%', height:'100%', position:'relative', left: '-100%'}}>
              <iframe
                ref={playerRef}
                src="https://player.vimeo.com/video/1119668489?background=1&loop=1&badge=0&autopause=0&player_id=0&app_id=58479"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                title="Gopichand Product Designer | Showreel Preview"
                referrerPolicy="strict-origin-when-cross-origin"
                >
              </iframe>
            </div>
          </div>
        </div>

        <DialogTrigger asChild>
          <button
            aria-label="Play Showreel"
            className="group absolute z-30 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-20 w-20 items-center justify-center rounded-full bg-white text-black transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
          >
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/50"></span>
            <Play className="ml-1 h-8 w-8 fill-black stroke-none transition-transform duration-300 group-hover:scale-125" />
          </button>
        </DialogTrigger>
      </div>
      
        <DialogPortal>
          <DialogOverlay className="bg-black/80" />
          <DialogContent className="w-screen h-screen max-w-none sm:max-w-none p-0 bg-transparent border-0 flex items-center justify-center z-50">
            <div className="w-[80vw]" style={{padding:'56.25% 0 0 0',position:'relative'}}>
              <iframe 
                src="https://player.vimeo.com/video/1119668489?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
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
