import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const baseUrl = "https://acecreativeagency.nl";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Ace Creative Agency — Wij vertellen jouw verhaal in beeld",
    template: "%s | Ace Creative Agency",
  },
  description:
    "Ace Creative Agency is een creatief bureau gespecialiseerd in videoproductie, video editing en fotografie. Wij werken voor merken, content creators en influencers door heel Nederland.",
  keywords: [
    "videoproductie",
    "video editing",
    "fotografie",
    "content creator",
    "social media management",
    "Roosendaal",
    "Nederland",
    "short form video",
    "YouTube",
    "Instagram",
  ],
  authors: [{ name: "Mike Bogers", url: baseUrl }],
  creator: "Mike Bogers",
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: baseUrl,
    siteName: "Ace Creative Agency",
    title: "Ace Creative Agency — Wij vertellen jouw verhaal in beeld",
    description:
      "Creatief bureau voor videoproductie, video editing en fotografie. Wij werken voor merken, content creators en influencers door heel Nederland.",
    images: [{ url: "/LOGO_WIT%202.PNG", width: 3375, height: 3375, alt: "Ace Creative Agency logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ace Creative Agency — Wij vertellen jouw verhaal in beeld",
    description:
      "Creatief bureau voor videoproductie, video editing en fotografie.",
    images: ["/LOGO_WIT%202.PNG"],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Ace Creative Agency",
  url: baseUrl,
  email: "mike@acecreativeagency.nl",
  founder: { "@type": "Person", name: "Mike Bogers" },
  description:
    "Creatief bureau gespecialiseerd in videoproductie, video editing en fotografie.",
  areaServed: "NL",
  serviceType: [
    "Videoproductie",
    "Video editing",
    "Fotografie",
    "Social media management",
  ],
  sameAs: ["https://www.instagram.com/Ace.Creative.Agency"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${inter.variable} ${playfair.variable}`}>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column", backgroundColor: "#000000", color: "#F3F5F5" }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
