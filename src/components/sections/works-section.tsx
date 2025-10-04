import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  {
    name: 'UI/UX Design',
    imageId: 'work-paycio-mobile',
    link: 'https://www.behance.net/gopichandtlr',
  },
  {
    name: 'Graphic Design',
    imageId: 'work-paycio-website',
    link: 'https://www.behance.net/gallery/134131883/Graphic-Design-Works-Social-media-Illustrations',
  },
  {
    name: 'Motion design',
    imageId: 'work-indoex',
    link: 'https://www.behance.net/gallery/134130099/Motion-Design-works-Motion-Videos-Icon-Animation',
  },
  {
    name: 'Web Development',
    imageId: 'work-chatbucket',
    link: '#',
  },
  {
    name: 'Video Editing',
    imageId: 'work-aqura',
    link: '#',
  },
  {
    name: '3D Design',
    imageId: 'work-motion-3d',
    link: 'https://www.behance.net/gallery/219630569/3D-Design-works-3d-Modelling-Animation',
  },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function WorksSection() {
  return (
    <section id="works" className="w-full py-12 md-py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Selected Case Studies &amp; Works</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              I focus on creating seamless, accessible, and high-impact products that deliver meaningful results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {projects.map((project) => {
              const projectImage = getImage(project.imageId);
              return (
                <Link href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                  <Card className="overflow-hidden h-full group hover:bg-white/5 transition-all">
                    <CardHeader className="flex flex-row items-center justify-between p-4">
                      <CardTitle className="text-base font-medium">{project.name}</CardTitle>
                      <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </CardHeader>
                    <CardContent className="p-0">
                      {projectImage && (
                         <Image
                           src={projectImage.imageUrl}
                           alt={projectImage.description}
                           data-ai-hint={projectImage.imageHint}
                           width={600}
                           height={400}
                           className="object-cover w-full h-60 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-300"
                         />
                      )}
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
