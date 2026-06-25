'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './CookieBanner.module.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem('odgesa-cookie-dismissed');
    if (!dismissed) setVisible(true);
  }, []);

  const dismiss = () => {
    localStorage.setItem('odgesa-cookie-dismissed', '1');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="region" aria-label="Politique de cookies">
      <p className={styles.text}>
        Ce site utilise uniquement un cookie fonctionnel nécessaire à son fonctionnement.
        Aucun cookie publicitaire ou de traçage n'est utilisé.{' '}
        <Link href="/mentions-legales" className={styles.link}>
          En savoir plus
        </Link>
      </p>
      <button className={styles.button} onClick={dismiss}>
        J'ai compris
      </button>
    </div>
  );
}
