import type { MetadataRoute } from 'next';
import { posts } from './actualites/posts';

const SITE_URL = 'https://www.ecolesperseverance-gp.fr';

// posts.ts dates are French display strings ("27 août 2026", "Août 2026" for
// month-only entries) rather than ISO dates, since they're meant for reading,
// not sorting. This parses them for the sitemap's lastModified field; if a
// date is unparseable for any reason, we skip lastModified for that entry
// rather than guessing at a wrong date.
const FRENCH_MONTHS: Record<string, number> = {
  janvier: 0,
  février: 1,
  mars: 2,
  avril: 3,
  mai: 4,
  juin: 5,
  juillet: 6,
  août: 7,
  septembre: 8,
  octobre: 9,
  novembre: 10,
  décembre: 11,
};

function parseFrenchDate(input: string): Date | undefined {
  const parts = input.trim().toLowerCase().split(/\s+/);
  // "27 août 2026" -> [day, month, year] | "août 2026" -> [month, year]
  const [day, month, year] =
    parts.length === 3 ? parts : [undefined, parts[0], parts[1]];

  const monthIndex = month ? FRENCH_MONTHS[month] : undefined;
  const yearNum = year ? parseInt(year, 10) : undefined;

  if (monthIndex === undefined || !yearNum || Number.isNaN(yearNum)) {
    return undefined;
  }

  const dayNum = day ? parseInt(day, 10) : 1;
  return new Date(yearNum, monthIndex, Number.isNaN(dayNum) ? 1 : dayNum);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, priority: 1.0, changeFrequency: 'weekly' },

    { url: `${SITE_URL}/nos-ecoles`, priority: 0.9, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/nos-ecoles/baillif`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/nos-ecoles/duportail`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/nos-ecoles/marie-galante`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/nos-ecoles/les-abymes`, priority: 0.8, changeFrequency: 'monthly' },

    { url: `${SITE_URL}/actualites`, priority: 0.8, changeFrequency: 'weekly' },

    { url: `${SITE_URL}/projet-educatif`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/projet-educatif/notre-identite-educative`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/projet-educatif/charte-educative-commune`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/projet-educatif/cadre-de-vie`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/projet-educatif/notre-reseau`, priority: 0.6, changeFrequency: 'monthly' },

    { url: `${SITE_URL}/a-propos/qui-sommes-nous`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/a-propos/histoire`, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/a-propos/administration-et-gouvernance`, priority: 0.5, changeFrequency: 'monthly' },

    { url: `${SITE_URL}/notre-eglise`, priority: 0.5, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/parents`, priority: 0.7, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/galerie`, priority: 0.6, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/contact`, priority: 0.6, changeFrequency: 'yearly' },
    { url: `${SITE_URL}/mentions-legales`, priority: 0.2, changeFrequency: 'yearly' },

    // /login and everything under /api are intentionally excluded — not
    // public-facing content, nothing for a search engine to index there.
  ];

  const articleRoutes: MetadataRoute.Sitemap = posts.map(post => {
    const lastModified = parseFrenchDate(post.date);
    return {
      url: `${SITE_URL}/actualites/${post.slug}`,
      ...(lastModified ? { lastModified } : {}),
      priority: 0.5,
      changeFrequency: 'monthly' as const,
    };
  });

  return [...staticRoutes, ...articleRoutes];
}
