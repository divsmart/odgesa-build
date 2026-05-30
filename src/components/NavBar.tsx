'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';

const schools = [
  { name: 'La Persévérance Baillif',       slug: 'baillif' },
  { name: 'La Persévérance Duportail',      slug: 'duportail' },
  { name: 'La Persévérance Marie-Galante',  slug: 'marie-galante' },
];

// Les Abymes is sous contrat — inscription via Éducation nationale, not listed here.

const langs = ['FR', 'EN', 'ES'] as const;
type Lang = typeof langs[number];

export default function NavBar() {
  const [mobileOpen,    setMobileOpen]    = useState(false);
  const [ecolesOpen,    setEcolesOpen]    = useState(false);
  const [inscrireOpen,  setInscrireOpen]  = useState(false);
  const [lang,          setLang]          = useState<Lang>('FR');

  const ecolesRef   = useRef<HTMLLIElement>(null);
  const inscrireRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (ecolesRef.current && !ecolesRef.current.contains(e.target as Node))
        setEcolesOpen(false);
      if (inscrireRef.current && !inscrireRef.current.contains(e.target as Node))
        setInscrireOpen(false);
    }
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    function onResize() { if (window.innerWidth > 960) setMobileOpen(false); }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* ── Logo ─────────────────────────────────────────────────── */}
        <Link href="/" className={styles.logoWrap}
          onClick={() => setMobileOpen(false)}>
          <Image
            src="/logo.png"
            alt="ODGESA"
            width={140}
            height={56}
            className={styles.logo}
            priority
          />
        </Link>

        {/* ── Nav links ─────────────────────────────────────────────── */}
        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>

          <li>
            <Link href="/projet-educatif" className={styles.navLink}
              onClick={() => setMobileOpen(false)}>
              Projet éducatif
            </Link>
          </li>

          {/* Nos écoles dropdown */}
          <li ref={ecolesRef} className={styles.dropdownWrap}>
            <button
              className={`${styles.navLink} ${styles.dropdownToggle}`}
              onClick={() => setEcolesOpen(p => !p)}
              aria-expanded={ecolesOpen}
            >
              Nos écoles
              <svg className={`${styles.chevron} ${ecolesOpen ? styles.chevronOpen : ''}`}
                width="10" height="6" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {ecolesOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/nos-ecoles" className={styles.dropdownAll}
                    onClick={() => { setEcolesOpen(false); setMobileOpen(false); }}>
                    Toutes nos écoles
                  </Link>
                </li>
                {[...schools, { name: 'Cité Scolaire J.Bigord Les Abymes', slug: 'les-abymes' }]
                  .map(s => (
                    <li key={s.slug}>
                      <Link href={`/nos-ecoles/${s.slug}`} className={styles.dropdownLink}
                        onClick={() => { setEcolesOpen(false); setMobileOpen(false); }}>
                        {s.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            )}
          </li>

          <li>
            <Link href="/familles" className={styles.navLink}
              onClick={() => setMobileOpen(false)}>
              Familles
            </Link>
          </li>
          <li>
            <Link href="/actualites" className={styles.navLink}
              onClick={() => setMobileOpen(false)}>
              Actualités
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}
              onClick={() => setMobileOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        {/* ── Right controls ────────────────────────────────────────── */}
        <div className={styles.controls}>

          {/* Language switcher */}
          <div className={styles.langSwitcher} role="group" aria-label="Langue">
            {langs.map((l, i) => (
              <span key={l} className={styles.langGroup}>
                <button
                  className={`${styles.langBtn} ${lang === l ? styles.langActive : ''}`}
                  onClick={() => setLang(l)}
                  aria-pressed={lang === l}
                >
                  {l}
                </button>
                {i < langs.length - 1 &&
                  <span className={styles.langSep}>|</span>}
              </span>
            ))}
          </div>

          {/* S'inscrire — opens school picker dropdown */}
          <div ref={inscrireRef} className={styles.inscrireWrap}>
            <button
              className={styles.cta}
              onClick={() => setInscrireOpen(p => !p)}
              aria-expanded={inscrireOpen}
              aria-haspopup="true"
            >
              S'inscrire
              <svg className={`${styles.chevron} ${styles.ctaChevron}
                ${inscrireOpen ? styles.chevronOpen : ''}`}
                width="9" height="5" viewBox="0 0 10 6" fill="none">
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {inscrireOpen && (
              <div className={styles.inscrireDropdown} role="menu">
                <p className={styles.inscrireHint}>
                  Choisissez votre établissement
                </p>
                {schools.map(s => (
                  <Link
                    key={s.slug}
                    href={`/nos-ecoles/${s.slug}#inscription`}
                    className={styles.inscrireLink}
                    role="menuitem"
                    onClick={() => { setInscrireOpen(false); setMobileOpen(false); }}
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

        </div>

        {/* ── Hamburger ─────────────────────────────────────────────── */}
        <button
          className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ''}`}
          onClick={() => setMobileOpen(p => !p)}
          aria-label={mobileOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>

      </nav>
    </header>
  );
}
