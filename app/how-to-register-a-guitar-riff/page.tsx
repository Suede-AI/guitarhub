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
const COPYRIGHT_GOV_URL = "https://www.copyright.gov/registration/";

const TITLE = "How to Register a Guitar Riff as Intellectual Property";
const DESCRIPTION =
  "A guitar riff can be registered as intellectual property, but most guitarists have no idea how. Here is the practical walkthrough: what is protectable, what is not, how to register with the US Copyright Office, and how a registry-backed provenance record extends that protection into the AI era.";
const CANONICAL = "https://guitarhub.org/how-to-register-a-guitar-riff";
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
  about: [
    "guitar riff copyright",
    "music IP registration",
    "intellectual property",
    "US Copyright Office",
    "creator rights",
  ],
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
      name: "How to Register a Guitar Riff as Intellectual Property",
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

export default function HowToRegisterGuitarRiffPage() {
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
          How to Register a Guitar Riff as Intellectual Property
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
          A riff can be registered. Most guitarists never do it. Here is the
          practical walkthrough from copyright law to registry-backed
          provenance.
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
          The riff that opens &ldquo;Smoke on the Water&rdquo; is one of the
          most recognized four notes in popular music. It is also one of the
          most frequently misunderstood from an IP standpoint. Many guitarists
          assume that because a riff is short, it cannot be protected. That
          assumption costs real money.
        </p>
        <p style={pStyle}>
          A guitar riff is a musical composition. Compositions are protectable
          under copyright law from the moment they are fixed in a tangible
          medium &mdash; which means the second you record it, a copyright
          exists. The question is not whether protection exists. The question
          is whether you can enforce it, and how much leverage you have when
          you try.
        </p>
        <p style={pStyle}>
          The answers to those questions depend almost entirely on whether you
          registered.
        </p>

        <h2 style={h2Style}>What a riff actually is under copyright law</h2>
        <p style={pStyle}>
          Copyright protects original expression. In music, that means the
          specific arrangement of notes, rhythms, and harmonies that constitute
          a composition. It does not protect general concepts, common
          progressions, generic rhythmic patterns, or musical ideas that lack
          sufficient originality.
        </p>
        <p style={pStyle}>
          Courts apply a threshold of &ldquo;minimal creativity&rdquo; for
          copyright protection. A single sustained note is not protectable.
          A common I-IV-V progression is not protectable. The specific sequence
          of notes, the rhythm, the register, and the arrangement that constitutes
          a distinctive riff generally is.
        </p>
        <p style={pStyle}>
          The &ldquo;Smoke on the Water&rdquo; main riff &mdash; G&ndash;Bb&ndash;C,
          G&ndash;Bb&ndash;Db&ndash;C &mdash; has been the subject of copyright
          analysis precisely because it is short, repeated, and distinctive.
          Its distinctiveness is the same characteristic that makes it both
          recognizable and potentially protectable. Length alone does not
          determine protectability; originality does.
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
            &ldquo;Copyright in your riff exists the moment you record it.
            Registration does not create the right. It creates the ability to
            enforce it.&rdquo;
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

        <h2 style={h2Style}>Step one: fix it in a tangible medium</h2>
        <p style={pStyle}>
          Copyright protection begins at fixation. A riff that exists only in
          your head is not protected. A riff that you record &mdash; even to
          your phone&rsquo;s voice memo app &mdash; is.
        </p>
        <p style={pStyle}>
          This is the most important step, and it costs nothing. Record the
          riff. Save the file. Keep it. The timestamp on the file and the device
          metadata associated with the recording are the first evidence in
          your provenance chain.
        </p>
        <p style={pStyle}>
          More importantly: record it at the highest quality available to you.
          The recording you make today may become the reference in a future
          dispute. Compress it to MP3 later if you need to. Keep the original.
        </p>

        <h2 style={h2Style}>Step two: register with the US Copyright Office</h2>
        <p style={pStyle}>
          Registration is optional but strongly recommended. Here is why it
          matters:
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
            <strong style={{ color: "var(--color-text)" }}>Statutory damages.</strong>{" "}
            If someone infringes your registered work, you can claim statutory
            damages of $750 to $30,000 per work (up to $150,000 for willful
            infringement) without proving actual harm. For an unregistered work,
            you must prove actual damages, which is expensive and often
            impossible for independent creators.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Attorney&rsquo;s fees.</strong>{" "}
            Registration before infringement allows the court to award
            attorney&rsquo;s fees to the prevailing party. This is what makes
            litigation economically viable. Without it, most infringement cases
            are not worth pursuing financially.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Public record.</strong>{" "}
            A US Copyright Office registration creates a public, searchable
            record linking your name to your work. This record is evidence in
            any dispute and can be verified by third parties without your
            involvement.
          </li>
          <li>
            <strong style={{ color: "var(--color-text)" }}>Presumption of validity.</strong>{" "}
            A certificate of registration is prima facie evidence that the
            copyright is valid and that the facts stated in the certificate
            are true. In litigation, this shifts the burden to the infringer
            to prove otherwise.
          </li>
        </ul>

        <h2 style={h2Style}>The registration process, practically</h2>
        <p style={pStyle}>
          You can register a musical composition, a sound recording, or both.
          If you wrote the riff and recorded it yourself, you probably want to
          register both &mdash; they are separate copyrights in the same work.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-6)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            For the composition (the notes and rhythm):
          </strong>{" "}
          Use Form PA (Performing Arts) at{" "}
          <a className="link" href={COPYRIGHT_GOV_URL} target="_blank" rel="noopener">
            copyright.gov
          </a>
          . You will need a deposit copy &mdash; either a lead sheet (written notation)
          or an audio recording of the work. If you cannot read music, the audio recording
          is accepted. Fee: $65 for a single work, $55 for a group of unpublished works.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            For the sound recording (the specific performance):
          </strong>{" "}
          Use Form SR (Sound Recording). You will submit the audio file as the
          deposit copy. If you register both the composition and the sound
          recording in the same filing, use Form SR and check the appropriate
          box &mdash; one registration can cover both if the same claimant
          owns both.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          <strong style={{ color: "var(--color-text)", fontWeight: 600 }}>
            Timing matters.
          </strong>{" "}
          Register within three months of publication, or before any infringement
          occurs. &ldquo;Publication&rdquo; includes posting publicly online.
          If you post a riff to Instagram and then register six months later,
          you lose the statutory damages window for anything that happened before
          registration.
        </p>
        <p style={{ ...pStyle, marginTop: "var(--space-4)" }}>
          Processing time currently runs three to twelve months for online
          applications. The effective date of registration is the day the
          Copyright Office receives a complete application, not the date of
          the certificate. So file early.
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
            &ldquo;The Copyright Office registration is your legal anchor.
            The content-hash registry record is your digital one. You need both
            in 2026.&rdquo;
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

        <h2 style={h2Style}>Step three: build a registry-backed provenance record</h2>
        <p style={pStyle}>
          Copyright Office registration creates a legal record. It does not
          create a machine-readable provenance record that travels with your
          audio file when it gets scraped, shared, or ingested into an AI
          pipeline.
        </p>
        <p style={pStyle}>
          A registry-backed provenance record is a content hash of your audio
          file linked to your identity and registered at a specific timestamp.
          The content hash is deterministic: the same file always produces the
          same hash. If someone later claims a version of your riff and you can
          produce the original file, the hash is unambiguous evidence of which
          came first.
        </p>
        <p style={pStyle}>
          More importantly for the AI context: if your audio is scraped for
          training, the hash is scrapeable. Future auditing tools designed to
          trace training data provenance can find the connection between the
          model&rsquo;s learned capability and the specific registered work that
          contributed to it. Without the hash, there is no technical evidence
          chain. With it, there is.
        </p>
        <p style={pStyle}>
          This does not replace Copyright Office registration. It extends it
          into the digital and AI infrastructure layer. The practical workflow
          is:
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
          <li>Record the riff.</li>
          <li>Register a content hash with a provenance registry immediately.</li>
          <li>File with the Copyright Office within three months of publication.</li>
          <li>Keep the original file, the hash record, and the registration certificate together.</li>
        </ul>

        <h2 style={h2Style}>What this looks like in practice</h2>
        <p style={pStyle}>
          You write a guitar intro. It is two bars, eight notes, a specific
          rhythmic pattern that has a signature feel. You have heard similar
          progressions before, but this specific sequence, at this specific
          tempo, with this specific rhythmic placement, is yours.
        </p>
        <p style={pStyle}>
          You record it to your interface. You register the content hash
          immediately at{" "}
          <a className="link" href={SUEDE_URL} target="_blank" rel="noopener">
            suedeai.ai
          </a>
          &nbsp;&mdash; this creates a timestamped, verifiable record linking
          the audio file to your identity. You file with the Copyright Office
          before you post it anywhere.
        </p>
        <p style={pStyle}>
          When the riff ends up in an AI training dataset &mdash; and if you
          release it publicly, it eventually will &mdash; the hash record exists.
          When an AI model generates something that sounds like your riff, you
          have a starting point for an attribution or licensing claim. You have
          the legal certificate, the timestamp, and the content hash.
        </p>
        <p style={pStyle}>
          Without any of those, you have a complaint and no evidence. The
          music industry has been running on complaints without evidence for
          seventy years. The outcome of that approach is documented.
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
