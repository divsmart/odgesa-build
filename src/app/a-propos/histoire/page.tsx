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
        Histoire
      </h1>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Origine de l&apos;ODGESA
      </h2>
      <p style={{ marginBottom: '1.25rem' }}>
        L&apos;ODGESA est un organisme chrétien adventiste, créé en janvier 2004, dans un contexte où les
        établissements scolaires chrétiens adventistes de la Guadeloupe cherchaient à réunir et réorganiser
        leur gestion. Dès sa création, cet organisme est intégré au département de l&apos;Éducation de la
        Fédération des églises adventistes du 7e jour de la Guadeloupe.
      </p>
      <p style={{ marginBottom: '1.25rem' }}>
        Cette initiative est née de la volonté des responsables adventistes de répondre aux défis d&apos;une
        administration faisant face aux exigences du droit français devenues plus complexes, aux innovations
        scientifiques, didactiques et pédagogiques de l&apos;Éducation nationale, et aux diverses
        transformations sociétales, tout en garantissant une éducation chrétienne conforme aux principes
        adventistes.
      </p>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem', marginTop: '2rem' }}>
        Mission de l&apos;ODGESA
      </h2>
      <p style={{ marginBottom: '1rem' }}>
        Dès sa fondation, 3 responsables sont nommés par la Fédération adventiste de Guadeloupe : un
        Président, un Secrétaire et un Trésorier. Ces dirigeants posent les bases d&apos;un organisme tourné
        vers la modernisation, l&apos;éthique chrétienne adventiste et la pérennité des établissements
        scolaires chrétiens adventistes dans l&apos;archipel guadeloupéen.
      </p>
      <p style={{ marginBottom: '1rem' }}>
        L&apos;ODGESA a pour objectif initial de coordonner les structures éducatives, d&apos;améliorer leur
        fonctionnement, et de favoriser l&apos;implantation de nouveaux établissements scolaires, ainsi que de :
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '2rem' }}>
        <li>Veiller à la qualité de l&apos;enseignement conformément aux attendus des programmes de l&apos;Éducation nationale</li>
        <li>Assurer un recrutement du personnel en accord avec la vision chrétienne adventiste de l&apos;éducation</li>
        <li>Accompagner la montée en compétence de l&apos;ensemble du personnel</li>
        <li>Promouvoir les valeurs chrétiennes adventistes</li>
        <li>Encourager la collaboration avec les collectivités territoriales, publiques et associatives</li>
        <li>Soutenir la relation au sein de la communauté éducative</li>
      </ul>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '1rem', marginTop: '2rem' }}>
        Évolution structurelle
      </h2>
      <p style={{ marginBottom: '1.25rem' }}>
        L&apos;évolution structurelle de l&apos;ODGESA est marquée par des ajustements stratégiques pour
        répondre aux besoins croissants de la communauté éducative chrétienne adventiste, tels que
        l&apos;effectif des élèves, la communication avec les parents, le recrutement du personnel,
        l&apos;équipement des locaux, la sécurité et la mise aux normes sanitaires.
      </p>
      <p style={{ marginBottom: '2rem' }}>
        La révision des statuts en 2005 permet à l&apos;ODGESA d&apos;élargir son champ d&apos;action
        administratif, pédagogique et logistique. Ces modifications renforcent le rôle du Conseil
        d&apos;administration, assurant une gestion plus transparente et équilibrée avec la participation
        des enseignants, des représentants d&apos;établissements et de membres de droit.
      </p>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '1rem', marginTop: '2rem' }}>
        Événements clés
      </h2>

      <div style={{ borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1.25rem', marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-yellow)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2004–2005</p>
        <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Unification et harmonisation</h3>
        <p>La centralisation des pratiques administratives marque un tournant dans la gestion des établissements scolaires. Les premières années ont été consacrées à créer un cadre homogène et efficace pour superviser l&apos;ensemble des structures éducatives.</p>
      </div>

      <div style={{ borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1.25rem', marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-yellow)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2005</p>
        <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Réforme des statuts</h3>
        <p>L&apos;introduction de nouvelles responsabilités au sein de l&apos;association donne à l&apos;ODGESA les moyens de superviser pleinement les activités éducatives, en conformité avec les principes adventistes.</p>
      </div>

      <div style={{ borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1.25rem', marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-yellow)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2010–2015</p>
        <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Modernisation des infrastructures</h3>
        <p>Une phase d&apos;investissement permet de rénover les bâtiments scolaires et d&apos;introduire des outils numériques pour améliorer les conditions d&apos;apprentissage. Ces efforts contribuent à l&apos;essor des effectifs et à la satisfaction des familles.</p>
      </div>

      <div style={{ borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1.25rem', marginBottom: '1.75rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-yellow)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2015–2020</p>
        <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Renforcement des partenariats régionaux et internationaux</h3>
        <p>L&apos;ODGESA renforce ses liens avec des institutions chrétiennes adventistes régionales et internationales : l&apos;UAGF (Union des Antilles et de la Guyane françaises), la DIA (Division Interaméricaine des Adventistes du 7e Jour) et la Conférence Générale des Adventistes du 7e jour. Ces partenariats favorisent l&apos;accès à des ressources pédagogiques nouvelles et l&apos;adaptation de pratiques innovantes.</p>
      </div>

      <div style={{ borderLeft: '3px solid var(--color-yellow)', paddingLeft: '1.25rem', marginBottom: '2rem' }}>
        <p style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-yellow)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>2023</p>
        <h3 style={{ fontSize: 'clamp(1rem, 1.8vw, 1.15rem)', color: 'var(--color-navy)', marginBottom: '0.5rem' }}>L&apos;ODGESA devient une entité à part entière</h3>
        <p>Pour répondre aux constantes évolutions législatives et pédagogiques, la Fédération des églises adventistes du 7e jour de la Guadeloupe désigne un responsable distinct du département Éducation. Le Bureau s&apos;étoffe et se compose désormais de 5 membres : un Président, un Président adjoint, un Secrétaire, un Trésorier et le Responsable de l&apos;Éducation de la fédération adventiste.</p>
      </div>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem', marginTop: '2rem' }}>
        Un héritage et un futur prometteur
      </h2>
      <p style={{ marginBottom: '1.25rem' }}>
        Depuis sa création en 2004, l&apos;ODGESA s&apos;affirme comme un acteur incontournable de
        l&apos;éducation en Guadeloupe. En combinant éducation, foi et innovation, l&apos;organisme a su
        relever les défis socioéducatifs d&apos;hier et d&apos;aujourd&apos;hui.
      </p>
      <p>
        À travers ses actions et ses ambitions futures, l&apos;ODGESA demeure fidèle à sa mission chrétienne
        d&apos;offrir une éducation de qualité, ancrée dans les principes adventistes, tout en répondant aux
        besoins d&apos;une société en constante évolution.
      </p>
    </section>
  );
}
