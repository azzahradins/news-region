import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Map of Regional News",
  description: "Identify where the news are coming from, stay safe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + 'container mx-auto px-4 py-2 md:px-16'}>{children}</body>
    </html>
  );
}
