import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parents — Écoles Persévérance Guadeloupe',
  description: 'Espace parents du réseau des écoles adventistes La Persévérance en Guadeloupe.',
};

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
  color: 'var(--color-teal)',
  marginTop: '2.5rem',
  marginBottom: '0.75rem',
};

const p: React.CSSProperties = { marginBottom: '1rem' };

const ecoleDirecteButton: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--color-teal)',
  color: '#fff',
  fontWeight: 600,
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  textDecoration: 'none',
  marginBottom: '2rem',
};

const nouveauteBadge: React.CSSProperties = {
  display: 'inline-block',
  background: '#d64545',
  color: '#fff',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  padding: '0.18rem 0.6rem',
  borderRadius: '999px',
  lineHeight: 1.4,
};

const instagramLink: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'var(--color-teal)',
  fontSize: '0.85rem',
  fontWeight: 500,
  textDecoration: 'none',
};

export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '860px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '2rem',
      }}>
        Espace Parents
      </h1>

      <p style={p}>
        Retrouvez ici les informations pratiques et les ressources destinées aux familles du réseau
        La Persévérance.
      </p>

      <a
        href="https://www.ecoledirecte.com/login?cameFrom=%2FAccueil"
        target="_blank"
        rel="noopener noreferrer"
        style={ecoleDirecteButton}
      >
        Accéder à ÉcoleDirecte ↗
      </a>

      <h2 style={h2Style}>Services et ressources</h2>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
            <span>Acheter les uniformes en ligne</span>
            <span style={nouveauteBadge}>Nouveauté</span>
          </span>
          <a
            href="https://www.instagram.com/ecoles_perseverance_971"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramLink}
          >
            <img
              src="/images/shared/instagram-icon.png"
              alt="Instagram"
              width={20}
              height={20}
              style={{ display: 'block' }}
            />
            ecoles_perseverance_971
          </a>
        </li>
        <li>Restauration scolaire</li>
        <li>
          <a href="/projet-educatif/cadre-de-vie#ape" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>
            Association des parents d&apos;élèves (APE)
          </a>
        </li>
      </ul>

      <img
        src="/images/duportail/refectoire-duportail.jpg"
        alt="Réfectoire de l'école de Duportail"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          marginTop: '1rem',
        }}
      />
    </section>
  );
}
