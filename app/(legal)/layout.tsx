import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

export default function LegalLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
