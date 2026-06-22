const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2.5rem',
  fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
};

const thStyle: React.CSSProperties = {
  background: 'var(--color-teal)',
  color: '#fff',
  padding: '0.6rem 0.75rem',
  textAlign: 'left',
};

const tdStyle: React.CSSProperties = {
  padding: '0.55rem 0.75rem',
  verticalAlign: 'top',
  borderBottom: '1px solid #e5e7eb',
};

const mondial = [
  { niveau: 'Élémentaires',          ecoles: '6 623',  enseignants: '56 752', eleves: '1 268 405' },
  { niveau: 'Secondaires',           ecoles: '2 640',  enseignants: '42 083', eleves: '587 283'   },
  { niveau: 'Formation continue',    ecoles: '38',     enseignants: '547',    eleves: '7 159'     },
  { niveau: 'Universitaires',        ecoles: '118',    enseignants: '14 256', eleves: '160 996'   },
  { niveau: 'Total',                 ecoles: '9 419',  enseignants: '113 638',eleves: '2 023 844' },
];

export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '2rem',
      }}>
        Notre Réseau
      </h1>

      {/* World stats */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.75rem',
      }}>
        Réseau scolaire adventiste dans le monde
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>Niveau</th>
            <th style={{ ...thStyle, textAlign: 'right' }}>Écoles</th>
            <th style={{ ...thStyle, textAlign: 'right' }}>Enseignants</th>
            <th style={{ ...thStyle, textAlign: 'right' }}>Élèves</th>
          </tr>
        </thead>
        <tbody>
          {mondial.map((r, i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafb', fontWeight: i === mondial.length - 1 ? 700 : 400 }}>
              <td style={tdStyle}>{r.niveau}</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>{r.ecoles}</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>{r.enseignants}</td>
              <td style={{ ...tdStyle, textAlign: 'right' }}>{r.eleves}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* World map placeholder */}
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
        {/* TODO: replace with <Image> pointing to the world map once uploaded */}
        [Carte mondiale — image à intégrer]
      </p>

      {/* Antilles / Guyane / Martinique breakdown */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.5rem',
      }}>
        Réseau en Guadeloupe, Martinique et Guyane française
      </h2>
      <p style={{ marginBottom: '0.75rem', color: 'var(--color-text-muted)', fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}>
        9 écoles primaires, 3 collèges, et 2 lycées — soit un total de 3 842 élèves et 212 enseignants.
      </p>

      {/* Regional breakdown placeholder — the PDF figure (e2) is a formatted table image */}
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem' }}>
        {/* TODO: replace with <Image> pointing to the regional breakdown table once uploaded */}
        [Tableau des établissements par territoire — image à intégrer]
      </p>

      {/* Guadeloupe map */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.75rem',
      }}>
        Les quatre établissements en Guadeloupe
      </h2>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1rem' }}>
        <li>Cité scolaire La Persévérance — Boissard, Les Abymes</li>
        <li>École La Persévérance — Baillif</li>
        <li>École La Persévérance — Duportail, Sainte-Rose</li>
        <li>École La Persévérance — Grand-Bourg, Marie-Galante</li>
      </ul>
      <p style={{ color: 'var(--color-text-muted)' }}>
        {/* TODO: replace with <Image> pointing to the Guadeloupe map once uploaded */}
        [Carte de la Guadeloupe — image à intégrer]
      </p>
    </section>
  );
}
