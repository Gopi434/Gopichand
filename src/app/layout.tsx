import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Script from 'next/script';

export const metadata: Metadata = {
  title: ' Gopichand | Product Designer | Multidisciplinary in Grahic, Motion,Web, 3D and Video editing',
  description: 'Personal portfolio website of Gopichand, Including showreel and works',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="https://raw.githubusercontent.com/Gopi434/Media/f3e9eff33e55dffdab065d9182826a2635ce3be8/FavIcon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
        <Script src="https://player.vimeo.com/api/player.js" />
      </body>
    </html>
  );
}
