import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
    <div className={styles.inner}>
    {/* Brand */}
    <div className={styles.brand}>
    <Link href="/" className={styles.wordmark}>
    Écoles Persévérance<br />
    <span>Guadeloupe</span>
    </Link>
    <p className={styles.tagline}>
    Réseau scolaire adventiste<br />de Guadeloupe
    </p>
    <span className={styles.since}>Depuis 1943</span>
    </div>

    {/* Nos écoles */}
    <div className={styles.col}>
    <h3 className={styles.colTitle}>Nos écoles</h3>
    <ul className={styles.colLinks}>
    <li><Link href="/nos-ecoles/baillif">La Persévérance Baillif</Link></li>
    <li><Link href="/nos-ecoles/duportail">La Persévérance Duportail</Link></li>
    <li><Link href="/nos-ecoles/marie-galante">La Persévérance Marie-Galante</Link></li>
    <li><a href="https://www.laperseverance.fr/" target="_blank" rel="noopener noreferrer">Cité Scolaire J.Bigord Les Abymes</a></li>
    </div>

    {/* Institution */}
    <div className={styles.col}>
    <h3 className={styles.colTitle}>Institution</h3>
    <ul className={styles.colLinks}>
    <li><Link href="/#notre-eglise">Notre Église</Link></li>
    <li><Link href="/a-propos/administration-et-gouvernance">Administration et Gouvernance</Link></li>
    <li><Link href="/mentions-legales">Mentions légales</Link></li>
    </ul>
    </div>

    {/* Réseau */}
    <div className={styles.col}>
    <h3 className={styles.colTitle}>Réseau UAGF</h3>
    <ul className={styles.colLinks}>
    <li>
    <a href="https://uagf.org/nos-ecoles/" target="_blank" rel="noreferrer">
    La Persévérance — Martinique
    </a>
    </li>
    <li>
    <a href="https://uagf.org" target="_blank" rel="noreferrer">
    UAGF
    </a>
    </li>
    <li>
    <a href="https://www.instagram.com/ecoles_perseverance_971/"
    target="_blank" rel="noreferrer">
    Instagram
    </a>
    </li>
    </ul>
    </div>
    </div>
    <div className={styles.bottom}>
    <p>
    © {year} ODGESA — Organisme Départemental de Gestion
    des Établissements Scolaires Adventistes
    </p>
    </div>
    <div className={styles.subFooter}>
    <p>Conçu et entretenu pour l&apos;ODGESA par la famille Sharp-Joe, Guadeloupe, Antilles françaises.</p>
    </div>
    </footer>
  );
}
