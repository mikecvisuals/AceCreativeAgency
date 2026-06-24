import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact — Videoproductie & Fotografie Roosendaal",
  description:
    "Neem contact op met Ace Creative Agency voor videoproductie, video editing of fotografie. Gebaseerd in Roosendaal, actief door heel Nederland. Reageer binnen 24 uur.",
  alternates: { canonical: "https://acecreativeagency.nl/contact" },
  openGraph: {
    title: "Contact — Ace Creative Agency",
    description:
      "Neem contact op voor videoproductie, video editing of fotografie. Gebaseerd in Roosendaal, actief door heel Nederland.",
    url: "https://acecreativeagency.nl/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
