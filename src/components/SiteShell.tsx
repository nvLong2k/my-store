"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import NavbarWrapper from "@/components/NavbarWrapper";

export default function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <NavbarWrapper />}
      {children}
    </>
  );
}
