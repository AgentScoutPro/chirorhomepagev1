"use client";
import { MapPin, Phone, Mail, Clock, Globe, Hash, ArrowRight, ExternalLink } from "lucide-react";

const LINKS = {
  Services: [
    "Chiropractic Care",
    "Neuropathy Treatment",
    "Pain Management & Rehab",
    "Physical Therapy",
    "Medical Weight Loss",
    "Hormone & Peptide Therapy",
  ],
  Company: ["About Us", "Our Team", "Patient Testimonials", "Blog & Resources", "Careers"],
  Support: ["FAQ", "Insurance & Billing", "Patient Portal", "Accessibility", "Privacy Policy"],
};

const SOCIAL = [
  { icon: Hash,         label: "Instagram", href: "#" },
  { icon: Globe,        label: "Facebook",  href: "#" },
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

      {/* Local SEO band */}
      <div
        style={{
          position: "relative", zIndex: 10,
          background: "rgba(8,145,178,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          padding: "48px 24px",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 24 }}>
          <div style={{ maxWidth: 620 }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.35rem", fontWeight: 700, color: "#E2E8F0", marginBottom: 12 }}>
              Your Mesa Chiropractic &amp; Wellness Clinic
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.78, color: "#64748B" }}>
              City Health Services proudly serves Mesa, Gilbert, Chandler, Tempe, and surrounding East Valley
              communities. If you&apos;re searching for a chiropractor near you, neuropathy treatment in Mesa,
              or a pain management clinic that also offers physical therapy, medical weight loss, hormone
              therapy, and peptide therapy — our team is ready to help.
            </p>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="https://maps.google.com/?q=1303+S+Longmore+8+Mesa+AZ+85202"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 7,
                padding: "11px 20px", borderRadius: 12,
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.875rem",
                color: "#00D4B8", background: "rgba(0,212,184,0.1)",
                border: "1px solid rgba(0,212,184,0.2)",
                textDecoration: "none", transition: "all 200ms",
              }}
            >
              <MapPin size={15} /> Get Directions
            </a>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: "11px 22px", borderRadius: 12, fontSize: "0.875rem", boxShadow: "0 4px 16px rgba(8,145,178,0.3)" }}
            >
              Contact Us <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "68px 24px 0" }}>
        {/* Top row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 44,
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
          className="grid-cols-1 md:grid-cols-4"
        >
          {/* Brand */}
          <div>
            <a
              href="#"
              style={{
                fontFamily: "var(--font-heading)", fontSize: "1.6rem", fontWeight: 700,
                color: "#F1F5F9", textDecoration: "none", letterSpacing: "-0.02em",
                display: "inline-block", marginBottom: 14,
              }}
            >
              City Health<span className="text-gradient-teal"> Services</span>
            </a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.75, color: "#64748B", maxWidth: 280, marginBottom: 22 }}>
              Chiropractor-led care for pain, neuropathy, and whole-body wellness in Mesa and the East Valley.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              {[
                { icon: MapPin, text: "1303 S Longmore #8, Mesa, AZ 85202" },
                { icon: Phone,  text: "(480) 649-5297" },
                { icon: Mail,   text: "info@cityhealthservices.com" },
                { icon: Clock,  text: "Mon–Sat: 8am – 6pm" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <Icon size={14} color="#0891B2" style={{ flexShrink: 0, marginTop: 3 }} />
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", lineHeight: 1.6, color: "#64748B" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(LINKS).map(([heading, items]) => (
            <div key={heading}>
              <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 18 }}>
                {heading}
              </h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      style={{ fontFamily: "var(--font-body)", fontSize: "0.84rem", color: "#64748B", textDecoration: "none", transition: "color 200ms", cursor: "pointer" }}
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
            padding: "34px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: 22,
          }}
        >
          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
              Wellness Insights, Delivered Free
            </h4>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", color: "#64748B" }}>
              Evidence-based pain relief tips and health resources for East Valley patients.
            </p>
          </div>
          <form
            onSubmit={(e) => e.preventDefault()}
            style={{ display: "flex", gap: 10, flexWrap: "wrap" }}
            aria-label="Newsletter signup"
          >
            <input
              type="email" placeholder="your@email.com" aria-label="Email address"
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.9rem",
                padding: "11px 18px", borderRadius: 12,
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                color: "#E2E8F0", outline: "none", minWidth: 220,
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(8,145,178,0.5)")}
              onBlur={(e)  => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
            />
            <button
              type="submit" className="btn-primary"
              style={{ padding: "11px 22px", borderRadius: 12, fontSize: "0.875rem", boxShadow: "0 6px 20px rgba(8,145,178,0.3)" }}
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            padding: "24px 0",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", flexWrap: "wrap", gap: 12,
          }}
        >
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem", color: "#475569" }}>
            © {new Date().getFullYear()} City Health Services · 1303 S Longmore #8, Mesa, AZ 85202 ·
            (480) 649-5297 &nbsp;·&nbsp; Not a substitute for professional medical advice.
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            {SOCIAL.map(({ icon: Icon, label, href }) => (
              <a
                key={label} href={href} aria-label={label}
                style={{
                  width: 36, height: 36, borderRadius: "50%",
                  background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 200ms", cursor: "pointer",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(8,145,178,0.2)"; e.currentTarget.style.borderColor = "rgba(8,145,178,0.4)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
              >
                <Icon size={15} color="#94A3B8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
