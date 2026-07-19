import { posts } from './posts';
import ActualitesGrid from './ActualitesGrid';

export default function Page() {
  return (
    <section
      style={{
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h1
        style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(1.8rem, 4vw, 3rem)',
          color: 'var(--color-teal)',
          marginBottom: '0.5rem',
        }}
      >
        Actualités
      </h1>
      <p
        style={{
          color: 'var(--color-text-muted)',
          marginBottom: 'clamp(2rem, 4vw, 3rem)',
          fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
        }}
      >
        Les dernières nouvelles du réseau des écoles La Persévérance en Guadeloupe.
      </p>

      <ActualitesGrid posts={posts} />
    </section>
  );
}
