import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar"
import Footer from "./component/Footer";
import ScrollToTop from "./component/Helper/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Techty | Business Portfolio Website using Next.js, Tailwind CSS, and Framer Motion",
  description: "Techty is a business website for Empowering people with innovative financial tools and services to achieve goals, build smarter decisions, and secure a better future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F0F8FF]`}
      >
        <Navbar/>
        {children}
        <ScrollToTop/>
        <Footer/>
      </body>
    </html>
  );
}

