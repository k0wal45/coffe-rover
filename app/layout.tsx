import type { Metadata } from "next";
import { Playfair_Display, Raleway } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fontDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
});

const font = Raleway({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} ${fontDisplay.variable} antialiased overflow-x-hidden bg-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
