"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface JCGCardProps {
  className?: string;
  children: ReactNode;
}

export function JCGCard({ className, children }: JCGCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white border border-gray-100/70",
        "shadow-[0_2px_12px_rgba(0,0,0,0.03)]",
        "transition-all duration-300",
        "hover:shadow-[0_8px_32px_rgba(0,0,0,0.06)] hover:-translate-y-[3px]",
        "relative overflow-hidden",
        // subtle vignette
        "before:absolute before:inset-0 before:rounded-2xl before:pointer-events-none",
        "before:bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_20%,rgba(0,0,0,0.04)_100%)]",
        className
      )}
    >
      {children}
    </div>
  );
}
