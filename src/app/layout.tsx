import type { Metadata } from "next";
import { Italiana, Cinzel, Italianno, Forum } from "next/font/google";
import "./globals.sass";

const mFont = Forum({weight: '400', subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Grand Tranquil Hotel",
  description: "TODO: CHANGE DESCRIPTION",
  keywords: "tranquil, hotel, spa, relax",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}