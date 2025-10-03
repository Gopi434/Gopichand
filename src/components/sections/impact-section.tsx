import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '10+', label: 'Products Designed' },
  { value: '8K+', label: 'Instagram Followers' },
  { value: '1M+', label: 'Content Views' },
];

const profileImage = PlaceHolderImages.find(img => img.id === 'impact-profile');

export default function ImpactSection() {
  return (
    <section id="impact" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto grid items-center gap-12 px-4 md:px-6 lg:grid-cols-2 lg:gap-24">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">
            Driven by Data &amp; Design Excellence
          </h2>
          <p className="text-muted-foreground md:text-lg">
            At CoinEarth, my focus on user-centered design and data analysis led to significant improvements. By optimizing user flows and interfaces, we reduced error frequency by 20% and cut perceived load time by approximately 15%. Streamlining our design-to-development pipeline also improved feature delivery speed by 20%.
          </p>
          <div className="flex items-center gap-4 pt-4">
            {profileImage && (
              <Image
                src={profileImage.imageUrl}
                alt={profileImage.description}
                data-ai-hint={profileImage.imageHint}
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
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
    </section>
  );
}
