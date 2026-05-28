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
  const containerRef = useRef<HTMLElement>(null);
  const contentRef   = useRef<HTMLDivElement>(null);
  const bgMeshRef    = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Page-load intro ───────────────────────────────────────────────────
      gsap.timeline({ delay: 0.1 })
        .from(".hero-eyebrow",  { y: 18, opacity: 0, duration: 0.65, ease: "power3.out" })
        .from(".hero-h1",       { y: 40, opacity: 0, duration: 0.9,  ease: "power3.out" }, "-=0.35")
        .from(".hero-body",     { y: 28, opacity: 0, duration: 0.8,  ease: "power3.out" }, "-=0.5")
        .from(".hero-actions",  { y: 18, opacity: 0, duration: 0.7,  ease: "power3.out" }, "-=0.45")
        .from(".hero-kpis",     { y: 14, opacity: 0, duration: 0.6,  ease: "power3.out" }, "-=0.4")
        .from(".hero-graphic",  { scale: 0.85, opacity: 0, duration: 1.1, ease: "power3.out" }, "-=0.85");

      // ── Scroll-driven reveal ──────────────────────────────────────────────
      // NOTE: no pin:true — sticky CSS handles the lock (avoids Lenis conflicts)
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // Text/content fades out and scales slightly down
      scrollTl.to(contentRef.current, {
        opacity: 0,
        scale: 0.92,
        y: -60,
        ease: "none",
      }, 0);

      // Dark abstract mesh scales up and fades in simultaneously
      scrollTl.to(bgMeshRef.current, {
        opacity: 1,
        scale: 1.06,
        ease: "none",
      }, 0);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero-container"
      style={{
        height: "200vh",
        position: "relative",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FFFE 60%, #F0F9FF 100%)",
      }}
    >
      {/* ── Viewport-locked sticky wrapper ───────────────────────────────── */}
      <div className="sticky top-0 overflow-hidden" style={{ height: "100vh" }}>

        {/* ── Dark abstract mesh — fades IN as user scrolls ──────────────── */}
        <div
          ref={bgMeshRef}
          className="absolute inset-0"
          style={{ opacity: 0, willChange: "transform, opacity", zIndex: 2 }}
          aria-hidden="true"
        >
          {/* Base gradient */}
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(135deg, #0C1A2E 0%, #060C16 55%, #110820 100%)" }}
          />
          {/* Glow orbs */}
          <div className="absolute" style={{ top: "15%", left: "8%", width: 580, height: 580, borderRadius: "50%", background: "radial-gradient(circle, rgba(8,145,178,0.3) 0%, transparent 65%)", filter: "blur(55px)" }} />
          <div className="absolute" style={{ bottom: "10%", right: "5%", width: 480, height: 480, borderRadius: "50%", background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)", filter: "blur(50px)" }} />
          <div className="absolute" style={{ top: "45%", right: "28%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(20,184,166,0.18) 0%, transparent 65%)", filter: "blur(40px)" }} />
          {/* Subtle grid mesh */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "linear-gradient(rgba(8,145,178,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(8,145,178,0.07) 1px, transparent 1px)",
              backgroundSize: "64px 64px",
              WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 100%)",
              maskImage: "radial-gradient(ellipse 75% 65% at 50% 50%, black 20%, transparent 100%)",
            }}
          />
          {/* Central glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div style={{ width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle, rgba(8,145,178,0.1) 0%, transparent 70%)", boxShadow: "0 0 120px rgba(8,145,178,0.12)" }} />
          </div>
        </div>

        {/* ── Foreground — content + blobs, fades OUT as user scrolls ────── */}
        <div
          ref={contentRef}
          className="absolute inset-0 flex items-center"
          style={{ willChange: "transform, opacity", zIndex: 3, paddingTop: 80 }}
        >
          {/* Ambient blobs */}
          <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
            <div className="blob blob-1" style={{ top: "8%",   left: "4%",  width: 560, height: 560, background: "radial-gradient(circle, #A7ECD9, #E2F9F5)" }} />
            <div className="blob blob-2" style={{ top: "15%",  right: "6%", width: 440, height: 440, background: "radial-gradient(circle, #D3C7FF, #ECE7FF)" }} />
            <div className="blob blob-3" style={{ bottom: "8%", left: "28%", width: 380, height: 380, background: "radial-gradient(circle, #FFD1D7, #FFE9EC)" }} />
          </div>

          {/* Content grid */}
          <div className="relative z-10 w-full mx-auto px-6" style={{ maxWidth: 1180 }}>
            <div
              className="grid items-center"
              style={{ gridTemplateColumns: "1fr 1fr", gap: 60 }}
            >
              {/* Left: copy */}
              <div>
                <div
                  className="hero-eyebrow"
                  style={{
                    marginBottom: 22,
                    fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
                    letterSpacing: "0.06em", textTransform: "uppercase" as const,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Mesa, AZ · East Valley Chiropractic Clinic
                </div>

                <h1
                  className="hero-h1"
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

                <p
                  className="hero-body"
                  style={{
                    marginTop: 22,
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

                <div
                  className="hero-actions"
                  style={{
                    marginTop: 32, display: "flex",
                    gap: 14, alignItems: "center", flexWrap: "wrap" as const,
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
                  className="hero-kpis"
                  style={{
                    display: "flex", gap: 28,
                    marginTop: 40, paddingTop: 28,
                    borderTop: "1px solid rgba(0,0,0,0.06)",
                    flexWrap: "wrap" as const,
                  }}
                >
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700, color: "#0E7490", lineHeight: 1.2 }}>
                        {s.number}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.76rem", fontWeight: 500, color: "#94A3B8", letterSpacing: "0.03em", marginTop: 3 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: graphic */}
              <div
                className="hero-graphic hidden md:flex"
                style={{ justifyContent: "center", alignItems: "center", position: "relative" }}
              >
                <HeroGraphic />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-indicator" style={{ zIndex: 20 }} aria-hidden="true">
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem",
            fontWeight: 600, color: "#94A3B8",
            letterSpacing: "0.12em", textTransform: "uppercase" as const,
          }}>
            Scroll
          </span>
          <ChevronDown size={18} color="#94A3B8" />
        </div>
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

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", zIndex: 2 }}>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 700, color: "#0C2340", lineHeight: 1.25 }}>Whole-Body</div>
        <div className="text-gradient-teal" style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700 }}>Wellness</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", color: "#94A3B8", marginTop: 4 }}>City Health Services</div>
      </div>

      {services.map((s, i) => {
        const angle = (i / services.length) * 2 * Math.PI - Math.PI / 2;
        const cx = 200 + 172 * Math.cos(angle);
        const cy = 220 + 152 * Math.sin(angle);
        return (
          <div
            key={s.label}
            className="glass"
            style={{
              position: "absolute", left: cx, top: cy,
              transform: "translate(-50%, -50%)",
              borderRadius: 50, padding: "5px 12px",
              fontSize: "0.68rem", fontWeight: 700,
              color: s.color, whiteSpace: "nowrap" as const,
              fontFamily: "var(--font-body)",
              border: `1px solid ${s.color}30`,
            }}
          >
            {s.label}
          </div>
        );
      })}

      <div
        className="glass"
        style={{
          position: "absolute", bottom: "9%", right: "-16px",
          borderRadius: 14, padding: "12px 16px", minWidth: 130,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase" as const, letterSpacing: "0.08em" }}>Mesa Clinic</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.88rem", fontWeight: 700, color: "#0891B2", marginTop: 2, lineHeight: 1.3 }}>1303 S Longmore #8</div>
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", color: "#94A3B8", marginTop: 1 }}>Mesa, AZ 85202</div>
      </div>
    </div>
  );
}
