import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Ace Creative Agency. Heb je een project in gedachten? Vul het formulier in of stuur een e-mail — we reageren binnen 24 uur.",
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
