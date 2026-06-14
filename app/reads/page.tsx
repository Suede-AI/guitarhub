import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Reads — Gear, Rights, and the Business of Guitar",
  description:
    "Long-form guitar reads from GuitarHub: gear, rights, and the business of the instrument. Explainers a forum thread can't hold.",
  alternates: { canonical: "https://guitarhub.org/reads" },
};

type Read = {
  href: string;
  title: string;
  dek: string;
  date: string;
  tag: string;
};

const READS: Read[] = [
  {
    href: "/rights-metadata-dark-matter",
    title: "Rights Metadata Is the Dark Matter of the Creative Economy",
    dek: "It governs everything. Almost nobody can see it. What rights metadata is, why it breaks, and what a working infrastructure layer looks like — for every creator who has ever made something and wondered why the money disappeared.",
    date: "June 14, 2026",
    tag: "Music IP & Rights",
  },
  {
    href: "/fender-stratocaster-lawsuit",
    title: "The Fender Stratocaster Lawsuit, Explained",
    dek: "Fender won a copyright ruling on the 1954 Strat body and started mailing cease-and-desist letters. One landed on John Mayer's Silver Sky. What it means for players and builders.",
    date: "June 11, 2026",
    tag: "Guitar Industry",
  },
];

export default function ReadsPage() {
  return (
    <section className="mx-auto max-w-3xl px-6" style={{ paddingTop: "var(--space-section)" }}>
      <span className="eyebrow eyebrow--red">
        <span aria-hidden>◆</span>&nbsp;&nbsp;Reads
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
        Gear, rights, and the business of guitar.
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
        The stories behind the instruments, the gear, and who gets to own it.
        New reads land here first.
      </p>

      <div style={{ marginTop: "var(--space-12)" }}>
        <hr className="hr-rule" />
      </div>

      <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-8) 0 0", display: "grid", gap: "var(--space-8)" }}>
        {READS.map((r) => (
          <li key={r.href}>
            <Link href={r.href} style={{ textDecoration: "none", display: "grid", gap: "var(--space-2)" }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-text-dim)",
                }}
              >
                {r.tag} · {r.date}
              </span>
              <h2
                className="link"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "var(--text-xl)",
                  fontWeight: 500,
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                  textDecoration: "none",
                  margin: 0,
                }}
              >
                {r.title}
              </h2>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-base)", lineHeight: 1.65, maxWidth: "64ch" }}>
                {r.dek}
              </p>
              <span
                className="link"
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: "var(--text-xs)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Read it &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "var(--space-section)" }}>
        <hr className="hr-rule" />
        <p style={{ marginTop: "var(--space-6)", color: "var(--color-text-dim)", fontSize: "var(--text-sm)", lineHeight: 1.65, maxWidth: "64ch" }}>
          Want to talk through any of these with players running real rigs? The
          conversation lives on{" "}
          <a className="link" href="https://suede.social" target="_blank" rel="noopener">
            Suede Social
          </a>
          .
        </p>
      </div>
    </section>
  );
}
