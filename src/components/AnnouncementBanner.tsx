'use client';

import { useCallback, useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import styles from './AnnouncementBanner.module.css';

const STORAGE_KEY = 'odgesa-announcement-dismissed-at-v2';
const TARGET_ID = 'uniform-order-announcement';
const REAPPEAR_AFTER_DAYS = 3;
const REAPPEAR_AFTER_MS = REAPPEAR_AFTER_DAYS * 24 * 60 * 60 * 1000;

/**
 * Sticky, pulsing announcement banner (no countdown).
 * Clicking anywhere on the banner scrolls to the #uniform-order-announcement
 * section on the homepage (navigating there first if the visitor is on
 * another page). The close button dismisses it, but only temporarily: a
 * dismissal timestamp is stored in localStorage, and the banner reappears
 * automatically once REAPPEAR_AFTER_DAYS has passed — many visitors close
 * banners as a reflex rather than a considered "never show me this again",
 * so a permanent dismissal would hide a live announcement from people who'd
 * still want to see it.
 *
 * Bump STORAGE_KEY's version suffix (v1 -> v2) whenever you want a brand
 * new announcement to reappear immediately for everyone, regardless of
 * their last dismissal time.
 */
export default function AnnouncementBanner() {
  const [dismissed, setDismissed] = useState(true); // start hidden to avoid a flash before we check storage
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setDismissed(false);
      } else {
        const dismissedAt = Number(stored);
        const expired = Number.isNaN(dismissedAt) || Date.now() - dismissedAt > REAPPEAR_AFTER_MS;
        setDismissed(!expired);
      }
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
      window.localStorage.setItem(STORAGE_KEY, String(Date.now()));
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
        Achat des uniformes en ligne — commandez dès maintenant
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
