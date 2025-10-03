import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const clients = [
  { name: 'Client 1', imageId: 'client-fintech' },
  { name: 'Client 2', imageId: 'client-web3' },
  { name: 'Client 3', imageId: 'client-ai' },
  { name: 'Client 4', imageId: 'client-media' },
  { name: 'Client 5', imageId: 'client-placeholder-1' },
  { name: 'Client 6', imageId: 'client-placeholder-2' },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function ClientsSection() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Top Clients I Served</h2>
          </div>
          <div className="mt-12">
              <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
                {clients.map((client) => {
                  const clientImage = getImage(client.imageId);
                  return (
                    <div key={client.name} className="flex justify-center">
                      {clientImage ? (
                        <Image
                          src={clientImage.imageUrl}
                          alt={client.name}
                          data-ai-hint={clientImage.imageHint}
                          width={120}
                          height={60}
                          className="h-10 object-contain text-muted-foreground"
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
