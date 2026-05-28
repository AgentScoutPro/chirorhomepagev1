"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Step data ────────────────────────────────────────────────────────────────
const STEPS = [
  {
    num:   "01",
    title: "Schedule Your Comprehensive Evaluation",
    body:  "We replace clinical guesswork with precision metric data mapping to find the true root of your pain loop.",
    image: "/journey-1-evaluation.jpeg",
    alt:   "Patient receiving a comprehensive digital spinal evaluation",
    accent: "#2dd4bf",
  },
  {
    num:   "02",
    title: "Receive Your Multi-Specialty Blueprint",
    body:  "Our chiropractor-led medical team designs a customized, integrated plan combining structural alignment, physical rehab, and advanced cellular support under one roof.",
    image: "/journey-2-blueprint.jpeg",
    alt:   "Personalized multi-specialty treatment blueprint",
    accent: "#a78bfa",
  },
  {
    num:   "03",
    title: "Reclaim Your Unbound Freedom",
    body:  "Walk out of the cycle of temporary medication fixes and live a vibrant, high-performance, pain-free life.",
    image: "/journey-3-result.jpeg",
    alt:   "Patient living a vibrant, pain-free active life",
    accent: "#22d3ee",
  },
];

export default function JourneyMap() {
  const containerRef = useRef<HTMLElement>(null);
  const stickyRef    = useRef<HTMLDivElement>(null);   // background color target
  const twoColRef    = useRef<HTMLDivElement>(null);   // fades out for CTA
  const ctaRef       = useRef<HTMLDivElement>(null);   // grand-finale CTA frame

  // Per-step refs
  const text1Ref = useRef<HTMLDivElement>(null);
  const text2Ref = useRef<HTMLDivElement>(null);
  const text3Ref = useRef<HTMLDivElement>(null);
  const img1Ref  = useRef<HTMLDivElement>(null);
  const img2Ref  = useRef<HTMLDivElement>(null);
  const img3Ref  = useRef<HTMLDivElement>(null);

  const textRefs = [text1Ref, text2Ref, text3Ref];
  const imgRefs  = [img1Ref,  img2Ref,  img3Ref];

  useGSAP(
    () => {
      // ── Initial hidden states ─────────────────────────────────────────────
      gsap.set([text2Ref.current, text3Ref.current], { opacity: 0, y: 30 });
      gsap.set([img2Ref.current,  img3Ref.current],  { opacity: 0, y: 30 });
      gsap.set(ctaRef.current,   { opacity: 0, scale: 0.92 });

      // ── Master scrubbed timeline ──────────────────────────────────────────
      // NOTE: no pin:true — sticky CSS handles viewport lock (Lenis-safe)
      // Total duration 12; mapped to 300 vh of scroll (400vh - 100vh viewport)
      //
      //  0 → 2   : bg dark → light
      //  0 → 4   : Step 1 holds visible
      //  4 → 5.5 : Step 1 → Step 2 cross-fade
      //  5.5→ 7  : Step 2 holds
      //  7 → 8.5 : Step 2 → Step 3 cross-fade
      //  8.5→ 9.5: Step 3 holds
      //  9.5→12  : 2-col fades out, CTA scales in

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      // ── Background: slate-950 → slate-50 ─────────────────────────────────
      tl.to(stickyRef.current, {
        backgroundColor: "#f8fafc",
        duration: 2,
        ease: "none",
      }, 0);

      // ── Step 1 → Step 2 ───────────────────────────────────────────────────
      tl
        .to([text1Ref.current, img1Ref.current], { opacity: 0, y: -30, duration: 0.8 }, 4)
        .to([text2Ref.current, img2Ref.current], { opacity: 1, y: 0,   duration: 0.8 }, 4.7);

      // ── Step 2 → Step 3 ───────────────────────────────────────────────────
      tl
        .to([text2Ref.current, img2Ref.current], { opacity: 0, y: -30, duration: 0.8 }, 7)
        .to([text3Ref.current, img3Ref.current], { opacity: 1, y: 0,   duration: 0.8 }, 7.7);

      // ── Grand-finale CTA reveal ───────────────────────────────────────────
      tl
        .to(twoColRef.current, { opacity: 0, scale: 0.96, duration: 1   }, 9.5)
        .to(ctaRef.current,    { opacity: 1, scale: 1,    duration: 1.2 }, 10);
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="journey-section"
      style={{ height: "400vh", position: "relative" }}
    >
      {/* ── Sticky viewport wrapper ──────────────────────────────────────── */}
      {/* Starts slate-950 (matches #integrated-services-section); GSAP animates to slate-50 */}
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden px-6"
        style={{
          backgroundColor: "#0f172a", // slate-950 — matches previous dark section
          willChange: "background-color",
        }}
      >
        {/* ── Ambient blobs (light palette, appear as bg brightens) ─────── */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
          <div className="blob blob-1" style={{ top: "-10%", left: "5%",   width: 500, height: 500, background: "radial-gradient(circle, rgba(45,212,191,0.12), transparent)" }} />
          <div className="blob blob-2" style={{ bottom: "-8%", right: "5%", width: 450, height: 450, background: "radial-gradient(circle, rgba(167,139,250,0.1), transparent)" }} />
        </div>

        {/* ── Two-column layout ─────────────────────────────────────────── */}
        <div
          ref={twoColRef}
          className="relative z-10 w-full max-w-6xl grid items-center gap-12 md:gap-16"
          style={{ gridTemplateColumns: "1fr 1fr", willChange: "transform, opacity" }}
        >

          {/* ── Left: stacked absolute text blocks ────────────────────── */}
          <div className="relative" style={{ minHeight: 320 }}>
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={textRefs[i]}
                className="absolute inset-0 flex flex-col justify-center"
                style={{
                  willChange: "transform, opacity",
                  // Inactive panels must not capture pointer events
                  pointerEvents: i === 0 ? "auto" : "none",
                }}
              >
                {/* Step number */}
                <div
                  style={{
                    fontSize: "0.7rem", fontWeight: 700,
                    color: step.accent, letterSpacing: "0.14em",
                    textTransform: "uppercase" as const,
                    fontFamily: "var(--font-body)", marginBottom: 14,
                  }}
                >
                  {step.num}
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(1.6rem, 2.8vw, 2.4rem)",
                    fontWeight: 700, lineHeight: 1.2,
                    color: "#FFFFFF",
                    letterSpacing: "-0.02em",
                    marginBottom: 18,
                  }}
                >
                  {step.title}
                </h2>

                {/* Body */}
                <p
                  style={{
                    fontFamily: "var(--font-body)", fontSize: "1rem",
                    lineHeight: 1.75, color: "rgba(203,213,225,0.85)", // slate-300 light
                    maxWidth: 440,
                    marginBottom: 28,
                  }}
                >
                  {step.body}
                </p>

                {/* Step progress dots */}
                <div style={{ display: "flex", gap: 8 }}>
                  {STEPS.map((_, dotIdx) => (
                    <div
                      key={dotIdx}
                      style={{
                        width: dotIdx === i ? 24 : 8,
                        height: 8,
                        borderRadius: 4,
                        background: dotIdx === i ? step.accent : "rgba(255,255,255,0.2)",
                        transition: "width 300ms, background 300ms",
                      }}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* ── Right: glassmorphic showcase container ─────────────────── */}
          {/* pointer-events:none on wrapper; interactive children opt-in */}
          <div
            className="relative w-full rounded-2xl overflow-hidden shadow-xl aspect-square"
            style={{
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              background: "rgba(255,255,255,0.4)",
              border: "1px solid rgba(203,213,225,0.5)", // slate-200/50
              pointerEvents: "none",
            }}
          >
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                ref={imgRefs[i]}
                className="absolute inset-0"
                style={{ willChange: "transform, opacity" }}
              >
                {/* Full-bleed journey image */}
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority={i === 0}
                />

                {/* Subtle bottom gradient for text legibility */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(to top, rgba(15,23,42,0.65) 0%, rgba(15,23,42,0.1) 50%, transparent 100%)",
                  }}
                />

                {/* Step label floating at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0"
                  style={{ padding: "28px 32px" }}
                >
                  <div
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "rgba(255,255,255,0.1)",
                      backdropFilter: "blur(10px)",
                      WebkitBackdropFilter: "blur(10px)",
                      border: `1px solid ${step.accent}40`,
                      borderRadius: 50, padding: "6px 16px",
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: step.accent }} />
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 600, color: step.accent, letterSpacing: "0.1em", textTransform: "uppercase" as const }}>
                      Step {step.num}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* ── Grand-finale CTA frame (fades in at end of timeline) ──────── */}
        <div
          ref={ctaRef}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{
            zIndex: 20,
            pointerEvents: "none",
            willChange: "transform, opacity",
          }}
        >
          {/* Card */}
          <div
            style={{
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(8,145,178,0.15)",
              borderRadius: 28,
              padding: "56px 64px",
              maxWidth: 600,
              boxShadow: "0 32px 80px rgba(8,145,178,0.12), 0 8px 24px rgba(0,0,0,0.06)",
              pointerEvents: "auto",
            }}
          >
            {/* Eyebrow */}
            <div
              style={{
                fontSize: "0.72rem", fontWeight: 700,
                color: "#0891B2", letterSpacing: "0.1em",
                textTransform: "uppercase" as const,
                fontFamily: "var(--font-body)", marginBottom: 20,
              }}
            >
              Your Journey Starts Here
            </div>

            {/* Headline */}
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700, lineHeight: 1.18,
                color: "#0C2340", letterSpacing: "-0.02em",
                marginBottom: 18,
              }}
            >
              Ready to Rewrite Your<br />
              <span className="text-gradient-teal">Health Story?</span>
            </h2>

            {/* Sub */}
            <p
              style={{
                fontFamily: "var(--font-body)", fontSize: "1rem",
                lineHeight: 1.72, color: "#475569",
                maxWidth: 400, margin: "0 auto 36px",
              }}
            >
              Take the first step toward a life without chronic pain — your
              comprehensive evaluation is waiting.
            </p>

            {/* Pulsing CTA button */}
            <a
              href="#contact"
              className="btn-primary btn-cta-pulse"
              style={{
                padding: "16px 40px",
                borderRadius: 14,
                fontSize: "1rem",
                boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
                display: "inline-flex",
              }}
            >
              Request Your Evaluation
              <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </a>

            {/* Supporting line */}
            <p
              style={{
                marginTop: 18,
                fontFamily: "var(--font-body)", fontSize: "0.8rem",
                color: "#94A3B8",
              }}
            >
              No obligation · City Health Services · Mesa, AZ
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
