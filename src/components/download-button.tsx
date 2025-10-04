"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Link from "next/link";

export default function DownloadButton() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <Button asChild size="icon" className="rounded-full w-14 h-14 shadow-lg">
        <a
          href="https://raw.githubusercontent.com/Gopi434/Media/main/Gopichand%20Resume.pdf"
          download="Gopichand-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download className="h-6 w-6" />
          <span className="sr-only">Download Resume</span>
        </a>
      </Button>
    </div>
  );
}
