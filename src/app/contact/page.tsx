import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Écoles Persévérance Guadeloupe',
  description: 'Contactez le réseau des écoles adventistes La Persévérance en Guadeloupe.',
};

const secretariatCard: React.CSSProperties = {
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  gap: 'clamp(1.5rem, 4vw, 3rem)',
  maxWidth: '860px',
  margin: '0 auto',
  padding: 'clamp(2rem, 5vw, 3rem) clamp(1rem, 4vw, 2.5rem) 0',
};

const logoCol: React.CSSProperties = {
  flex: '0 0 auto',
  display: 'flex',
  alignItems: 'center',
};

const infoCol: React.CSSProperties = {
  flex: '1 1 260px',
  borderLeft: '2px solid var(--color-teal)',
  paddingLeft: 'clamp(1.5rem, 4vw, 2.5rem)',
};

const infoTitle: React.CSSProperties = {
  fontSize: 'clamp(1.1rem, 2vw, 1.3rem)',
  color: 'var(--color-teal)',
  fontWeight: 700,
  marginBottom: '1rem',
};

const infoRow: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  marginBottom: '0.6rem',
  color: 'var(--color-teal)',
  fontWeight: 500,
};

const infoLink: React.CSSProperties = {
  color: 'var(--color-teal)',
  fontWeight: 500,
  textDecoration: 'none',
};

export default function Page() {
  return (
    <main>
      <section style={secretariatCard}>
        <div style={logoCol}>
          <img
            src="/images/shared/odgesa-logo-mark.png"
            alt="Logo ODGESA"
            style={{ width: '140px', height: 'auto' }}
          />
        </div>
        <div style={infoCol}>
          <p style={infoTitle}>Secrétariat à la Fédération</p>

          <p style={infoRow}>
            <span aria-hidden="true">📧</span>
            <a href="mailto:odgesa-gp@wanadoo.fr" style={infoLink}>
              odgesa-gp@wanadoo.fr
            </a>
          </p>

          <p style={infoRow}>
            <span aria-hidden="true">🌐</span>
            <a
              href="https://ecolesperseverance-gp.fr"
              target="_blank"
              rel="noopener noreferrer"
              style={infoLink}
            >
              ecolesperseverance-gp.fr
            </a>
          </p>

          <p style={infoRow}>
            <img
              src="/images/shared/instagram-icon.png"
              alt="Instagram"
              width={18}
              height={18}
              style={{ display: 'block' }}
            />
            <a
              href="https://www.instagram.com/ecoles_perseverance_971"
              target="_blank"
              rel="noopener noreferrer"
              style={infoLink}
            >
              ecoles_perseverance_971
            </a>
          </p>

          <p style={{ ...infoRow, alignItems: 'flex-start', marginBottom: 0 }}>
            <span aria-hidden="true">📍</span>
            <span>
              Morne Boissard – Habitation Lacroix
              <br />
              97139 Les Abymes
            </span>
          </p>
        </div>
      </section>

      <ContactForm />
    </main>
  );
}
