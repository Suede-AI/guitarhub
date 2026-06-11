import type { MetadataRoute } from "next";

const BASE = "https://guitarhub.org";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE}/reads`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/fender-stratocaster-lawsuit`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE}/rigs`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
  ];
}
