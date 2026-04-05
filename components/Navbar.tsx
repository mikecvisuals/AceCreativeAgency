"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "Over ons" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, borderBottom: "1px solid #1a1a1a", backgroundColor: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}>
      <nav style={{ maxWidth: "1152px", margin: "0 auto", height: "80px", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 24px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="Ace Creative Agency" style={{ height: "70px", width: "auto" }} />
        </Link>

        {/* Desktop nav */}
        {!isMobile && (
          <ul style={{ display: "flex", alignItems: "center", gap: "32px", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link href={href} style={{ fontSize: "14px", textDecoration: "none", color: pathname === href ? "#C8A968" : "#7A7A7A" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button
            style={{ display: "flex", flexDirection: "column", gap: "5px", padding: "8px", background: "none", border: "none", cursor: "pointer", WebkitTapHighlightColor: "transparent" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#F3F5F5", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#F3F5F5", borderRadius: "2px", transition: "opacity 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "22px", height: "2px", backgroundColor: "#F3F5F5", borderRadius: "2px", transition: "transform 0.2s", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      {isMobile && menuOpen && (
        <div style={{ borderTop: "1px solid #1a1a1a", backgroundColor: "#000000" }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "32px 24px", gap: "28px" }}>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{ fontSize: "16px", letterSpacing: "0.1em", textDecoration: "none", color: pathname === href ? "#C8A968" : "#7A7A7A" }}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
