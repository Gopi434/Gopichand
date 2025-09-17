"use client";

import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

const AnimatedGridBackground = () => {
  const images = useMemo(() => {
    // Prevent hydration errors by ensuring server and client have same initial image set
    return PlaceHolderImages;
  }, []);

  if (!images.length) return null;

  const columns = [
    images.slice(0, 4),
    images.slice(4, 8),
    images.slice(8, 12),
    images.slice(12, 16),
    images.slice(16, 20),
    images.slice(0, 4), // re-using some images for the 6th column
  ];

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-15">
      <div className="grid h-full w-full grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6">
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
              <div key={`${image.id}-${imgIndex}`} className="relative h-[600px] w-full shrink-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover grayscale transition-all duration-300 hover:grayscale-0"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 16.6vw"
                  data-ai-hint={image.imageHint}
                  priority={imgIndex < 2 && colIndex < 2}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedGridBackground;
