"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, Users, FlaskConical, HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

// ─── Card content ─────────────────────────────────────────────────────────────
const CARDS = [
  {
    icon: Target,
    title: "Gentle, Targeted Adjustments",
    desc: "Precise spinal corrections to improve alignment and reduce nerve irritation — mapped to your unique structural blueprint.",
    // Video phase: 0–2 s (spinal column particle column)
  },
  {
    icon: Users,
    title: "Clear Communication & Physical Therapy",
    desc: "Detailed exams with straightforward explanations, plus in-house rehab so every adjustment sticks long-term.",
    // Video phase: 2–4 s (wide orbital loop)
  },
  {
    icon: FlaskConical,
    title: "Integrated Therapies",
    desc: "Physical therapy, rehab exercises, and massage therapy coordinated under one roof for complete, cohesive care.",
    // Video phase: 4–6 s (dual intersecting infinity loop)
  },
  {
    icon: HeartPulse,
    title: "In-House Medical Providers",
    desc: "On-site providers for pain management, medical weight loss, hormone optimization, and peptide therapy — no referrals needed.",
    // Video phase: 6–8 s (high-density spinning sphere)
  },
];

// Active / inactive visual states for each card's glow ring
const ACTIVE_GLOW  = { opacity: 1 };
const INACTIVE_GLOW = { opacity: 0 };

export default function DarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);

  // Glow-ring refs (one per card — GSAP fades these in/out)
  const glow1Ref = useRef<HTMLDivElement>(null);
  const glow2Ref = useRef<HTMLDivElement>(null);
  const glow3Ref = useRef<HTMLDivElement>(null);
  const glow4Ref = useRef<HTMLDivElement>(null);
  const glowRefs = [glow1Ref, glow2Ref, glow3Ref, glow4Ref];

  useGSAP(
    () => {
      // ── Section-entry header reveal ───────────────────────────────────────
      gsap.from(headRef.current, {
        y: 36, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // ── ScrollTrigger + video scrub, deferred until metadata is ready ─────
      const buildScrollTriggers = () => {
        // Kill any stale instances on this trigger before re-building
        ScrollTrigger.getAll()
          .filter((st) => st.vars.trigger === sectionRef.current && st.vars.id === "team-scrub")
          .forEach((st) => st.kill());

        // Initial glow states: Card 1 lit, others dark
        gsap.set([glow2Ref.current, glow3Ref.current, glow4Ref.current], INACTIVE_GLOW);

        // ── Video scrub: progress → currentTime (8 s video, 4 phases) ───────
        // scrub:0.5 for snappy, near-instant tracking
        ScrollTrigger.create({
          id: "team-scrub",
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.5,
          onUpdate: (self) => {
            const v = videoRef.current;
            if (v && v.readyState >= 2 && v.duration) {
              v.currentTime = self.progress * v.duration;
            }
          },
        });

        // ── Glow illumination timeline (synced to same scroll range) ─────────
        // Timeline duration 10; 4 phases each ~2.5 units
        //   Card 1 active:  0–2.5
        //   Card 2 active:  2.5–5
        //   Card 3 active:  5–7.5
        //   Card 4 active:  7.5–10
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        });

        // Card 1 → Card 2 (t = 1.8 – 3)
        tl
          .to(glow1Ref.current, { ...INACTIVE_GLOW, duration: 0.7 }, 1.8)
          .to(glow2Ref.current, { ...ACTIVE_GLOW,   duration: 0.7 }, 2.5)

        // Card 2 → Card 3 (t = 4.3 – 5.5)
          .to(glow2Ref.current, { ...INACTIVE_GLOW, duration: 0.7 }, 4.3)
          .to(glow3Ref.current, { ...ACTIVE_GLOW,   duration: 0.7 }, 5.0)

        // Card 3 → Card 4 (t = 6.8 – 8)
          .to(glow3Ref.current, { ...INACTIVE_GLOW, duration: 0.7 }, 6.8)
          .to(glow4Ref.current, { ...ACTIVE_GLOW,   duration: 0.7 }, 7.5);

        // Force-recalculate all trigger zones after setup
        ScrollTrigger.refresh();
      };

      const video = videoRef.current;
      if (video) {
        if (video.readyState >= 1) {
          buildScrollTriggers();
        } else {
          video.addEventListener("loadedmetadata", buildScrollTriggers, { once: true });
        }
      }

      // Additional refresh once the full page has settled
      if (document.readyState === "complete") {
        ScrollTrigger.refresh();
      } else {
        window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
      }

      // Re-sync video on resize
      ScrollTrigger.addEventListener("refreshInit", () => {
        const v = videoRef.current;
        if (!v || !v.duration) return;
        const st = ScrollTrigger.getAll().find((s) => s.vars.id === "team-scrub");
        if (st) v.currentTime = st.progress * v.duration;
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="team-advantage-section"
      style={{ height: "400vh", position: "relative" }}
    >
      {/* ── Sticky viewport wrapper ─────────────────────────────────────── */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col"
        style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #0D1320 5%, #0A0E1A 15%, #0A0E1A 100%)" }}
      >
        {/* Ambient neon blobs */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden="true" style={{ zIndex: 0 }}>
          <div className="blob blob-1" style={{ top: "10%",  left: "5%",  width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.15), transparent)", opacity: 0.7 }} />
          <div className="blob blob-2" style={{ top: "20%",  right: "3%", width: 420, height: 420, background: "radial-gradient(circle, rgba(139,92,246,0.15), transparent)",  opacity: 0.7 }} />
          <div className="blob blob-3" style={{ bottom: "8%", left: "40%", width: 360, height: 360, background: "radial-gradient(circle, rgba(8,145,178,0.12), transparent)",   opacity: 0.6 }} />
        </div>

        {/* Stars */}
        {STAR_POSITIONS.map((s, i) => (
          <div key={i} className="star" aria-hidden="true" style={{ top: s.top, left: s.left, width: s.size, height: s.size, opacity: s.opacity, animationDelay: s.delay, zIndex: 1 }} />
        ))}

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div
          className="relative flex flex-col h-full mx-auto w-full px-6"
          style={{ maxWidth: 1100, zIndex: 10, paddingTop: 90 }}
        >
          {/* Section header */}
          <div ref={headRef} style={{ textAlign: "center", marginBottom: 36 }}>
            <div
              style={{
                marginBottom: 14, fontSize: "0.75rem", fontWeight: 600,
                color: "#00D4B8", letterSpacing: "0.06em",
                textTransform: "uppercase" as const, fontFamily: "var(--font-body)",
              }}
            >
              Chiropractor-Led · Fully Integrated
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
                fontWeight: 700, color: "#F1F5F9",
                lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 10,
              }}
            >
              A Chiropractor-Led Clinic With a{" "}
              <span className="text-gradient-teal">Full Support Team</span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)", fontSize: "0.95rem",
                lineHeight: 1.72, color: "#64748B",
                maxWidth: 580, margin: "0 auto",
              }}
            >
              Chiropractic care is at the heart of City Health Services. From there, we add
              physical therapy, rehabilitation, and medical services — one coordinated team,
              no silos, no separate referrals.
            </p>
          </div>

          {/* ── 2-column layout ─────────────────────────────────────────── */}
          <div
            className="grid flex-1 items-start gap-10 md:gap-14"
            style={{ gridTemplateColumns: "1fr 1fr", paddingBottom: 32, minHeight: 0 }}
          >
            {/* ── Left: Video stage ──────────────────────────────────── */}
            <div
              id="advantage-video-stage"
              className="hidden md:flex items-center justify-center"
              style={{ height: "100%", position: "relative" }}
            >
              {/* Teal radial glow backdrop — blends with dark bg */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute", inset: -40,
                  background: "radial-gradient(circle at center, rgba(45,212,191,0.08) 0%, transparent 70%)",
                  zIndex: 0,
                }}
              />

              {/* Video container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxHeight: 440,
                  height: "100%",
                  borderRadius: 22,
                  overflow: "hidden",
                  zIndex: 1,
                  boxShadow: "0 0 60px rgba(0,212,184,0.1), 0 24px 60px rgba(0,0,0,0.4)",
                  border: "1px solid rgba(0,212,184,0.12)",
                }}
              >
                <video
                  ref={videoRef}
                  id="team-integration-video"
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  preload="auto"
                  aria-label="Team integration animation showing the clinic's integrated care model"
                >
                  <source src="/team-integration-loop.mp4" type="video/mp4" />
                </video>

                {/* Subtle inner vignette */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute", inset: 0, borderRadius: 22,
                    background: "radial-gradient(ellipse at center, transparent 50%, rgba(10,14,26,0.4) 100%)",
                    pointerEvents: "none",
                  }}
                />
              </div>
            </div>

            {/* ── Right: Glass cards ─────────────────────────────────── */}
            <div style={{ display: "flex", flexDirection: "column" as const, gap: 14 }}>
              {CARDS.map((card, i) => {
                const Icon = card.icon;
                const glowRef = glowRefs[i];
                return (
                  <div
                    key={card.title}
                    style={{
                      borderRadius: 18, padding: "20px 22px",
                      display: "flex", gap: 16, alignItems: "flex-start",
                      position: "relative",
                      // Base glass-dark styles as inline so GSAP can target if needed
                      background: "rgba(255,255,255,0.06)",
                      backdropFilter: "blur(20px)",
                      WebkitBackdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.25)",
                    }}
                  >
                    {/* Glow ring — GSAP animates opacity 0↔1 */}
                    <div
                      ref={glowRef}
                      aria-hidden="true"
                      style={{
                        position: "absolute", inset: -1, borderRadius: 18,
                        border: "1px solid rgba(0,212,184,0.6)",
                        boxShadow: "0 0 30px rgba(0,212,184,0.22), inset 0 0 20px rgba(0,212,184,0.04)",
                        pointerEvents: "none",
                        // Card 1 starts lit; others start hidden (set via gsap.set in buildScrollTriggers)
                        opacity: i === 0 ? 1 : 0,
                      }}
                    />

                    {/* Icon */}
                    <div
                      style={{
                        width: 42, height: 42, borderRadius: 12, flexShrink: 0,
                        background: "rgba(0,212,184,0.12)",
                        border: "1px solid rgba(0,212,184,0.2)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                      }}
                    >
                      <Icon size={20} color="#00D4B8" strokeWidth={1.8} />
                    </div>

                    {/* Text */}
                    <div style={{ position: "relative", zIndex: 1 }}>
                      <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "0.95rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 5, lineHeight: 1.35 }}>
                        {card.title}
                      </h3>
                      <p style={{ fontFamily: "var(--font-body)", fontSize: "0.83rem", lineHeight: 1.65, color: "#64748B" }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

              {/* CTA */}
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  marginTop: 6, padding: "13px 28px", borderRadius: 14,
                  fontSize: "0.875rem", justifyContent: "center",
                  boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
                }}
              >
                Meet Our Chiropractic &amp; Medical Team →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const STAR_POSITIONS = [
  { top: "12%", left: "8%",  size: 3, opacity: 0.6, delay: "0s"   },
  { top: "22%", left: "18%", size: 2, opacity: 0.45, delay: "0.8s" },
  { top: "35%", left: "72%", size: 3, opacity: 0.55, delay: "1.5s" },
  { top: "45%", left: "88%", size: 2, opacity: 0.35, delay: "0.3s" },
  { top: "18%", left: "55%", size: 2, opacity: 0.5, delay: "2.1s" },
  { top: "60%", left: "12%", size: 2, opacity: 0.45, delay: "1.2s" },
  { top: "70%", left: "80%", size: 3, opacity: 0.6, delay: "0.6s" },
  { top: "82%", left: "45%", size: 2, opacity: 0.35, delay: "1.8s" },
];
