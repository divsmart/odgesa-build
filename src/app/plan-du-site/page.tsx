import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '../actualites/posts';
import { parseFrDate } from '../actualites/related';
import styles from './PlanDuSite.module.css';

export const metadata: Metadata = {
  title: 'Plan du site — ODGESA',
  description:
    'Toutes les pages du site du réseau La Persévérance — écoles chrétiennes adventistes de Guadeloupe.',
};

type Entry = { href: string; label: string };
type Section = { title: string; links: Entry[] };

// Static pages — keep in step with src/app/sitemap.ts when pages are added or removed.
const SECTIONS: Section[] = [
  {
    title: 'Accueil',
    links: [{ href: '/', label: 'Page d\'accueil' }],
  },
  {
    title: 'Nos écoles',
    links: [
      { href: '/nos-ecoles', label: 'Présentation des écoles' },
      { href: '/nos-ecoles/baillif', label: 'La Persévérance Baillif' },
      { href: '/nos-ecoles/duportail', label: 'La Persévérance Duportail' },
      { href: '/nos-ecoles/marie-galante', label: 'La Persévérance Marie-Galante' },
      { href: '/nos-ecoles/les-abymes', label: 'Cité Scolaire J. Bigord — Les Abymes' },
    ],
  },
  {
    title: 'Projet éducatif',
    links: [
      { href: '/projet-educatif', label: 'Projet éducatif' },
      { href: '/projet-educatif/notre-identite-educative', label: 'Notre identité éducative' },
      { href: '/projet-educatif/charte-educative-commune', label: 'Charte éducative commune' },
      { href: '/projet-educatif/cadre-de-vie', label: 'Cadre de vie des établissements' },
      { href: '/projet-educatif/notre-reseau', label: 'Notre réseau' },
    ],
  },
  {
    title: 'À propos de l\'ODGESA',
    links: [
      { href: '/a-propos/qui-sommes-nous', label: 'Qui sommes-nous ?' },
      { href: '/a-propos/histoire', label: 'Histoire' },
      { href: '/a-propos/administration-et-gouvernance', label: 'Administration et gouvernance' },
      { href: '/notre-eglise', label: 'Notre Église' },
    ],
  },
  {
    title: 'Familles et informations pratiques',
    links: [
      { href: '/parents', label: 'Parents' },
      { href: '/galerie', label: 'Galerie' },
      { href: '/contact', label: 'Contact' },
      { href: '/mentions-legales', label: 'Mentions légales' },
    ],
  },
];

export default function PlanDuSitePage() {
  // Articles come straight from posts.ts, so new ones appear here automatically.
  const articles = [...posts].sort((a, b) => parseFrDate(b.date) - parseFrDate(a.date));

  return (
    <main className={styles.wrap}>
      <h1 className={styles.title}>Plan du site</h1>
      <p className={styles.lead}>
        Retrouvez ici l&apos;ensemble des pages du site du réseau La Persévérance.
      </p>

      <div className={styles.grid}>
        {SECTIONS.map((section) => (
          <section key={section.title} className={styles.section}>
            <h2 className={styles.sectionTitle}>{section.title}</h2>
            <ul className={styles.list}>
              {section.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <section className={`${styles.section} ${styles.articles}`}>
        <h2 className={styles.sectionTitle}>
          <Link href="/actualites">Actualités</Link>
        </h2>
        <ul className={styles.list}>
          {articles.map((post) => (
            <li key={post.slug}>
              <Link href={`/actualites/${post.slug}`}>{post.title}</Link>
              <span className={styles.date}>{post.date}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
