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
        Qui sommes-nous ?
      </h1>

      <p style={{ marginBottom: '1.25rem' }}>
        Parmi les organisations confessionnelles, l'Église adventiste du 7ème jour possède le deuxième plus
        grand réseau d'écoles dans le monde, comptant plus de 9 400 écoles avec plus de 2 millions d'élèves
        inscrits.
      </p>
      <p style={{ marginBottom: '1.25rem' }}>
        L'éducation chrétienne adventiste est holistique, reliant dans une même démarche l'instruction et
        l'éducation de l'humain dans sa globalité. Son projet éducatif prend une part active à l'éveil des
        enfants et des jeunes, dans un esprit d'ouverture, sans distinction d'origine, d'opinion ou de
        croyance.
      </p>
      <p style={{ marginBottom: '2rem' }}>
        Dans les territoires de Guadeloupe, Guyane et Martinique, l'éducation chrétienne adventiste se pose
        comme un véritable partenaire associé au service public d'éducation. Elle s'attache à former des
        jeunes ouverts sur le monde, enracinés dans une culture et une histoire qui conduisent, dans un
        dialogue constant entre foi et raison, à une citoyenneté responsable et engagée. Les établissements
        scolaires adventistes sont au service du monde qui les entoure, cultivant d'une part un dialogue
        constructif avec les familles, avec la société civile, les collectivités et les associations, et
        apportant d'autre part leur concours singulier à la construction de l'humain.
      </p>

      <div style={{
        borderLeft: '3px solid var(--color-yellow)',
        paddingLeft: '1.25rem',
        marginBottom: '2rem',
      }}>
        <h2 style={{
          fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
          color: 'var(--color-teal)',
          marginBottom: '0.75rem',
        }}>
          L'ODGESA en Guadeloupe
        </h2>
        <p style={{ marginBottom: '1rem' }}>
          En Guadeloupe, l'Organisme Départemental de Gestion des Établissements Scolaires Adventistes
          (ODGESA) est l'organisme de tutelle de l'ensemble des établissements du réseau La Persévérance.
          À ce titre, il assure :
        </p>
        <ul style={{ paddingLeft: '1.25rem', lineHeight: '2' }}>
          <li>La gestion administrative, juridique et financière des écoles</li>
          <li>La cohérence éducative et pédagogique du réseau</li>
          <li>Le lien avec les directions d'établissement</li>
          <li>La représentation du réseau scolaire auprès des partenaires institutionnels</li>
          <li>La mise en œuvre du projet éducatif adventiste</li>
        </ul>
      </div>
    </section>
  );
}
