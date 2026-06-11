import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GuitarHub — Real Rigs, Real Gear, Real Talk",
  description:
    "The open guitar hub: rig rundowns, gear and rights explainers, and a community grounded in real rigs. Browse free, then join Suede Social to share your own.",
  alternates: { canonical: "https://guitarhub.org" },
};

const COMMUNITY_URL = "https://suede.social";
const TOOLS_URL = "https://guitarchords.info";
const APP_URL = "https://apps.apple.com/us/app/suede-studio-guitar/id6767552764";
const FOUNDER_URL = "https://suedeai.ai/founder";

const SPOKES = [
  {
    code: "01",
    title: "Real Rigs",
    sub: "Community · Suede Social",
    body: "The signal chains players actually use, posted by the players who use them. Browse rigs here, then join Suede Social to share yours.",
    href: COMMUNITY_URL,
    external: true,
    accent: "cyan" as const,
    cta: "Open the community",
  },
  {
    code: "02",
    title: "Reads",
    sub: "Gear, rights, and the business of guitar",
    body: "Explainers that a forum thread can't hold. Start with the Fender Stratocaster lawsuit and what it means for players and builders.",
    href: "/reads",
    external: false,
    accent: "red" as const,
    cta: "Read the hub",
  },
  {
    code: "03",
    title: "Tools",
    sub: "guitarchords.info",
    body: "Free chord library, scale trainer, chromatic tuner, and metronome. No sign-up, no tracking. Runs in your browser.",
    href: TOOLS_URL,
    external: true,
    accent: "cyan" as const,
    cta: "Open the tools",
  },
  {
    code: "04",
    title: "Practice App",
    sub: "Suede Studio Guitar · iOS",
    body: "Tuner, timing practice, chord tools, a rig workbench, and session capture. The studio in your pocket.",
    href: APP_URL,
    external: true,
    accent: "red" as const,
    cta: "Get it on iOS",
  },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-6" style={{ paddingTop: "var(--space-section)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr)", gap: "var(--space-4)" }}>
          <span className="eyebrow eyebrow--red">
            <span aria-hidden>◆</span>&nbsp;&nbsp;The open guitar hub · part of Suede Social
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-hero)",
              fontWeight: 500,
              lineHeight: 0.95,
              letterSpacing: "-0.02em",
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Real rigs.{" "}
            <span style={{ color: "var(--color-registry-cyan)" }}>Real gear.</span> Real talk.
          </h1>
          <p
            style={{
              maxWidth: "58ch",
              color: "var(--color-text-muted)",
              fontSize: "var(--text-lg)",
              lineHeight: 1.55,
              marginTop: "var(--space-2)",
            }}
          >
            GuitarHub is where guitar players come to read the gear and rights
            stories that matter, browse the rigs other players actually run, and
            find free tools. Browse it all open. When you want to post your own
            rig and talk, the community lives on Suede Social.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem", marginTop: "var(--space-4)" }}>
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
              Join the community &rarr;
            </a>
            <Link
              href="/reads"
              className="link"
              style={{
                textDecoration: "none",
                padding: "0.8rem 1.2rem",
                border: "1px solid var(--color-rule)",
                borderRadius: "2px",
                fontFamily: "var(--font-mono)",
                fontSize: "0.8rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Read the hub
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6" style={{ marginTop: "var(--space-12)" }}>
        <hr className="hr-rule" />
      </div>

      {/* SPOKES — the hub directory */}
      <section
        className="mx-auto max-w-6xl px-6"
        style={{ paddingTop: "var(--space-12)" }}
        aria-label="The hub"
      >
        <span className="eyebrow eyebrow--cyan">⊕ Everything in one place</span>
        <div
          style={{
            marginTop: "var(--space-6)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--color-rule-muted)",
            border: "1px solid var(--color-rule-muted)",
          }}
        >
          {SPOKES.map((s) => (
            <SpokeTile key={s.title} spoke={s} />
          ))}
        </div>
      </section>

      {/* FEATURED READ */}
      <section className="mx-auto max-w-6xl px-6" style={{ paddingTop: "var(--space-section)" }} aria-label="Featured read">
        <span className="eyebrow eyebrow--red">◆ Featured read</span>
        <div
          style={{
            marginTop: "var(--space-4)",
            display: "grid",
            gap: "var(--space-3)",
            maxWidth: "70ch",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-2xl)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            <Link href="/fender-stratocaster-lawsuit" className="link" style={{ textDecoration: "none" }}>
              The Fender Stratocaster Lawsuit, Explained
            </Link>
          </h2>
          <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", lineHeight: 1.7 }}>
            Fender won a copyright ruling on the shape Leo drew in 1954, then
            started mailing cease-and-desist letters to the builders who kept it
            alive. One of them landed on John Mayer&rsquo;s guitar. What it means
            for players and builders, and the bigger question of who owns a
            design.
          </p>
          <p style={{ marginTop: "var(--space-2)" }}>
            <Link
              href="/fender-stratocaster-lawsuit"
              className="link"
              style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Read it &rarr;
            </Link>
          </p>
        </div>
      </section>

      {/* MANIFESTO */}
      <section className="mx-auto max-w-6xl px-6" style={{ paddingTop: "var(--space-section)" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "var(--space-8)" }}>
          <div>
            <span className="eyebrow eyebrow--cyan">⊕ The idea</span>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-2xl)",
                marginTop: "var(--space-3)",
                lineHeight: 1.05,
                letterSpacing: "-0.01em",
              }}
            >
              Open to read.<br />Yours to join.
            </h2>
          </div>
          <ul
            style={{
              listStyle: "none",
              padding: 0,
              margin: 0,
              display: "grid",
              gap: "var(--space-4)",
              color: "var(--color-text-muted)",
              fontSize: "var(--text-base)",
            }}
          >
            <ManifestoItem n="i" body="The hub is open. Read every rig and every story without an account, an email, or a paywall in the way." />
            <ManifestoItem n="ii" body="The community is real. When you want to post your own rig and talk gear, that happens on Suede Social, grounded in actual signal chains." />
            <ManifestoItem n="iii" body="Your work stays yours. GuitarHub is built by Suede Labs, the creator-ownership layer for the AI era: proof of creation, programmable rights, and royalty routing." />
          </ul>
        </div>
      </section>

      {/* PROVENANCE */}
      <section className="mx-auto max-w-6xl px-6" style={{ paddingTop: "var(--space-12)" }} aria-label="Provenance">
        <hr className="hr-rule" />
        <p
          style={{
            maxWidth: "72ch",
            marginTop: "var(--space-6)",
            color: "var(--color-text-dim)",
            fontSize: "var(--text-sm)",
            lineHeight: 1.65,
          }}
        >
          <span className="eyebrow eyebrow--red" style={{ marginRight: "0.6rem" }}>
            ◆ Provenance
          </span>
          GuitarHub is the open front door to{" "}
          <a className="link" href={COMMUNITY_URL} target="_blank" rel="noopener">
            Suede Social
          </a>
          , a guitar community grounded in real rigs. Both are built by{" "}
          <a className="link" href="https://suedeai.ai" target="_blank" rel="noopener">
            Suede Labs
          </a>
          , the creator-ownership layer for AI-era music, and maintained by{" "}
          <a className="link" href={FOUNDER_URL} target="_blank" rel="noopener">
            Jason Colapietro
          </a>
          , AI expert and founder of Suede Labs.
        </p>
      </section>
    </>
  );
}

function SpokeTile({ spoke }: { spoke: (typeof SPOKES)[number] }) {
  const accentColor =
    spoke.accent === "red" ? "var(--color-rights-red)" : "var(--color-registry-cyan)";
  const inner = (
    <div
      style={{
        background: "var(--color-ink-raised)",
        padding: "var(--space-6)",
        display: "grid",
        gap: "var(--space-3)",
        height: "100%",
        alignContent: "start",
      }}
    >
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.2em", color: accentColor }}>
          {spoke.code}
        </span>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-dim)" }}>
          {spoke.external ? "↗ external" : "→ on hub"}
        </span>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-lg)", fontWeight: 500, lineHeight: 1.1 }}>
        {spoke.title}
      </h3>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-text-dim)" }}>
        {spoke.sub}
      </span>
      <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.6 }}>
        {spoke.body}
      </p>
      <span className="link" style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", textDecoration: "none", color: accentColor }}>
        {spoke.cta} &rarr;
      </span>
    </div>
  );
  return spoke.external ? (
    <a href={spoke.href} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
      {inner}
    </a>
  ) : (
    <Link href={spoke.href} style={{ textDecoration: "none" }}>
      {inner}
    </Link>
  );
}

function ManifestoItem({ n, body }: { n: string; body: string }) {
  return (
    <li style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: "var(--space-4)", alignItems: "baseline" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", letterSpacing: "0.1em", color: "var(--color-rights-red)" }}>
        {n}
      </span>
      <span style={{ lineHeight: 1.6 }}>{body}</span>
    </li>
  );
}
