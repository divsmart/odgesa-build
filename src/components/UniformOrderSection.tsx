import styles from './UniformOrderSection.module.css';

const UNIFORM_STORE_URL = 'https://boutique.laperseverance.fr/';

/**
 * Promo section linking to the online uniform ordering service run by
 * Martin Charbonné. Anchor id matches AnnouncementBanner /
 * ScrollChevron's TARGET_ID ('uniform-order-announcement').
 */
export default function UniformOrderSection() {
  return (
    <section id="uniform-order-announcement" className={styles.section}>
      <div className={styles.card}>
        <span className={styles.badge}>Nouveau</span>
        <h2 className={styles.title}>Achetez les uniformes en ligne</h2>
        <p className={styles.text}>
          Commandez les uniformes scolaires de vos enfants directement en
          ligne, pour l&apos;ensemble des écoles du réseau.
        </p>
        <a
          href={UNIFORM_STORE_URL}
          className={styles.cta}
          target="_blank"
          rel="noopener noreferrer"
        >
          Commander mes uniformes
        </a>
      </div>
    </section>
  );
}
