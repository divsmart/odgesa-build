import styles from './ResultatsExamensSection.module.css';

const STATS = [
  { value: '93,5 %', label: 'Diplôme national du brevet' },
  { value: '98,5 %', label: 'Baccalauréat général et technologique' },
  { value: '78,3 %', label: 'Brevet de technicien supérieur' },
];

/**
 * Homepage banner highlighting Cité Scolaire La Persévérance (Les Abymes)
 * exam results for session 2026. Links through to the full Actualités
 * article for context and sourcing.
 */
export default function ResultatsExamensSection() {
  return (
    <section id="resultats-examens" className={styles.section}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>
          Cité Scolaire La Persévérance · Les Abymes
        </span>
        <h2 className={styles.title}>Résultats aux examens — session 2026</h2>

        <div className={styles.statsRow}>
          {STATS.map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>

        <div className={styles.callout}>
          <p className={styles.calloutLine}>
            Brevet : <strong>+24,8 pts</strong> sur l&apos;académie ·{' '}
            <strong>+11,9 pts</strong> sur le national
          </p>
          <p className={styles.calloutLine}>
            Baccalauréat : <strong>+8,6 pts</strong> sur l&apos;académie ·{' '}
            <strong>+7,0 pts</strong> sur le national
          </p>
        </div>

        <a href="/actualites/resultats-examens-abymes-2026" className={styles.cta}>
          En savoir plus →
        </a>

        <p className={styles.source}>
          Références académiques et nationales toutes séries confondues · Source : DEPP, juillet 2026
        </p>
      </div>
    </section>
  );
}
