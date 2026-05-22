import type { Metadata } from "next";
import { Figtree, Fragment_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const fragmentMono = Fragment_Mono({
  variable: "--font-fragment-mono",
  subsets: ["latin"],
  weight: ["400"],
});

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
    <html lang="en" className={`${figtree.variable} ${fragmentMono.variable}`}>
      <body className="min-h-screen bg-black antialiased">
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
