"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useMemo, useState, useEffect } from 'react';

const Grid = ({ grayscale }: { grayscale?: boolean }) => {
  const images = useMemo(() => PlaceHolderImages, []);

  if (!images.length) return null;

  const columns = [
    images.slice(0, 4),
    images.slice(4, 8),
    images.slice(8, 12),
    images.slice(12, 16),
    images.slice(16, 20),
    images.slice(0, 4),
  ];

  return (
    <div className={cn("grid h-full w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6", grayscale && "grayscale")}>
      {columns.map((columnImages, colIndex) => (
        <div
          key={colIndex}
          className={cn(
            'flex flex-col gap-4',
            colIndex % 2 === 0 ? 'animate-slide-up' : 'animate-slide-down',
            colIndex >= 4 ? 'hidden lg:flex' : '',
            colIndex >= 2 ? 'hidden md:flex' : ''
          )}
        >
          {[...columnImages, ...columnImages].map((image, imgIndex) => (
            <div key={`${image.id}-${imgIndex}`} className="relative h-[324px] w-full shrink-0">
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
          ))}
        </div>
      ))}
    </div>
  );
};

const SpotlightEffect = ({ isReelHovered }: { isReelHovered: boolean }) => {
    const [mousePosition, setMousePosition] = useState({ x: -1000, y: -1000 });

    useEffect(() => {
        const handleMouseMove = (event: MouseEvent) => {
            setMousePosition({ x: event.clientX, y: event.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    const xPos = isReelHovered ? -1000 : mousePosition.x;
    const yPos = isReelHovered ? -1000 : mousePosition.y;

    return (
        <div
            className="absolute inset-0 opacity-80"
            style={{
                maskImage: `radial-gradient(circle 250px at ${xPos}px ${yPos}px, black 25%, transparent 100%)`,
                WebkitMaskImage: `radial-gradient(circle 250px at ${xPos}px ${yPos}px, black 25%, transparent 100%)`,
            }}
        >
            <Grid />
        </div>
    )
}

const AnimatedGridBackground = ({ isReelHovered }: { isReelHovered: boolean }) => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div className="absolute inset-0 opacity-15">
        <Grid grayscale />
      </div>
      <SpotlightEffect isReelHovered={isReelHovered} />
    </div>
  );
};

export default AnimatedGridBackground;
