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
    href: "/guitar-samples-ai-training",
    title: "What Happens to Your Guitar Samples in AI Training",
    dek: "AI music models are trained on guitar samples, loops, and recordings — often without attribution, compensation, or consent. Here is what the pipeline actually looks like, what rights you have right now, and what a real ownership layer changes.",
    date: "June 23, 2026",
    tag: "Music IP",
  },
  {
    href: "/session-musicians-publishing-royalties",
    title: "Why Session Musicians Are Losing Publishing Royalties in 2026",
    dek: "Session guitarists laid the sonic foundation for decades of recorded music. Most never received a publishing royalty. Here is why the system is designed to exclude them, how AI is making it worse, and what the ownership layer needs to look like going forward.",
    date: "June 23, 2026",
    tag: "Music IP & Rights",
  },
  {
    href: "/how-to-register-a-guitar-riff",
    title: "How to Register a Guitar Riff as Intellectual Property",
    dek: "A guitar riff can be registered as intellectual property, but most guitarists have no idea how. The practical walkthrough: what is protectable, what is not, how to file with the US Copyright Office, and how a registry-backed provenance record extends protection into the AI era.",
    date: "June 23, 2026",
    tag: "Music IP & Rights",
  },
  {
    href: "/ai-training-and-your-music",
    title: "AI Training and Your Music: What Every Guitarist Needs to Know",
    dek: "Your recordings, your tone, your style — AI models are being trained on all of it without asking. Here is what is happening, what the law currently says, and what the ownership layer looks like when it works.",
    date: "June 14, 2026",
    tag: "Music IP",
  },
  {
    href: "/who-owns-the-output-stage",
    title: "Who Owns the Output Stage",
    dek: "The output stage is the last point where a signal is still clearly yours. Howard Dumble understood this. AI broke it. On Dumble, the signal chain, and the infrastructure that registers creative ownership at the moment of creation.",
    date: "June 14, 2026",
    tag: "Music IP",
  },
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

      <div style={{ marginTop: "var(--space-section)", paddingTop: "var(--space-8)", borderTop: "1px solid var(--color-rule-muted)" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--color-text-dim)", margin: "0 0 var(--space-4)" }}>
          About the author
        </p>
        <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.65, maxWidth: "64ch", margin: "0 0 var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)" }}>Jason Colapietro</strong> (Johnny Suede) is the founder and CEO of Suede Labs AI and a published author. He built the creator-ownership layer for the AI media era: proof of creation, programmable IP, on-chain royalty routing, and agent-accessible licensing. Patent pending USPTO&nbsp;63/947,120.
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-2)", fontSize: "var(--text-sm)", color: "var(--color-text-muted)" }}>
          <li><a className="link" href="https://guitar.solutions" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>The Signal Chain</a> &mdash; The complete history of electric guitar tone. Free at guitar.solutions.</li>
          <li><a className="link" href="https://www.amazon.com/dp/B0GRG8LGQQ" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>Stake Your Claim</a> &mdash; AI ownership, authorship, provenance, and creator rights. Kindle.</li>
          <li><a className="link" href="https://www.amazon.com/dp/B0GMB2VLXQ" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>Proof as Infrastructure</a> &mdash; Building systems where proof is baked in, not bolted on. Kindle.</li>
          <li><a className="link" href="https://www.amazon.com/dp/B0GD5FX6N6" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>The Guitar Without a Number</a> &mdash; Kindle. &middot; <a className="link" href="https://www.amazon.com/dp/B0GD5FX6N6" target="_blank" rel="noopener" style={{ textDecoration: "none" }}>The Human Authenticity Layer</a> &mdash; Kindle.</li>
        </ul>
      </div>
    </section>
  );
}
