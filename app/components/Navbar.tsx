"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = ["Services", "About", "Testimonials", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "1rem",
        left: "1rem",
        right: "1rem",
        zIndex: 50,
        transition: "all 300ms ease",
        fontFamily: "var(--font-body)",
      }}
    >
      <nav
        className="glass-nav"
        style={{
          background: scrolled
            ? "rgba(255,255,255,0.75)"
            : "rgba(255,255,255,0.35)",
          borderRadius: "18px",
          padding: "12px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          boxShadow: scrolled
            ? "0 8px 32px rgba(0,0,0,0.1)"
            : "0 4px 16px rgba(0,0,0,0.05)",
          transition: "all 300ms ease",
        }}
      >
        {/* Logo */}
        <a
          href="#"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            fontWeight: 700,
            color: "#0C2340",
            textDecoration: "none",
            letterSpacing: "-0.02em",
          }}
        >
          Chiro
          <span className="text-gradient-teal">R</span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: "2rem", alignItems: "center" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="nav-link"
            >
              {l}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="btn-primary hidden md:inline-flex"
          style={{
            padding: "10px 22px",
            borderRadius: "12px",
            fontSize: "0.875rem",
            boxShadow: "0 4px 15px rgba(8,145,178,0.3)",
          }}
        >
          Book Appointment
        </a>

        {/* Mobile toggle */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
          className="md:hidden"
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "6px",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {open ? <X size={22} color="#374151" /> : <Menu size={22} color="#374151" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="glass md:hidden"
          style={{
            marginTop: "8px",
            borderRadius: "16px",
            padding: "16px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-body)",
                fontWeight: 500,
                color: "#374151",
                textDecoration: "none",
                padding: "10px 14px",
                borderRadius: "10px",
                transition: "background 200ms",
              }}
              className="nav-link"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary"
            style={{
              marginTop: "8px",
              padding: "12px 22px",
              borderRadius: "12px",
              justifyContent: "center",
              boxShadow: "0 4px 15px rgba(8,145,178,0.3)",
            }}
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
