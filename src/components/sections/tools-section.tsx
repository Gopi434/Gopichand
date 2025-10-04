import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";

const tools: { name: string; imageId: string }[] = [
  { name: "Figma", imageId: "tool-figma" },
  { name: "Adobe XD", imageId: "tool-xd" },
  { name: "Photoshop", imageId: "tool-photoshop" },
  { name: "Illustrator", imageId: "tool-illustrator" },
  { name: "After Effects", imageId: "tool-after-effects" },
  { name: "Premiere Pro", imageId: "tool-premiere-pro" },
  { name: "HTML", imageId: "tool-html" },
  { name: "CSS", imageId: "tool-css" },
  { name: "JavaScript", imageId: "tool-javascript" },
  { name: "jQuery", imageId: "tool-jquery" },
  { name: "Bootstrap", imageId: "tool-bootstrap" },
  { name: "Firebase Studio", imageId: "tool-firebase" },
  { name: "Framer", imageId: "tool-framer" },
  { name: "Autodesk Maya", imageId: "tool-maya" },
];

const getImage = (id: string) => PlaceHolderImages.find(img => img.id === id);

export default function ToolsSection() {
  return (
    <section id="tools" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-4xl md:text-5xl">Tools I Use</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            My expertise spans across the design and code spectrum, allowing me to build comprehensive and user-friendly products.
          </p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-2 items-stretch justify-center gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {tools.map((tool) => {
            const toolImage = getImage(tool.imageId);
            return (
              <Card key={tool.name} className="group flex flex-col items-center justify-center p-4 transition-colors hover:bg-white/[.03]">
                <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                  {toolImage ? (
                    <Image
                      src={toolImage.imageUrl}
                      alt={tool.name}
                      width={48}
                      height={48}
                      className="h-12 w-12 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    />
                  ) : (
                    <div className="h-12 w-12 bg-muted rounded-md" />
                  )}
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
