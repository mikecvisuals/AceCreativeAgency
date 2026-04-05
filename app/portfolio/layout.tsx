import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Bekijk het werk van Ace Creative Agency — videoproducties, edits en fotoshoots voor merken, content creators en influencers zoals Raoul (Bankzitters), Russo en ITV Studios.",
  alternates: { canonical: "https://acecreativeagency.nl/portfolio" },
  openGraph: {
    title: "Portfolio — Ace Creative Agency",
    description:
      "Videoproducties, edits en fotoshoots voor merken, content creators en influencers.",
    url: "https://acecreativeagency.nl/portfolio",
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return children;
}
