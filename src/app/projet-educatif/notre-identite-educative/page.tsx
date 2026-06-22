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
        Notre identité éducative
      </h1>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '0.75rem' }}>
        Qu'est-ce que le caractère propre ?
      </h2>
      <p style={{ marginBottom: '1rem' }}>
        Dans le droit français de l'enseignement privé, le « caractère propre » désigne l'identité
        spirituelle, morale et pédagogique qui distingue un établissement confessionnel des établissements
        publics. Reconnu par la loi Debré de 1959 puis consacré par la jurisprudence constitutionnelle,
        ce concept confère aux établissements hors contrat une liberté pédagogique pleine, à condition de
        respecter l'ordre public et les droits fondamentaux.
      </p>
      <p style={{ marginBottom: '2.5rem' }}>
        Pour les écoles du réseau La Persévérance, ce caractère propre n'est pas une simple étiquette
        institutionnelle : il constitue la colonne vertébrale de tout le projet éducatif. Il oriente les
        choix pédagogiques, les pratiques de vie scolaire, les relations avec les familles et la formation
        des personnels.
      </p>

      <h2 style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--color-teal)', marginBottom: '1.5rem' }}>
        Les 6 fondements de notre identité éducative
      </h2>
      <p style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)' }}>
        Notre caractère propre s'articule autour de six piliers complémentaires, qui s'appliquent de
        manière cohérente dans l'ensemble des établissements du réseau — à Baillif, Sainte-Rose
        (Duportail), Marie-Galante et à la Cité Scolaire de Boissard.
      </p>

      {[
        {
          n: '1',
          titre: "Une vision holistique de l'enfant",
          contenu: (
            <>
              <p style={{ marginBottom: '0.75rem' }}>
                L'éducation adventiste appréhende l'élève dans toutes ses dimensions : intellectuelle,
                physique, sociale et spirituelle. Cette approche globale se décline à travers cinq dimensions :
              </p>
              <ul style={{ paddingLeft: '1.25rem', lineHeight: '1.9' }}>
                <li><strong>Physique :</strong> hygiène de vie, activité physique régulière, alimentation saine</li>
                <li><strong>Intellectuelle :</strong> rigueur académique, pensée critique, curiosité cultivée</li>
                <li><strong>Sociale :</strong> solidarité, service aux autres, appartenance à un réseau de valeurs partagées</li>
                <li><strong>Émotionnelle :</strong> sécurité affective, respect de la dignité de chaque élève, bienveillance relationnelle</li>
                <li><strong>Spirituelle :</strong> temps de réflexion, études des valeurs chrétiennes intégrées au quotidien scolaire</li>
              </ul>
            </>
          ),
        },
        {
          n: '2',
          titre: "La foi comme horizon, non comme contrainte",
          contenu: (
            <p>
              Le caractère adventiste de nos établissements ne s'impose pas par contrainte mais s'offre comme
              une proposition de sens. L'accueil est ouvert à toutes les familles, croyantes ou non, qui adhèrent
              librement à nos valeurs et à notre projet éducatif. La transmission de la foi chrétienne adventiste
              s'opère par le témoignage, la cohérence de vie des adultes et l'environnement scolaire — jamais par
              la coercition.
            </p>
          ),
        },
        {
          n: '3',
          titre: "Une pédagogie de l'épanouissement et du sens",
          contenu: (
            <p>
              Nos établissements hors contrat maintiennent des exigences académiques élevées. La qualité de
              l'enseignement dispensé est régulièrement évaluée au regard des programmes officiels de l'Éducation
              nationale. Cette exigence intellectuelle est indissociable d'un cadre moral clair, fondé sur la
              responsabilité individuelle, l'honnêteté et la persévérance — valeur cardinale de notre réseau.
            </p>
          ),
        },
        {
          n: '4',
          titre: "La famille comme partenaire central",
          contenu: (
            <p>
              L'école adventiste ne se conçoit pas comme un substitut familial mais comme un partenaire éducatif.
              Les familles sont associées au projet de l'établissement, informées de ses fondements spirituels et
              invitées à participer à la vie scolaire. Cette alliance éducative entre l'école, la famille et
              l'Église constitue un trait distinctif fort de notre caractère propre.
            </p>
          ),
        },
        {
          n: '5',
          titre: "Former des citoyens responsables et au service de la communauté",
          contenu: (
            <p>
              Nous nous engageons à apprendre aux élèves à vivre le respect, la vérité, la justice, l'entraide,
              la responsabilité et le service, pour qu'ils deviennent des acteurs de paix dans leur famille,
              leur Église et la société.
            </p>
          ),
        },
        {
          n: '6',
          titre: "Une identité cohérente sur tout le réseau",
          contenu: (
            <p>
              Ces principes s'appliquent de manière unifiée dans les quatre établissements — Baillif,
              Duportail-Sainte-Rose, Marie-Galante et Boissard-Abymes — garantissant une continuité éducative
              et spirituelle à travers tout le réseau.
            </p>
          ),
        },
      ].map(({ n, titre, contenu }) => (
        <div key={n} style={{
          borderLeft: '3px solid var(--color-yellow)',
          paddingLeft: '1.25rem',
          marginBottom: '2rem',
        }}>
          <h3 style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
            color: 'var(--color-navy)',
            marginBottom: '0.6rem',
          }}>
            {n}. {titre}
          </h3>
          {contenu}
        </div>
      ))}
    </section>
  );
}
