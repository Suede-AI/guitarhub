import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Real Rigs — The Signal Chains Players Actually Run",
  description:
    "Real rigs from real players: guitars, amps, pedals, and the signal chains behind the tone. Browse on GuitarHub, share yours on Suede Social.",
  alternates: { canonical: "https://guitarhub.org/rigs" },
};

const COMMUNITY_URL = "https://suede.social";

export default function RigsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6" style={{ paddingTop: "var(--space-section)" }}>
      <span className="eyebrow eyebrow--cyan">
        <span aria-hidden>⊕</span>&nbsp;&nbsp;Real Rigs
      </span>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "var(--text-2xl)",
          fontWeight: 500,
          lineHeight: 1.02,
          letterSpacing: "-0.025em",
          margin: "var(--space-4) 0 0",
          maxWidth: "20ch",
        }}
      >
        The signal chains players actually run.
      </h1>
      <p
        style={{
          maxWidth: "60ch",
          color: "var(--color-text-muted)",
          fontSize: "var(--text-lg)",
          lineHeight: 1.5,
          marginTop: "var(--space-4)",
        }}
      >
        Not the gear ads tell you to buy. The guitars, amps, and pedals real
        players reach for, posted by the players who run them, with the routing
        and the reasons. That is the whole idea behind GuitarHub and its
        community, Suede Social.
      </p>

      <div style={{ marginTop: "var(--space-12)" }}>
        <hr className="hr-rule" />
      </div>

      <div
        style={{
          marginTop: "var(--space-8)",
          border: "1px solid var(--color-rule-muted)",
          background: "var(--color-ink-raised)",
          padding: "var(--space-8)",
          display: "grid",
          gap: "var(--space-4)",
        }}
      >
        <span className="eyebrow eyebrow--cyan">⊕ Share your rig</span>
        <h2 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-xl)", fontWeight: 500, lineHeight: 1.1, letterSpacing: "-0.01em" }}>
          The rig board lives on Suede Social.
        </h2>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", lineHeight: 1.65, maxWidth: "60ch" }}>
          Suede Social is the guitar community grounded in real rigs. Post your
          chain, see what other players run, and keep your gear and your music
          tied to a record that is genuinely yours. It is free to join, and it
          is built by Suede Labs, the creator-ownership layer for the AI era.
        </p>
        <div style={{ marginTop: "var(--space-2)" }}>
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener"
            style={{
              textDecoration: "none",
              color: "var(--color-ink)",
              background: "var(--color-registry-cyan)",
              padding: "0.8rem 1.4rem",
              borderRadius: "2px",
              fontFamily: "var(--font-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontWeight: 700,
            }}
          >
            Join Suede Social &rarr;
          </a>
        </div>
      </div>

      <p style={{ marginTop: "var(--space-8)" }}>
        <Link className="link" href="/" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
          &larr; Back to the hub
        </Link>
      </p>
    </section>
  );
}
