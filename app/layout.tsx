import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Xplore Event",
  description:
    "Xplore Event is a collaborative platform connecting DJs, artists, promoters, clubs, and creators. Discover, barter, and build culture together. Secure deals, manage events, and grow your network with trusted mediation. Featuring VJ Ammy and a vibrant community for the next generation of nightlife and entertainment.",
  keywords: [
    "Xplore Event",
    "DJ collaboration",
    "artist platform",
    "club events",
    "promoter network",
    "barter deals",
    "event management",
    "music culture",
    "VJ Ammy",
    "nightlife",
    "secure booking",
    "creator community",
    "influencer",
    "performance exchange",
    "event promotion"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
