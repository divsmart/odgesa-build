export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '1440px',
      margin: '0 auto'
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '1rem'
      }}>
        Administration et Gouvernance
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Contenu à venir.</p>

      {/* Organigramme */}
      <div style={{
        marginTop: 'clamp(3rem, 6vw, 5rem)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
        <h2 style={{
          fontFamily: 'var(--font-condensed)',
          fontSize: 'clamp(1.2rem, 2.5vw, 1.75rem)',
          color: 'var(--color-teal)',
          textAlign: 'center',
        }}>
          Organigramme du réseau scolaire adventiste
        </h2>
        <img
          src="/images/shared/admin-gouvernance-infographique.jpeg"
          alt="Organigramme simplifié du réseau scolaire adventiste — de l'établissement local à l'organisation mondiale"
          style={{
            width: '100%',
            maxWidth: '620px',
            height: 'auto',
            display: 'block',
            borderRadius: '8px',
          }}
        />
      </div>
    </section>
  );
}
