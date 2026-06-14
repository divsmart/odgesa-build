export default function LoginPage() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'var(--color-teal-dark)',
    }}>
      <div style={{
        background: 'var(--color-white)',
        padding: '2.5rem',
        borderRadius: '8px',
        width: '100%',
        maxWidth: '360px',
        boxShadow: '0 4px 24px rgba(0,0,0,0.2)',
      }}>
        <h1 style={{
          fontFamily: 'var(--font-condensed)',
          color: 'var(--color-teal)',
          fontSize: '1.4rem',
          marginBottom: '0.25rem',
        }}>
          Écoles Persévérance
        </h1>
        <p style={{
          fontSize: '0.8rem',
          color: 'var(--color-text-muted)',
          marginBottom: '2rem',
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}>
          Aperçu interne — accès restreint
        </p>
        <form action="/api/auth" method="POST">
          <input
            type="password"
            name="code"
            placeholder="Code d'accès"
            required
            style={{
              width: '100%',
              padding: '0.75rem 1rem',
              border: '1.5px solid #d0dde3',
              borderRadius: '6px',
              fontSize: '1rem',
              marginBottom: '1rem',
              boxSizing: 'border-box',
            }}
          />
          <button type="submit" style={{
            width: '100%',
            padding: '0.75rem',
            background: 'var(--color-teal)',
            color: 'var(--color-white)',
            border: 'none',
            borderRadius: '6px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
          }}>
            Accéder
          </button>
        </form>
      </div>
    </main>
  );
}
