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
  const heroTextRef  = useRef<HTMLDivElement>(null);
  const videoRef     = useRef<HTMLVideoElement>(null);

  useGSAP(
    () => {
      // ── Page-load intro (runs immediately, independent of video load) ─────
      gsap.timeline({ delay: 0.15 })
        .from(".hero-eyebrow", { y: 18, opacity: 0, duration: 0.7,  ease: "power3.out" })
        .from(".hero-h1",      { y: 40, opacity: 0, duration: 0.95, ease: "power3.out" }, "-=0.35")
        .from(".hero-body",    { y: 28, opacity: 0, duration: 0.8,  ease: "power3.out" }, "-=0.5")
        .from(".hero-actions", { y: 18, opacity: 0, duration: 0.7,  ease: "power3.out" }, "-=0.45")
        .from(".hero-kpis",    { y: 14, opacity: 0, duration: 0.6,  ease: "power3.out" }, "-=0.4");

      // ── ScrollTrigger setup — deferred until video metadata is ready ──────
      // This guarantees ScrollTrigger measures the container AFTER all assets
      // are loaded so start/end positions are pixel-perfect from frame one.
      //
      // NOTE: sticky CSS replaces pin:true (pin:true conflicts with Lenis smooth
      // scroll). anticipatePin is only needed with pin:true so it is omitted.
      const buildScrollTriggers = () => {
        // Kill any stale instances before rebuilding (safe on re-fire)
        ScrollTrigger.getAll()
          .filter((st) => st.vars.trigger === containerRef.current)
          .forEach((st) => st.kill());

        // ── Video scrub: scrub:0.5 = snappy, near-instant response ──────────
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top top",       // triggers the moment the hero hits the top
          end: "bottom bottom",   // fills the full 200vh sticky scroll range
          scrub: 0.5,             // fast scrub — video tracks the wheel closely
          onUpdate: (self) => {
            const v = videoRef.current;
            if (v && v.readyState >= 2 && v.duration) {
              v.currentTime = self.progress * v.duration;
            }
          },
        });

        // ── Text fade: slightly softer scrub for a cinematic feel ───────────
        gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
          },
        }).to(heroTextRef.current, {
          opacity: 0,
          scale: 0.95,
          y: -40,
          ease: "none",
        });

        // Force a full recalculation so every trigger zone is correct on boot
        ScrollTrigger.refresh();
      };

      const video = videoRef.current;
      if (video) {
        if (video.readyState >= 1) {
          // Metadata already available (e.g. cached) — init immediately
          buildScrollTriggers();
        } else {
          // Wait for browser to parse video dimensions/duration before building
          video.addEventListener("loadedmetadata", buildScrollTriggers, { once: true });
        }
      }

      // Also call refresh once the full page (fonts, images) has settled
      if (document.readyState === "complete") {
        ScrollTrigger.refresh();
      } else {
        window.addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
      }

      // ── Re-sync video time after any window resize recalculation ──────────
      ScrollTrigger.addEventListener("refreshInit", () => {
        const v = videoRef.current;
        if (!v || !v.duration) return;
        const st = ScrollTrigger.getAll().find(
          (s) => s.vars.trigger === containerRef.current
        );
        if (st) v.currentTime = st.progress * v.duration;
      });
    },
    { scope: containerRef }
  );

  return (
    <section
      ref={containerRef}
      id="hero-container"
      style={{ height: "200vh", position: "relative" }}
    >
      {/* ── Sticky viewport wrapper ─────────────────────────────────────── */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* ── HTML5 video — scrubs with scroll ─────────────────────────── */}
        <video
          ref={videoRef}
          id="hero-video"
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src="/hero-transition.mp4" type="video/mp4" />
        </video>

        {/* Readability overlay — gradient so text floats cleanly over video */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(6,12,22,0.55) 0%, rgba(6,12,22,0.25) 40%, rgba(6,12,22,0.6) 100%)",
            zIndex: 1,
          }}
          aria-hidden="true"
        />

        {/* ── Hero text layer — fades out on scroll ────────────────────── */}
        <div
          ref={heroTextRef}
          id="hero-text"
          className="absolute inset-0 flex items-center"
          style={{ zIndex: 10, willChange: "transform, opacity", paddingTop: 80 }}
        >
          <div className="w-full mx-auto px-6" style={{ maxWidth: 1180 }}>
            <div className="grid items-center" style={{ gridTemplateColumns: "1fr 1fr", gap: 60 }}>

              {/* Left: copy */}
              <div>
                <div
                  className="hero-eyebrow"
                  style={{
                    marginBottom: 20,
                    fontSize: "0.74rem", fontWeight: 600,
                    color: "#2dd4bf", letterSpacing: "0.08em",
                    textTransform: "uppercase" as const,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  Mesa, AZ · East Valley Chiropractic Clinic
                </div>

                <h1
                  className="hero-h1"
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "clamp(2rem, 4.2vw, 3.6rem)",
                    fontWeight: 700, lineHeight: 1.12,
                    color: "#FFFFFF", letterSpacing: "-0.02em",
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
                    lineHeight: 1.78,
                    color: "rgba(255,255,255,0.78)",
                    maxWidth: 510,
                  }}
                >
                  City Health Services is a chiropractor-led clinic in Mesa offering
                  integrated pain management, neuropathy care, physical therapy,
                  medical weight loss, hormone optimization, and peptide therapy to
                  help you{" "}
                  <strong style={{ color: "#FFFFFF" }}>
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
                      boxShadow: "0 8px 26px rgba(45,212,191,0.3)",
                    }}
                  >
                    Request an Evaluation
                    <ArrowRight size={17} />
                  </a>
                  <a
                    href="tel:4806495297"
                    style={{
                      display: "inline-flex", alignItems: "center", gap: 8,
                      background: "rgba(255,255,255,0.12)",
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: "1px solid rgba(255,255,255,0.25)",
                      borderRadius: 14, padding: "14px 22px",
                      fontFamily: "var(--font-body)", fontWeight: 700,
                      fontSize: "0.95rem", color: "#FFFFFF",
                      textDecoration: "none",
                      transition: "all 200ms",
                    }}
                  >
                    <Phone size={16} color="#2dd4bf" />
                    (480) 649-5297
                  </a>
                </div>

                <div
                  style={{
                    marginTop: 14, display: "flex",
                    alignItems: "flex-start", gap: 6,
                    fontFamily: "var(--font-body)", fontSize: "0.8rem",
                    color: "rgba(255,255,255,0.45)",
                  }}
                >
                  <MapPin size={13} color="#2dd4bf" style={{ flexShrink: 0, marginTop: 2 }} />
                  Serving Mesa, Gilbert, Chandler, Tempe &amp; the East Valley with
                  non-surgical, personalized care
                </div>

                <div
                  className="hero-kpis"
                  style={{
                    display: "flex", gap: 28,
                    marginTop: 40, paddingTop: 28,
                    borderTop: "1px solid rgba(255,255,255,0.1)",
                    flexWrap: "wrap" as const,
                  }}
                >
                  {STATS.map((s) => (
                    <div key={s.label}>
                      <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.05rem", fontWeight: 700, color: "#2dd4bf", lineHeight: 1.2 }}>
                        {s.number}
                      </div>
                      <div style={{ fontFamily: "var(--font-body)", fontSize: "0.76rem", fontWeight: 500, color: "rgba(255,255,255,0.45)", letterSpacing: "0.03em", marginTop: 3 }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: intentionally empty — video fills viewport */}
              <div className="hidden md:block" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="scroll-indicator" style={{ zIndex: 20 }} aria-hidden="true">
          <span style={{
            fontFamily: "var(--font-body)", fontSize: "0.7rem",
            fontWeight: 600, color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.12em", textTransform: "uppercase" as const,
          }}>
            Scroll
          </span>
          <ChevronDown size={18} color="rgba(255,255,255,0.45)" />
        </div>

      </div>
    </section>
  );
}
