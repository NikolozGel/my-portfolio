import type { Metadata } from "next";
import { Fira_Code, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

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
        className={`${FiraCode.className} relative font-sans ${geistSans.variable} ${geistMono.variable} px-12 pt-5 antialiased bg-[#010C15]`}
      >
        <Header />
        <main className="h-[86vh] bg-[#011627] border-x border-b border-[#1e2d3d] overflow-hidden rounded-b-lg">
          {children}
        </main>
        <div className="hidden lg:block absolute left-12 right-12">
          <Footer isMenuOpen={false} />
        </div>
      </body>
    </html>
  );
}
