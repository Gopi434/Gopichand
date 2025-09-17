"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useMemo, useState, useEffect } from 'react';

const AnimatedGridBackground = () => {
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

  const Grid = ({ grayscale }: { grayscale?: boolean }) => (
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
            <div key={`${image.id}-${imgIndex}`} className="relative h-[216px] w-full shrink-0">
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

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Grid grayscale />
      </div>
      <div
        className="absolute inset-0 opacity-40"
        style={{
          maskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        <Grid />
      </div>
    </div>
  );
};

export default AnimatedGridBackground;
