import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clients = [
  { name: 'FinTech Client', imageId: 'client-fintech' },
  { name: 'Web3 Startup', imageId: 'client-web3' },
  { name: 'AI Project', imageId: 'client-ai' },
  { name: 'Digital Media Agency', imageId: 'client-media' },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function ClientsSection() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Top Clients I Served</h2>
        </div>
        <div className="divide-y rounded-lg border-t border-b mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
              {clients.map((client) => {
                const clientImage = getImage(client.imageId);
                return (
                  <div key={client.name} className="flex flex-col items-center justify-center p-6 sm:p-8">
                    {clientImage ? (
                      <Image
                        src={clientImage.imageUrl}
                        alt={client.name}
                        data-ai-hint={clientImage.imageHint}
                        width={100}
                        height={100}
                        className="h-24 w-24 object-contain text-muted-foreground"
                      />
                    ) : (
                      <div className="h-24 w-24 bg-muted rounded-md flex items-center justify-center text-muted-foreground text-xs">
                        Placeholder
                      </div>
                    )}
                    <p className="mt-4 text-sm font-medium text-muted-foreground">{client.name}</p>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </section>
  );
}
