"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useMemo, useState, useEffect } from 'react';
import Link from 'next/link';
import { useIsMobile } from '@/hooks/use-mobile';

const Grid = ({ isReelHovered, isModalOpen, isInteracted }: { isReelHovered: boolean, isModalOpen: boolean, isInteracted: boolean }) => {
  const images = useMemo(() => PlaceHolderImages, []);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      if (!isMobile) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [isMobile]);
  
  if (!images.length) return null;

  const columns = [
    images.slice(0, 4),
    images.slice(4, 8),
    images.slice(8, 12),
    images.slice(12, 16),
    images.slice(16, 20),
    images.slice(20, 24),
  ];

  const gridContent = (isGrayscale = false) => (
    <div className={cn(
        "grid h-full w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6", 
        isGrayscale && "grayscale",
        isMobile && "grayscale"
      )}>
      {columns.map((columnImages, colIndex) => (
        <div
          key={colIndex}
          className={cn(
            'flex flex-col gap-4',
            colIndex % 2 === 0 ? 'animate-slide-up' : 'animate-slide-down',
            isModalOpen && '[animation-play-state:paused]',
            colIndex >= 4 ? 'hidden lg:flex' : '',
            colIndex >= 2 ? 'hidden md:flex' : ''
          )}
        >
          {[...columnImages, ...columnImages].map((image, imgIndex) => (
            <Link href="https://www.behance.net/gopichandtalluri" target="_blank" key={`${image.id}-${imgIndex}`} className="cursor-pointer pointer-events-auto">
              <div className="relative h-[324px] w-full shrink-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.6vw"
                  data-ai-hint={image.imageHint}
                  priority={imgIndex < 2 && colIndex < 2}
                />
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );

  const useMask = !isMobile && !isInteracted;

  return (
    <div
      className={cn(
        "absolute inset-0 transition-opacity duration-500 ease-in-out before:absolute before:inset-0 before:content-[''] before:opacity-15",
        (isReelHovered && !isMobile) ? 'opacity-0' : 'opacity-80',
        isMobile && "opacity-10",
        !useMask && 'pointer-events-none'
      )}
      style={useMask ? {
        maskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 25%, transparent 100%)`,
        WebkitMaskImage: `radial-gradient(circle 250px at ${mousePosition.x}px ${mousePosition.y}px, black 25%, transparent 100%)`,
      }: {}}
    >
      <div className="absolute inset-0 -z-10 opacity-15">
        {gridContent(true)}
      </div>
      <div className="pointer-events-none">
        {gridContent(false)}
      </div>
    </div>
  )
};


const AnimatedGridBackground = ({ isReelHovered, isModalOpen, isInteracted }: { isReelHovered: boolean, isModalOpen: boolean, isInteracted: boolean }) => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <Grid isReelHovered={isReelHovered} isModalOpen={isModalOpen} isInteracted={isInteracted} />
    </div>
  );
};

export default AnimatedGridBackground;
