"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ChevronDown, Phone, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { number: "Non-Surgical", label: "Pain Relief Solutions" },
  { number: "Integrated",   label: "Chiro + Medical Care" },
  { number: "East Valley",  label: "Mesa, AZ Clinic" },
];

export default function Hero() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const subRef      = useRef<HTMLDivElement>(null);
  const ctaRef      = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const graphicRef  = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(headingRef.current, { y: 50, opacity: 0, duration: 1,    ease: "power3.out" })
        .from(subRef.current,     { y: 35, opacity: 0, duration: 0.85, ease: "power3.out" }, "-=0.55")
        .from(ctaRef.current,     { y: 25, opacity: 0, duration: 0.75, ease: "power3.out" }, "-=0.4")
        .from(statsRef.current,   { y: 20, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.4")
        .from(graphicRef.current, { scale: 0.82, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1.1");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(headingRef.current,  { y: p * -70,  opacity: 1 - p * 1.6 });
          gsap.set(subRef.current,      { y: p * -45,  opacity: 1 - p * 2   });
          gsap.set(ctaRef.current,      { y: p * -25,  opacity: 1 - p * 2.5 });
          gsap.set(statsRef.current,    { y: p * -15,  opacity: 1 - p * 2.5 });
          gsap.set(graphicRef.current,  { scale: 1 + p * 0.25, opacity: 1 - p * 0.6 });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FFFE 60%, #F0F9FF 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "110px",
        paddingBottom: "60px",
      }}
    >
      {/* Blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "8%",   left: "4%",  width: 560, height: 560, background: "radial-gradient(circle, #A7ECD9, #E2F9F5)" }} />
        <div className="blob blob-2" style={{ top: "15%",  right: "6%", width: 440, height: 440, background: "radial-gradient(circle, #D3C7FF, #ECE7FF)" }} />
        <div className="blob blob-3" style={{ bottom: "8%", left: "28%", width: 380, height: 380, background: "radial-gradient(circle, #FFD1D7, #FFE9EC)" }} />
      </div>

      <div
        style={{
          position: "relative", zIndex: 10,
          maxWidth: 1180, width: "100%",
          margin: "0 auto", padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left: text */}
        <div>
          <div ref={headingRef}>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(8,145,178,0.08)", border: "1px solid rgba(8,145,178,0.2)",
                borderRadius: 50, padding: "6px 16px", marginBottom: 22,
                fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
                letterSpacing: "0.06em", textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0891B2", display: "inline-block" }} />
              Mesa, AZ · East Valley Chiropractic Clinic
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2rem, 4.2vw, 3.5rem)",
                fontWeight: 700, lineHeight: 1.13,
                color: "#0C2340", letterSpacing: "-0.02em",
              }}
            >
              Chiropractic Care,{" "}
              <span className="text-gradient-teal">Pain Relief</span>
              {" "}&amp; Wellness<br />in the East Valley
            </h1>
          </div>

          <div ref={subRef} style={{ marginTop: 22 }}>
            <p
              style={{
                fontFamily: "var(--font-body)", fontSize: "1.05rem",
                lineHeight: 1.78, color: "#475569", maxWidth: 510,
              }}
            >
              City Health Services is a chiropractor-led clinic in Mesa offering
              integrated pain management, neuropathy care, physical therapy,
              medical weight loss, hormone optimization, and peptide therapy to
              help you{" "}
              <strong style={{ color: "#0C2340" }}>
                move better, feel better, and live better.
              </strong>
            </p>
          </div>

          <div
            ref={ctaRef}
            style={{
              marginTop: 32, display: "flex",
              gap: 14, alignItems: "center", flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "14px 28px", borderRadius: 14, fontSize: "0.95rem",
                boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
              }}
            >
              Request an Evaluation
              <ArrowRight size={17} />
            </a>
            <a
              href="tel:4806495297"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.8)",
                borderRadius: 14, padding: "14px 22px",
                fontFamily: "var(--font-body)", fontWeight: 700,
                fontSize: "0.95rem", color: "#0C2340",
                textDecoration: "none",
                boxShadow: "0 4px 16px rgba(0,0,0,0.07)",
                transition: "all 200ms",
              }}
            >
              <Phone size={16} color="#0891B2" />
              (480) 649-5297
            </a>
          </div>

          <div
            style={{
              marginTop: 14, display: "flex", alignItems: "flex-start", gap: 6,
              fontFamily: "var(--font-body)", fontSize: "0.8rem", color: "#94A3B8",
            }}
          >
            <MapPin size={13} color="#0891B2" style={{ flexShrink: 0, marginTop: 2 }} />
            Serving Mesa, Gilbert, Chandler, Tempe &amp; the East Valley with
            non-surgical, personalized care
          </div>

          <div
            ref={statsRef}
            style={{
              display: "flex", gap: 28,
              marginTop: 40, paddingTop: 28,
              borderTop: "1px solid rgba(0,0,0,0.06)",
              flexWrap: "wrap",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)", fontSize: "1.05rem",
                    fontWeight: 700, color: "#0E7490", lineHeight: 1.2,
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "0.76rem",
                    fontWeight: 500, color: "#94A3B8",
                    letterSpacing: "0.03em", marginTop: 3,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: graphic */}
        <div
          ref={graphicRef}
          className="hidden md:flex"
          style={{ justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          <HeroGraphic />
        </div>
      </div>

      <div className="scroll-indicator" aria-hidden="true">
        <span
          style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem",
            fontWeight: 600, color: "#94A3B8",
            letterSpacing: "0.12em", textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={18} color="#94A3B8" />
      </div>
    </section>
  );
}

function HeroGraphic() {
  const services = [
    { label: "Chiropractic",        color: "#0891B2" },
    { label: "Neuropathy Care",     color: "#8B5CF6" },
    { label: "Physical Therapy",    color: "#14B8A6" },
    { label: "Weight Loss",         color: "#F43F5E" },
    { label: "Hormones & Peptides", color: "#EA580C" },
    { label: "Pain Management",     color: "#0891B2" },
  ];

  return (
    <div style={{ position: "relative", width: 400, height: 440 }}>
      <div
        className="spin-ring"
        style={{
          position: "absolute", inset: -24, borderRadius: "50%",
          background: "conic-gradient(from 0deg, transparent 0%, rgba(8,145,178,0.1) 20%, transparent 40%, rgba(139,92,246,0.1) 60%, transparent 80%)",
        }}
      />
      <div className="glass glow-card" style={{ position: "absolute", inset: "30px", borderRadius: "50%" }} />

      {/* Center text */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center", zIndex: 2,
        }}
      >
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 700, color: "#0C2340", lineHeight: 1.25 }}>
          Whole-Body
        </div>
        <div className="text-gradient-teal" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700 }}>
          Wellness
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "#94A3B8", marginTop: 4 }}>
          City Health Services
        </div>
      </div>

      {/* Service pills orbiting */}
      {services.map((s, i) => {
        const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
        const rx = 172, ry = 152;
        const cx = 200 + rx * Math.cos(angle);
        const cy = 220 + ry * Math.sin(angle);
        return (
          <div
            key={s.label}
            className="glass"
            style={{
              position: "absolute",
              left: cx, top: cy,
              transform: "translate(-50%, -50%)",
              borderRadius: 50, padding: "5px 12px",
              fontSize: "0.68rem", fontWeight: 700,
              color: s.color, whiteSpace: "nowrap",
              fontFamily: "var(--font-body)",
              border: `1px solid ${s.color}30`,
            }}
          >
            {s.label}
          </div>
        );
      })}

      {/* Address card */}
      <div
        className="glass"
        style={{
          position: "absolute", bottom: "9%", right: "-16px",
          borderRadius: 14, padding: "12px 16px", minWidth: 130,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Mesa Clinic
        </div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.88rem", fontWeight: 700, color: "#0891B2", marginTop: 2, lineHeight: 1.3 }}>
          1303 S Longmore #8
        </div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "#94A3B8", marginTop: 1 }}>
          Mesa, AZ 85202
        </div>
      </div>
    </div>
  );
}
