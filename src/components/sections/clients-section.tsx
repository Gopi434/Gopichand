import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clients = [
  { name: 'Client 1', imageId: 'client-fintech', width: 140, height: 60 },
  { name: 'Client 2', imageId: 'client-web3', width: 160, height: 60, className: "" },
  { name: 'Client 3', imageId: 'client-ai', width: 200, height: 75 },
  { name: 'Client 4', imageId: 'client-media', width: 80, height: 45 },
  { name: 'Client 5', imageId: 'client-placeholder-1', width: 120, height: 60 },
  { name: 'Client 6', imageId: 'client-placeholder-2', width: 140, height: 60 },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function ClientsSection() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl md:text-5xl">Top Clients I Served</h2>
          </div>
          <div className="mt-12">
              <div className="flex flex-wrap justify-center items-center gap-8 md:gap-x-12">
                {clients.map((client) => {
                  const clientImage = getImage(client.imageId);
                  return (
                    <div key={client.name} className="flex justify-center items-center group h-16">
                      {clientImage ? (
                          <Image
                            src={clientImage.imageUrl}
                            alt={client.name}
                            data-ai-hint={clientImage.imageHint}
                            width={client.width}
                            height={client.height}
                            style={{ width: 'auto', height: client.height / 1.5 }}
                            className="max-h-full object-contain text-muted-foreground grayscale opacity-30 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                          />
                      ) : (
                        <div className="h-10 w-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-xs">
                          Logo
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
