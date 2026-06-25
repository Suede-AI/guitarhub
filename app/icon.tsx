import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          background: "#050b16",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "4px",
          fontFamily: "sans-serif",
        }}
      >
        <span
          style={{
            fontSize: "20px",
            fontWeight: 800,
            color: "#f5f0e8",
            letterSpacing: "-0.04em",
          }}
        >
          G
        </span>
      </div>
    ),
    { ...size }
  );
}
