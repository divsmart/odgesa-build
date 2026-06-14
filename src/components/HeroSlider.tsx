'use client';
import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './HeroSlider.module.css';

const slides = [
  {
    id: 1,
    eyebrow: 'Réseau scolaire adventiste — Guadeloupe',
    heading: "Grandir dans la foi,\nl'excellence et le service",
    body: "Quatre établissements chrétiens adventistes en Guadeloupe — unis autour d'une pédagogie intégrale, une alimentation saine et le plein épanouissement de l'enfant.",
    cta: { label: 'Découvrir le réseau', href: '/nos-ecoles' },
    ctaSecondary: { label: "S'inscrire", href: '/nos-ecoles/baillif#inscription' },
    bg: 'slide1',
  },
  {
    id: 2,
    eyebrow: 'Pédagogie classique & Montessori',
    heading: "Une éducation qui respecte\nle rythme de chaque enfant",
    body: "De la maternelle au CM2 — anglais, espagnol, LSF, arts, sport et accompagnement spirituel dans un cadre structurant et bienveillant.",
    cta: { label: 'Notre projet éducatif', href: '/projet-educatif' },
    ctaSecondary: { label: 'Nos écoles', href: '/nos-ecoles' },
    bg: 'slide2',
  },
  {
    id: 3,
    eyebrow: 'Inscriptions ouvertes — janvier 2027',
    heading: "Rejoignez la famille\ndes Écoles Persévérance",
    body: "Trois sites en Guadeloupe — Baillif, Duportail (Sainte-Rose) et Marie-Galante. Écolage : 2 000 à 2 400 € / an. Transport scolaire disponible.",
    cta: { label: "Demande d'inscription", href: '/nos-ecoles/baillif#inscription' },
    ctaSecondary: { label: 'Nous contacter', href: '/contact' },
    bg: 'slide3',
  },
];

const INTERVAL = 6000;
export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused,  setPaused]  = useState(false);
  const [touchX,  setTouchX]  = useState<number | null>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

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

  const slide = slides[current];
return (
    <section
      className={styles.hero}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      aria-label="Diaporama principal"
    >
      {slides.map((s, i) => (
        <div key={s.id} className={`${styles.slide} ${styles[s.bg]} ${i === current ? styles.active : ''}`} aria-hidden={i !== current}>
          <div className={styles.overlay} />
        </div>
      ))}

      <div className={styles.content}>
        <p className={styles.eyebrow}>{slide.eyebrow}</p>
        <h1 className={styles.heading}>
          {slide.heading.split('\n').map((line, i) => (
            <span key={i}>{line}<br /></span>
          ))}
        </h1>
        <p className={styles.body}>{slide.body}</p>
        <div className={styles.ctas}>
          <Link href={slide.cta.href} className={styles.ctaPrimary}>{slide.cta.label}</Link>
          <Link href={slide.ctaSecondary.href} className={styles.ctaSecondary}>{slide.ctaSecondary.label}</Link>
        </div>
      </div>

      <button className={`${styles.arrow} ${styles.arrowPrev}`} onClick={prev} aria-label="Diapositive précédente">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
      <button className={`${styles.arrow} ${styles.arrowNext}`} onClick={next} aria-label="Diapositive suivante">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <div className={styles.dots} role="tablist" aria-label="Navigation diaporama">
        {slides.map((s, i) => (
          <button key={s.id} className={`${styles.dot} ${i === current ? styles.dotActive : ''}`} onClick={() => go(i)} role="tab" aria-selected={i === current} aria-label={`Diapositive ${i + 1}`} />
        ))}
      </div>

      <div className={styles.statsBar}>
        {[
          { value: '80+', label: "ans d'éducation adventiste" },
          { value: '4',   label: 'établissements — 3 îles' },
          { value: 'PS–CM2', label: 'niveaux scolaires' },
          { value: '1943', label: 'fondation' },
        ].map(stat => (
          <div key={stat.value} className={styles.stat}>
            <span className={styles.statValue}>{stat.value}</span>
            <span className={styles.statLabel}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
