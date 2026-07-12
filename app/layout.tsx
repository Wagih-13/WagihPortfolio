import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FooterSection from "./(public)/sections/FooterSection";
import NavBarSection from "./(public)/sections/NavBarSection";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Wagih | Front-End Developer",
  description:
    "Front-End Developer specializing in React, Next.js, and modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-tertiary overflow-x-hidden`}
    >
      <body className=" antialiased bg-tertiary overflow-x-hidden overflow-y-hidden">
        <NavBarSection />
        {children}
        <FooterSection />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
