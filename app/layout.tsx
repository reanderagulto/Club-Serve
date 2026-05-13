import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "ClubServe - Your Gateway to Asia's Best Fitness & Wellness Spaces",
  description:
    "Find top-rated sports clubs, gyms, studios, and wellness destinations across Asia — all in one easy-to-use app built for active lifestyles.",
  keywords: "fitness, wellness, sports clubs, gyms, Asia, app",
  authors: [{ name: "Oqulo" }],
  openGraph: {
    title: "ClubServe - Your Gateway to Asia's Best Fitness & Wellness Spaces",
    description:
      "Find top-rated sports clubs, gyms, studios, and wellness destinations across Asia — all in one easy-to-use app built for active lifestyles.",
    url: "https://clubserve.com",
    siteName: "ClubServe",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ClubServe App",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://clubserve.com"),
  twitter: {
    card: "summary_large_image",
    title: "ClubServe - Your Gateway to Asia's Best Fitness & Wellness Spaces",
    description:
      "Find top-rated sports clubs, gyms, studios, and wellness destinations across Asia — all in one easy-to-use app built for active lifestyles.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
