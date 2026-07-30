export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '900px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.5rem'
      }}>
        Notre Église
      </h1>
      <p style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
        color: 'var(--color-text-muted)',
        marginBottom: '2rem'
      }}>
        Qui est l&apos;Église Adventiste du Septième Jour ?
      </p>

      <div style={{ lineHeight: 1.8, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        <p>
          Les Adventistes du Septième Jour sont des chrétiens qui fondent leur foi sur la Bible
          et leur espérance sur la seconde venue de Jésus-Christ.
        </p>

        <p>
          Parce qu&apos;ils sont héritiers des enseignements des apôtres et de la pensée des
          Réformateurs, les Adventistes partagent avec les autres chrétiens de tradition
          évangélique les doctrines essentielles sur la Divinité du Christ, la Trinité,
          l&apos;autorité de la Bible en matière de doctrine, le salut par la grâce divine, la
          justification par la foi et le baptême par immersion. Selon l&apos;enseignement
          biblique, les adventistes considèrent le sabbat, septième jour de la semaine, comme un
          signe de la grâce de Dieu, leur Créateur et leur Sauveur.
        </p>

        <p>
          L&apos;Église Adventiste est implantée dans 213 pays dans le monde. Son siège se
          trouve à la Conférence Générale des Églises Adventistes à Washington D.C. Cette
          institution coordonne les activités mondiales de l&apos;Église qui compte plus de 21
          millions de membres.
        </p>

        <p>
          Aux États-Unis, le style de vie des adventistes du septième jour a été mis à
          l&apos;honneur par le magazine National Geographic, CNN, et le New York Times : en
          effet, une région de Californie (Loma Linda) fait partie de ces 5 « Zones Bleues »
          dans le monde, où la longévité de leurs habitants, du fait de leur style de vie, est
          très nettement au-dessus de la moyenne.
        </p>

        <p>
          L&apos;Église Adventiste est bien ancrée dans la société du XXIème siècle : aussi
          est-elle confrontée à des défis qui sollicitent une position éthique, théologique,
          sanitaire, sociétale… L&apos;Église nomme donc des groupes de réflexion où des experts
          — théologiens, scientifiques, médecins, psychologues éducateurs — étudient les faits de
          société nécessitant une parole publique. Toutes ces commissions publient leurs travaux
          et l&apos;Église contribue ainsi à enrichir la pensée chrétienne contemporaine.
        </p>

        <p>
          L&apos;une des principales contributions de l&apos;Église Adventiste du Septième Jour
          a été dans le domaine de la promotion de la liberté de croyance et de religion pour
          tous.
        </p>
      </div>

      <div style={{
        marginTop: '3rem',
        paddingTop: '1.5rem',
        borderTop: '1px solid rgba(13, 77, 98, 0.15)',
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5rem',
        fontSize: '0.9rem',
      }}>
        <a
          href="https://www.adventist.org/world-church/general-conference/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-teal)', fontWeight: 600 }}
        >
          Conférence Générale des Églises Adventistes
        </a>
        <a
          href="https://www.adventist.org/statistics/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: 'var(--color-teal)', fontWeight: 600 }}
        >
          Statistiques de l&apos;Église Adventiste
        </a>
      </div>

      <div style={{ marginTop: '3.5rem' }}>
        <p style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: '0.85rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: 'var(--color-orange)',
          marginBottom: '0.75rem',
        }}>
          Gouvernance
        </p>
        <div style={{ borderRadius: '10px', overflow: 'hidden', border: '1px solid rgba(13, 77, 98, 0.15)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/shared/admin-gouvernance-infographique.jpg"
            alt="Organigramme simplifié du réseau scolaire adventiste, de l'établissement local à l'organisation mondiale"
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
