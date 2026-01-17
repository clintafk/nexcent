import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({});

export const metadata: Metadata = {
  title: "Nexcent",
  description: "Nexcent Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-w-360`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
