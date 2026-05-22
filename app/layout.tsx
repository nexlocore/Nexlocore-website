import type { Metadata } from "next";
import "@fontsource/figtree/400.css";
import "@fontsource/figtree/500.css";
import "@fontsource/figtree/600.css";
import "@fontsource/figtree/700.css";

import "@fontsource/fragment-mono/400.css";

import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

import "./globals.css";

export const metadata: Metadata = {
  title: "Nexlocore Technologies — Design. Build. Scale.",
  description:
    "Nexlocore Technologies is a full-service IT company delivering high-performance web, mobile, and design solutions powered by creativity, technology, and AI.",
  openGraph: {
    title: "Nexlocore Technologies — Design. Build. Scale.",
    description:
      "Full-service digital products: web, mobile, UI/UX, branding, graphics, and video for startups and growing brands.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black antialiased font-sans">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}