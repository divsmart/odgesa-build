import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Parents — Écoles Persévérance Guadeloupe',
  description: 'Espace parents du réseau des écoles adventistes La Persévérance en Guadeloupe.',
};

const h2Style: React.CSSProperties = {
  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
  color: 'var(--color-teal)',
  marginTop: '2.5rem',
  marginBottom: '0.75rem',
};

const p: React.CSSProperties = { marginBottom: '1rem' };

const ecoleDirecteButton: React.CSSProperties = {
  display: 'inline-block',
  background: 'var(--color-teal)',
  color: '#fff',
  fontWeight: 600,
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  textDecoration: 'none',
  marginBottom: '2rem',
};

const nouveauteBadge: React.CSSProperties = {
  display: 'inline-block',
  background: '#d64545',
  color: '#fff',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  padding: '0.18rem 0.6rem',
  borderRadius: '999px',
  lineHeight: 1.4,
};

const comingSoonBadge: React.CSSProperties = {
  display: 'inline-block',
  background: '#e5e7eb',
  color: '#4b5563',
  fontSize: '0.68rem',
  fontWeight: 700,
  letterSpacing: '0.05em',
  textTransform: 'uppercase',
  padding: '0.18rem 0.6rem',
  borderRadius: '999px',
  lineHeight: 1.4,
};

const instagramLink: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.4rem',
  color: 'var(--color-teal)',
  fontSize: '0.85rem',
  fontWeight: 500,
  textDecoration: 'none',
};

const uniformesIntro: React.CSSProperties = {
  background: '#fdf3e2',
  border: '1px solid #f0d9a8',
  borderRadius: '6px',
  padding: '1.25rem 1.5rem',
  marginBottom: '1.5rem',
};

const uniformesLink: React.CSSProperties = {
  color: 'var(--color-teal)',
  fontWeight: 700,
  textDecoration: 'underline',
};

const stepList: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '1.1rem',
  marginBottom: '1.5rem',
};

const stepRow: React.CSSProperties = {
  display: 'flex',
  gap: '1rem',
  alignItems: 'flex-start',
};

const stepNumber: React.CSSProperties = {
  flexShrink: 0,
  width: '2rem',
  height: '2rem',
  borderRadius: '50%',
  background: 'var(--color-teal)',
  color: '#fff',
  fontWeight: 700,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

const stepTitle: React.CSSProperties = {
  fontWeight: 700,
  color: 'var(--color-teal)',
  marginBottom: '0.3rem',
};

const stepNote: React.CSSProperties = {
  color: '#b06a00',
  fontWeight: 600,
};

const uniformCta: React.CSSProperties = {
  display: 'inline-block',
  background: '#d64545',
  color: '#fff',
  fontWeight: 700,
  padding: '0.75rem 1.5rem',
  borderRadius: '4px',
  textDecoration: 'none',
  marginBottom: '1.5rem',
};

const summaryBar: React.CSSProperties = {
  fontWeight: 600,
  color: 'var(--color-teal)',
  textAlign: 'center',
  padding: '0.9rem',
  background: '#f2f7f8',
  borderRadius: '4px',
  marginBottom: '1.5rem',
};

const apeItem: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.6rem',
  flexWrap: 'wrap',
};

const apeLabel: React.CSSProperties = {
  fontWeight: 600,
  color: 'var(--color-teal)',
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
        Espace Parents
      </h1>

      <p style={p}>
        Retrouvez ici les informations pratiques et les ressources destinées aux familles du réseau
        La Persévérance.
      </p>

      <a
        href="https://www.ecoledirecte.com/login?cameFrom=%2FAccueil"
        target="_blank"
        rel="noopener noreferrer"
        style={ecoleDirecteButton}
      >
        Accéder à ÉcoleDirecte ↗
      </a>

      <h2 style={h2Style}>Services et ressources</h2>
      <ul style={{ listStyle: 'none', paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.4rem' }}>
          <span style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '0.6rem' }}>
            <a href="#uniformes-commande" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>
              Acheter les uniformes en ligne
            </a>
            <span style={nouveauteBadge}>Nouveauté</span>
          </span>
          <a
            href="https://www.instagram.com/ecoles_perseverance_971"
            target="_blank"
            rel="noopener noreferrer"
            style={instagramLink}
          >
            <img
              src="/images/shared/instagram-icon.png"
              alt="Instagram"
              width={20}
              height={20}
              style={{ display: 'block' }}
            />
            ecoles_perseverance_971
          </a>
        </li>
        <li>
          <a href="#restauration" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>
            Restauration scolaire
          </a>
        </li>
      </ul>

      <h2 id="uniformes-commande" style={{ ...h2Style, scrollMarginTop: '6rem' }}>
        Commander les uniformes en ligne
      </h2>

      <div style={uniformesIntro}>
        <p style={{ margin: 0, fontWeight: 600 }}>
          Votre commande se fait désormais en ligne, en quelques étapes simples :{' '}
          <a
            href="https://boutique.laperseverance.fr/"
            target="_blank"
            rel="noopener noreferrer"
            style={uniformesLink}
          >
            boutique.laperseverance.fr
          </a>{' '}
          — onglet « Uniformes ».
        </p>
        <p style={{ margin: '0.5rem 0 0', color: '#a33', fontWeight: 600 }}>
          Aucune commande n&apos;est prise directement au sein de l&apos;établissement.
        </p>
      </div>

      <div style={stepList}>
        <div style={stepRow}>
          <span style={stepNumber}>1</span>
          <div>
            <p style={stepTitle}>Je choisis mes articles</p>
            <p style={{ ...p, marginBottom: '0.4rem' }}>
              Rendez-vous sur le site de votre école, onglet « Uniformes », puis sélectionnez le
              niveau de votre enfant et les articles souhaités. Pour chaque article, choisissez
              impérativement la taille et la quantité, puis cliquez sur « Ajouter au panier ».
            </p>
            <p style={{ margin: 0 }}>
              <span style={stepNote}>Conseil : </span>
              en cas de doute sur la taille, faites essayer l&apos;uniforme chez SEBASTIANO, à Jarry,
              avant de commander.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>2</span>
          <div>
            <p style={stepTitle}>Je vérifie mon panier et mes informations</p>
            <p style={{ margin: 0 }}>
              Vérifiez attentivement les articles, les tailles et les quantités. Renseignez les
              informations demandées et sélectionnez l&apos;établissement de votre enfant : c&apos;est
              là que vous viendrez chercher votre bon de retrait.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>3</span>
          <div>
            <p style={stepTitle}>Je paie ma commande</p>
            <p style={{ ...p, marginBottom: '0.4rem' }}>
              Réglez votre commande en ligne par carte bancaire. Une facture vous est envoyée après
              validation du paiement.
            </p>
            <p style={{ margin: 0 }}>
              <span style={stepNote}>À noter : </span>
              les paiements sur place sont désormais exceptionnels. Les uniformes ne peuvent plus
              être intégrés aux prélèvements de scolarité, ni faire l&apos;objet d&apos;un étalement
              de paiement.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>4</span>
          <div>
            <p style={stepTitle}>L&apos;école traite ma commande</p>
            <p style={{ margin: 0 }}>
              Après validation du paiement, l&apos;école reçoit votre commande et édite votre bon de
              retrait. Vous n&apos;avez aucune démarche supplémentaire à effectuer à cette étape.
            </p>
          </div>
        </div>

        <div style={stepRow}>
          <span style={stepNumber}>5</span>
          <div>
            <p style={stepTitle}>Je récupère mon bon de retrait, puis mes uniformes</p>
            <p style={{ margin: 0 }}>
              Votre établissement vous communiquera les jours et horaires prévus pour récupérer
              votre bon. Munissez-vous ensuite de ce bon pour retirer vos uniformes auprès de
              SEBASTIANO, à Jarry.
            </p>
          </div>
        </div>
      </div>

      <p style={summaryBar}>
        Commander → Payer → Bon de retrait → Retirer les uniformes
      </p>

      <a
        href="https://boutique.laperseverance.fr/"
        target="_blank"
        rel="noopener noreferrer"
        style={uniformCta}
      >
        Commander mes uniformes ↗
      </a>

      <h2 style={h2Style}>Association des parents d&apos;élèves (APE)</h2>
      <p style={p}>
        Chaque établissement du réseau dispose de sa propre Association des Parents d&apos;Élèves
        (APE), qui constitue le lien entre les familles et la direction de l&apos;école.
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2.2', marginBottom: '1.5rem' }}>
        <li style={apeItem}>
          <span style={apeLabel}>APE — École de Baillif</span>
          <span style={comingSoonBadge}>Bientôt disponible</span>
        </li>
        <li style={apeItem}>
          <span style={apeLabel}>APE — École de Duportail</span>
          <span style={comingSoonBadge}>Bientôt disponible</span>
        </li>
        <li style={apeItem}>
          <span style={apeLabel}>APE — École de Marie-Galante</span>
          <span style={comingSoonBadge}>Bientôt disponible</span>
        </li>
      </ul>

      <p style={p}>
        Une question sur la qualité ou la taille d&apos;un article ? Adressez-vous directement au
        fournisseur par mail, en mettant la direction de votre établissement en copie.
      </p>

      <h2 id="restauration" style={{ ...h2Style, scrollMarginTop: '6rem' }}>
        Restauration scolaire
      </h2>
      <p style={p}>
        Nos élèves bénéficient chaque jour de repas équilibrés et hautement nutritifs, préparés au
        sein de notre cuisine moderne par une équipe de professionnels de la restauration scolaire.
      </p>

      <img
        src="/images/duportail/refectoire-duportail.jpg"
        alt="Réfectoire de l'école de Duportail"
        style={{
          width: '100%',
          height: 'auto',
          borderRadius: '4px',
          marginTop: '1rem',
        }}
      />
    </section>
  );
}
