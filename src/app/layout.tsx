import type {Metadata} from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "Gopichand | Product Designer | Multidisciplinary in Grahic, Motion,Web, 3D and Video editing",
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
      <link rel="icon" href="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Fav_Light.svg" type="image/svg+xml" media="(prefers-color-scheme: light)" />
      <link rel="icon" href="https://raw.githubusercontent.com/Gopi434/Media/8bbcd22a4eb04dd5149bac6fe0bb89b09bfb3360/Fav_Dark.svg" type="image/svg+xml" media="(prefers-color-scheme: dark)" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
