import Link from 'next/link';
import { Smartphone, Mail, Linkedin } from 'lucide-react';
import { IconBehance } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

const contactLinks = [
  {
    href: 'tel:+917013691121',
    icon: Smartphone,
    label: '+91 7013691121',
  },
  {
    href: 'mailto:gopichandtlr@gmail.com',
    icon: Mail,
    label: 'gopichandtlr@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/gopichandtlr',
    icon: Linkedin,
    label: 'Gopichand Talluri',
  },
  {
    href: 'https://www.behance.net/gopichandtlr',
    icon: IconBehance,
    label: 'Gopichand Talluri',
  },
];

export default function CtaFooterSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32 border-t">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl">Ready to Elevate Your Product? Let&apos;s Connect.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mt-12">
            {contactLinks.map((link) => (
              <Link href={link.href} key={link.href} target="_blank" rel="noopener noreferrer">
                  <Card className="h-full hover:bg-white/5 transition-colors">
                      <CardContent className="p-6 flex flex-row items-center gap-4">
                          <link.icon className="h-8 w-8 text-muted-foreground" />
                          <span className="text-sm font-medium flex-1 text-left">{link.label}</span>
                      </CardContent>
                  </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="mt-20 py-6">
        <div className="container flex justify-center">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-muted-foreground">
              <Image 
                src="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Logo%202.O.svg"
                alt="Gopi Logo"
                width={40}
                height={40}
                className="h-10 w-10"
              />
            </Link>
        </div>
      </footer>
    </section>
  );
}
