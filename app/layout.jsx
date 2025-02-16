"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";
import { AnimationProvider } from "@/context/AnimationContext";
import { useEffect } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isProjectPage =
    pathname === "/projects" || pathname.startsWith("/projects/");

  useEffect(() => {
    const handleRouteChange = () => {
      if (typeof window !== "undefined") {
        window.scrollTo(0, 0);
        document.body.style.display = "none";
        document.body.offsetHeight;
        document.body.style.display = "";
      }
    };

    handleRouteChange();
  }, [pathname]);

  return (
    <html lang="en">
      <body className={inter.className}>
        <AnimationProvider>
          {!isProjectPage && <Header />}
          <main>{children}</main>
          {!isProjectPage && <Footer />}
        </AnimationProvider>
      </body>
    </html>
  );
}
