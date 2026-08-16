'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './AnnouncementBanner.module.css';

const STORAGE_KEY = 'odgesa-announcement-dismissed-v1';
const TARGET_ID = 'uniform-order-announcement';

/**
 * Sticky, pulsing announcement banner (no countdown).
 * Clicking anywhere on the banner scrolls to the #uniform-order-announcement
 * section on the homepage (navigating there first if the visitor is on
 * another page). The close button dismisses it for the session/device via
 * localStorage so it doesn't reappear on every page load.
 *
 * Bump STORAGE_KEY's version suffix (v1 -> v2) whenever you want a fresh
 * announcement to reappear for visitors who previously dismissed one.
 */
export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid a flash before we check storage
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      setDismissed(window.localStorage.getItem(STORAGE_KEY) === '1');
    } catch {
      setDismissed(false);
    } finally {
      setHydrated(true);
    }
  }, []);

  const handleClose = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      // localStorage unavailable (private browsing etc.) — safe to ignore
    }
  }, []);

  const handleClick = useCallback(() => {
    if (pathname === '/') {
      document
        .getElementById(TARGET_ID)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      router.push(`/#${TARGET_ID}`);
    }
  }, [pathname, router]);

  // Avoid a hydration flash: render nothing until we've checked localStorage.
  if (!hydrated || dismissed) return null;

  return (
    <div
      className={styles.banner}
      role="button"
      tabIndex={0}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label="Voir l'annonce : achat des uniformes en ligne"
    >
      <span className={styles.text}>
        Achat des uniformes en ligne — nouveau service bientôt disponible
      </span>
      <button
        type="button"
        className={styles.closeButton}
        onClick={handleClose}
        aria-label="Fermer l'annonce"
      >
        ×
      </button>
    </div>
  );
}
