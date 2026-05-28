"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Step + image panel data ──────────────────────────────────────────────────
const STEPS = [
  {
    id:      "step-1",
    num:     "01",
    title:   "Advanced Chiropractic",
    panelId: "content-chiro",
    accent:  "#2dd4bf",
    tag:     "Pillar One",
    image:   "/chiro-pillar.jpeg",
    alt:     "Precision chiropractic spinal adjustment",
    body:    "Targeting root neurological paths to shut off pain loops permanently — digital scanning + advanced biomechanical analysis for every patient.",
  },
  {
    id:      "step-2",
    num:     "02",
    title:   "Medical Physical Therapy",
    panelId: "content-pt",
    accent:  "#a78bfa",
    tag:     "Pillar Two",
    image:   "/pt-pillar.jpeg",
    alt:     "Integrated physical therapy and rehabilitation",
    body:    "Re-training soft tissue structures to guarantee adjustments hold long-term — corrective movement science, manual therapy, and post-injury rehab under one roof.",
  },
  {
    id:      "step-3",
    num:     "03",
    title:   "Regenerative & Peptide Support",
    panelId: "content-med",
    accent:  "#22d3ee",
    tag:     "Pillar Three",
    image:   "/medical-pillar.jpeg",
    alt:     "Regenerative medicine, peptides and metabolic support",
    body:    "Accelerating cellular healing from the inside out — hormone optimization, peptide therapy, and physician-guided weight loss for full-body recovery.",
  },
];

export default function Pillars() {
  const containerRef = useRef<HTMLElement>(null);

  // Step indicator refs
  const step1Ref = useRef<HTMLDivElement>(null);
  const step2Ref = useRef<HTMLDivElement>(null);
  const step3Ref = useRef<HTMLDivElement>(null);

  // Glass image-panel refs
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  const stepRefs  = [step1Ref,  step2Ref,  step3Ref];
  const panelRefs = [panel1Ref, panel2Ref, panel3Ref];

  useGSAP(
    () => {
      // ── Initial hidden states ────────────────────────────────────────────
      gsap.set([step2Ref.current,  step3Ref.current],  { opacity: 0.35 });
      gsap.set([panel2Ref.current, panel3Ref.current], { opacity: 0, y: 30 });

      // ── Scrubbed timeline ────────────────────────────────────────────────
      // NOTE: no pin:true — sticky CSS handles the lock (Lenis-safe)
      // Duration 10; transitions at 25–45 % and 65–85 % of scroll range
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // ── Transition 1: Chiropractic → Physical Therapy ───────────────────
      tl
        .to(panel1Ref.current, { opacity: 0, y: -30, duration: 0.8 }, 2.5)
        .to(step1Ref.current,  { opacity: 0.35,      duration: 0.8 }, 2.5)
        .to(panel2Ref.current, { opacity: 1, y: 0,   duration: 0.8 }, 3.5)
        .to(step2Ref.current,  { opacity: 1,          duration: 0.8 }, 3.5)

      // ── Transition 2: Physical Therapy → Regenerative ───────────────────
        .to(panel2Ref.current, { opacity: 0, y: -30, duration: 0.8 }, 6.5)
        .to(step2Ref.current,  { opacity: 0.35,      duration: 0.8 }, 6.5)
        .to(panel3Ref.current, { opacity: 1, y: 0,   duration: 0.8 }, 7.5)
        .to(step3Ref.current,  { opacity: 1,          duration: 0.8 }, 7.5);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="integrated-services-section"
      className="bg-slate-950 text-white"
      style={{ height: "300vh", position: "relative" }}
    >
      {/* ── Sticky viewport wrapper ─────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center px-6 overflow-hidden">

        {/* Background ambient blobs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="blob blob-1" style={{ top: "5%",   left: "0",   width: 480, height: 480, background: "radial-gradient(circle, rgba(8,145,178,0.12), transparent)", opacity: 0.9 }} />
          <div className="blob blob-2" style={{ bottom: "5%", right: "0",  width: 420, height: 420, background: "radial-gradient(circle, rgba(139,92,246,0.1), transparent)",  opacity: 0.9 }} />
        </div>

        {/* ── 2-column layout ─────────────────────────────────────────────── */}
        <div className="relative z-10 w-full max-w-6xl grid items-center gap-12 md:gap-16" style={{ gridTemplateColumns: "5fr 7fr" }}>

          {/* ── Left: step indicators ─────────────────────────────────── */}
          <div>
            {/* Section label */}
            <div
              style={{
                marginBottom: 14, fontSize: "0.72rem", fontWeight: 600,
                color: "#2dd4bf", letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--font-body)",
              }}
            >
              Integrated Care Model
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700, lineHeight: 1.18,
                color: "#F1F5F9", letterSpacing: "-0.02em",
                marginBottom: 10,
              }}
            >
              The Chiropractor-Led{" "}
              <span className="text-gradient-teal">Advantage</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.93rem",
                lineHeight: 1.72, color: "#64748B",
                marginBottom: 40, maxWidth: 360,
              }}
            >
              Traditional chiropractors stop at alignment. We use an integrated
              framework to deliver absolute recovery — without sending you across town.
            </p>

            {/* Step indicators */}
            <div style={{ position: "relative" }}>
              {/* Vertical connecting line */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", left: 0, top: 12, bottom: 12,
                  width: 2,
                  background: "linear-gradient(to bottom, rgba(45,212,191,0.3), rgba(167,139,250,0.2), rgba(34,211,238,0.25))",
                }}
              />

              {STEPS.map((step, i) => (
                <div
                  key={step.id}
                  id={step.id}
                  ref={stepRefs[i]}
                  style={{
                    paddingLeft: 24,
                    paddingBottom: i < 2 ? 36 : 0,
                    position: "relative",
                    willChange: "opacity",
                    /* Active step illuminates left border over the connecting line */
                    borderLeft: i === 0 ? `2px solid ${step.accent}` : "2px solid transparent",
                  }}
                >
                  <div
                    style={{
                      fontSize: "0.67rem", fontWeight: 700,
                      color: step.accent, letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      fontFamily: "var(--font-body)", marginBottom: 4,
                    }}
                  >
                    {step.num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.15rem", fontWeight: 600,
                      color: "#F1F5F9", lineHeight: 1.3,
                      marginBottom: 6,
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.82rem", lineHeight: 1.6,
                      color: "#475569",
                    }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: glassmorphic card + image panels ───────────────── */}
          {/* pointer-events:none on wrapper; CTA links inside opt in with pointer-events:auto */}
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-square"
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              pointerEvents: "none",
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.panelId}
                id={step.panelId}
                ref={panelRefs[i]}
                className="absolute inset-0"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Full-bleed image */}
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />

                {/* Gradient overlay for text readability */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(6,12,22,0.85) 0%, rgba(6,12,22,0.2) 55%, transparent 100%)",
                  }}
                />

                {/* Text overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0" style={{ padding: "32px 36px" }}>
                  <div
                    style={{
                      fontSize: "0.67rem", fontWeight: 700,
                      color: step.accent, letterSpacing: "0.14em",
                      textTransform: "uppercase" as const,
                      fontFamily: "var(--font-body)", marginBottom: 8,
                    }}
                  >
                    {step.tag}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "clamp(1.1rem, 1.8vw, 1.45rem)",
                      fontWeight: 700, lineHeight: 1.25,
                      color: "#FFFFFF",
                    }}
                  >
                    {
                      [
                        "Precision Spinal Decompression & Adjustments",
                        "In-House Functional Rehab & Physical Therapy",
                        "Peptide & Custom Metabolic Support",
                      ][i]
                    }
                  </h3>
                  {/* Explicit pointer-events:auto so this CTA is always clickable */}
                  <a
                    href="#contact"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 6,
                      marginTop: 14,
                      fontFamily: "var(--font-body)", fontSize: "0.82rem",
                      fontWeight: 600, color: step.accent,
                      textDecoration: "none",
                      pointerEvents: "auto",
                      cursor: "pointer",
                    }}
                  >
                    Book a Consultation →
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
