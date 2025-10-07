import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
  { value: '5K+', label: 'Ideas Explored' },
  { value: '10+', label: 'Creative Hours' },
  { value: '100K+', label: 'Layers Organized' },
  { value: '1M+', label: 'Pixels Placed' },
];

const profileImage = PlaceHolderImages.find(img => img.id === 'impact-profile');

export default function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Shaped by Design, Driven by Curiosity
            </h2>
            <p className="text-muted-foreground md:text-lg">
            Every project, every pixel and every idea has shaped the way I create. This is the story of curiosity, dedication and the drive to bring ideas to life across multiple disciplines.
            </p>
            <div className="flex items-center gap-4 pt-4">
              {profileImage && (
                <div className="relative h-24 w-24 overflow-hidden rounded-full">
                  <Image
                    src={profileImage.imageUrl}
                    alt={profileImage.description}
                    data-ai-hint={profileImage.imageHint}
                    fill
                    className="object-cover object-top"
                  />
                </div>
              )}
              <div>
                <p className="font-semibold">Gopichand Talluri</p>
                <p className="text-sm text-muted-foreground">Product Designer</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <Card key={stat.label}>
                <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                  <p className="text-4xl sm:text-5xl font-bold font-headline text-primary">{stat.value}</p>
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
