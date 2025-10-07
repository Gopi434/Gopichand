import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const contactLinks = [
  {
    href: 'tel:+917013691121',
    iconUrl: 'https://raw.githubusercontent.com/Gopi434/Media/b92851f92818da078877927b1de41856d31a0785/Gopichand%20assets/Contact%20icons/Call.svg',
    label: '+91 7013691121',
  },
  {
    href: 'mailto:gopichandtlr@gmail.com',
    iconUrl: 'https://raw.githubusercontent.com/Gopi434/Media/b92851f92818da078877927b1de41856d31a0785/Gopichand%20assets/Contact%20icons/Mail.svg',
    label: 'gopichandtlr@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/gopichandtlr',
    iconUrl: 'https://raw.githubusercontent.com/Gopi434/Media/b92851f92818da078877927b1de41856d31a0785/Gopichand%20assets/Contact%20icons/LinkedIn.svg',
    label: 'Gopichand Talluri',
  },
  {
    href: 'https://www.behance.net/gopichandtlr',
    iconUrl: 'https://raw.githubusercontent.com/Gopi434/Media/b92851f92818da078877927b1de41856d31a0785/Gopichand%20assets/Contact%20icons/Behance.svg',
    label: 'Gopichand Talluri',
  },
];

export default function CtaFooterSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
       <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Ready to Bring Ideas to Life</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto mt-12">
            {contactLinks.map((link) => (
              <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:bg-white/5 transition-colors">
                      <CardContent className="p-6 flex flex-row items-center gap-4">
                          <Image src={link.iconUrl} alt="" width={32} height={32} className="h-8 w-8" />
                          <span className="text-sm font-medium flex-1 text-left">{link.label}</span>
                      </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-40 pb-0">
        <div className="container mt-10">
          <hr className="mb-20 border-border " />
          <div className="flex justify-center">
            <Link href="/" className="flex items-center gap-0 text-2xl font-bold text-muted-foreground">
              <Image 
                src="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Logo%202.O.svg"
                alt="Gopi Logo"
                width={2000}
                height={2000}
                className="w-120 h-120"
              />
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
}
