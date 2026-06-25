import type { Metadata } from "next";
import Link from "next/link";

const FOUNDER_URL = "https://suedeai.ai/founder";
const SUEDE_URL = "https://suedeai.ai";
const COMMUNITY_URL = "https://suede.social";
const SIGNAL_CHAIN_URL = "https://guitar.solutions";
const GUITAR_WITHOUT_A_NUMBER_URL = "https://www.amazon.com/dp/B0GD5FX6N6";
const HUMAN_AUTHENTICITY_LAYER_URL = "https://www.amazon.com/dp/B0GMBBWHMQ";
const STAKE_YOUR_CLAIM_URL = "https://www.amazon.com/dp/B0GRG8LGQQ";
const PROOF_AS_INFRASTRUCTURE_URL = "https://www.amazon.com/dp/B0GMB2VLXQ";

const TITLE = "What Happens to Your Guitar Samples in AI Training";
const DESCRIPTION =
  "AI music models are being trained on guitar samples, loops, and recordings — often without attribution, compensation, or consent. Here is what the pipeline actually looks like, what rights you have right now, and what a real ownership layer changes.";
const CANONICAL = "https://guitarhub.org/guitar-samples-ai-training";
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
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: TITLE }],
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION, images: ['/opengraph-image'] },
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
  about: ["AI training data", "guitar samples", "music copyright", "creator rights", "programmable IP"],
};

const BREADCRUMB_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://guitarhub.org" },
    { "@type": "ListItem", position: 2, name: "Reads", item: "https://guitarhub.org/reads" },
    { "@type": "ListItem", position: 3, name: "What Happens to Your Guitar Samples in AI Training", item: CANONICAL },
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

export default function GuitarSamplesAITrainingPage() {
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
            maxWidth: "22ch",
          }}
        >
          What Happens to Your Guitar Samples in AI Training
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
          AI music models are trained on real recordings &mdash; yours included.
          Here&rsquo;s what the pipeline looks like and what your rights actually are.
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
          If you have ever posted a guitar riff to SoundCloud, uploaded a demo
          to Bandcamp, or dropped a loop pack on any royalty-free marketplace,
          that audio is almost certainly in an AI training dataset somewhere.
          Not maybe. Not hypothetically. The pipelines that scrape audio for AI
          training do not ask for permission, and most terms of service that
          platform users agree to explicitly permit it.
        </p>
        <p style={pStyle}>
          This is not a conspiracy. It is an engineering reality. And
          understanding how it works &mdash; specifically how your guitar
          recordings travel from your hard drive into a foundation model &mdash;
          is the first step toward knowing what, if anything, you can do about it.
        </p>

        <h2 style={h2Style}>How audio ends up in training data</h2>
        <p style={pStyle}>
          The pipeline typically works in four stages:
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-6)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            1. Scraping.
          </strong>{" "}
          Large-scale crawlers pull publicly accessible audio from streaming
          platforms, music hosting services, sample libraries, and archival
          collections. The scraper does not distinguish between commercially
          released work, bedroom recordings, and free loops. If the URL is
          public and the file is audio, it goes into the pipeline.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            2. Filtering.
          </strong>{" "}
          The raw scrape is filtered for audio quality, format compatibility,
          and sometimes genre or instrument classification. Guitar-heavy content
          is particularly useful for training generation models because it is
          abundant, stylistically diverse, and carries clear tonal signatures
          that the model can learn to replicate.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            3. Stripping.
          </strong>{" "}
          Metadata is often stripped or truncated at this stage. The file name,
          the ID3 tags, the embedded album art, the original uploader&rsquo;s
          name &mdash; all of it may be dropped before the audio reaches the
          training loop. This is where provenance breaks. The model learns from
          your playing, but the chain back to you as the creator is severed.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            4. Training.
          </strong>{" "}
          The processed audio is converted to spectrograms or audio tokens and
          fed into the model. The model does not store your specific recording.
          It encodes the statistical patterns: the way a particular picking
          attack decays, how a stacked-humbucker midrange compresses, the
          timing feel of a certain strumming pattern. That signature &mdash;
          your signature &mdash; becomes part of the model&rsquo;s learned
          capabilities. Without attribution, without compensation, without
          notice.
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
            &ldquo;The model doesn&rsquo;t store your recording. It stores the
            pattern. But the pattern came from somewhere, and that somewhere
            is you.&rdquo;
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

        <h2 style={h2Style}>What the law currently says</h2>
        <p style={pStyle}>
          Copyright law protects expression, not style. You own the specific
          recording you made. You own the specific composition you wrote. What
          you do not own is the general style of playing, the tonal
          characteristic of your guitar, or the statistical pattern of how you
          pick a note.
        </p>
        <p style={pStyle}>
          This is not a new doctrine. It predates AI by decades. Sampling cases
          in the 1990s established that taking a specific recording without
          license is infringement. Style-copying cases &mdash; George Harrison,
          Led Zeppelin&rsquo;s &ldquo;Stairway to Heaven&rdquo; dispute &mdash;
          largely failed because courts drew a hard line between the specific
          expression and the general style.
        </p>
        <p style={pStyle}>
          AI training sits in this contested middle ground. If a model was
          trained on your copyrighted recordings without a license, there is a
          plausible infringement argument at the training stage. Several major
          lawsuits are currently working through this question. As of 2026,
          there is no settled precedent. Courts are actively wrestling with
          whether ingestion of copyrighted audio for model training constitutes
          fair use.
        </p>
        <p style={pStyle}>
          For independent guitarists, the practical reality is this: you have
          a copyright in your recordings from the moment they are fixed in a
          tangible medium. That copyright exists whether you register it or not.
          But enforcing an unregistered copyright is significantly harder.
          Statutory damages &mdash; the provision that makes copyright suits
          economically viable against large defendants &mdash; are only available
          for works registered before the infringement or within three months of
          publication.
        </p>

        <h2 style={h2Style}>The sample pack problem is different</h2>
        <p style={pStyle}>
          If you have sold or distributed loop packs, sample libraries, or
          royalty-free guitar content, the analysis shifts. The license you
          offered buyers may have been broad enough to permit AI training use.
          Many royalty-free licenses include language about &ldquo;any
          purpose,&rdquo; &ldquo;commercial use,&rdquo; and
          &ldquo;modification&rdquo; that a determined AI company could argue
          covers training ingestion.
        </p>
        <p style={pStyle}>
          This was not what most sample creators intended when they wrote those
          licenses in 2015. It is increasingly what the licenses technically say.
          If you have existing sample libraries available under broad royalty-free
          terms, the moment to review those licenses was yesterday. The moment
          after that is now.
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
            &ldquo;Royalty-free has never meant free for every possible use.
            AI training is a use that most 2015 license templates never
            contemplated.&rdquo;
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

        <h2 style={h2Style}>What an ownership layer changes</h2>
        <p style={pStyle}>
          The underlying problem is that provenance breaks at ingestion. If
          your recording carries no machine-readable ownership claim &mdash; no
          registry record, no content hash linked to you, no metadata that
          survives stripping &mdash; then by the time the model is trained, there
          is no evidence connecting your work to the resulting capability.
        </p>
        <p style={pStyle}>
          A working ownership layer changes this at the source. When a recording
          is registered with a verifiable content hash at the moment of creation,
          the hash travels with the work. If the audio is scraped, the hash is
          scrapeable too. If the hash is stripped, the stripping itself becomes
          part of the evidence chain. Future auditing tools &mdash; and
          regulators are beginning to require them in some jurisdictions &mdash;
          can use those hashes to trace what was used and who owned it.
        </p>
        <p style={pStyle}>
          This does not prevent the scraping. It does not retroactively fix
          training datasets that are already built. What it does is establish
          a provenance record that survives the pipeline and can anchor a
          licensing or compensation claim.
        </p>

        <h2 style={h2Style}>What you can do right now</h2>
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
            <strong style={{ color: "var(--color-text)" }}>Register your recordings with the US Copyright Office.</strong>{" "}
            SR registration covers sound recordings. $65 for a single work,
            $55 for a group registration of up to 10 unpublished works. This
            creates the legal prerequisite for statutory damages.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Review any existing royalty-free licenses.</strong>{" "}
            If you have sample packs or loops available under broad terms,
            consider whether an updated license with explicit AI training
            carve-outs is appropriate.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Embed ownership metadata in your audio files.</strong>{" "}
            ID3 tags, XMP metadata, and broadcast wave chunks can carry
            copyright notice, ISRC codes, and contact information. None of this
            is legally binding on its own, but it establishes intent and can
            survive in partial scrapes.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Build a registry-backed provenance record.</strong>{" "}
            Tools exist now to create a timestamped, content-hash-linked record
            of your creative work at the moment of creation. That record is the
            foundation of any future ownership or attribution claim.
          </li>
        </ul>

        <p style={{ ...pStyle, marginTop: "var(--space-8)" }}>
          The guitar samples going into AI training today are building the sonic
          vocabularies that models will deploy for the next decade. Whether you
          are credited, compensated, or simply erased from that process depends
          on what ownership infrastructure you put in place before the scraper
          finds your work.
        </p>
        <p style={pStyle}>
          The tools to build that infrastructure exist now. They are not
          expensive. They are not complicated. They are just not the default.
          Changing that default is the project.
        </p>
        <p style={pStyle}>
          Register your work at{" "}
          <a className="link" href={SUEDE_URL} target="_blank" rel="noopener">
            suedeai.ai
          </a>{" "}
          and build the provenance record before the scraper arrives.
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
