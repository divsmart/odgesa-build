const objectifs = [
  {
    objectif: `Développer l'excellence intellectuelle`,
    contenu: `Maîtrise des savoirs fondamentaux, esprit critique, goût pour la lecture, curiosité scientifique, créativité, méthode de travail rigoureuse.`,
  },
  {
    objectif: `Former le caractère`,
    contenu: `Honnêteté, persévérance, respect de soi et des autres, gestion des émotions, sens des responsabilités, intégrité dans toutes les situations.`,
  },
  {
    objectif: `Cultiver la santé globale`,
    contenu: `Éducation à la santé physique (alimentation saine, activité physique), mentale (gestion du stress, bien-être) et spirituelle (prière, méditation, recueillement).`,
  },
  {
    objectif: `Développer l'aptitude au service`,
    contenu: `Engagement dans la communauté, coopération, solidarité, projets de service, apprentissage par l'action au bénéfice des autres.`,
  },
  {
    objectif: `Ouvrir à la dimension spirituelle`,
    contenu: `Exploration bienveillante de la foi chrétienne adventiste, connaissance des grandes questions existentielles, éducation à l'espérance.`,
  },
];

const valeurs = [
  { valeur: `Foi et espérance`, engagement: `Nous reconnaissons Dieu comme source de vie, de sagesse et d'espérance. La dimension spirituelle est proposée dans le respect du cheminement de chacun.` },
  { valeur: `Bienveillance et respect`, engagement: `Chaque personne est accueillie avec dignité. Les relations reposent sur l'écoute, la politesse, la sécurité affective, le refus de toute humiliation et la recherche de la paix.` },
  { valeur: `Exigence et excellence`, engagement: `L'école encourage l'effort, le travail bien fait, la persévérance, la curiosité intellectuelle et la progression de chacun selon ses capacités.` },
  { valeur: `Responsabilité et autonomie`, engagement: `Les élèves sont accompagnés pour apprendre à choisir, à s'organiser, à réparer leurs erreurs et à exercer progressivement leur liberté avec discernement.` },
  { valeur: `Solidarité et service`, engagement: `La communauté éducative développe l'entraide, la coopération, l'attention aux plus fragiles et le sens du service.` },
  { valeur: `Santé et équilibre de vie`, engagement: `L'école promeut des habitudes favorables à la santé : alimentation équilibrée, activité physique, repos, hygiène, maîtrise des écrans et respect du corps.` },
  { valeur: `Respect de la création`, engagement: `Les établissements encouragent une attitude responsable envers l'environnement, la nature et les ressources confiées à l'humanité.` },
];

const tableStyle: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '2.5rem',
  fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
};

const thStyle: React.CSSProperties = {
  background: 'var(--color-teal)',
  color: '#fff',
  padding: '0.6rem 0.75rem',
  textAlign: 'left',
};

const tdStyle: React.CSSProperties = {
  padding: '0.6rem 0.75rem',
  verticalAlign: 'top',
  borderBottom: '1px solid #e5e7eb',
};

const tdAltStyle: React.CSSProperties = {
  ...tdStyle,
  background: '#f8fafb',
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
        Charte éducative commune
      </h1>

      {/* 1 — Vision */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Notre vision
      </h2>
      <p style={{ marginBottom: '2rem' }}>
        Chaque enfant est accueilli comme une personne unique, appelée à grandir, à apprendre, à développer
        ses talents et à devenir acteur de sa vie. L'école adventiste veut offrir un environnement sécurisant,
        exigeant et bienveillant, où la foi, la connaissance, le respect et le service se conjuguent au quotidien.
      </p>

      {/* 2 — Mission */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Notre mission éducative
      </h2>
      <ol style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '2rem' }}>
        <li>Garantir un cadre d'apprentissage de qualité, conforme aux exigences éducatives et attentif aux besoins de chaque élève.</li>
        <li>Contribuer à la formation d'une personnalité équilibrée, capable de discernement, de responsabilité et de coopération.</li>
        <li>Promouvoir une culture chrétienne de l'accueil, de la paix, de la vérité, du respect et du service.</li>
        <li>Associer les familles à la construction d'un parcours éducatif cohérent et stimulant.</li>
        <li>Préparer les élèves à devenir des citoyens engagés, respectueux de la création, des autres et d'eux-mêmes.</li>
      </ol>

      {/* 3 — Objectifs */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Les 5 objectifs fondamentaux
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '35%' }}>Objectif</th>
            <th style={thStyle}>Contenu et déclinaisons pratiques</th>
          </tr>
        </thead>
        <tbody>
          {objectifs.map((o, i) => (
            <tr key={i}>
              <td style={i % 2 === 0 ? tdStyle : tdAltStyle}><strong>{o.objectif}</strong></td>
              <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{o.contenu}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 4 — Valeurs */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Nos valeurs communes
      </h2>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '30%' }}>Valeur</th>
            <th style={thStyle}>Engagement éducatif</th>
          </tr>
        </thead>
        <tbody>
          {valeurs.map((v, i) => (
            <tr key={i}>
              <td style={i % 2 === 0 ? tdStyle : tdAltStyle}><strong>{v.valeur}</strong></td>
              <td style={i % 2 === 0 ? tdStyle : tdAltStyle}>{v.engagement}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* 5 — Principes pédagogiques */}
      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Principes pédagogiques partagés
      </h2>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
        <li>Mettre l'élève au centre des apprentissages, en tenant compte de son rythme, de ses besoins et de son potentiel.</li>
        <li>Favoriser des pédagogies actives, concrètes et structurées, permettant d'apprendre en comprenant, en manipulant, en expérimentant et en coopérant.</li>
        <li>Valoriser l'erreur comme étape de l'apprentissage, tout en maintenant un haut niveau d'exigence.</li>
        <li>Développer le langage, la lecture, l'écriture, le raisonnement, la créativité, la culture générale et les compétences sociales.</li>
        <li>Accompagner les élèves à besoins particuliers par des adaptations raisonnables, un dialogue régulier avec les familles et, lorsque nécessaire, les partenaires compétents.</li>
        <li>Construire une continuité éducative entre les classes, les cycles et les établissements de l'ODGESA.</li>
      </ul>
    </section>
  );
}
