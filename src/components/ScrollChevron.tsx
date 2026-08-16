'use client';

import styles from './ScrollChevron.module.css';

const TARGET_ID = 'uniform-order-announcement';

/**
 * Bouncing down-chevron meant to sit absolutely-positioned over the bottom
 * edge of the hero slider. The slider's outer wrapper needs
 * `position: relative` (it almost certainly already has this, since the
 * slides themselves stack with position/inset).
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
      aria-label="Découvrir l'achat des uniformes en ligne"
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
