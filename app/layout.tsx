import type { Metadata } from "next";
import { Roboto, Roboto_Slab } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import CategoryBar from "../components/CategoryBar";
import Footer from "../components/Footer";

// Load Roboto (sans-serif)
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Load Roboto Slab (serif)
const robotoSlab = Roboto_Slab({
  variable: "--font-roboto-slab",
  subsets: ["latin"],
  weight: ["400", "700"],

});

export const metadata: Metadata = {
  title: "Pay FintechBazaar",
  description: "At Pay FintechBazaar, we simplify financial access for individuals, professionals, and businesses across India. Whether you’re looking to get a loan, choose the right insurance, apply for a credit card, or set up digital payments, we’ve got you covered — all under one roof.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${robotoSlab.variable} antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <CategoryBar />
        <main className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
