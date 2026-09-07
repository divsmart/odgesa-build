'use client';

import styles from './ScrollChevron.module.css';

const TARGET_ID = 'resultats-examens';

/**
 * Bouncing down-chevron meant to sit absolutely-positioned over the bottom
 * edge of the hero slider. The slider's outer wrapper needs
 * `position: relative` (it almost certainly already has this, since the
 * slides themselves stack with position/inset).
 *
 * Points at the exam-results stats section (ResultatsExamensSection,
 * id="resultats-examens") rather than the uniform order section — the
 * AnnouncementBanner handles the uniform pitch on its own, linking to
 * /parents#uniformes-commande, so this and that are now fully decoupled.
 *
 * Usage inside HeroSlider.tsx, as a sibling of the slides, near the end of
 * the wrapper's JSX:
 *
 *   <div className={styles.sliderWrapper}>
 *     ...slides...
 *     <ScrollChevron />
 *   </div>
 */
export default function ScrollChevron() {
  const handleClick = () => {
    document
      .getElementById(TARGET_ID)
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <button
      type="button"
      className={styles.chevron}
      onClick={handleClick}
      aria-label="Découvrir nos résultats aux examens"
    >
      <svg
        viewBox="0 0 24 24"
        width="28"
        height="28"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}
