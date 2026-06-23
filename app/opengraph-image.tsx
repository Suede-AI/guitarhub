import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "GuitarHub — Real Rigs, Real Gear, Real Talk";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const DARK = "#050b16";
const CREAM = "#f5f0e8";
const RED = "#b91c1c";
const WHITE = "#eef2f7";
const MUTED = "rgba(238,242,247,0.5)";

export default function OpengraphImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: DARK,
          padding: 72,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Subtle grid */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(245,240,232,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(245,240,232,0.04) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Red accent glow bottom-right */}
        <div
          style={{
            position: "absolute",
            right: -80,
            bottom: -80,
            width: 500,
            height: 400,
            background:
              "radial-gradient(ellipse, rgba(185,28,28,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, position: "relative" }}>
          <div
            style={{
              fontSize: 22,
              fontWeight: 800,
              color: CREAM,
              letterSpacing: "-0.01em",
            }}
          >
            GuitarHub
          </div>
          <div
            style={{
              height: 22,
              width: 1,
              background: "rgba(245,240,232,0.25)",
            }}
          />
          <div
            style={{
              fontSize: 14,
              color: MUTED,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            guitarhub.org
          </div>
        </div>

        {/* Main headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: WHITE,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Real Rigs.
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: WHITE,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Real Gear.
          </div>
          <div
            style={{
              fontSize: 88,
              fontWeight: 800,
              color: RED,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
            }}
          >
            Real Talk.
          </div>
          <div
            style={{
              fontSize: 26,
              color: MUTED,
              marginTop: 18,
              letterSpacing: "0.01em",
              maxWidth: 700,
            }}
          >
            Rig rundowns, gear & rights explainers, and a community grounded in real rigs.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <div style={{ fontSize: 16, color: MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Part of Suede Social · By Suede Labs
          </div>
          <div style={{ display: "flex", gap: 20 }}>
            {["Rigs", "Reads", "Tools", "Community"].map((tag) => (
              <div
                key={tag}
                style={{
                  fontSize: 13,
                  color: CREAM,
                  border: "1px solid rgba(245,240,232,0.2)",
                  borderRadius: 5,
                  padding: "5px 13px",
                  letterSpacing: "0.08em",
                }}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
