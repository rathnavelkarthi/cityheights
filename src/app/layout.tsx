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
  title: "City Heights | Where Cities Celebrate",
  description:
    "Crafting legendary experiences for the world's most discerning hosts. From private galas to global festivals.",
  openGraph: {
    title: "City Heights | Where Cities Celebrate",
    description: "Crafting legendary experiences for the world's most discerning hosts. From private galas to global festivals.",
    url: "https://github.com/rathnavelkarthi/cityheights",
    siteName: "City Heights",
    images: [
      {
        url: "/images/services-hero.png",
        width: 1200,
        height: 630,
        alt: "City Heights Events",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "City Heights | Where Cities Celebrate",
    description: "Crafting legendary experiences for the world's most discerning hosts.",
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
