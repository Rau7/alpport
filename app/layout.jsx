"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/");

  return (
    <html lang="en">
      <body className={inter.className}>
        {!isProjectPage && <Header />}
        {children}
        {!isProjectPage && <Footer />}
      </body>
    </html>
  );
}
