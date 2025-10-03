import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${COMPANY.name} | Veteran-Owned Tile Installation in Boise, Idaho`,
  description: "Veteran-owned tile installation company serving Boise, Idaho. Trusted by Layton Construction for $150K+ commercial projects. Expert residential tile work. Licensed, insured, Schluter certified.",
  keywords: [
    "tile installation boise",
    "tile contractor boise idaho",
    "commercial tile installation",
    "residential tile installation",
    "bathroom tile boise",
    "kitchen backsplash",
    "veteran owned business",
    "schluter certified",
    "luxury tile installation",
  ],
  authors: [{ name: COMPANY.name }],
  openGraph: {
    title: `${COMPANY.name} | Veteran-Owned Tile Installation`,
    description: "Commercial-grade precision meets residential artistry. Trusted tile installation across Idaho.",
    url: "https://allstyletileandstone.com",
    siteName: COMPANY.name,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - Professional Tile Installation`,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.name} | Veteran-Owned Tile Installation`,
    description: "Commercial-grade precision meets residential artistry. Trusted tile installation across Idaho.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="pt-[72px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
