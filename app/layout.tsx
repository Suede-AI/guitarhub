import type { Metadata, Viewport } from "next";
import "./globals.css";
import Link from "next/link";

const SITE_URL = "https://guitarhub.org";
const COMMUNITY_URL = "https://suede.social";
const TOOLS_URL = "https://guitarchords.info";
const SUEDE_URL = "https://suedeai.ai";
const FOUNDER_URL = "https://suedeai.ai/founder";
const SUEDE_X_URL = "https://x.com/AISUEDE";
const FOUNDER_X_URL = "https://x.com/johnnysuede";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "GuitarHub — Real Rigs, Real Gear, Real Talk | Suede Social",
    template: "%s | GuitarHub",
  },
  description:
    "GuitarHub is the open guitar hub: rig rundowns, gear and rights explainers, and a community grounded in real rigs. The front door to Suede Social, by Suede Labs.",
  applicationName: "GuitarHub",
  authors: [{ name: "Jason Colapietro" }],
  openGraph: {
    type: "website",
    title: "GuitarHub — Real Rigs, Real Gear, Real Talk",
    description:
      "The open guitar hub. Rig rundowns, gear and rights explainers, and a community grounded in real rigs. Part of Suede Social.",
    siteName: "GuitarHub",
    url: SITE_URL,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "GuitarHub — Real Rigs, Real Gear, Real Talk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GuitarHub — Real Rigs, Real Gear, Real Talk",
    description:
      "The open guitar hub. Rig rundowns, gear and rights explainers, and a community grounded in real rigs.",
    images: ["/opengraph-image"],
  },
  robots: { index: true, follow: true },
  verification: { google: "RhxnucF1yhCQ5EFb-FrZpLHFNhk4lUG8b4snxSr9IeY" },
};

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "GuitarHub",
  url: SITE_URL,
  inLanguage: "en",
  description:
    "The open guitar hub: rig rundowns, gear and rights explainers, and a community grounded in real rigs.",
  image: {
    "@type": "ImageObject",
    url: "https://guitarhub.org/opengraph-image",
    width: 1200,
    height: 630,
  },
  creator: {
    "@type": "Person",
    name: "Jason Colapietro",
    url: FOUNDER_URL,
    jobTitle: "AI expert and founder of Suede Labs AI",
    sameAs: [FOUNDER_URL, FOUNDER_X_URL],
  },
  publisher: {
    "@type": "Organization",
    name: "Suede Labs",
    url: SUEDE_URL,
    sameAs: [SUEDE_URL, SUEDE_X_URL],
  },
  isPartOf: {
    "@type": "WebSite",
    name: "Suede Social",
    url: COMMUNITY_URL,
  },
};

export const viewport: Viewport = {
  themeColor: "#050b16",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSON_LD) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}

const navLinkStyle: React.CSSProperties = { textDecoration: "none" };

function SiteHeader() {
  return (
    <header
      style={{
        borderBottom: "1px solid var(--color-rule-muted)",
        background: "linear-gradient(to bottom, var(--color-ink), transparent)",
      }}
    >
      <div className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          aria-label="GuitarHub"
          style={{ display: "inline-flex", alignItems: "baseline", gap: "0.55rem", textDecoration: "none" }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-rights-red)",
            }}
          >
            guitar
          </span>
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--color-text)",
            }}
          >
            hub
          </span>
        </Link>
        <nav
          aria-label="Primary"
          style={{
            display: "flex",
            gap: "1.4rem",
            alignItems: "center",
            fontFamily: "var(--font-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--color-text-muted)",
          }}
        >
          <Link href="/rigs" className="link" style={navLinkStyle}>
            Rigs
          </Link>
          <Link href="/reads" className="link" style={navLinkStyle}>
            Reads
          </Link>
          <a href={TOOLS_URL} className="link" style={navLinkStyle} target="_blank" rel="noopener noreferrer">
            Tools&#8599;
          </a>
          <a
            href={COMMUNITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              textDecoration: "none",
              color: "var(--color-ink)",
              background: "var(--color-registry-cyan)",
              padding: "0.5rem 0.9rem",
              borderRadius: "2px",
              fontWeight: 600,
            }}
          >
            Join the community
          </a>
        </nav>
      </div>
    </header>
  );
}

function SiteFooter() {
  return (
    <footer style={{ marginTop: "var(--space-section)", borderTop: "1px solid var(--color-rule-muted)" }}>
      <div className="mx-auto max-w-6xl px-6 py-10" style={{ display: "grid", gap: "var(--space-6)" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "space-between",
            color: "var(--color-text-dim)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            letterSpacing: "0.10em",
          }}
        >
          <span>GuitarHub — the open guitar hub. Real rigs, real gear, real talk.</span>
          <nav aria-label="Site links" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/rigs" className="link" style={navLinkStyle}>
              Rigs
            </Link>
            <Link href="/reads" className="link" style={navLinkStyle}>
              Reads
            </Link>
            <a href={TOOLS_URL} className="link" style={navLinkStyle} target="_blank" rel="noopener noreferrer">
              Guitar Tools
            </a>
            <a href={COMMUNITY_URL} className="link" style={navLinkStyle} target="_blank" rel="noopener noreferrer">
              Community
            </a>
          </nav>
        </div>

        <hr className="hr-rule" />

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "0.4rem 1.25rem",
            justifyContent: "space-between",
            alignItems: "baseline",
            color: "var(--color-text-dim)",
            fontFamily: "var(--font-mono)",
            fontSize: "0.78rem",
            letterSpacing: "0.08em",
          }}
        >
          <span>
            GuitarHub is the open front door to{" "}
            <a className="link" href={COMMUNITY_URL} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
              Suede Social
            </a>
            , a guitar community grounded in real rigs.
          </span>
          <span>
            A{" "}
            <a className="link" href={SUEDE_URL} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
              Suede Labs
            </a>
            {" project by "}
            <a className="link" href={FOUNDER_URL} target="_blank" rel="noopener noreferrer" style={navLinkStyle}>
              Jason Colapietro
            </a>
            {" · "}
            <span style={{ color: "var(--color-rights-red)" }}>Proof of Creation</span>
            {" for the AI era."}
          </span>
        </div>
      </div>
    </footer>
  );
}
