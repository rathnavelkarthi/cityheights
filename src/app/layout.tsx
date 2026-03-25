import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "City Heights Events | Premium Event Management in Chennai",
  description:
    "Premium event planning and celebration management by Jabes Amirtharaj. Weddings, corporate events, concerts, and festivals in Chennai.",
  openGraph: {
    title: "City Heights Events | Premium Event Management in Chennai",
    description:
      "Premium event planning and celebration management by Jabes Amirtharaj. Weddings, corporate events, concerts, and festivals in Chennai.",
    url: "http://www.cityheights.com",
    siteName: "City Heights Events",
    images: [
      {
        url: "/images/services-hero.png",
        width: 1200,
        height: 630,
        alt: "City Heights Events - Premium Event Management in Chennai",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Heights Events | Premium Event Management in Chennai",
    description:
      "Premium event planning by Jabes Amirtharaj in Chennai.",
    images: ["/images/services-hero.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className="font-[family-name:var(--font-inter)] antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
