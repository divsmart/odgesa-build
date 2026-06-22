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
        Administration et gouvernance
      </h1>

      <p style={{ marginBottom: '1.25rem' }}>
        La charte éducative est portée par l'ODGESA et déclinée dans chaque établissement en cohérence
        avec son projet propre, son règlement intérieur et son contexte local. Elle peut être présentée
        aux équipes, aux familles et aux partenaires comme document de référence.
      </p>

      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '2rem' }}>
        <li>Elle définit les orientations éducatives communes à travers les Projets d'école de chaque établissement</li>
        <li>Veille à la cohérence pédagogique du réseau et à la qualité de l'enseignement dispensé</li>
        <li>Soutient les directeurs d'établissement dans leur mission de pilotage pédagogique</li>
        <li>Coordonne les plans de formation continue des personnels enseignants et non enseignants</li>
        <li>Organise les échanges de bonnes pratiques entre établissements du réseau</li>
      </ul>

      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.75rem',
      }}>
        Rôle des directeurs d'établissement
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        Chaque directeur est le garant, au sein de son établissement, de la mise en œuvre fidèle du
        Projet d'école. Il anime son équipe, conduit le dialogue avec les familles et représente
        l'établissement dans ses relations avec son environnement local.
      </p>

      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.75rem',
      }}>
        Évaluation et amélioration continue
      </h2>
      <p style={{ marginBottom: '1rem' }}>
        Le Projet d'école est un document vivant. Il fait l'objet d'une révision régulière, sur la base :
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '2.5rem' }}>
        <li>Des bilans annuels de chaque établissement</li>
        <li>Des questionnaires d'auto-évaluation (familles, élèves, personnels)</li>
        <li>Des évolutions du cadre légal applicable à l'enseignement hors contrat</li>
        <li>Des apports théologiques et pédagogiques de la Division Interaméricaine (DIA)</li>
        <li>Des retours d'expérience des réseaux scolaires adventistes partenaires (Antilles-Guyane, Europe et Monde)</li>
      </ul>

      {/* Organigramme — replace src with the actual uploaded image path once available in Strapi/public */}
      <h2 style={{
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-teal)',
        marginBottom: '1rem',
      }}>
        Organigramme simplifié du réseau scolaire adventiste
      </h2>
      <p style={{ color: 'var(--color-text-muted)' }}>
        {/* TODO: replace with <Image> pointing to the organigramme once uploaded */}
        [Organigramme — image à intégrer]
      </p>
    </section>
  );
}
