import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { profile } from "./data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${profile.name} · ${profile.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title,
  description: profile.summary,
  authors: [{ name: profile.name }],
  keywords: [
    "Oriana Méndez",
    "portafolio",
    "desarrollo frontend",
    "React",
    "TypeScript",
    "Next.js",
    "Java",
    "Spring Boot",
  ],
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: profile.siteUrl,
    siteName: title,
    title,
    description: profile.tagline,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: profile.tagline,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
