import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio — Videoproductie & Fotografie",
  description:
    "Bekijk het portfolio van Ace Creative Agency: video's, foto's en creatieve concepten voor merken, content creators en influencers. Gebaseerd in Roosendaal, actief door heel Nederland.",
  alternates: { canonical: "https://acecreativeagency.nl/portfolio" },
  openGraph: {
    title: "Portfolio — Ace Creative Agency",
    description:
      "Videoproductie, fotografie en creatieve concepten voor merken en content creators. Bekijk ons werk.",
    url: "https://acecreativeagency.nl/portfolio",
  },
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
