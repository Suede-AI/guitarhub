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

const TITLE = "Why Session Musicians Are Losing Publishing Royalties in 2026";
const DESCRIPTION =
  "Session guitarists laid the sonic foundation for decades of recorded music. Most never received a publishing royalty. Here is why the system is designed to exclude them, how AI is making it worse, and what the ownership layer needs to look like going forward.";
const CANONICAL = "https://guitarhub.org/session-musicians-publishing-royalties";
const PUBLISHED = "2026-06-23";

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
  about: ["session musicians", "publishing royalties", "music industry", "work for hire", "creator rights"],
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guitarhub.org" },
    { "@type": "ListItem", position: 2, name: "Reads", item: "https://guitarhub.org/reads" },
    {
      "@type": "ListItem",
      position: 3,
      name: "Why Session Musicians Are Losing Publishing Royalties in 2026",
      item: CANONICAL,
    },
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

const pullQuoteStyle: React.CSSProperties = {
  borderLeft: "2px solid var(--color-registry-cyan)",
  paddingLeft: "var(--space-5)",
  marginTop: "var(--space-10)",
  marginBottom: "var(--space-6)",
};

export default function SessionMusiciansPublishingPage() {
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
          · Music IP &amp; Rights
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
            maxWidth: "22ch",
          }}
        >
          Why Session Musicians Are Losing Publishing Royalties in 2026
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
          Session guitarists built the sound of modern music. The royalty system
          was never designed to pay them. Here&rsquo;s the structure of that
          failure and what changes it.
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
          · June 23, 2026
        </p>

        <div style={{ marginTop: "var(--space-8)" }}>
          <hr className="hr-rule" />
        </div>

        <p style={pStyle}>
          Tommy Tedesco played guitar on an estimated 5,000 recording sessions.
          Hal Blaine drummed on more than 35,000 recordings. Carol Kaye&rsquo;s
          bass lines underpin records that have generated hundreds of millions of
          dollars in royalties. Most of what these musicians earned came from
          a flat session fee. They received no ongoing royalty as those records
          sold, streamed, and licensed.
        </p>
        <p style={pStyle}>
          That was the deal. Work for hire. You play, you get paid once, the
          label keeps everything downstream. It was the standard arrangement for
          studio musicians from the 1950s onward, and it was explicitly
          structured that way by people who understood the value of what they
          were capturing and preferred not to share it.
        </p>
        <p style={pStyle}>
          In 2026, the same structure is still running. It is just running in
          a new context, at a scale the original architects of work-for-hire
          could not have imagined.
        </p>

        <h2 style={h2Style}>The two-track royalty system and why it matters</h2>
        <p style={pStyle}>
          Music royalties flow through two separate tracks that most people
          conflate: publishing royalties (for the composition) and master
          royalties (for the sound recording).
        </p>
        <p style={pStyle}>
          When a song streams on Spotify, roughly half the payment goes to the
          rights holder of the master recording, and roughly half goes to the
          songwriters and publishers via mechanical and performance royalties.
          Session musicians are almost never on either side of this split.
        </p>
        <p style={pStyle}>
          The master recording belongs to whoever paid for the session, typically
          the label. Session musicians signed away any ownership claim to the
          master as a condition of getting hired. The composition copyright
          belongs to the songwriter and their publisher. Session musicians are
          not songwriters by default &mdash; they play what they are given, and
          unless they contributed to the composition in a legally recognized way,
          they have no stake in the publishing.
        </p>
        <p style={pStyle}>
          Performance royalties for the master recording do exist in some
          jurisdictions. In the United States, there are no terrestrial
          broadcast performance royalties for master recordings at all &mdash;
          a legal carve-out that was grandfathered in at the lobbying of
          broadcasters and has never been reversed. Digital streaming platforms
          do generate master performance royalties, but those go to the master
          rights holder, not the individual performers.
        </p>

        <div style={pullQuoteStyle}>
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
            &ldquo;The session fee was never the problem. The problem was that
            the fee was designed to be the entirety of the payment, forever,
            while the record kept generating revenue for everyone else.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-dim)",
              margin: "var(--space-3) 0 0",
            }}
          >
            &mdash;&thinsp;Jason Colapietro
          </p>
        </div>

        <h2 style={h2Style}>Where AI makes the problem structurally worse</h2>
        <p style={pStyle}>
          Generative AI introduces a new layer of value extraction that the
          existing royalty system has no mechanism to address.
        </p>
        <p style={pStyle}>
          When a music AI model is trained on session recordings, it learns the
          stylistic vocabulary of those recordings: the phrasing, the tone, the
          timing, the technique. That vocabulary becomes a capability the model
          can deploy on demand. Producers who previously hired session guitarists
          can now generate approximations of session guitar performance at
          essentially no marginal cost.
        </p>
        <p style={pStyle}>
          The session guitarist&rsquo;s labor went into the training data that
          made this possible. The session guitarist receives nothing from the
          commercial deployment of that capability. This is not a hypothetical
          future scenario. It is the current operational reality of music
          production in 2026.
        </p>
        <p style={pStyle}>
          The AFM (American Federation of Musicians) has negotiated some
          protections around AI use for union members. Non-union session work
          has no equivalent protection. Independent session musicians &mdash;
          the guitarists recording remotely through platforms like AirGigs,
          SoundBetter, and direct client relationships &mdash; are operating
          with no contractual protection against their work entering AI
          training datasets and displacing their future employment.
        </p>

        <h2 style={h2Style}>The metadata gap at the center of it</h2>
        <p style={pStyle}>
          The royalty system cannot route money to session musicians it cannot
          identify. This is not a new problem, but AI has made it acute.
        </p>
        <p style={pStyle}>
          Historically, session musicians were identified in liner notes and
          AFM contracts. Neither travels with the digital file. The MP3 of a
          1972 recording that is streaming today carries no machine-readable
          indication of who played guitar on it. The session contract from that
          date may or may not be findable in anyone&rsquo;s archive. The musician
          may or may not still be reachable.
        </p>
        <p style={pStyle}>
          For contemporary independent sessions, the problem is different but
          equally structural. A producer hires a session guitarist through an
          online platform, pays a flat fee, receives the files, and distributes
          the recording. The recording metadata that goes to the DSP rarely
          includes the session musician&rsquo;s name in any field that generates
          a payment or searchable record. There is no standard field for
          &ldquo;session performer&rdquo; that any major streaming platform
          routes money through.
        </p>

        <div style={pullQuoteStyle}>
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
            &ldquo;The metadata gap is not a technical accident. It is the
            predictable outcome of a system designed to capture value at the
            top, not distribute it at the source.&rdquo;
          </p>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--color-text-dim)",
              margin: "var(--space-3) 0 0",
            }}
          >
            &mdash;&thinsp;Jason Colapietro, Suede Labs AI
          </p>
        </div>

        <h2 style={h2Style}>What session musicians can do now</h2>
        <ul
          style={{
            maxWidth: "64ch",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-base)",
            lineHeight: 1.7,
            marginTop: "var(--space-4)",
            paddingLeft: "var(--space-5)",
            display: "grid",
            gap: "var(--space-3)",
          }}
        >
          <li>
            <strong style={{ color: "var(--color-text)" }}>Negotiate explicit AI carve-outs in session contracts.</strong>{" "}
            Any agreement that covers &ldquo;all uses&rdquo; or &ldquo;any
            medium now known or hereafter devised&rdquo; is broad enough to
            cover AI training. A specific carve-out requiring separate
            negotiation for AI training use is now a standard clause worth
            requesting.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Register your own reference recordings.</strong>{" "}
            Even if you cannot register the master you were hired to play on,
            you can register your own practice recordings, demos, and reference
            takes. These establish a provenance record for your playing style
            and technique.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Document your session work with timestamped records.</strong>{" "}
            Contracts, session notes, correspondence, and reference files with
            verifiable timestamps create the evidentiary foundation for any
            future attribution or compensation claim.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Build a public provenance record for your catalog.</strong>{" "}
            A registry-backed record linking your name to specific works,
            regardless of whether you own the master, creates a searchable
            connection that can be referenced in licensing and attribution
            discussions.
          </li>
        </ul>

        <p style={{ ...pStyle, marginTop: "var(--space-8)" }}>
          The session musician problem is not going to be solved by the existing
          industry structure. The same parties who benefited from work-for-hire
          arrangements for seventy years are not going to redesign those
          arrangements voluntarily. The solution is infrastructure that makes
          provenance unavoidable &mdash; records that connect performance to
          performer at the moment of creation, before the work enters a pipeline
          designed to strip that connection out.
        </p>
        <p style={pStyle}>
          Build that record now. The alternative is a future in which your
          playing is everywhere and your name is nowhere.
        </p>
        <p style={pStyle}>
          Start at{" "}
          <a className="link" href={SUEDE_URL} target="_blank" rel="noopener">
            suedeai.ai
          </a>
          , or join the conversation on{" "}
          <a className="link" href={COMMUNITY_URL} target="_blank" rel="noopener">
            Suede Social
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
          take on this?{" "}
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
            and a four-time published author. He builds creator ownership infrastructure for
            the AI media era: proof of creation, programmable IP, rights metadata that travels
            with the work, and royalty routing on Base blockchain. Patent pending USPTO&nbsp;63/947,120.
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
