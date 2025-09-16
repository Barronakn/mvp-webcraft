"use client";

import Scrollbar from "smooth-scrollbar";
import { useEffect, useRef } from "react";

export default function ScrollbarWrapper({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      Scrollbar.init(containerRef.current);
    }
  }, []);

  return <div ref={containerRef}>{children}</div>;
}
