import { Card, CardContent } from "@/components/ui/card";
import { 
  Users, 
  Library, 
  TabletSmartphone, 
  MousePointerClick,
  CodeXml,
  Braces,
  Database
} from "lucide-react";
import { 
  IconFigma, 
  IconXD, 
  IconPhotoshop, 
  IconIllustrator, 
  IconAfterEffects, 
  IconMaya 
} from "@/components/icons";
import type { ComponentType, SVGProps } from "react";

const designTools: { name: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { name: "Figma", icon: IconFigma },
  { name: "Adobe XD", icon: IconXD },
  { name: "Photoshop", icon: IconPhotoshop },
  { name: "Illustrator", icon: IconIllustrator },
  { name: "After Effects", icon: IconAfterEffects },
  { name: "Premiere Pro", icon: IconMaya },
  { name: "Usability Testing", icon: Users },
  { name: "Design Systems", icon: Library },
  { name: "Responsive Design", icon: TabletSmartphone },
  { name: "Interaction Design", icon: MousePointerClick },
];

const techTools: { name: string; icon: ComponentType<SVGProps<SVGSVGElement>> }[] = [
  { name: "HTML", icon: CodeXml },
  { name: "CSS", icon: Braces },
  { name: "JavaScript", icon: Braces },
  { name: "Autodesk Maya", icon: Database },
];

const allTools = [...designTools, ...techTools];

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
        <div className="mx-auto grid max-w-5xl grid-cols-2 items-stretch justify-center gap-6 py-12 sm:grid-cols-3 md:grid-cols-4 lg:gap-8">
          {allTools.map((tool) => (
            <Card key={tool.name} className="flex flex-col items-center justify-center p-4 hover:bg-accent transition-colors">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-0">
                <tool.icon className="h-12 w-12 text-muted-foreground" />
                <span className="text-sm font-medium text-center">{tool.name}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
