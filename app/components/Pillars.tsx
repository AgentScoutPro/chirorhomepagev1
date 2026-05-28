"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Step / panel data ────────────────────────────────────────────────────────
const STEPS = [
  {
    id:    "step-1",
    num:   "01",
    title: "Advanced Chiropractic",
    panelId: "content-chiro",
    tag:   "Pillar One",
    accent: "#2dd4bf",
    gradFrom: "rgba(45,212,191,0.18)",
    borderColor: "rgba(45,212,191,0.35)",
    panelTitle: "Precision Spinal Decompression & Adjustments",
    panelBody:  "Targeting root neurological paths to shut off pain loops permanently — using digital scanning and advanced biomechanical analysis tailored to each patient.",
    bullets: [
      "Digital posture & spinal scanning",
      "Cervical, thoracic & lumbar adjustments",
      "Non-surgical spinal decompression",
      "Neuropathy & nerve pain protocols",
    ],
  },
  {
    id:    "step-2",
    num:   "02",
    title: "Medical Physical Therapy",
    panelId: "content-pt",
    tag:   "Pillar Two",
    accent: "#a78bfa",
    gradFrom: "rgba(167,139,250,0.18)",
    borderColor: "rgba(167,139,250,0.35)",
    panelTitle: "In-House Functional Rehab & Physical Therapy",
    panelBody:  "Re-training soft tissue structures to guarantee adjustments hold long-term — corrective movement science, manual therapy, and post-injury rehabilitation under one roof.",
    bullets: [
      "Functional movement assessment",
      "Corrective exercise programming",
      "Soft tissue & manual therapy",
      "Post-injury & post-surgical rehab",
    ],
  },
  {
    id:    "step-3",
    num:   "03",
    title: "Regenerative & Peptide Support",
    panelId: "content-med",
    tag:   "Pillar Three",
    accent: "#22d3ee",
    gradFrom: "rgba(34,211,238,0.18)",
    borderColor: "rgba(34,211,238,0.35)",
    panelTitle: "Peptide & Custom Metabolic Support",
    panelBody:  "Accelerating cellular tissue healing from the inside out — hormone optimization, peptide therapy, and physician-guided weight loss to support full-body recovery and performance.",
    bullets: [
      "Hormone replacement therapy (HRT)",
      "Peptide therapy for recovery & performance",
      "Medical weight loss programs",
      "Metabolic & energy optimization",
    ],
  },
];

export default function Pillars() {
  const containerRef = useRef<HTMLElement>(null);

  // Step indicator refs
  const step1Ref  = useRef<HTMLDivElement>(null);
  const step2Ref  = useRef<HTMLDivElement>(null);
  const step3Ref  = useRef<HTMLDivElement>(null);

  // Glass panel refs
  const panel1Ref = useRef<HTMLDivElement>(null);
  const panel2Ref = useRef<HTMLDivElement>(null);
  const panel3Ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // ── Initial states ───────────────────────────────────────────────────
      gsap.set([step2Ref.current,  step3Ref.current],  { opacity: 0.35 });
      gsap.set([panel2Ref.current, panel3Ref.current], { opacity: 0, y: 24 });

      // ── Scrubbed timeline ────────────────────────────────────────────────
      // NOTE: no pin:true — sticky CSS handles the viewport lock (avoids Lenis conflicts)
      // Timeline duration 10; transitions happen at ~2.5-4.5 and ~6.5-8.5
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // ── Transition 1: Chiropractic → Physical Therapy (25–45%) ──────────
      tl
        .to(panel1Ref.current, { opacity: 0, y: -24, duration: 0.8 }, 2.5)
        .to(step1Ref.current,  { opacity: 0.35, duration: 0.8 },      2.5)
        .to(panel2Ref.current, { opacity: 1, y: 0, duration: 0.8 },   3.5)
        .to(step2Ref.current,  { opacity: 1, duration: 0.8 },         3.5)

      // ── Transition 2: Physical Therapy → Regenerative (65–85%) ─────────
        .to(panel2Ref.current, { opacity: 0, y: -24, duration: 0.8 }, 6.5)
        .to(step2Ref.current,  { opacity: 0.35, duration: 0.8 },      6.5)
        .to(panel3Ref.current, { opacity: 1, y: 0, duration: 0.8 },   7.5)
        .to(step3Ref.current,  { opacity: 1, duration: 0.8 },         7.5);
    },
    { scope: containerRef }
  );

  const stepRefs  = [step1Ref,  step2Ref,  step3Ref];
  const panelRefs = [panel1Ref, panel2Ref, panel3Ref];

  return (
    <section
      ref={containerRef}
      id="integrated-services-section"
      style={{ height: "300vh", position: "relative", background: "#060C16" }}
    >
      {/* ── Sticky viewport wrapper ─────────────────────────────────────── */}
      <div
        className="sticky top-0 w-full overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="blob blob-1" style={{ top: "5%",   left: "0%",  width: 500, height: 500, background: "radial-gradient(circle, rgba(8,145,178,0.14), transparent)",    opacity: 0.8 }} />
          <div className="blob blob-2" style={{ bottom: "5%", right: "0%", width: 450, height: 450, background: "radial-gradient(circle, rgba(139,92,246,0.12), transparent)", opacity: 0.8 }} />
        </div>

        {/* ── Main two-column layout ────────────────────────────────────── */}
        <div
          className="relative z-10 h-full flex items-center mx-auto px-6"
          style={{ maxWidth: 1180 }}
        >
          <div className="grid w-full items-center gap-12 md:gap-16" style={{ gridTemplateColumns: "5fr 7fr" }}>

            {/* ── Left: Section label + headline + step indicators ──────── */}
            <div>
              {/* Label */}
              <div
                style={{
                  marginBottom: 16, fontSize: "0.72rem", fontWeight: 600,
                  color: "#2dd4bf", letterSpacing: "0.1em",
                  textTransform: "uppercase" as const, fontFamily: "var(--font-body)",
                }}
              >
                Integrated Care Model
              </div>

              {/* Section headline */}
              <h2
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 700, lineHeight: 1.18,
                  color: "#F1F5F9", letterSpacing: "-0.02em",
                  marginBottom: 12,
                }}
              >
                The Chiropractor-Led{" "}
                <span className="text-gradient-teal">Advantage</span>
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-body)", fontSize: "0.95rem",
                  lineHeight: 1.72, color: "#64748B", marginBottom: 44,
                  maxWidth: 380,
                }}
              >
                Traditional chiropractors stop at alignment. We use an integrated
                framework to deliver absolute recovery — without sending you across town.
              </p>

              {/* Step indicators — left border illuminates with active step */}
              <div className="space-y-0" style={{ position: "relative" }}>
                {/* Vertical connecting line */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", left: 0, top: 12, bottom: 12,
                    width: 2,
                    background: "linear-gradient(to bottom, rgba(45,212,191,0.25), rgba(167,139,250,0.2), rgba(34,211,238,0.25))",
                  }}
                />

                {STEPS.map((step, i) => (
                  <div
                    key={step.id}
                    id={step.id}
                    ref={stepRefs[i]}
                    style={{
                      paddingLeft: 24,
                      paddingBottom: i < 2 ? 40 : 0,
                      position: "relative",
                      willChange: "opacity",
                      // active border accent: left border over the connecting line
                      borderLeft: i === 0 ? `2px solid ${step.accent}` : "2px solid transparent",
                      marginLeft: 0,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.68rem", fontWeight: 700,
                        color: step.accent, letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        fontFamily: "var(--font-body)", marginBottom: 5,
                      }}
                    >
                      {step.num}
                    </div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1.15rem", fontWeight: 600,
                        color: "#F1F5F9", lineHeight: 1.3,
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Glassmorphic display frame ─────────────────────── */}
            {/* pointer-events:none on the container; interactive children opt in with pointer-events:auto */}
            <div
              className="relative"
              style={{ height: 460, pointerEvents: "none" }}
            >
              {/* Glass outer shell */}
              <div
                className="relative w-full h-full rounded-2xl overflow-hidden"
                style={{
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)",
                }}
              >
                {STEPS.map((step, i) => (
                  <div
                    key={step.panelId}
                    id={step.panelId}
                    ref={panelRefs[i]}
                    className="absolute inset-0 flex flex-col justify-between"
                    style={{
                      padding: "36px 40px",
                      willChange: "transform, opacity",
                      // Hidden panels must not block interaction
                      // Visible panel's CTA uses pointer-events:auto directly
                    }}
                  >
                    {/* Tag */}
                    <div
                      style={{
                        fontSize: "0.68rem", fontWeight: 700,
                        color: step.accent, letterSpacing: "0.14em",
                        textTransform: "uppercase" as const,
                        fontFamily: "var(--font-body)", marginBottom: 14,
                      }}
                    >
                      {step.tag}
                    </div>

                    {/* Panel title */}
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "clamp(1.2rem, 1.8vw, 1.55rem)",
                        fontWeight: 700, lineHeight: 1.25,
                        color: "#F1F5F9", marginBottom: 12,
                      }}
                    >
                      {step.panelTitle}
                    </h3>

                    {/* Body */}
                    <p
                      style={{
                        fontFamily: "var(--font-body)", fontSize: "0.9rem",
                        lineHeight: 1.7, color: "#94A3B8", marginBottom: 20,
                      }}
                    >
                      {step.panelBody}
                    </p>

                    {/* Bullets */}
                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column" as const, gap: 9, marginBottom: 28 }}>
                      {step.bullets.map((b) => (
                        <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                          <div style={{ width: 5, height: 5, borderRadius: "50%", background: step.accent, flexShrink: 0, marginTop: 6 }} />
                          <span style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", color: "#CBD5E1", lineHeight: 1.5 }}>{b}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Accent gradient strip */}
                    <div
                      style={{
                        height: 64, borderRadius: 12,
                        background: `linear-gradient(to right, ${step.gradFrom}, transparent)`,
                        border: `1px solid ${step.borderColor}`,
                        display: "flex", alignItems: "center", paddingLeft: 20,
                      }}
                    >
                      {/* CTA: explicit pointer-events:auto so it's clickable when visible */}
                      <a
                        href="#contact"
                        className="btn-primary"
                        style={{
                          padding: "9px 20px", borderRadius: 10,
                          fontSize: "0.8rem",
                          boxShadow: `0 4px 16px ${step.gradFrom}`,
                          pointerEvents: "auto",
                        }}
                      >
                        Book a Consultation
                        <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
