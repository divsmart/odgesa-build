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
  { niveau: 'Élémentaires',       ecoles: '6 623',  enseignants: '56 752',  eleves: '1 268 405' },
  { niveau: 'Secondaires',        ecoles: '2 640',  enseignants: '42 083',  eleves: '587 283'   },
  { niveau: 'Formation continue', ecoles: '38',     enseignants: '547',     eleves: '7 159'     },
  { niveau: 'Universitaires',     ecoles: '118',    enseignants: '14 256',  eleves: '160 996'   },
  { niveau: 'Total',              ecoles: '9 419',  enseignants: '113 638', eleves: '2 023 844' },
];

// Conseil d'administration — 22 members, elected by the Assemblée Générale
// Ordinaire for a 4-year (renewable) term.
const conseilGroups: {
  title: string;
  members: { name: string; role?: string }[];
}[] = [
  {
    title: 'Membres de droit — Union des Antilles Guyane Françaises (UAGF)',
    members: [
      { name: 'CARPIN Eddy-Michel',    role: "Président de l'UAGF" },
      { name: 'MARTIAS Marie-Andrée',  role: "Directrice de l'Éducation de l'UAGF" },
    ],
  },
  {
    title: 'Membres de droit — FACSA',
    members: [
      { name: 'AUGUSTE Esaïe',  role: 'Président' },
      { name: 'VOLTAIRE Franck', role: 'Secrétaire' },
      { name: 'ZENARRE Rony',   role: 'Trésorier' },
    ],
  },
  {
    title: 'Membre de droit — Église Adventiste de Guadeloupe',
    members: [
      { name: 'BLOCAIL Corinne', role: "Directrice de l'Éducation" },
    ],
  },
  {
    title: 'Aumônerie',
    members: [
      { name: 'DAUBE Nahomie', role: "Aumônière d'établissement scolaire" },
    ],
  },
  {
    title: "Responsables des départements de l'Éducation",
    members: [
      { name: 'CLODINE-FLORENT Chantal' },
      { name: 'FELIX Eddy' },
      { name: 'NANETTE Ruth' },
      { name: 'REGIS Sébastien' },
    ],
  },
  {
    title: 'Expertise en éducation et formation',
    members: [
      { name: 'DRELIN Esméralda' },
      { name: 'DUBE Raphaël' },
      { name: 'MAYA Patricia' },
      { name: 'SABLIER Patricia' },
      { name: 'SIOUSARAN Cinthia' },
    ],
  },
  {
    title: "Chefs d'établissement élus par leurs pairs",
    members: [
      { name: 'BERNAY Kathy',    role: 'Collège-lycée' },
      { name: 'CHARBONNE Martin', role: 'Primaire' },
    ],
  },
  {
    title: 'Enseignants élus par leurs pairs',
    members: [
      { name: 'GRAVILLON Antoine', role: 'Collège-lycée' },
      { name: 'RETEL Sandrine',    role: 'Primaire' },
    ],
  },
  {
    title: 'Personnel non enseignant',
    members: [
      { name: 'PLACIDE Hugues' },
    ],
  },
  {
    title: "Représentant des parents d'élèves",
    members: [
      { name: 'CLAUDEON André' },
    ],
  },
];

const groupTitleStyle: React.CSSProperties = {
  fontSize: 'clamp(0.75rem, 1.2vw, 0.85rem)',
  fontWeight: 700,
  letterSpacing: '0.02em',
  color: 'var(--color-navy)',
  marginTop: '1.5rem',
  marginBottom: '0.5rem',
};

const memberListStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const memberItemStyle: React.CSSProperties = {
  padding: '0.4rem 0',
  borderBottom: '1px solid #e5e7eb',
  fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)',
};

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

      <div style={{ marginBottom: '2.5rem' }}>
        <img src="/images/shared/stats-monde.png" alt="Réseau scolaire adventiste mondial" style={{ width: '100%', borderRadius: '6px' }} />
      </div>

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

      <div style={{ marginBottom: '2.5rem' }}>
        <img src="/images/shared/stats-uagf.png" alt="Réseau UAGF — Guadeloupe, Martinique, Guyane" style={{ width: '100%', borderRadius: '6px' }} />
      </div>

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

      <div style={{ marginBottom: '2.5rem' }}>
        <img src="/images/shared/stats-gpe.png" alt="Les quatre établissements en Guadeloupe" style={{ width: '100%', borderRadius: '6px' }} />
      </div>

      {/* Conseil d'administration — moved here from Administration et Gouvernance */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.5rem',
      }}>
        Le Conseil d'administration
      </h2>
      <p style={{ marginBottom: '0.5rem', color: 'var(--color-text-muted)', fontSize: 'clamp(0.85rem, 1.4vw, 0.95rem)' }}>
        22 membres élus par l'Assemblée Générale Ordinaire pour 4 ans, rééligibles.
      </p>

      {conseilGroups.map((group) => (
        <div key={group.title}>
          <h3 style={groupTitleStyle}>{group.title}</h3>
          <ul style={memberListStyle}>
            {group.members.map((m) => (
              <li key={m.name} style={memberItemStyle}>
                <strong>{m.name}</strong>
                {m.role && <span style={{ color: 'var(--color-text-muted)' }}> — {m.role}</span>}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Organigramme — placed last, per Michael/Patricia direction */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginTop: '2.5rem',
        marginBottom: '0.75rem',
      }}>
        Organigramme simplifié du réseau scolaire adventiste
      </h2>
      <div>
        <img
          src="/images/shared/admin-gouvernance-infographique.jpeg"
          alt="Organigramme simplifié du réseau scolaire adventiste — de l'établissement local à l'organisation mondiale"
          style={{ width: '100%', borderRadius: '6px' }}
        />
      </div>

    </section>
  );
}
