export default function Page() {
  const h2Style: React.CSSProperties = {
    fontFamily: 'var(--font-condensed)',
    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
    color: 'var(--color-teal)',
    marginTop: '2.5rem',
    marginBottom: '0.75rem',
  };

  const h3Style: React.CSSProperties = {
    fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
    color: 'var(--color-teal)',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontWeight: 600,
  };

  const pStyle: React.CSSProperties = {
    marginBottom: '0.75rem',
    lineHeight: 1.75,
    color: 'var(--color-text)',
  };

  const mutedStyle: React.CSSProperties = {
    ...pStyle,
    color: 'var(--color-text-muted)',
    fontSize: '0.95em',
  };

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
        marginBottom: '0.5rem',
      }}>
        Mentions légales
      </h1>
      <p style={mutedStyle}>Dernière mise à jour : juin 2026</p>

      {/* ── Éditeur ── */}
      <h2 style={h2Style}>Éditeur du site</h2>
      <p style={pStyle}>
        <strong>ODGESA</strong> — Organisme Départemental de Gestion des Établissements Scolaires Adventistes de Guadeloupe<br />
        Réseau scolaire La Persévérance<br />
        Guadeloupe, France<br />
        Courriel : <a href="mailto:presidence@odgesa-gp.org" style={{ color: 'var(--color-teal)' }}>presidence@odgesa-gp.org</a><br />
        Présidente : Patricia Sablier
      </p>

      {/* ── Hébergement ── */}
      <h2 style={h2Style}>Hébergement</h2>
      <p style={pStyle}>
        Ce site est hébergé sur un serveur privé virtuel (VPS) situé dans l'Union européenne.<br />
        Prestataire : Contabo GmbH, Aschauer Straße 32a, 81549 Munich, Allemagne.
      </p>

      {/* ── Propriété intellectuelle ── */}
      <h2 style={h2Style}>Propriété intellectuelle</h2>
      <p style={pStyle}>
        L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) sont la propriété exclusive de l'ODGESA ou de ses partenaires et sont protégés par le droit d'auteur. Toute reproduction, même partielle, est interdite sans autorisation préalable.
      </p>

      {/* ── Politique de confidentialité ── */}
      <h2 style={h2Style}>Politique de confidentialité</h2>
      <p style={pStyle}>
        Conformément au Règlement Général sur la Protection des Données (RGPD — Règlement UE 2016/679) et à la loi Informatique et Libertés, l'ODGESA s'engage à protéger les données personnelles des utilisateurs de ce site.
      </p>

      <h3 style={h3Style}>Responsable du traitement</h3>
      <p style={pStyle}>
        ODGESA — Organisme Départemental de Gestion des Établissements Scolaires Adventistes de Guadeloupe<br />
        Courriel : <a href="mailto:presidence@odgesa-gp.org" style={{ color: 'var(--color-teal)' }}>presidence@odgesa-gp.org</a>
      </p>

      <h3 style={h3Style}>Données collectées</h3>
      <p style={pStyle}>
        Ce site collecte des données personnelles uniquement via le formulaire de contact. Les données collectées sont les suivantes :
      </p>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.75rem', lineHeight: 2, color: 'var(--color-text)' }}>
        <li>Nom et prénom</li>
        <li>Adresse électronique</li>
        <li>Numéro de téléphone (facultatif)</li>
        <li>Message libre</li>
        <li>École(s) concernée(s) (selon le type de demande)</li>
      </ul>

      <h3 style={h3Style}>Finalité du traitement</h3>
      <p style={pStyle}>
        Les données collectées via le formulaire de contact sont utilisées exclusivement pour répondre à la demande de l'utilisateur. Elles ne sont ni vendues, ni cédées, ni transmises à des tiers à des fins commerciales.
      </p>

      <h3 style={h3Style}>Durée de conservation</h3>
      <p style={pStyle}>
        Les données personnelles collectées via le formulaire de contact sont conservées pour une durée maximale de 12 mois à compter de la réception du message, puis supprimées.
      </p>

      <h3 style={h3Style}>Base légale</h3>
      <p style={pStyle}>
        Le traitement des données est fondé sur le consentement explicite de l'utilisateur, recueilli au moment de la soumission du formulaire de contact (article 6.1.a du RGPD).
      </p>

      <h3 style={h3Style}>Vos droits</h3>
      <p style={pStyle}>
        Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
      </p>
      <ul style={{ paddingLeft: '1.25rem', marginBottom: '0.75rem', lineHeight: 2, color: 'var(--color-text)' }}>
        <li>Droit d'accès à vos données</li>
        <li>Droit de rectification</li>
        <li>Droit à l'effacement (droit à l'oubli)</li>
        <li>Droit à la limitation du traitement</li>
        <li>Droit d'opposition</li>
      </ul>
      <p style={pStyle}>
        Pour exercer ces droits, contactez-nous à : <a href="mailto:presidence@odgesa-gp.org" style={{ color: 'var(--color-teal)' }}>presidence@odgesa-gp.org</a>.<br />
        Vous avez également le droit d'introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal)' }}>CNIL</a> (Commission Nationale de l'Informatique et des Libertés).
      </p>

      <h3 style={h3Style}>Cookies</h3>
      <p style={pStyle}>
        Ce site n'utilise pas de cookies de traçage ou de cookies publicitaires. Le seul cookie déposé est un cookie fonctionnel lié à l'accès sécurisé au site (cookie de session), qui est strictement nécessaire au fonctionnement du service et est exempt de consentement au titre du RGPD.
      </p>

      <h3 style={h3Style}>Polices de caractères</h3>
      <p style={pStyle}>
        Ce site utilise des polices de caractères auto-hébergées. Aucune donnée n'est transmise à des serveurs tiers (notamment Google) lors du chargement des polices.
      </p>

      <h3 style={h3Style}>Sécurité</h3>
      <p style={pStyle}>
        Ce site est servi exclusivement en HTTPS. Les données transmises via le formulaire de contact sont acheminées de manière chiffrée. Aucune donnée bancaire n'est collectée ou stockée sur ce site. Les dons sont traités via Stripe, soumis à sa propre politique de confidentialité.
      </p>

      {/* ── Contact ── */}
      <h2 style={h2Style}>Contact</h2>
      <p style={pStyle}>
        Pour toute question relative à ce site ou à la protection de vos données, contactez-nous à :<br />
        <a href="mailto:presidence@odgesa-gp.org" style={{ color: 'var(--color-teal)' }}>presidence@odgesa-gp.org</a>
      </p>
    </section>
  );
}
