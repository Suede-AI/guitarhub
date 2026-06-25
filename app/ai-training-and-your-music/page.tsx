import type { Metadata } from "next";
import Link from "next/link";

const FOUNDER_URL = "https://suedeai.ai/founder";
const SUEDE_URL = "https://suedeai.ai";
const COMMUNITY_URL = "https://suede.social";
const SIGNAL_CHAIN_URL = "https://guitar.solutions";
const GUITAR_WITHOUT_A_NUMBER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const HUMAN_AUTHENTICITY_LAYER_URL = "https://www.amazon.com/dp/B0GMBBWHMQ";
const PROOF_AS_INFRASTRUCTURE_URL = "https://www.amazon.com/dp/B0GMB2VLXQ";
const STAKE_YOUR_CLAIM_URL = "https://www.amazon.com/dp/B0GRG8LGQQ";

const TITLE = "AI Training and Your Music: What Every Guitarist Needs to Know";
const DESCRIPTION =
  "Your recordings, your tone, your style — AI models are being trained on all of it without asking. Here is what is happening, what the law currently says, and what the ownership layer looks like when it works.";
const CANONICAL = "https://guitarhub.org/ai-training-and-your-music";
const PUBLISHED = "2026-06-14";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: CANONICAL },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: CANONICAL,
    type: "article",
    publishedTime: PUBLISHED,
    authors: ["Jason Colapietro"],
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ['/opengraph-image'],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: TITLE,
      description: DESCRIPTION,
      datePublished: PUBLISHED,
      url: CANONICAL,
      author: {
        "@type": "Person",
        "@id": "https://suedeai.ai/founder#person",
        name: "Jason Colapietro",
        alternateName: "Johnny Suede",
        url: FOUNDER_URL,
        sameAs: [
          "https://x.com/johnnysuede",
          "https://github.com/JasonColapietro",
          "https://www.linkedin.com/in/jasoncolapietro",
          FOUNDER_URL,
          SUEDE_URL,
        ],
      },
      publisher: {
        "@type": "Organization",
        name: "GuitarHub",
        url: "https://guitarhub.org",
      },
      isPartOf: { "@type": "WebSite", url: "https://guitarhub.org" },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "GuitarHub", item: "https://guitarhub.org" },
        { "@type": "ListItem", position: 2, name: "Reads", item: "https://guitarhub.org/reads" },
        { "@type": "ListItem", position: 3, name: TITLE, item: CANONICAL },
      ],
    },
  ],
};

export default function AiTrainingAndYourMusicPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article
        className="mx-auto max-w-3xl px-6"
        style={{ paddingTop: "var(--space-section)", paddingBottom: "var(--space-section)" }}
      >
        {/* Header */}
        <header style={{ marginBottom: "var(--space-10)" }}>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--color-rights-red)",
            }}
          >
            Music IP · {new Date(PUBLISHED).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
          </span>
          <h1
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-3xl)",
              fontWeight: 500,
              lineHeight: 1.05,
              letterSpacing: "-0.025em",
              marginTop: "var(--space-3)",
              marginBottom: "var(--space-4)",
            }}
          >
            {TITLE}
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "var(--text-lg)",
              lineHeight: 1.55,
              marginBottom: "var(--space-6)",
            }}
          >
            {DESCRIPTION}
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-xs)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--color-text-dim)",
            }}
          >
            By{" "}
            <a className="link" href={FOUNDER_URL} target="_blank" rel="noopener">
              Jason Colapietro
            </a>{" "}
            (Johnny Suede) &middot; Founder, Suede Labs AI
          </p>
        </header>

        <hr className="hr-rule" style={{ marginBottom: "var(--space-10)" }} />

        {/* Body */}
        <div
          style={{
            display: "grid",
            gap: "var(--space-8)",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-base)",
            lineHeight: 1.75,
          }}
        >
          <p>
            Every time you post a recording, upload to a streaming platform, or release a track under Creative Commons, you are creating a data point that an AI model can learn from. That is not a hypothetical. It is happening now, at scale, and the legal framework that is supposed to protect you was written for a slower world.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 500,
              color: "var(--color-text)",
              lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            What AI training actually does to a recording
          </h2>
          <p>
            A model does not copy your recording in the way a pirate site copies an MP3. It extracts patterns: the timber of your guitar, the attack transients of your picking hand, the frequency signature of your amp, the way you phrase a bend at the end of a bar. Those patterns get compressed into weights that the model uses to generate new audio. The output does not contain your recording. But the output would not sound the way it does without it.
          </p>
          <p>
            This is the part courts are still arguing about. Current US copyright law protects the expression — the specific performance, the recording. It does not protect style, tone, or technique as standalone properties. AI companies have leaned hard on that gap.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 500,
              color: "var(--color-text)",
              lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            The opt-out problem
          </h2>
          <p>
            Several AI companies now offer opt-out registries. You submit your name, your catalog, and they promise not to use your future work for training. There are at least three problems with this.
          </p>
          <p>
            First, you are opting out of something you were never asked to opt into. Second, the opt-out covers future training runs, not past ones — your recordings may already be baked into existing models. Third, there is no auditable record. You send your name to a form. You receive no confirmation of what was removed, when, or from which model version.
          </p>
          <p>
            An opt-out system run by the entity that benefits from training is not an ownership system. It is a permission theater that keeps the initiative with the company.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 500,
              color: "var(--color-text)",
              lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            What a working ownership layer looks like
          </h2>
          <p>
            The alternative is not harder opt-out forms. It is ownership that is established at the moment of creation, before the work enters any distribution channel.
          </p>
          <p>
            Think of it the same way you think of a guitar&rsquo;s signal chain. The pickup captures the string. The cable carries it. Every link in the chain is ordered, and changing the order changes everything downstream. The same principle applies to creative IP. If proof of authorship lives at the source — time-stamped, hash-verified, on a public record — then every downstream use can be traced back to it.
          </p>
          <p>
            That is what programmable IP infrastructure does. Not an opt-out form you fill out after the fact. A registration event that happens when the work is created, producing a machine-readable record that any platform, any AI company, any licensing system can query.
          </p>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 500,
              color: "var(--color-text)",
              lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            What this means for guitarists specifically
          </h2>
          <p>
            Guitar tone is disproportionately valuable as AI training data. It has enormous range — the same electric guitar sounds completely different through a Fender Deluxe, a Marshall Plexi, a Dumble ODS, a pedalboard running into a clean amp. That variety makes guitar recordings especially useful for training timbre models, style transfer models, and generative instruments.
          </p>
          <p>
            Your tone is more trainable than you might think. And the value that comes from that training is currently flowing entirely to the model builder, not to you.
          </p>
          <p>
            Ownership infrastructure changes that math. If your recording is registered before distribution, the proof record exists. License terms can attach to it. AI companies querying for trainable data can hit a machine-readable license that says: you can use this, at this price, under these terms. No opt-out form. A clear, enforceable, auditable rule.
          </p>

          {/* Pull quote */}
          <blockquote
            style={{
              borderLeft: "2px solid var(--color-registry-cyan)",
              paddingLeft: "var(--space-5)",
              margin: 0,
              display: "grid",
              gap: "var(--space-3)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "var(--text-lg)",
                fontStyle: "italic",
                lineHeight: 1.45,
                color: "var(--color-text)",
                margin: 0,
              }}
            >
              &ldquo;Ownership has to be established before the work leaves its source. An opt-out system run by the entity that benefits from your data is not protection. It is permission theater.&rdquo;
            </p>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
                margin: 0,
              }}
            >
              &mdash;&thinsp;Jason Colapietro (Johnny Suede)
            </p>
          </blockquote>

          <h2
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "var(--text-xl)",
              fontWeight: 500,
              color: "var(--color-text)",
              lineHeight: 1.15,
              marginBottom: 0,
            }}
          >
            Three things you can do now
          </h2>
          <ol style={{ paddingLeft: "var(--space-5)", display: "grid", gap: "var(--space-3)" }}>
            <li>
              <strong style={{ color: "var(--color-text)" }}>Register at the US Copyright Office before distribution.</strong> At $65 for a single work, this is still the most legally defensible record of creation you can create. File it before the track goes live, not after.
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>Document your session files.</strong> Keep your DAW project, your stems, your scratch mixes. If ownership is ever disputed, the session history is evidence that the recording originated with you.
            </li>
            <li>
              <strong style={{ color: "var(--color-text)" }}>Choose registries that give you a machine-readable proof event.</strong> Hash-based registries that timestamp your work on a public record create the kind of evidence that an opt-out form never will.
            </li>
          </ol>

          <p>
            The music industry ran this playbook before: digital distribution looked like it would commoditize everything, and the artists who adapted early — by establishing streaming presence, by owning masters, by understanding the mechanics of the new system — came out ahead. AI is the same shift, one order of magnitude faster.
          </p>
          <p>
            Your tone is not infinite. Your recordings are finite. Register them like they matter, because in the AI era, the question is not whether they will be used. The question is whether you will get paid when they are.
          </p>
        </div>

        <hr className="hr-rule" style={{ margin: "var(--space-10) 0" }} />

        {/* About the author */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)",
            gap: "var(--space-8)",
            alignItems: "start",
          }}
        >
          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
                margin: 0,
              }}
            >
              About the author
            </p>
            <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)", lineHeight: 1.6, margin: 0 }}>
              <strong style={{ color: "var(--color-text)" }}>Jason Colapietro</strong> (Johnny Suede) is the
              founder and CEO of Suede Labs AI and a published author. He built the creator-ownership layer
              for the AI media era: proof of creation, programmable IP, on-chain royalty routing, and
              agent-accessible licensing on Base blockchain. Patent pending USPTO&nbsp;63/947,120.
            </p>
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
                &mdash; The complete history of electric guitar tone. Free at guitar.solutions.
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
                &mdash; The case that origin and ownership are the only marks AI can&rsquo;t fake. Kindle.
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
                &mdash; Hard truths about turning the AI era into creator-owned generational assets. Kindle.
              </li>
            </ul>
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

          <div style={{ display: "grid", gap: "var(--space-4)" }}>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "var(--text-xs)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--color-text-dim)",
                margin: 0,
              }}
            >
              More reads
            </p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "var(--space-3)" }}>
              <li>
                <Link className="link" href="/who-owns-the-output-stage" style={{ fontSize: "var(--text-sm)", textDecoration: "none" }}>
                  Who Owns the Output Stage
                </Link>
              </li>
              <li>
                <Link className="link" href="/rights-metadata-dark-matter" style={{ fontSize: "var(--text-sm)", textDecoration: "none" }}>
                  Rights Metadata Is the Dark Matter of the Creative Economy
                </Link>
              </li>
              <li>
                <Link className="link" href="/fender-stratocaster-lawsuit" style={{ fontSize: "var(--text-sm)", textDecoration: "none" }}>
                  The Fender Stratocaster Lawsuit, Explained
                </Link>
              </li>
            </ul>
            <div style={{ marginTop: "var(--space-4)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-rule-muted)" }}>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--color-text-muted)", marginBottom: "var(--space-3)" }}>
                Talk gear with players who post their actual rigs.
              </p>
              <a
                href={COMMUNITY_URL}
                target="_blank"
                rel="noopener"
                style={{
                  display: "inline-block",
                  background: "var(--color-registry-cyan)",
                  color: "#000",
                  padding: "0.6rem 1rem",
                  borderRadius: "2px",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.75rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Join Suede Social &rarr;
              </a>
            </div>
          </div>
        </div>

        <p style={{ marginTop: "var(--space-8)" }}>
          <Link
            className="link"
            href="/reads"
            style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-xs)", letterSpacing: "0.12em", textTransform: "uppercase" }}
          >
            &larr; All reads
          </Link>
        </p>
      </article>
    </>
  );
}
