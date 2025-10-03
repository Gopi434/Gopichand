import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight, Smartphone, Globe, Bot, GanttChartSquare, Video } from "lucide-react";
import { PlaceHolderImages } from '@/lib/placeholder-images';
import type { ComponentType } from 'react';

const projects = [
  {
    name: 'Paycio Mobile App',
    icon: Smartphone,
    imageId: 'work-paycio-mobile',
    link: '#',
  },
  {
    name: 'Paycio Global &amp; USA Website',
    icon: Globe,
    imageId: 'work-paycio-website',
    link: '#',
  },
  {
    name: 'IndoEX',
    icon: GanttChartSquare,
    imageId: 'work-indoex',
    link: '#',
  },
  {
    name: 'ChatBucket',
    icon: Bot,
    imageId: 'work-chatbucket',
    link: '#',
  },
  {
    name: 'Aqura',
    icon: GanttChartSquare,
    imageId: 'work-aqura',
    link: '#',
  },
  {
    name: 'Motion/3D Work',
    icon: Video,
    imageId: 'work-motion-3d',
    link: '#',
  },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function WorksSection() {
  return (
    <section id="works" className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Selected Case Studies &amp; Works</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            I focus on creating seamless, accessible, and high-impact products that deliver meaningful results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mt-12">
          {projects.map((project) => {
            const projectImage = getImage(project.imageId);
            return (
              <Link href={project.link} key={project.name} target="_blank" rel="noopener noreferrer">
                <Card className="overflow-hidden h-full group hover:border-primary/50 transition-all">
                  <CardHeader className="flex flex-row items-center justify-between p-4">
                    <div className="flex items-center gap-3">
                      <project.icon className="w-5 h-5 text-muted-foreground" />
                      <CardTitle className="text-base font-medium">{project.name}</CardTitle>
                    </div>
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
                         className="object-cover w-full h-60"
                       />
                    )}
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
