import { Landmark, Orbit, BrainCircuit, Clapperboard } from 'lucide-react';

const clients = [
  { name: 'FinTech Client', icon: Landmark },
  { name: 'Web3 Startup', icon: Orbit },
  { name: 'AI Project', icon: BrainCircuit },
  { name: 'Digital Media Agency', icon: Clapperboard },
];

export default function ClientsSection() {
  return (
    <section id="clients" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Top Clients I Served</h2>
        </div>
        <div className="divide-y rounded-lg border-t border-b mt-12">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x">
              {clients.map((client) => (
                <div key={client.name} className="flex flex-col items-center justify-center p-6 sm:p-8">
                  <client.icon className="h-10 w-10 text-muted-foreground" />
                  <p className="mt-4 text-sm font-medium text-muted-foreground">{client.name}</p>
                </div>
              ))}
            </div>
        </div>
      </div>
    </section>
  );
}
