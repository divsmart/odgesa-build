
const bureau = [
  {
    nom: 'Mme Patricia Sablier',
    titre: 'Présidente',
    role: null,
    photo: '/images/bureau/patricia-sablier.jpg',
  },
  {
    nom: 'M. Sébastien Régis',
    titre: 'Président adjoint',
    role: 'Référent numérique',
    photo: '/images/bureau/sebastien-regis.jpg',
  },
  {
    nom: 'Mme Ruth Nanette',
    titre: 'Secrétaire',
    role: 'Référente formation',
    photo: '/images/bureau/ruth-nanette.jpg',
  },
  {
    nom: 'M. Hugues Placide',
    titre: 'Trésorier',
    role: 'Référent travaux',
    photo: '/images/bureau/hugues-placide.jpg',
  },

];

const initials = (nom: string) =>
  nom.replace(/^(Mme?|M\.)\s+/, '').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase();

export default function Page() {
  return (
    <>
    <style>{`
      .bureau-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 1.25rem;
        margin-bottom: 3rem;
      }
      .bureau-photo {
        width: 100%;
        aspect-ratio: 3 / 4;
        max-height: 220px;
        background: #e8f0f3;
        position: relative;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 480px) {
        .bureau-grid {
          grid-template-columns: repeat(2, 1fr) !important;
        }
        .bureau-photo {
          max-height: 180px;
        }
      }
    `}</style>
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '900px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.5rem',
      }}>
        Administration et gouvernance
      </h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2.5rem', fontSize: 'clamp(0.875rem, 1.4vw, 1rem)' }}>
        Mandat 2023–2027
      </p>

      {/* Bureau */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '1.25rem' }}>
        Le Bureau
      </h2>
      <div className="bureau-grid">
        {bureau.map((b) => (
          <div key={b.nom} style={{
            border: '1px solid #d0dde3',
            borderRadius: '8px',
            overflow: 'hidden',
            borderTop: '3px solid var(--color-teal)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Photo or initials fallback */}
            <div className="bureau-photo">
              {b.photo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={b.photo}
                  alt={b.nom}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', position: 'absolute', top: 0, left: 0 }}
                />
              ) : (
                <span style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--color-teal)',
                  opacity: 0.4,
                }}>
                  {initials(b.nom)}
                </span>
              )}
            </div>
            {/* Info */}
            <div style={{ padding: '1rem' }}>
              <p style={{
                fontSize: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-yellow)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                marginBottom: '0.3rem',
              }}>
                {b.titre}
              </p>
              <p style={{
                fontWeight: 600,
                color: 'var(--color-navy)',
                fontSize: 'clamp(0.9rem, 1.5vw, 1rem)',
                marginBottom: b.role ? '0.3rem' : 0,
              }}>
                {b.nom}
              </p>
              {b.role && (
                <p style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', lineHeight: '1.4' }}>
                  {b.role}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Rôle ODGESA */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Rôle de l&apos;ODGESA
      </h2>
      <p style={{ marginBottom: '1rem' }}>
        La charte éducative est portée par l&apos;ODGESA et déclinée dans chaque établissement en cohérence
        avec son projet propre, son règlement intérieur et son contexte local.
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '2rem' }}>
        <li>Définit les orientations éducatives communes à travers les Projets d&apos;école de chaque établissement</li>
        <li>Veille à la cohérence pédagogique du réseau et à la qualité de l&apos;enseignement dispensé</li>
        <li>Soutient les directeurs d&apos;établissement dans leur mission de pilotage pédagogique</li>
        <li>Coordonne les plans de formation continue des personnels enseignants et non enseignants</li>
        <li>Organise les échanges de bonnes pratiques entre établissements du réseau</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Rôle des directeurs d&apos;établissement
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        Chaque directeur est le garant, au sein de son établissement, de la mise en œuvre fidèle du
        Projet d&apos;école. Il anime son équipe, conduit le dialogue avec les familles et représente
        l&apos;établissement dans ses relations avec son environnement local.
      </p>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Évaluation et amélioration continue
      </h2>
      <p style={{ marginBottom: '1rem' }}>
        Le Projet d&apos;école est un document vivant, révisé régulièrement sur la base :
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1rem' }}>
        <li>Des bilans annuels de chaque établissement</li>
        <li>Des questionnaires d&apos;auto-évaluation (familles, élèves, personnels)</li>
        <li>Des évolutions du cadre légal applicable à l&apos;enseignement hors contrat</li>
        <li>Des apports théologiques et pédagogiques de la Division Interaméricaine (DIA)</li>
        <li>Des retours d&apos;expérience des réseaux scolaires adventistes partenaires (Antilles-Guyane, Europe et Monde)</li>
      </ul>

    </section>
    </>
  );
}
