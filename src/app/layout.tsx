import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Aadarsh Marriage Garden | Patna",
  description: "Aadarsh Marriage Garden: A premium wedding and banquet venue in Janipur, Patna. Book for weddings, receptions, and events.",
  openGraph: {
    title: "Aadarsh Marriage Garden",
    description: "Where Your Big Day Becomes Unforgettable. Premium Banquet Hall + Lawn in Patna.",
    url: "https://aadarshmarriagegarden.com",
    siteName: "Aadarsh Marriage Garden",
    images: [
      {
        url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Aadarsh Marriage Garden Venue",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${cormorantGaramond.variable} antialiased bg-cream text-gray-900 font-sans min-h-screen flex flex-col`}
      >
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
