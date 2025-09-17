"use client";

import { Play } from 'lucide-react';

const Reel = () => {
  return (
    <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px]">
      <div className="absolute inset-0 animate-spin-slow">
        <svg viewBox="0 0 100 100" className="h-full w-full fill-current text-foreground">
          <defs>
            <path
              id="circlePath"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0
              "
            />
          </defs>
          <text letterSpacing="2" fontSize="6">
            <textPath href="#circlePath" startOffset="0%">
              WATCH SHOWREEL • WATCH SHOWREEL • &nbsp;
            </textPath>
          </text>
        </svg>
      </div>

      <div className="relative h-[75%] w-[75%] overflow-hidden rounded-full shadow-2xl ring-2 ring-white/10">
        <video
          className="h-full w-full object-cover"
          src="https://videos.pexels.com/video-files/3209828/3209828-sd_640_360_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          aria-label="Showreel video"
        />
      </div>

      <button
        aria-label="Play Showreel"
        className="group absolute z-10 flex h-20 w-20 items-center justify-center rounded-full bg-primary/80 text-background backdrop-blur-sm transition-all duration-300 animate-pulse hover:animate-none hover:scale-110 hover:shadow-[0_0_40px_10px_hsla(0,0%,100%,0.3)]"
      >
        <Play className="ml-1 h-8 w-8 transition-transform duration-300 group-hover:scale-125" />
      </button>
    </div>
  );
};

export default Reel;
