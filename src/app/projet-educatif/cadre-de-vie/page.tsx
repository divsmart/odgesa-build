const h2Style: React.CSSProperties = {
  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
  color: 'var(--color-teal)',
  marginTop: '2.5rem',
  marginBottom: '0.75rem',
};

const h3Style: React.CSSProperties = {
  fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
  color: 'var(--color-navy)',
  marginTop: '1.75rem',
  marginBottom: '0.5rem',
};

const p: React.CSSProperties = { marginBottom: '1rem' };

const droitsTable: React.CSSProperties = {
  width: '100%',
  borderCollapse: 'collapse',
  marginBottom: '1.5rem',
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

const droits = [
  [`Être informées régulièrement de la scolarité de leur enfant`, `S'engager à respecter le règlement intérieur et le caractère propre de l'établissement`],
  [`Être reçues par les enseignants ou la direction sur demande`, `Assurer la ponctualité et l'assiduité de l'élève`],
  [`Participer à la vie scolaire via l'APE`, `Soutenir les valeurs de l'école à la maison`],
  [`Formuler des suggestions et des observations`, `Communiquer ouvertement et respectueusement avec l'équipe éducative`],
  [`Être associées aux décisions importantes concernant leur enfant`, `Régler dans les délais les frais de scolarité selon la convention signée`],
];

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
        Cadre de vie des établissements
      </h1>

      {/* I — Vie scolaire */}
      <h2 style={h2Style}>I. Vie scolaire et cadre de vie</h2>

      <h3 style={h3Style}>A. Le règlement intérieur et la discipline bienveillante</h3>
      <p style={p}>
        Chaque établissement dispose d'un règlement intérieur précis, cohérent avec les valeurs du réseau.
        La discipline dans nos écoles n'est pas une fin en soi, mais un moyen d'apprendre à vivre ensemble
        dans le respect mutuel.
      </p>
      <p style={p}>
        Le climat scolaire constitue une priorité. Les établissements veillent à un cadre clair, stable et
        sécurisant, dans lequel les règles sont connues, expliquées, appliquées avec justice et vécues comme
        des repères éducatifs.
      </p>
      <p style={{ ...p, fontWeight: 600 }}>Engagements communs à toutes les écoles :</p>
      <ol style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1rem' }}>
        <li>Assurer la sécurité physique, morale et affective des élèves.</li>
        <li>Prévenir les violences, les moqueries, le harcèlement et toute forme de discrimination.</li>
        <li>Encourager la médiation, le dialogue, la réparation et la responsabilisation.</li>
        <li>Promouvoir la ponctualité, l'assiduité, la tenue correcte, le respect du matériel et des espaces communs.</li>
      </ol>
      <p style={p}>
        Notre approche disciplinaire s'inspire de la pédagogie restaurative : toute infraction est une
        occasion d'apprendre, de réparer et de reconstruire la relation. Les sanctions sont progressives,
        proportionnées et toujours accompagnées d'un dialogue éducatif.
      </p>
      <p style={{ ...p, fontWeight: 600 }}>Principes disciplinaires du réseau La Persévérance :</p>
      <ol style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>La dignité de chaque élève est inviolable en toute circonstance.</li>
        <li>La sanction vise la transformation du comportement, non la punition en elle-même.</li>
        <li>Les parents sont informés et associés à tout processus disciplinaire significatif.</li>
        <li>Aucune violence physique ou verbale ne sera tolérée, de la part d'un élève ou d'un adulte.</li>
      </ol>

      <h3 style={h3Style}>B. Prévention du harcèlement et gestion des conflits</h3>
      <p style={p}>
        Nos établissements s'engagent à être des espaces sûrs, bienveillants et inclusifs. La prévention du
        harcèlement scolaire est une priorité institutionnelle. Un protocole de gestion des situations de
        harcèlement est en vigueur dans chaque école du réseau.
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>Formation régulière des personnels à la détection et à la gestion du harcèlement</li>
        <li>Sensibilisation des élèves dès le cycle 2 aux relations respectueuses et à l'empathie</li>
        <li>Mise en place de médiateurs entre pairs dans les établissements du secondaire</li>
        <li>Procédures claires d'alerte, d'investigation et d'accompagnement des victimes</li>
      </ul>

      <h3 style={h3Style}>C. Santé, prévention et développement durable</h3>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>
          Promouvoir une alimentation saine et équilibrée. Nos écoles proposent une restauration scolaire
          végétarienne ovo-lacto-végétarienne, sans consommation de soja, conformément à l'avis de l'ANSES
          du 8 janvier 2025.
        </li>
        <li>Encourager l'activité physique, le contact avec la nature et les projets de jardinage.</li>
        <li>Éduquer à l'usage responsable des écrans et des outils numériques.</li>
        <li>Sensibiliser les élèves au soin du corps, au respect de soi, au repos et à l'hygiène de vie.</li>
        <li>Développer des projets écoresponsables adaptés à l'âge des élèves.</li>
      </ul>

      {/* II — Dimension spirituelle */}
      <h2 style={h2Style}>II. Dimension spirituelle</h2>
      <p style={p}>
        La dimension spirituelle fait partie de l'identité des écoles adventistes. Elle se vit par la prière,
        les temps de méditation, l'étude de valeurs bibliques, les chants, les moments de célébration, les
        actions de solidarité et l'exemple donné par les adultes.
      </p>
      <p style={p}>
        Cette proposition spirituelle s'exerce avec respect, sans contrainte, dans un esprit d'accueil des
        élèves et des familles, quelles que soient leurs convictions. Elle vise à nourrir la conscience,
        l'espérance, le sens moral et la capacité à servir.
      </p>

      {/* III — Partenariat familles */}
      <h2 style={h2Style}>III. Partenariat avec les familles</h2>

      <h3 style={h3Style}>La famille, premier éducateur</h3>
      <p style={p}>
        L'éducation adventiste reconnaît la famille comme premier et principal agent éducateur. L'école est
        un partenaire, non un substitut. Ce principe oriente profondément la manière dont nous concevons
        notre relation avec les parents.
      </p>
      <p style={{ ...p, fontStyle: 'italic', borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1rem' }}>
        « La maison est le premier lieu d'enseignement de l'enfant et les parents ses premiers instructeurs. »
      </p>

      <h3 style={h3Style}>Droits et devoirs des familles</h3>
      <table style={droitsTable}>
        <thead>
          <tr>
            <th style={{ ...thStyle, width: '50%' }}>Droits des familles</th>
            <th style={thStyle}>Devoirs des familles</th>
          </tr>
        </thead>
        <tbody>
          {droits.map(([d, dv], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafb' }}>
              <td style={tdStyle}>{d}</td>
              <td style={tdStyle}>{dv}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 style={h3Style}>L'Association des Parents d'Élèves (APE)</h3>
      <p style={p}>
        L'APE joue un rôle central dans la vie de chaque établissement. Elle constitue le lien
        institutionnel entre les familles et la direction, et participe à la réflexion sur la vie scolaire.
        L'ODGESA encourage vivement la vitalité et l'implication des APE dans toutes ses écoles.
      </p>

      {/* IV — Équipe éducative */}
      <h2 style={h2Style}>IV. Équipe éducative et formation</h2>

      <h3 style={h3Style}>Le profil de l'enseignant adventiste</h3>
      <p style={p}>
        L'enseignant dans un établissement adventiste est bien plus qu'un transmetteur de savoirs. Il est
        un modèle de vie, un mentor, un témoin. Il est appelé à adhérer pleinement au projet éducatif de
        l'établissement et à en respecter le caractère propre.
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li><strong>Engagement professionnel :</strong> maîtrise disciplinaire solide, préparation rigoureuse des cours, disponibilité pour les élèves.</li>
        <li><strong>Qualités relationnelles :</strong> bienveillance, patience, écoute, capacité à motiver et à encourager.</li>
        <li><strong>Cohérence de vie :</strong> exemplarité dans ses attitudes, son langage, son rapport aux règles communes.</li>
        <li><strong>Adhésion au projet :</strong> connaissance et respect du caractère propre adventiste, participation aux temps spirituels collectifs.</li>
        <li><strong>Formation continue :</strong> participation active aux formations institutionnelles, ouverture à l'évolution des pratiques pédagogiques.</li>
      </ul>

      <h3 style={h3Style}>La formation continue des personnels</h3>
      <p style={p}>L'ODGESA s'engage à offrir chaque année scolaire un plan de formation continue adapté aux besoins des équipes, couvrant notamment :</p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>Formation au caractère propre adventiste et à l'intégration foi-apprentissage</li>
        <li>Prévention et gestion des risques psychosociaux en milieu scolaire</li>
        <li>Pédagogies innovantes et différenciation</li>
        <li>Gestion de classe bienveillante et discipline positive</li>
        <li>Sécurité, hygiène et protocoles d'urgence</li>
        <li>Droits et obligations dans l'enseignement hors contrat</li>
      </ul>

      <h3 style={h3Style}>Le rôle de l'aumônier</h3>
      <p style={p}>
        L'aumônier occupe une place importante dans la vie de nos établissements. Il contribue à faire
        vivre le caractère propre de l'école en accompagnant les élèves, les familles et les équipes dans
        une démarche éducative, spirituelle et humaine — en complémentarité avec la direction, jamais en
        substitution.
      </p>
      <p style={p}>
        Il peut proposer des temps de méditation, de prière, de réflexion biblique ou de partage, adaptés
        à l'âge des élèves. Il intervient dans les moments sensibles : conflits, découragement, difficultés
        familiales, deuil, anxiété. Il participe à la mise en œuvre du Plan Directeur de Développement
        Spirituel de l'établissement, en veillant à ce que la dimension spirituelle soit proposée de manière
        respectueuse et non contraignante.
      </p>

      <h3 style={h3Style}>Un psychologue chrétien référent dans chaque établissement</h3>
      <p style={p}>
        La mise en place d'un psychologue chrétien référent dans chaque établissement constitue une
        ressource précieuse pour accompagner les élèves, les familles et les personnels. Son intervention
        s'inscrit dans le cadre d'une convention précisant son rôle, ses modalités d'intervention, son
        cadre éthique et ses limites.
      </p>
      <p style={p}>
        Il intervient comme personne ressource dans une démarche d'écoute, de prévention, d'accompagnement
        et d'orientation — en cohérence avec les valeurs chrétiennes de l'établissement, et en
        complémentarité avec la direction, l'aumônier, les enseignants et les familles, dans le respect des
        règles professionnelles propres à la psychologie.
      </p>
    </section>
  );
}
