import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const FiraCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nikoloz's Portfolio",
  description: "Modern & Minimalist My Next.js Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${FiraCode.className} relative font-sans ${geistSans.variable} ${geistMono.variable} antialiased bg-[#010C15]`}
      >
        <Header />
        <main className="h-[86vh] bg-[#011627] border-x-[0.5px] border-[#1e2d3d] overflow-hidden rounded-b-lg">
          {children}
        </main>
        <div className="hidden lg:block absolute left-8 right-8">
          <Footer isMenuOpen={false} />
        </div>
      </body>
    </html>
  );
}
