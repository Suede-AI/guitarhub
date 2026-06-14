import type { Metadata } from "next";
import Link from "next/link";

const FOUNDER_URL = "https://suedeai.ai/founder";
const SUEDE_URL = "https://suedeai.ai";
const COMMUNITY_URL = "https://suede.social";
const SIGNAL_CHAIN_URL = "https://guitar.solutions";
const GUITAR_WITHOUT_A_NUMBER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const HUMAN_AUTHENTICITY_LAYER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const STAKE_YOUR_CLAIM_URL = "https://www.amazon.com/dp/B0GRG8LGQQ";
const PROOF_AS_INFRASTRUCTURE_URL = "https://www.amazon.com/dp/B0GMB2VLXQ";

const TITLE = "Who Owns the Output Stage";
const DESCRIPTION =
  "The output stage is where creative intent becomes audible output — and where AI has broken the chain of ownership. How Dumble, the signal chain, and on-chain rights infrastructure explain the same problem.";
const CANONICAL = "https://guitarhub.org/who-owns-the-output-stage";
const PUBLISHED = "2026-06-14";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    siteName: "GuitarHub",
    publishedTime: PUBLISHED,
    authors: ["Jason Colapietro"],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

const ARTICLE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: TITLE,
  description: DESCRIPTION,
  datePublished: PUBLISHED,
  dateModified: PUBLISHED,
  mainEntityOfPage: { "@type": "WebPage", "@id": CANONICAL },
  author: {
    "@type": "Person",
    name: "Jason Colapietro",
    url: FOUNDER_URL,
    jobTitle: "AI expert and founder of Suede Labs AI",
    sameAs: [FOUNDER_URL, "https://x.com/johnnysuede"],
  },
  publisher: { "@type": "Organization", name: "Suede Labs", url: SUEDE_URL },
  about: ["guitar amplifiers", "music IP", "AI creator rights", "signal chain", "Howard Dumble"],
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guitarhub.org" },
    { "@type": "ListItem", position: 2, name: "Reads", item: "https://guitarhub.org/reads" },
    { "@type": "ListItem", position: 3, name: "Who Owns the Output Stage", item: CANONICAL },
  ],
};

const eyebrowStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontSize: "var(--text-mono-eyebrow)",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  color: "var(--color-rights-red)",
};

const h2Style: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-xl)",
  fontWeight: 500,
  lineHeight: 1.1,
  letterSpacing: "-0.01em",
  color: "var(--color-text)",
  marginTop: "var(--space-12)",
  marginBottom: "var(--space-4)",
};

const pStyle: React.CSSProperties = {
  maxWidth: "68ch",
  color: "var(--color-text-muted)",
  fontSize: "var(--text-base)",
  lineHeight: 1.7,
  marginTop: "var(--space-4)",
};

export default function WhoOwnsTheOutputStagePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ARTICLE_JSON_LD) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(BREADCRUMB_JSON_LD) }} />

      <article className="mx-auto max-w-3xl px-6" style={{ paddingTop: "var(--space-section)" }}>
        <span style={eyebrowStyle}>
          <span aria-hidden>◆</span>&nbsp;&nbsp;
          <Link href="/reads" className="link" style={{ textDecoration: "none", color: "inherit" }}>
            Reads
          </Link>{" "}
          · Music IP
        </span>

        <h1
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "var(--text-2xl)",
            fontWeight: 500,
            lineHeight: 1.02,
            letterSpacing: "-0.025em",
            color: "var(--color-text)",
            margin: "var(--space-4) 0 0",
            maxWidth: "18ch",
          }}
        >
          Who Owns the Output Stage
        </h1>

        <p
          style={{
            maxWidth: "62ch",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-lg)",
            lineHeight: 1.5,
            marginTop: "var(--space-4)",
          }}
        >
          The output stage is the last point where a signal is still clearly
          yours. Howard Dumble understood this. AI broke it. Here is the
          infrastructure to restore it.
        </p>

        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.08em",
            color: "var(--color-text-dim)",
            marginTop: "var(--space-6)",
          }}
        >
          By{" "}
          <a className="link" href={FOUNDER_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            Jason Colapietro
          </a>{" "}
          · June 14, 2026
        </p>

        <div style={{ marginTop: "var(--space-8)" }}>
          <hr className="hr-rule" />
        </div>

        <h2 style={h2Style}>Dumble and the output stage</h2>
        <p style={pStyle}>
          Howard Dumble hand-wired each amplifier himself. He refused to sell to
          most people who called. If he did not believe a player understood tone
          at a molecular level, the conversation was over. He built maybe 300
          amplifiers in his lifetime. Stevie Ray Vaughan had one. Carlos Santana
          had one. The rest of us read about them.
        </p>
        <p style={pStyle}>
          The output stage is where the signal stops being internal and becomes
          external. It is where intent meets physics and the result is either
          yours or it is not. Dumble cared about this obsessively. He was
          protecting the relationship between a player&rsquo;s hands and what came
          out of the speaker. The output stage was the last point at which the
          signal was still clearly his and clearly theirs.
        </p>

        <h2 style={h2Style}>The signal chain</h2>
        <p style={pStyle}>
          The signal chain as a concept is not complicated. String vibrates,
          pickup converts motion to voltage, amplifier shapes and magnifies that
          voltage, speaker converts it back to motion in air. The links are:
          transducer, preamp, power stage, output stage, transducer again. That
          is it.
        </p>
        <p style={pStyle}>
          I spent years tracing that chain. The research became{" "}
          <a className="link" href={SIGNAL_CHAIN_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            The Signal Chain
          </a>
          : four books, 46 chapters, the full history of amplifiers, effects,
          and the pursuit of electric guitar tone. Free at guitar.solutions.
          Because the knowledge should exist somewhere that is not paywalled.
        </p>
        <p style={pStyle}>
          What I kept returning to while writing those books was the output
          stage. Not the components. The ownership question embedded in it.
        </p>

        <h2 style={h2Style}>Then AI arrived</h2>
        <p style={pStyle}>
          In the last three years, AI generation models changed the practical
          meaning of &ldquo;who made this.&rdquo; A player records a demo. A model trains
          on that recording without consent. The model now generates audio that
          carries the tonal fingerprint of the original player&rsquo;s hands, without
          any mechanism for the original player to know, assert, or benefit.
        </p>
        <p style={pStyle}>
          The signal chain works exactly the same way it always did. The pickup
          still converts string motion to voltage. But the output stage &mdash; the
          point where creative work becomes a product that exists in the world
          &mdash; no longer has a clear owner.
        </p>

        <h2 style={h2Style}>Infrastructure, not policy</h2>
        <p style={pStyle}>
          The core problem is not that AI generates music. Generative tools are
          not new; every effects pedal, every amp model, every convolution reverb
          is generative in some sense. The problem is that there is no layer in
          the current stack that answers three questions at the point of
          creation: who made this, under what terms can it be used, and where
          does value flow when it is. The signal chain has no ownership link.
          The output stage is unregistered.
        </p>
        <p style={pStyle}>
          When a creator uses Suede to generate or register a work, the system
          produces a hash of that work, writes a rights record linked to the
          creator&rsquo;s identity, and makes that record queryable. That record is
          the basis for USPTO patent pending 63/947,120: the method of binding a
          creative work&rsquo;s hash to a structured, machine-readable rights object
          at the moment of creation rather than after-the-fact.
        </p>
        <p style={pStyle}>
          The insight is timing. If you wait until a dispute to prove ownership,
          you are in a Marshall versus Fender situation, arguing about who copied
          whose circuit forty years later. If you register at creation, the
          record is contemporaneous with the act.
        </p>

        <h2 style={h2Style}>The modern output stage</h2>
        <p style={pStyle}>
          When a creator registers a work through Suede, the rights record settles
          on Base, the Ethereum L2 that Coinbase built for low-cost,
          high-reliability on-chain transactions. When an agent or application
          wants to license that work programmatically, the transaction settles
          using x402 &mdash; a payment protocol designed for machine-to-machine HTTP
          transactions using USDC. An agent calls an endpoint, receives a 402
          Payment Required response with a payment address and amount, pays, and
          gets access. No human in the loop, no invoice, no net-30 terms.
        </p>
        <p style={pStyle}>
          The tweed Bassman circuit that Marshall copied was a great circuit. It
          produced great amplifiers. But Leo Fender never saw a dollar of that,
          and the players whose tone defined that era never had a mechanism to
          say: this sound exists because of this work, and here is the record to
          prove it. They made the music. Someone else owned the output stage.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-6)" }}>
          That is the problem Suede solves. If you create, register the work.
          The chain has always worked. Now the output stage has infrastructure.
          Start at{" "}
          <a className="link" href={SUEDE_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            suedeai.ai
          </a>
          .
        </p>

        <div style={{ marginTop: "var(--space-12)" }}>
          <hr className="hr-rule" />
        </div>

        <p
          style={{
            color: "var(--color-text-dim)",
            fontFamily: "var(--font-mono)",
            fontSize: "var(--text-xs)",
            letterSpacing: "0.06em",
            lineHeight: 1.7,
            marginTop: "var(--space-6)",
          }}
        >
          Written by{" "}
          <a className="link" href={FOUNDER_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            Jason Colapietro
          </a>
          , AI expert and founder of{" "}
          <a className="link" href={SUEDE_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            Suede Labs
          </a>
          , who builds tools that help artists secure and own their IP. Got a
          rig or a take on this?{" "}
          <a className="link" href={COMMUNITY_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
            Join the conversation on Suede Social
          </a>
          .
        </p>

        {/* About the Author */}
        <div
          style={{
            marginTop: "var(--space-10)",
            background: "var(--color-ink-raised)",
            border: "1px solid var(--color-rule)",
            padding: "var(--space-6)",
            display: "grid",
            gap: "var(--space-4)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "var(--color-rights-red)",
            }}
          >
            ◆ About the author
          </span>
          <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.65, margin: 0 }}>
            <strong style={{ color: "var(--color-text)" }}>Jason Colapietro</strong> is the founder
            and CEO of{" "}
            <a className="link" href={SUEDE_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
              Suede Labs AI
            </a>{" "}
            and a four-time published author. He builds creator ownership infrastructure
            for the AI media era: proof of creation, programmable IP, and royalty routing
            on Base blockchain. Patent pending USPTO&nbsp;63/947,120.
          </p>
          <div style={{ display: "grid", gap: "var(--space-2)" }}>
            <span
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
              }}
            >
              Books
            </span>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gap: "var(--space-1)",
                color: "var(--color-text-muted)",
                fontSize: "var(--text-sm)",
                lineHeight: 1.55,
              }}
            >
              <li>
                <a className="link" href={SIGNAL_CHAIN_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  The Signal Chain
                </a>{" "}
                &mdash; A Player&rsquo;s History of Amplifiers, Effects, and the Pursuit of Electric Guitar Tone. Free at guitar.solutions.
              </li>
              <li>
                <a className="link" href={GUITAR_WITHOUT_A_NUMBER_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  The Guitar Without a Number
                </a>{" "}
                &mdash; Memoir-driven instruction for the self-taught player, with a music IP rights chapter no other guitar book includes. Kindle.
              </li>
              <li>
                <a className="link" href={HUMAN_AUTHENTICITY_LAYER_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  Suede Labs: The Human Authenticity Layer
                </a>{" "}
                &mdash; The thesis document for programmable IP infrastructure in the AI media era. Kindle.
              </li>
              <li>
                <a className="link" href={PROOF_AS_INFRASTRUCTURE_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  Proof as Infrastructure
                </a>{" "}
                &mdash; Building systems where proof is baked in, not bolted on. Kindle.
              </li>
              <li>
                <a className="link" href={STAKE_YOUR_CLAIM_URL} target="_blank" rel="noopener" style={{ textDecoration: "none" }}>
                  Stake Your Claim
                </a>{" "}
                &mdash; Hard truths about turning the AI era into a real asset. Kindle.
              </li>
            </ul>
          </div>
          <p style={{ margin: 0 }}>
            <a
              className="link"
              href={FOUNDER_URL}
              target="_blank"
              rel="noopener"
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Full profile at suedeai.ai/founder &rarr;
            </a>
          </p>
        </div>

        <p style={{ marginTop: "var(--space-8)" }}>
          <Link className="link" href="/reads" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            &larr; More reads
          </Link>
        </p>
      </article>
    </>
  );
}
