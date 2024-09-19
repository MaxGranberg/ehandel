import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { CartProvider } from "@/context/cartContext";
import "./globals.css";
import { Inter } from "next/font/google";

// Use Google Fonts for clean, modern typography
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "My E-Commerce Store",
  description: "A modern e-commerce platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} bg-background text-foreground antialiased`}>
        <CartProvider>
          <Navbar />
          <main className="min-h-screen pt-24">
            <div className="container mx-auto">
              {children}
            </div>
          </main>
          <footer className="bg-primary-color text-white p-4 text-center">
            <p>&copy; {new Date().getFullYear()} My E-Commerce Store. All Rights Reserved.</p>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
