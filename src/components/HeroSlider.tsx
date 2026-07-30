'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

// Each slide can be:
//  - a split slide: two images (left/right on desktop, crossfading on mobile)
//  - a single-image slide: one image, same on desktop and mobile
//  - a gradient slide: no images at all (background is a CSS gradient)
type SlideImages =
  | { mode: 'split'; left: string; right: string }
  | { mode: 'single'; src: string }
  | { mode: 'gradient' };

type FlyerHotspot = { label: string; href: string; external?: boolean };

const slides = [
  {
    id: 0,
    key: 'annonce',
    // Launch-announcement flyer — full graphic carries its own headline/date/
    // stats, so the standard eyebrow/heading/body/CTA content block and the
    // dark overlay scrim are both suppressed for this slide (see render logic
    // below). Rendered "letterboxed" (exact aspect ratio preserved, centered)
    // rather than cover-cropped, so the four hotspots below stay pixel-aligned
    // with the four school photos at every viewport width.
    eyebrow: '',
    heading: '',
    body: '',
    cta: { label: '', href: '' },
    ctaSecondary: { label: '', href: '' },
    images: { mode: 'single', src: '/images/shared/annonce-lancement-site.jpg' } as SlideImages,
    external: false,
    isFlyer: true,
    // Left-to-right, matching the flyer's own ①②③④ numbering.
    flyerHotspots: [
      { label: 'École La Persévérance Duportail',     href: '/nos-ecoles/duportail' },
      { label: 'École La Persévérance Marie-Galante', href: '/nos-ecoles/marie-galante' },
      { label: 'École Henri Beauregard',               href: 'https://www.laperseverance.fr/', external: true },
      { label: 'École La Persévérance Baillif',        href: '/nos-ecoles/baillif' },
    ] as FlyerHotspot[],
  },
  {
    id: 1,
    key: 'marie-galante',
    eyebrow: 'Réseau scolaire adventiste — Guadeloupe',
    heading: "Des écoles chrétiennes ouvertes,\nbienveillantes, au service\nde chaque enfant",
    body: "Quatre établissements chrétiens adventistes en Guadeloupe — unis autour d'une pédagogie chrétienne intégrale, une alimentation saine et le plein épanouissement de l'enfant.",
    cta: { label: 'Découvrir le réseau', href: '/nos-ecoles' },
    ctaSecondary: { label: "S'inscrire", href: '/nos-ecoles/marie-galante#inscription' },
    images: { mode: 'split', left: '/images/marie-galante/hero-left.jpg', right: '/images/marie-galante/hero-right.jpg' } as SlideImages,
    external: false,
  },
  {
    id: 2,
    key: 'baillif',
    eyebrow: 'École La Persévérance — Baillif',
    heading: "Un cadre chaleureux\npour l'épanouissement\nde chaque élève",
    body: "À Baillif, nos élèves grandissent dans un environnement bienveillant et stimulant, où chaque enfant est accompagné avec soin dans son parcours scolaire et personnel.",
    cta: { label: 'Faire un don pour Baillif', href: 'https://donate.stripe.com/BAILLIF_PLACEHOLDER' },
    ctaSecondary: { label: "Découvrir l'école", href: '/nos-ecoles/baillif' },
    images: { mode: 'split', left: '/images/baillif/hero-left.jpg', right: '/images/baillif/hero-right.jpg' } as SlideImages,
    external: true,
    externalSecondary: false,
  },
  {
    id: 3,
    key: 'duportail',
    eyebrow: 'École La Persévérance — Duportail · Sainte-Rose',
    heading: "Pédagogie classique et Montessori\ndans un cadre verdoyant\nen Guadeloupe",
    body: "À Duportail, nos élèves bénéficient d'un environnement naturel exceptionnel et d'un accompagnement pédagogique attentif, du plus jeune âge jusqu'au CM2.",
    cta: { label: "Découvrir l'école", href: '/nos-ecoles/duportail' },
    ctaSecondary: { label: "S'inscrire", href: '/nos-ecoles/duportail#inscription' },
    images: { mode: 'split', left: '/images/duportail/hero-left.jpg', right: '/images/duportail/hero-right.jpg' } as SlideImages,
    external: false,
  },
  {
    id: 4,
    key: 'talents',
    // PLACEHOLDER — awaiting the real jardinage/chorale/chants photos from Michael.
    // Using two Marie-Galante activity photos as temporary filler so the slide
    // isn't broken in the meantime. Swap `images.left` / `images.right` below
    // once the real photos are in hand.
    eyebrow: 'Arts, culture et activités — Réseau ODGESA',
    heading: "Des talents à découvrir,\ndes passions à développer,\ndes valeurs à cultiver",
    body: "Chant choral, musique, théâtre, langues, jardinage… pour former le corps, l'esprit et le cœur.",
    cta: { label: 'Notre projet éducatif', href: '/projet-educatif' },
    ctaSecondary: { label: 'Nos écoles', href: '/nos-ecoles' },
    images: { mode: 'split', left: '/images/marie-galante/bibliotheque-marie-galante-1.jpg', right: '/images/marie-galante/journee-sportive-marie-galante.jpg' } as SlideImages,
    external: false,
  },
  {
    id: 5,
    key: 'reseau',
    // Unchanged — Michael flagged this slide for new instructions later.
    eyebrow: 'Réseau scolaire adventiste — Guadeloupe',
    heading: "Un réseau, des écoles chrétiennes\nà taille humaine, enracinées\nen Guadeloupe",
    body: "Pour former des enfants épanouis, équilibrés, cultivés et ouverts au monde.",
    cta: { label: 'Qui sommes-nous', href: '/a-propos/qui-sommes-nous' },
    ctaSecondary: { label: 'Nos écoles', href: '/nos-ecoles' },
    images: { mode: 'gradient' } as SlideImages,
    external: false,
  },
  {
    id: 6,
    key: 'inscriptions',
    eyebrow: 'Inscriptions ouvertes — janvier 2026',
    heading: "Rejoignez la famille\ndes Écoles Persévérance",
    body: "Trois sites en Guadeloupe — Baillif, Duportail (Sainte-Rose) et Marie-Galante. Écolage : 2 000 à 2 400 € / an. Transport scolaire disponible.",
    cta: { label: "Demande d'inscription", href: '/nos-ecoles/baillif#inscription' },
    ctaSecondary: { label: 'Nous contacter', href: '/contact' },
    images: { mode: 'gradient' } as SlideImages,
    external: false,
  },
  {
    id: 7,
    key: 'famille',
    eyebrow: 'ODGESA',
    heading: "Une vision,\nquatre territoires",
    body: "Un réseau uni autour d'une même mission éducative en Guadeloupe.",
    cta: { label: 'Découvrir nos écoles', href: '/nos-ecoles' },
    ctaSecondary: { label: 'Notre projet éducatif', href: '/projet-educatif' },
    images: { mode: 'single', src: '/images/shared/reseau-constellation.png' } as SlideImages,
    external: false,
  },
];

const INTERVAL = 6000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [touchX,  setTouchX]  = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // The flyer image is displayed via object-fit:contain (letterboxed within
  // the full-bleed hero section). object-fit only affects how the image
  // paints — it does NOT resize the <img> element's own box, so CSS percentage
  // positioning for the hotspots would be relative to the wrong (full-size)
  // box. Instead, measure the actual rendered/letterboxed image rect in JS
  // (same math the browser uses for object-fit:contain) and position hotspots
  // against real pixel coordinates.
  const flyerImgRef = useRef<HTMLImageElement>(null);
  const [flyerRect, setFlyerRect] = useState<{ left: number; top: number; width: number; height: number } | null>(null);

  useEffect(() => {
    const img = flyerImgRef.current;
    if (!img) return;

    function computeRect() {
      if (!img || !img.naturalWidth || !img.naturalHeight) return;
      const cw = img.clientWidth;
      const ch = img.clientHeight;
      const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
      const dw = img.naturalWidth * scale;
      const dh = img.naturalHeight * scale;
      setFlyerRect({ left: (cw - dw) / 2, top: (ch - dh) / 2, width: dw, height: dh });
    }

    if (img.complete) computeRect();
    img.addEventListener('load', computeRect);
    window.addEventListener('resize', computeRect);
    return () => {
      img.removeEventListener('load', computeRect);
      window.removeEventListener('resize', computeRect);
    };
  }, []);

  // The flyer slide is a letterboxed "poster" (exact aspect ratio preserved)
  // so its four clickable hotspots stay pixel-aligned on desktop. On a narrow
  // mobile viewport that produces a thin strip with large empty margins top
  // and bottom, which looks broken rather than intentional — so it's skipped
  // from the rotation on mobile entirely, same breakpoint as the existing
  // split-slide crossfade behavior (768px).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const displaySlides = isMobile ? slides.filter(s => !s.isFlyer) : slides;

  // Keep `current` in bounds if the slide list length changes (e.g. resizing
  // across the mobile breakpoint mid-session).
  useEffect(() => {
    if (current >= displaySlides.length) setCurrent(0);
  }, [displaySlides.length, current]);

  const go = useCallback((idx: number) => {
    setCurrent((idx + displaySlides.length) % displaySlides.length);
  }, [displaySlides.length]);

  const next = useCallback(() => go(current + 1), [current, go]);
  const prev = useCallback(() => go(current - 1), [current, go]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, INTERVAL);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [paused, next]);

  function onTouchStart(e: React.TouchEvent) { setTouchX(e.touches[0].clientX); }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchX === null) return;
    const delta = e.changedTouches[0].clientX - touchX;
    if (Math.abs(delta) > 40) delta < 0 ? next() : prev();
    setTouchX(null);
  }

  const slide = displaySlides[current];

  return (
    <section
    className={styles.hero}
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onTouchStart={onTouchStart}
    onTouchEnd={onTouchEnd}
    aria-label="Diaporama principal"
    >
    {displaySlides.map((s, i) => (
      <div key={s.id} className={`${styles.slide} ${i === current ? styles.active : ''}`} aria-hidden={i !== current}>
        {s.isFlyer && s.images.mode === 'single' && (
          <div className={styles.flyerWrap}>
            <div className={styles.flyerFrame}>
              <img
                ref={flyerImgRef}
                src={s.images.src}
                alt="Annonce — ouverture officielle du site des Écoles La Persévérance, 30 juillet 2026"
                className={styles.flyerImage}
              />
              {i === current && flyerRect && s.flyerHotspots?.map((h, idx) => {
                const hotspotStyle = {
                  left: flyerRect.left + idx * (flyerRect.width / 4),
                  top: flyerRect.top + flyerRect.height * 0.245,
                  width: flyerRect.width / 4,
                  height: flyerRect.height * 0.385,
                };
                return h.external ? (
                  <a
                    key={idx}
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.flyerHotspot}
                    style={hotspotStyle}
                    aria-label={h.label}
                  />
                ) : (
                  <Link
                    key={idx}
                    href={h.href}
                    className={styles.flyerHotspot}
                    style={hotspotStyle}
                    aria-label={h.label}
                  />
                );
              })}
            </div>
          </div>
        )}
        {!s.isFlyer && s.images.mode === 'split' && (
          <>
            <div className={`${styles.slideImage} ${styles.slideImageLeft}`} style={{ backgroundImage: `url(${s.images.left})` }} />
            <div className={`${styles.slideImage} ${styles.slideImageRight}`} style={{ backgroundImage: `url(${s.images.right})` }} />
          </>
        )}
        {!s.isFlyer && s.images.mode === 'single' && (
          <div className={`${styles.slideImage} ${styles.slideImageSingle}`} style={{ backgroundImage: `url(${s.images.src})` }} />
        )}
        {!s.isFlyer && s.images.mode === 'gradient' && (
          <div className={styles.slideGradient} />
        )}
      {!s.isFlyer && <div className={styles.overlay} />}
      </div>
    ))}

    {!slide.isFlyer && (
    <div className={styles.content}>
    <p className={styles.eyebrow}>{slide.eyebrow}</p>
    <h1 className={styles.heading}>
    {slide.heading.split('\n').map((line, i) => (
      <span key={i}>{line}<br /></span>
    ))}
    </h1>
    <p className={styles.body}>{slide.body}</p>
    <div className={styles.ctas}>
    {slide.external ? (
      <>
      <a href={slide.cta.href} className={`${styles.ctaPrimary} ${styles.ctaDonate}`} target="_blank" rel="noopener noreferrer">
      {slide.cta.label}
      </a>
      {slide.externalSecondary ? (
        <a href={slide.ctaSecondary.href} className={styles.ctaSecondary} target="_blank" rel="noopener noreferrer">
        {slide.ctaSecondary.label}
        </a>
      ) : (
        <Link href={slide.ctaSecondary.href} className={styles.ctaSecondary}>
        {slide.ctaSecondary.label}
        </Link>
      )}
      </>
    ) : (
      <>
      <Link href={slide.cta.href} className={styles.ctaPrimary}>{slide.cta.label}</Link>
      <Link href={slide.ctaSecondary.href} className={styles.ctaSecondary}>{slide.ctaSecondary.label}</Link>
      </>
    )}
    </div>
    </div>
    )}

    {/* Visible text links for the flyer slide — the photo hotspots aren't an
        obvious click affordance for every visitor, so this bar gives an
        explicit, unambiguous link per school as well. Only rendered while
        the flyer slide is active. */}
    {slide.isFlyer && slide.flyerHotspots && (
      <div className={styles.flyerLinksBar}>
        {slide.flyerHotspots.map((h, idx) => (
          h.external ? (
            <a key={idx} href={h.href} target="_blank" rel="noopener noreferrer" className={styles.flyerLinkItem}>
              {h.label.replace('École Henri Beauregard – Les Abymes', 'Henri Beauregard')} ↗
            </a>
          ) : (
            <Link key={idx} href={h.href} className={styles.flyerLinkItem}>
              {h.label.replace('École La Persévérance ', '')} →
            </Link>
          )
        ))}
      </div>
    )}

    <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Diapositive précédente">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>
    <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Diapositive suivante">
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
    </button>

    <div className={styles.dots} role="tablist" aria-label="Navigation diaporama">
    {displaySlides.map((s, i) => (
      <button key={s.id} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => go(i)} role="tab" aria-selected={i === current} aria-label={`Diapositive ${i + 1}`} />
    ))}
    </div>

    {!slide.isFlyer && (
    <div className={styles.statsBar}>
    {[
      { value: '+80',  label: "ans d'éducation adventiste" },
      { value: '4',    label: 'établissements — 3 îles' },
      { value: 'TPS–CM2 · Collège · Lycée · BTS', label: 'niveaux scolaires' },
      { value: '1943', label: 'fondation' },
    ].map(stat => (
      <div key={stat.value} className={styles.stat}>
      <span className={styles.statValue}>{stat.value}</span>
      <span className={styles.statLabel}>{stat.label}</span>
      </div>
    ))}
    </div>
    )}
    </section>
  );
}
