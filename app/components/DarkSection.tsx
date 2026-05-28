"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Moon, Zap, Shield, Wifi } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const FEATURES = [
  { icon: Moon,   title: "Sleep Restoration",       desc: "Cervical alignment protocols that directly improve deep-sleep cycles by relieving nerve interference at the brainstem." },
  { icon: Zap,    title: "Neuro Performance",        desc: "Precision upper cervical adjustments to remove neurological interference and restore peak CNS communication." },
  { icon: Shield, title: "Spinal Decompression",     desc: "Advanced traction therapy that creates negative pressure within the disc, promoting natural healing and pain elimination." },
  { icon: Wifi,   title: "Biofeedback Analysis",     desc: "Real-time neurological scanning maps stress patterns across your nervous system so every adjustment is data-driven." },
];

export default function DarkSection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const headRef     = useRef<HTMLDivElement>(null);
  const cardsRef    = useRef<HTMLDivElement>(null);
  const moonRef     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });

      gsap.from(moonRef.current, {
        scale: 0.6, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: moonRef.current, start: "top 85%" },
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 45, opacity: 0, duration: 0.8, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 78%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "0 0 110px",
        background:
          "linear-gradient(180deg, #FFFFFF 0%, #0D1320 6%, #0A0E1A 20%, #0A0E1A 100%)",
      }}
    >
      {/* Neon gradient blobs */}
      <div style={{ position: "absolute", inset: "10% 0 0", overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "10%",  left: "5%",  width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.18), transparent)", opacity: 0.7 }} />
        <div className="blob blob-2" style={{ top: "20%",  right: "3%", width: 420, height: 420, background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent)",  opacity: 0.7 }} />
        <div className="blob blob-3" style={{ bottom: "8%", left: "40%", width: 360, height: 360, background: "radial-gradient(circle, rgba(8,145,178,0.15), transparent)",   opacity: 0.6 }} />
      </div>

      {/* Stars */}
      {STAR_POSITIONS.map((s, i) => (
        <div
          key={i}
          className="star"
          style={{
            top: s.top, left: s.left,
            width: s.size, height: s.size,
            opacity: s.opacity,
            animationDelay: s.delay,
          }}
        />
      ))}

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "100px 24px 0" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(0,212,184,0.1)",
              border: "1px solid rgba(0,212,184,0.25)",
              borderRadius: 50, padding: "6px 16px", marginBottom: 18,
              fontSize: "0.75rem", fontWeight: 600,
              color: "#00D4B8", letterSpacing: "0.06em",
              textTransform: "uppercase", fontFamily: "var(--font-body)",
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00D4B8", display: "inline-block" }} />
            Deep Recovery & Neurological Balance
          </div>

          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#F1F5F9",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 18,
            }}
          >
            Heal While You{" "}
            <span className="text-gradient-violet">Sleep.</span>
            <br />
            Perform While You{" "}
            <span className="text-gradient-teal">Live.</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#94A3B8",
              maxWidth: 540,
              margin: "0 auto",
            }}
          >
            True recovery begins at a neurological level. Our advanced protocols
            target the nervous system — resetting stress patterns, restoring
            sleep, and rebuilding resilience from the inside out.
          </p>
        </div>

        {/* Moon graphic + cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Moon visual */}
          <div ref={moonRef} className="hidden md:flex" style={{ justifyContent: "center" }}>
            <MoonGraphic />
          </div>

          {/* Feature cards */}
          <div
            ref={cardsRef}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="glass-dark neon-card"
                  style={{ borderRadius: 18, padding: "22px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(0,212,184,0.12)",
                      border: "1px solid rgba(0,212,184,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#00D4B8" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontSize: "1rem",
                        fontWeight: 600,
                        color: "#E2E8F0",
                        marginBottom: 6,
                      }}
                    >
                      {f.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "var(--font-body)",
                        fontSize: "0.875rem",
                        lineHeight: 1.65,
                        color: "#64748B",
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MoonGraphic() {
  return (
    <div style={{ position: "relative", width: 340, height: 380 }}>
      {/* Outer glow ring */}
      <div
        className="pulse-ring"
        style={{
          position: "absolute", inset: -20, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
        }}
      />

      {/* Moon body */}
      <div
        style={{
          position: "absolute", top: "12%", left: "15%",
          width: "70%", height: "60%",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #1E1B4B, #312E81)",
          boxShadow: "0 0 60px rgba(139,92,246,0.35), inset -20px -10px 40px rgba(0,0,0,0.6)",
        }}
      />

      {/* Moon crescent highlight */}
      <div
        style={{
          position: "absolute", top: "13%", left: "20%",
          width: "18%", height: "55%",
          borderRadius: "50%",
          background: "linear-gradient(to right, transparent, rgba(167,139,250,0.15))",
        }}
      />

      {/* Neon ring around moon */}
      <div
        style={{
          position: "absolute", top: "8%", left: "11%",
          width: "78%", height: "65%",
          borderRadius: "50%",
          border: "1px solid rgba(139,92,246,0.3)",
          boxShadow: "0 0 30px rgba(139,92,246,0.2)",
        }}
      />

      {/* Small floating glass cards */}
      <div
        className="glass-dark"
        style={{
          position: "absolute", top: "5%", right: "0",
          borderRadius: 14, padding: "10px 14px", minWidth: 110,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Sleep Quality</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, color: "#A78BFA" }}>+47%</div>
      </div>

      <div
        className="glass-dark"
        style={{
          position: "absolute", bottom: "15%", left: "0",
          borderRadius: 14, padding: "10px 14px", minWidth: 110,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.65rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>Nerve Signal</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 700, color: "#00D4B8" }}>Optimal</div>
      </div>

      {/* Orbit dots */}
      {[
        { angle:  30, r: 50, color: "#A78BFA" },
        { angle: 140, r: 48, color: "#00D4B8" },
        { angle: 250, r: 52, color: "#F472B6" },
      ].map((dot, i) => {
        const cx = 50 + dot.r * Math.cos((dot.angle * Math.PI) / 180);
        const cy = 39 + (dot.r * 0.7) * Math.sin((dot.angle * Math.PI) / 180);
        return (
          <div
            key={i}
            style={{
              position: "absolute",
              left: `${cx}%`, top: `${cy}%`,
              width: 8, height: 8,
              borderRadius: "50%",
              background: dot.color,
              boxShadow: `0 0 12px ${dot.color}`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </div>
  );
}

const STAR_POSITIONS = [
  { top: "12%", left: "8%",  size: 3, opacity: 0.7, delay: "0s"    },
  { top: "22%", left: "18%", size: 2, opacity: 0.5, delay: "0.8s"  },
  { top: "35%", left: "72%", size: 3, opacity: 0.6, delay: "1.5s"  },
  { top: "45%", left: "88%", size: 2, opacity: 0.4, delay: "0.3s"  },
  { top: "18%", left: "55%", size: 2, opacity: 0.6, delay: "2.1s"  },
  { top: "60%", left: "12%", size: 2, opacity: 0.5, delay: "1.2s"  },
  { top: "70%", left: "80%", size: 3, opacity: 0.7, delay: "0.6s"  },
  { top: "82%", left: "45%", size: 2, opacity: 0.4, delay: "1.8s"  },
  { top: "28%", left: "92%", size: 2, opacity: 0.5, delay: "0.4s"  },
  { top: "55%", left: "62%", size: 3, opacity: 0.3, delay: "2.5s"  },
];
