import { posts, type Post } from './posts';

// Network-wide posts are tagged with all four schools (the RESEAU constant in posts.ts).
const ALL_SCHOOLS = ['Baillif', 'Duportail', 'Marie-Galante', 'Les Abymes'];

const MOIS: Record<string, number> = {
  janvier: 0, février: 1, fevrier: 1, mars: 2, avril: 3, mai: 4, juin: 5,
  juillet: 6, août: 7, aout: 7, septembre: 8, octobre: 9, novembre: 10,
  décembre: 11, decembre: 11,
};

// Parses "6 octobre 2026", "1er septembre 2026" and "Août 2026" (day defaults to 1).
// Returns 0 for anything unparseable, which sorts it last.
export function parseFrDate(s: string): number {
  const parts = s.toLowerCase().trim().split(/\s+/);
  const day = parts.length === 3 ? parseInt(parts[0], 10) || 1 : 1;
  const monthStr = parts.length === 3 ? parts[1] : parts[0];
  const yearStr = parts.length === 3 ? parts[2] : parts[1];
  const month = MOIS[monthStr];
  const year = parseInt(yearStr, 10);
  if (month === undefined || Number.isNaN(year)) return 0;
  return Date.UTC(year, month, day);
}

const ecoles = (p: Post): string[] => (Array.isArray(p.ecole) ? p.ecole : [p.ecole]);
const isReseau = (p: Post): boolean => ALL_SCHOOLS.every((s) => ecoles(p).includes(s));

/**
 * Related posts for an article, newest first:
 *  - school-specific article → other posts for the same school(s), then network-wide posts
 *  - network-wide article    → other network-wide posts, then everything else
 */
export function getRelatedPosts(slug: string, limit = 6): Post[] {
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const others = posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => parseFrDate(b.date) - parseFrDate(a.date));

  const currentSchools = ecoles(current);
  const currentIsReseau = isReseau(current);

  const primary = currentIsReseau
    ? others.filter(isReseau)
    : others.filter((p) => !isReseau(p) && ecoles(p).some((e) => currentSchools.includes(e)));

  const secondary = others.filter(
    (p) => !primary.includes(p) && (currentIsReseau || isReseau(p)),
  );

  return [...primary, ...secondary].slice(0, limit);
}
