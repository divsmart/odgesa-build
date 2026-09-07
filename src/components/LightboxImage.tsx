'use client';

import { useCallback, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styles from './LightboxImage.module.css';

type Props = {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * Drop-in replacement for a plain <img>. Renders the image normally;
 * clicking it opens a full-screen lightbox (via a portal to document.body,
 * so it isn't clipped or z-index-fought by any ancestor) for reading
 * detail-heavy graphics — infographics, word clouds, tables — at full size.
 *
 * Closes on: Escape, clicking anywhere on the backdrop, clicking the
 * enlarged image itself, or the X button. Escape doesn't exist on touch
 * devices, so the tap-anywhere + X button behavior is what mobile relies on.
 * Body scroll is locked while open. Native pinch-zoom still works on top of
 * this — no touch gestures are intercepted.
 */
export default function LightboxImage({ src, alt, className, style }: Props) {
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') close();
    }

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        className={className}
        style={{ ...style, cursor: 'zoom-in' }}
        onClick={() => setOpen(true)}
      />

      {open &&
        createPortal(
          <div
            className={styles.overlay}
            onClick={close}
            role="dialog"
            aria-modal="true"
            aria-label={alt}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={close}
              aria-label="Fermer"
            >
              ×
            </button>
            <img src={src} alt={alt} className={styles.fullImage} />
          </div>,
          document.body
        )}
    </>
  );
}
