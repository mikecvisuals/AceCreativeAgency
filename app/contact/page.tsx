"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ui/scroll-reveal";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const mailto = `mailto:mike@acecreativeagency.nl?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(
      `Naam: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
    window.location.href = mailto;
    setSent(true);
  }

  return (
    <div style={{ paddingTop: "140px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>

      {/* Header */}
      <ScrollReveal style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "16px" }}>Contact</p>
        <h1 style={{ fontSize: "clamp(2rem, 8vw, 3.5rem)", fontWeight: 600, color: "#F3F5F5", lineHeight: 1.1, marginBottom: "20px", maxWidth: "560px" }}>
          Laten we samenwerken.
        </h1>
        <p style={{ color: "#7A7A7A", maxWidth: "420px", lineHeight: 1.7, marginBottom: "48px", fontSize: "15px", textWrap: "balance" } as React.CSSProperties}>
          Heb je een project in gedachten? Vul het formulier in of stuur ons een e-mail. We reageren binnen 24 uur.
        </p>
      </ScrollReveal>

      {/* Contact info */}
      <ScrollReveal delay={0.1}>
        <div style={{ display: "flex", flexDirection: "row", gap: "48px", marginBottom: "40px", justifyContent: "center", flexWrap: "wrap" }}>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "6px" }}>Email</p>
            <a
              href="mailto:mike@acecreativeagency.nl"
              style={{ color: "#F3F5F5", fontSize: "14px", textDecoration: "none" }}
            >
              mike@acecreativeagency.nl
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", marginBottom: "6px" }}>Instagram</p>
            <a
              href="https://instagram.com/Ace.Creative.Agency"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#F3F5F5", fontSize: "14px", textDecoration: "none" }}
            >
              @Ace.Creative.Agency
            </a>
          </div>
        </div>
      </ScrollReveal>

      {/* WhatsApp button */}
      <ScrollReveal delay={0.15}>
        <a
          href="https://wa.me/31629212150"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            padding: "14px 28px",
            fontSize: "15px",
            fontWeight: 500,
            backgroundColor: "#25D366",
            color: "#000000",
            borderRadius: "9999px",
            textDecoration: "none",
            marginBottom: "48px",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Direct WhatsAppen
        </a>
      </ScrollReveal>

      {/* Form */}
      <ScrollReveal delay={0.2}>
      <div style={{ width: "100%", maxWidth: "520px" }}>
        {sent ? (
          <div style={{ textAlign: "center", padding: "64px 0" }}>
            <div style={{ fontSize: "32px", color: "#C8A968", marginBottom: "16px" }}>✓</div>
            <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#F3F5F5", marginBottom: "8px" }}>Bericht verstuurd!</h2>
            <p style={{ color: "#7A7A7A", marginBottom: "24px", fontSize: "15px" }}>Je e-mailprogramma is geopend. We nemen snel contact met je op.</p>
            <button
              onClick={() => setSent(false)}
              style={{ fontSize: "14px", color: "#555", background: "none", border: "none", cursor: "pointer" }}
            >
              Nieuw bericht sturen
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px", textAlign: "left" }}>
            <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: "16px" }}>
              <div>
                <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "8px" }}>Naam</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jouw naam"
                  style={{ width: "100%", backgroundColor: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#F3F5F5", outline: "none", boxSizing: "border-box" }}
                />
              </div>
              <div>
                <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "8px" }}>Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="jouw@email.com"
                  style={{ width: "100%", backgroundColor: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#F3F5F5", outline: "none", boxSizing: "border-box" }}
                />
              </div>
            </div>

            <div>
              <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "8px" }}>Type project</label>
              <select
                name="subject"
                required
                value={form.subject}
                onChange={handleChange}
                style={{ width: "100%", backgroundColor: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: form.subject ? "#F3F5F5" : "#444", outline: "none", boxSizing: "border-box" }}
              >
                <option value="" disabled>Selecteer een optie</option>
                <option value="Edit">Edit</option>
                <option value="Fotografie">Fotografie</option>
                <option value="Videoproductie">Videoproductie</option>
                <option value="Social Media Management">Social Media Management</option>
                <option value="Andere">Andere</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555", display: "block", marginBottom: "8px" }}>Bericht</label>
              <textarea
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Vertel ons meer over je project..."
                style={{ width: "100%", backgroundColor: "#0f0f0f", border: "1px solid #1a1a1a", borderRadius: "10px", padding: "12px 16px", fontSize: "14px", color: "#F3F5F5", outline: "none", resize: "none", boxSizing: "border-box" }}
              />
            </div>

            <button
              type="submit"
              style={{ width: "100%", padding: "14px 32px", fontSize: "16px", fontWeight: 500, backgroundColor: "#C8A968", color: "#000000", borderRadius: "9999px", border: "none", cursor: "pointer", marginTop: "8px" }}
            >
              Verstuur bericht
            </button>
          </form>
        )}
      </div>
      </ScrollReveal>
    </div>
  );
}
