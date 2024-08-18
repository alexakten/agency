import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First House",
  description: "Design and development partner for startups",
  openGraph: {
    title: "First House",
    description: "Design and development partner for startups",
    url: "https://thefirsthouse.se/",
    type: "website",
    images: [
      {
        url: "https://thefirsthouse.se/thumbnail.webp",
        width: 1200,
        height: 630,
        alt: "First House Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "First House",
    description: "Design and development partner for startups.",
    images: ["https://thefirsthouse.se/thumbnail.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/zhy0giy.css" />
      </head>
      {/* <body className="font-neue">{children}</body> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
