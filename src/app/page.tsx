import HeroSection from '@/components/sections/hero-section';
import ClientsSection from '@/components/sections/clients-section';
import ToolsSection from '@/components/sections/tools-section';
import WorksSection from '@/components/sections/works-section';
import ImpactSection from '@/components/sections/impact-section';
import CtaFooterSection from '@/components/sections/cta-footer-section';
import DownloadButton from '@/components/download-button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background px-4 sm:px-8 md:px-12 lg:px-24">
      <main className="flex-grow">
        <HeroSection />
        <ClientsSection />
        <ToolsSection />
        <WorksSection />
        <ImpactSection />
        <CtaFooterSection />
      </main>
      <DownloadButton />
    </div>
  );
}
