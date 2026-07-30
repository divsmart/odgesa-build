const sections: {
  key: string;
  label: string;
  src: string;
  alt: string;
}[] = [
  {
    key: 'monde',
    label: 'Niveau mondial',
    src: '/images/shared/stats-monde.png',
    alt: 'Réseau adventiste mondial — 9 000+ établissements dans 145 pays',
  },
  {
    key: 'uagf',
    label: 'Antilles · Guyane',
    src: '/images/shared/stats-uagf.png',
    alt: 'Union des Antilles et Guyane Françaises — 14 établissements, 3 842 élèves, 212 enseignants',
  },
  {
    key: 'guadeloupe',
    label: 'Réseau local',
    src: '/images/shared/stats-gpe.png',
    alt: 'Réseau des écoles adventistes de Guadeloupe — 4 établissements depuis 1943',
  },
];

export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '1100px',
      margin: '0 auto'
    }}>
      <p style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: '0.85rem',
        fontWeight: 700,
        letterSpacing: '0.12em',
        textTransform: 'uppercase',
        color: 'var(--color-orange)',
        marginBottom: '0.5rem',
      }}>
        Projet éducatif
      </p>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '1rem',
        lineHeight: 1.1,
      }}>
        Notre Réseau La Persévérance
      </h1>
      <p style={{ lineHeight: 1.8, maxWidth: '720px', color: 'var(--color-text-muted)', marginBottom: '3rem' }}>
        Du réseau adventiste mondial jusqu&apos;aux quatre écoles de Guadeloupe, chaque niveau
        travaille en lien et en harmonie pour accomplir la mission éducative et spirituelle de
        l&apos;Église adventiste.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        {sections.map((s, i) => (
          <div key={s.key} id={s.key} style={{ background: 'rgb(18,22,26)', borderRadius: '10px', overflow: 'hidden', scrollMarginTop: '90px' }}>
            <div style={{ padding: '1.25rem 1.5rem 0' }}>
              <span style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: '0.7rem',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--color-orange)',
              }}>
                {String(i + 1).padStart(2, '0')} · {s.label}
              </span>
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s.src} alt={s.alt} style={{ display: 'block', width: '100%', height: 'auto' }} />
          </div>
        ))}
      </div>
    </section>
  );
}
