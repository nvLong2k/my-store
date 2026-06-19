"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

export default function NavbarWrapper() {
  const pathname = usePathname();
  
  // Ẩn navbar trên các trang auth
  const isAuthPage = pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up");
  
  if (isAuthPage) {
    return null;
  }
  
  return <Navbar />;
}
