"use client";
import { MapPin, Phone, Mail, Clock, Globe, Link, Hash, ExternalLink } from "lucide-react";

const LINKS = {
  Services: ["Precision Adjustments", "Decompression Therapy", "Neurological Care", "Active Recovery", "Pediatric Chiropractic"],
  Company:  ["About Us", "Our Team", "Testimonials", "Blog", "Careers"],
  Support:  ["FAQ", "Insurance & Billing", "Patient Portal", "Accessibility", "Privacy Policy"],
};

const SOCIAL = [
  { icon: Hash,         label: "Instagram", href: "#" },
  { icon: Globe,        label: "Facebook",  href: "#" },
  { icon: Link,         label: "Twitter / X", href: "#" },
  { icon: ExternalLink, label: "YouTube",   href: "#" },
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0C1A2E 0%, #071020 100%)",
        color: "#94A3B8",
        overflow: "hidden",
      }}
    >
      {/* Glow blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "-20%", left: "10%",  width: 500, height: 500, background: "radial-gradient(circle, rgba(8,145,178,0.1), transparent)",    opacity: 0.6 }} />
        <div className="blob blob-2" style={{ top: "-10%", right: "5%",  width: 400, height: 400, background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent)", opacity: 0.5 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "80px 24px 0" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="grid-cols-1 md:grid-cols-4"
        >
          {/* Brand column */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.8rem", fontWeight: 700,
                color: "#F1F5F9", textDecoration: "none",
                letterSpacing: "-0.02em", display: "inline-block",
                marginBottom: 16,
              }}
            >
              Chiro<span className="text-gradient-teal">R</span>
            </a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", lineHeight: 1.75, color: "#64748B", maxWidth: 280, marginBottom: 24 }}>
              Where alignment meets optimal performance. Precision chiropractic care for those who demand the best from their bodies.
            </p>

            {/* Contact details */}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { icon: MapPin, text: "8420 E Shea Blvd, Scottsdale, AZ 85260" },
                { icon: Phone, text: "(480) 555-0192" },
                { icon: Mail,  text: "hello@chiror.com" },
                { icon: Clock, text: "Mon–Sat: 7am – 7pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Icon size={15} color="#0891B2" style={{ flexShrink: 0, marginTop: 2 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", lineHeight: 1.55, color: "#64748B" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 20, letterSpacing: "0.01em" }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "0.875rem",
                        color: "#64748B", textDecoration: "none",
                        transition: "color 200ms",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#A7ECD9")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#64748B")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div
          style={{
            padding: "40px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
          }}
        >
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.15rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
              Wellness Insights, Delivered Weekly
            </h4>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#64748B" }}>
              Evidence-based spinal health tips and exclusive patient resources.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              placeholder="your@email.com"
              aria-label="Email address"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.9rem",
                padding: "11px 18px", borderRadius: 12,
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#E2E8F0", outline: "none",
                minWidth: 220,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(8,145,178,0.5)")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            />
            <button
              type="submit"
              className="btn-primary"
              style={{
                padding: "11px 24px", borderRadius: 12,
                fontSize: "0.875rem",
                boxShadow: "0 6px 20px rgba(8,145,178,0.3)",
              }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "28px 0",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#475569" }}>
            © {new Date().getFullYear()} ChiroR. All rights reserved. &nbsp;·&nbsp; Not a substitute for professional medical advice.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: 38, height: 38, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 200ms", cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(8,145,178,0.2)";
                  e.currentTarget.style.borderColor = "rgba(8,145,178,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                }}
              >
                <Icon size={16} color="#94A3B8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
