import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Videoproductie & Fotografie aanvragen",
  description:
    "Neem contact op met Ace Creative Agency in Roosendaal. Heb je een project in gedachten voor videoproductie, video editing of fotografie? We reageren binnen 24 uur.",
  alternates: { canonical: "https://acecreativeagency.nl/contact" },
  openGraph: {
    title: "Contact — Ace Creative Agency",
    description:
      "Heb je een project in gedachten? Neem contact op en we reageren binnen 24 uur.",
    url: "https://acecreativeagency.nl/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
