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
        Cité Scolaire J.Bigord Les Abymes
      </h1>
      <p style={{ color: 'var(--color-text-muted)' }}>Contenu à venir.</p>
    </section>
  );
}
