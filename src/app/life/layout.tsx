"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeaderInter from "@/components/HeaderInter";
import PageTransition from "@/components/transitions/PageTransition";

export default function LifeRootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isInterPage = pathname.startsWith("/life/inter");

  return (
    <>
      {isInterPage ? <HeaderInter /> : <Header />}
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
}