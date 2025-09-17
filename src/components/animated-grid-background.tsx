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
    images.slice(0, 5),
    images.slice(5, 10),
    images.slice(10, 15),
    images.slice(15, 20),
  ];

  return (
    <div className="absolute inset-0 z-0 h-full w-full overflow-hidden opacity-30">
      <div className="grid h-full w-full grid-cols-2 gap-4 md:grid-cols-4">
        {columns.map((columnImages, colIndex) => (
          <div
            key={colIndex}
            className={cn(
              'flex flex-col gap-4',
              colIndex % 2 === 0 ? 'animate-slide-up' : 'animate-slide-down'
            )}
          >
            {[...columnImages, ...columnImages].map((image, imgIndex) => (
              <div key={`${image.id}-${imgIndex}`} className="relative h-[600px] w-full shrink-0">
                <Image
                  src={image.imageUrl}
                  alt={image.description}
                  fill
                  className="object-cover grayscale"
                  sizes="(max-width: 768px) 50vw, 25vw"
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
