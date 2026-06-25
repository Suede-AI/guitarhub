import type { MetadataRoute } from "next";

const BASE = "https://guitarhub.org";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE, lastModified: new Date('2026-06-01'), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/reads`, lastModified: new Date('2026-06-01'), changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/rigs`, lastModified: new Date('2026-06-01'), changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE}/rights-metadata-dark-matter`, lastModified: new Date('2026-06-14'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/fender-stratocaster-lawsuit`, lastModified: new Date('2026-06-11'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/guitar-samples-ai-training`, lastModified: new Date('2026-06-23'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/session-musicians-publishing-royalties`, lastModified: new Date('2026-06-23'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/how-to-register-a-guitar-riff`, lastModified: new Date('2026-06-23'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/ai-training-and-your-music`, lastModified: new Date('2026-06-14'), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/who-owns-the-output-stage`, lastModified: new Date('2026-06-14'), changeFrequency: "monthly", priority: 0.8 },
  ];
}
