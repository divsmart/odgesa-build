import styles from './UniformOrderSection.module.css';

/**
 * Placeholder promo section for the online uniform ordering service Martin
 * Charbonné is setting up. Anchor id matches AnnouncementBanner /
 * ScrollChevron's TARGET_ID ('uniform-order-announcement').
 *
 * TODO once Martin sends the link: replace the disabled <span> below with
 * a real link, e.g.
 *
 *   <a href={UNIFORM_STORE_URL} className={styles.cta} target="_blank" rel="noopener noreferrer">
 *     Commander mes uniformes
 *   </a>
 */
export default function UniformOrderSection() {
  return (
    <section id="uniform-order-announcement" className={styles.section}>
      <div className={styles.card}>
        <span className={styles.badge}>Nouveau</span>
        <h2 className={styles.title}>Achetez les uniformes en ligne</h2>
        <p className={styles.text}>
          Un nouveau service de commande en ligne des uniformes scolaires est
          en cours de mise en place pour l&apos;ensemble des écoles du
          réseau. Le lien sera ajouté ici dès qu&apos;il sera disponible.
        </p>
        <span className={styles.ctaDisabled} aria-disabled="true">
          Boutique en ligne — disponible prochainement
        </span>
      </div>
    </section>
  );
}
