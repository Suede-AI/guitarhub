import type { Metadata } from "next";
import Link from "next/link";

const FOUNDER_URL = "https://suedeai.ai/founder";
const SUEDE_URL = "https://suedeai.ai";
const COMMUNITY_URL = "https://suede.social";
const SIGNAL_CHAIN_URL = "https://guitar.solutions";
const GUITAR_WITHOUT_A_NUMBER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const HUMAN_AUTHENTICITY_LAYER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const STAKE_YOUR_CLAIM_URL = "https://www.amazon.com/dp/B0GRG8LGQQ";

const TITLE = "Rights Metadata Is the Dark Matter of the Creative Economy";
const DESCRIPTION =
  "It governs everything. Almost nobody can see it. What rights metadata is, why it breaks, and what a working infrastructure layer looks like — for every creator who has ever made something and wondered why the money disappeared.";
const CANONICAL = "https://guitarhub.org/rights-metadata-dark-matter";
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
  about: ["rights metadata", "music IP", "creator economy", "programmable IP", "royalties"],
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guitarhub.org" },
    { "@type": "ListItem", position: 2, name: "Reads", item: "https://guitarhub.org/reads" },
    { "@type": "ListItem", position: 3, name: "Rights Metadata Is the Dark Matter", item: CANONICAL },
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

export default function RightsMetadataPage() {
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
            maxWidth: "20ch",
          }}
        >
          Rights Metadata Is the Dark Matter of the Creative Economy
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
          It governs everything. Almost nobody can see it. Here&rsquo;s what it
          is, why it breaks, and what a working infrastructure layer looks like.
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

        <p style={pStyle}>
          There&rsquo;s a concept in physics called dark matter. It doesn&rsquo;t
          emit light. You can&rsquo;t see it directly. But it governs the
          structure of everything around it &mdash; galaxies don&rsquo;t form
          correctly without it, orbital mechanics break down, the math
          doesn&rsquo;t close without it being there.
        </p>
        <p style={pStyle}>
          Rights metadata is the dark matter of the creative economy.
        </p>
        <p style={pStyle}>
          You can&rsquo;t see it on the streaming platform. It doesn&rsquo;t
          appear in the credits when a song plays. It&rsquo;s not in the Spotify
          interface, not in the YouTube description, not in the TikTok audio
          clip. But every payment decision, every licensing deal, every royalty
          route, every sync placement &mdash; all of it runs through this
          invisible layer. When it&rsquo;s wrong, nothing works. When it&rsquo;s
          missing, no one gets paid.
        </p>
        <p style={pStyle}>And most of the time, it&rsquo;s wrong.</p>

        <h2 style={h2Style}>What rights metadata actually is</h2>
        <p style={pStyle}>
          When a song is created, several facts need to be recorded:
        </p>
        <ul
          style={{
            maxWidth: "64ch",
            color: "var(--color-text-muted)",
            fontSize: "var(--text-base)",
            lineHeight: 1.7,
            marginTop: "var(--space-4)",
            paddingLeft: "var(--space-5)",
            display: "grid",
            gap: "var(--space-2)",
          }}
        >
          <li>Who wrote it (the composition copyright)</li>
          <li>Who performed it (the sound recording copyright)</li>
          <li>Who produced it</li>
          <li>Which publisher holds which percentage</li>
          <li>Which PRO administers which writer share</li>
          <li>What version this is (original, remix, cover, interpolation)</li>
          <li>Whether any samples were cleared, and if so, from what</li>
          <li>What license terms apply to sync, broadcast, streaming, or agent use</li>
        </ul>
        <p style={pStyle}>
          This information is rights metadata. It&rsquo;s not glamorous. It
          sounds like bookkeeping. But it&rsquo;s the reason a track generates a
          royalty check instead of a query letter from a music publisher&rsquo;s
          legal team.
        </p>
        <p style={pStyle}>
          The problem is that there is no canonical record. In the United States,
          copyright registration is optional. PRO registration is required for
          royalty collection but separate from copyright. Publishing rights are
          tracked by each publisher independently. Sound recording rights are
          tracked by labels &mdash; or not tracked at all for independent artists.
        </p>
        <p style={pStyle}>
          A single song can touch a dozen separate databases that don&rsquo;t
          talk to each other. ASCAP doesn&rsquo;t automatically talk to Harry
          Fox. DistroKid doesn&rsquo;t automatically reconcile with BMI. The
          streaming platforms don&rsquo;t require metadata that resolves to a
          payable entity &mdash; they require metadata that allows them to play
          the track. Those are different things.
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
            &ldquo;The signal chain starts at the pickup and ends at the
            listener&rsquo;s ear. The IP chain starts at creation and ends at
            the bank account. Miss a link in either chain and you lose the
            signal.&rdquo;
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

        <h2 style={h2Style}>The gap between generating and owning</h2>
        <p style={pStyle}>
          There is a gap in the creative economy that almost nobody talks about
          clearly. It&rsquo;s the gap between the moment you make something and
          the moment you own it in a form that can be licensed, monetized, and
          defended.
        </p>
        <p style={pStyle}>
          For a self-taught musician &mdash; someone who figured out the guitar
          from YouTube videos and started recording in their bedroom &mdash; this
          gap is vast. They know how to make music. They have no map for what
          happens next. And the systems that are supposed to help them are
          designed for an industry that assumes you have a manager, a lawyer, and
          a publishing deal before you&rsquo;re releasing music.
        </p>
        <p style={pStyle}>
          Most creators don&rsquo;t. And the creators who do have that
          infrastructure often find that the metadata their team submitted years
          ago is wrong, incomplete, or stored in a spreadsheet on someone&rsquo;s
          old laptop.
        </p>
        <p style={pStyle}>
          This is not a technology problem. It&rsquo;s an infrastructure problem.
          And it&rsquo;s specifically an infrastructure problem for metadata.
        </p>

        <h2 style={h2Style}>What AI made worse — and what it could fix</h2>
        <p style={pStyle}>
          Generative AI didn&rsquo;t create the rights metadata problem. The
          problem is older than streaming. But AI made it worse in one very
          specific way: it collapsed the time between creation and distribution.
        </p>
        <p style={pStyle}>
          Before AI, a song took time to make. That time created friction &mdash;
          and friction, annoying as it is, is also a forcing function. You had to
          deal with the metadata questions at some point because the release
          process required it.
        </p>
        <p style={pStyle}>
          AI tools generate music in seconds. The release pipeline is
          increasingly automated. The metadata questions get skipped entirely
          because there&rsquo;s no moment where someone is forced to stop and
          answer them.
        </p>
        <p style={pStyle}>
          And if you&rsquo;re training AI on creative work, the rights metadata
          problem compounds in the other direction. The training data often
          carries no ownership information at all. The model learns from a corpus
          where provenance was stripped at the point of scraping. And the outputs
          of that model are released into the world with no chain back to the
          inputs.
        </p>
        <p style={pStyle}>
          Rights metadata isn&rsquo;t just a creator problem anymore. It&rsquo;s
          a structural failure in the data layer of an entire industry.
        </p>

        <h2 style={h2Style}>What working infrastructure looks like</h2>
        <p style={pStyle}>
          A working infrastructure layer needs to do four things:
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-6)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            1. Registration at the moment of creation.
          </strong>{" "}
          Not weeks later when you&rsquo;re trying to pitch a sync. At the
          moment the work exists. This is a timestamp problem &mdash; who had
          what, when &mdash; and it&rsquo;s solvable with tools that exist today:
          content hashing, registry-backed records, provenance packaging.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            2. Rights metadata attached to the work, not stored separately.
          </strong>{" "}
          The current model treats the creative file and its rights information
          as two separate things. A working layer keeps the rights data attached
          to the work &mdash; or at minimum, keeps a verifiable pointer from the
          work to its canonical rights record.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            3. License terms that can be read programmatically.
          </strong>{" "}
          A PDF license agreement is not machine-readable. A working layer
          expresses rights in a form that platforms, agents, and systems can
          check at query time. This is the programmable IP concept: a license
          contract compressed into a format that travels with the asset.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            4. Routing that reaches creators, not just rights holders of record.
          </strong>{" "}
          The reason royalties disappear is not that the money stops existing.
          It&rsquo;s that the money can&rsquo;t find the person it belongs to,
          because the metadata that would route it is wrong or missing.
        </p>

        <h2 style={h2Style}>What this means if you&rsquo;re a working guitarist today</h2>
        <p style={pStyle}>
          You don&rsquo;t need to wait for the industry to fix its metadata
          problem. You need to build a personal rights infrastructure that is
          independent of whoever distributes your work.
        </p>
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
            <strong style={{ color: "var(--color-text)" }}>Register your work.</strong>{" "}
            US Copyright Office registration is $65 for a single work. It
            creates a legal record that predates any dispute.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Create a provenance file for every release.</strong>{" "}
            Who wrote it, who owns what percentage, what version this is, what
            samples or interpolations are present.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Use a PRO.</strong>{" "}
            If you&rsquo;re in the US, join ASCAP, BMI, or SESAC. This is
            required for broadcast royalties.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Keep your own metadata.</strong>{" "}
            Don&rsquo;t rely entirely on the streaming platform&rsquo;s metadata
            fields. They are designed for playback, not for rights resolution.
          </li>
        </ul>

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
            &ldquo;Rights metadata is the dark matter of the creative economy.
            It governs everything. Almost nobody can see it.&rdquo;
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

        <h2 style={h2Style}>The longer view</h2>
        <p style={pStyle}>
          The AI era is not going to make the rights metadata problem smaller.
          It&rsquo;s going to make it bigger, faster, and harder to resolve
          retroactively. The creators who understand this now &mdash; who treat
          registration and provenance as a baseline practice, not an afterthought
          &mdash; are building something that will matter enormously over the next
          decade.
        </p>
        <p style={pStyle}>
          The dark matter of the creative economy doesn&rsquo;t have to stay
          invisible. It can be registered, attached, and routed. The
          infrastructure to do this exists or is being built.
        </p>
        <p style={pStyle}>
          I wrote the full history of how the signal chain leads to this
          moment &mdash; from Leo Fender&rsquo;s bench to programmable IP &mdash;
          in{" "}
          <a className="link" href={SIGNAL_CHAIN_URL} target="_blank" rel="noopener">
            The Signal Chain
          </a>
          , free at guitar.solutions.
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
