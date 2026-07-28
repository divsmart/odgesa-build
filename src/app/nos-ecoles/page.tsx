'use client';
import Link from 'next/link';

type Hotspot = { label: string; href: string; external?: boolean };

// Left-to-right, matching the flyer's own ①②③④ numbering.
const hotspots: Hotspot[] = [
  { label: 'École La Persévérance Duportail',     href: '/nos-ecoles/duportail' },
  { label: 'École La Persévérance Marie-Galante', href: '/nos-ecoles/marie-galante' },
  { label: 'École Henri Beauregard – Les Abymes',  href: 'https://www.laperseverance.fr/', external: true },
  { label: 'École La Persévérance Baillif',        href: '/nos-ecoles/baillif' },
];

export default function Page() {
  return (
    <main style={{ maxWidth: '1100px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)' }}>

      <div style={{ marginBottom: '2rem' }}>
        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>
          Réseau La Persévérance
        </p>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-teal)', marginBottom: '1rem', lineHeight: 1.1 }}>
          Nos écoles
        </h1>
        <p style={{ lineHeight: 1.8, maxWidth: '720px', color: 'var(--color-text-muted)' }}>
          Quatre écoles primaires, quatre territoires, une même vision éducative. Cliquez sur une
          école ci-dessous pour la découvrir.
        </p>
      </div>

      {/* Flyer graphic with clickable school hotspots — same image and same
          hotspot geometry as the homepage hero slide. Since this is a normal
          content page (not a cover-cropped full-bleed background), a plain
          width:100%/height:auto image keeps its exact aspect ratio with no
          letterboxing needed. */}
      <div style={{ position: 'relative', width: '100%', borderRadius: '10px', overflow: 'hidden' }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/shared/annonce-lancement-site.jpg"
          alt="Le réseau La Persévérance-Guadeloupe — 4 écoles élémentaires, 4 territoires"
          style={{ display: 'block', width: '100%', height: 'auto' }}
        />
        {hotspots.map((h, idx) => (
          h.external ? (
            <a
              key={idx}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={h.label}
              style={{
                position: 'absolute',
                top: '24.5%',
                height: '28.5%',
                left: `${idx * 25}%`,
                width: '25%',
                display: 'block',
              }}
            />
          ) : (
            <Link
              key={idx}
              href={h.href}
              aria-label={h.label}
              style={{
                position: 'absolute',
                top: '24.5%',
                height: '28.5%',
                left: `${idx * 25}%`,
                width: '25%',
                display: 'block',
              }}
            />
          )
        ))}
      </div>
    </main>
  );
}
