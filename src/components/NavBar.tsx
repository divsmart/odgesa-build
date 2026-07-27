'use client';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import styles from './NavBar.module.css';

const schools = [
  { name: 'La Persévérance Baillif',       slug: 'baillif' },
  { name: 'La Persévérance Duportail',      slug: 'duportail' },
  { name: 'La Persévérance Marie-Galante',  slug: 'marie-galante' },
];

// Full "Nos Écoles" list — the four primary schools under ODGESA management.
// Henri Beauregard (formerly listed as Cité Scolaire J. Bigord) has no page
// on this site yet, so it links externally like before, but is now shown as
// a full peer among the other three rather than a visually separate item.
const nosEcolesList: { name: string; slug: string; href?: string; external?: boolean }[] = [
  { name: 'La Persévérance Baillif',       slug: 'baillif' },
  { name: 'La Persévérance Duportail',     slug: 'duportail' },
  { name: 'La Persévérance Marie-Galante', slug: 'marie-galante' },
  { name: 'École Henri Beauregard',        slug: 'henri-beauregard', href: 'https://www.laperseverance.fr/', external: true },
];

// Fournitures ▸ École ▸ Classe — per-school, per-class supply-list PDFs.
// Schools with an empty `classes` array don't have PDFs yet: clicking the
// school name links straight to the school's #fournitures anchor instead of
// opening an (empty) submenu. Once a school's PDFs are ready, just fill in
// its `classes` array below — no other changes needed.
const fournituresData: {
  slug: string;
  name: string;
  classes: { name: string; href: string }[];
}[] = [
  { name: 'La Persévérance Baillif',      slug: 'baillif',      classes: [] },
  {
    name: 'La Persévérance Duportail',
    slug: 'duportail',
    classes: [
      { name: 'TPS / PS / MS', href: '/documents/duportail/fournitures-duportail-tps-ps-ms.pdf' },
      { name: 'GS',            href: '/documents/duportail/fournitures-duportail-gs.pdf'         },
      { name: 'CP',            href: '/documents/duportail/fournitures-duportail-cp.pdf'         },
      { name: 'CE1',           href: '/documents/duportail/fournitures-duportail-ce1.pdf'        },
      { name: 'CE2',           href: '/documents/duportail/fournitures-duportail-ce2.pdf'        },
      { name: 'CM1',           href: '/documents/duportail/fournitures-duportail-cm1.pdf'        },
      { name: 'CM2',           href: '/documents/duportail/fournitures-duportail-cm2.pdf'        },
      { name: 'Montessori (PS–GS)', href: '/documents/duportail/fournitures-duportail-montessori.pdf' },
    ],
  },
  {
    name: 'La Persévérance Marie-Galante',
    slug: 'marie-galante',
    classes: [
      { name: 'PS',  href: '/documents/marie-galante/fournitures-marie-galante-ps.pdf'  },
      { name: 'MS',  href: '/documents/marie-galante/fournitures-marie-galante-ms.pdf'  },
      { name: 'GS',  href: '/documents/marie-galante/fournitures-marie-galante-gs.pdf'  },
      { name: 'CP',  href: '/documents/marie-galante/fournitures-marie-galante-cp.pdf'  },
      { name: 'CE1', href: '/documents/marie-galante/fournitures-marie-galante-ce1.pdf' },
      { name: 'CE2', href: '/documents/marie-galante/fournitures-marie-galante-ce2.pdf' },
      { name: 'CM1', href: '/documents/marie-galante/fournitures-marie-galante-cm1.pdf' },
      { name: 'CM2', href: '/documents/marie-galante/fournitures-marie-galante-cm2.pdf' },
    ],
  },
];

const projetLinks = [
  { name: 'Notre identité éducative',        href: '/projet-educatif/notre-identite-educative' },
  { name: 'Charte éducative commune',        href: '/projet-educatif/charte-educative-commune' },
  { name: 'Cadre de vie des établissements', href: '/projet-educatif/cadre-de-vie' },
];

const langs = ['FR', 'EN', 'ES'] as const;
type Lang = typeof langs[number];

export default function NavBar() {
  const [mobileOpen,   setMobileOpen]   = useState(false);
  const [projetOpen,   setProjetOpen]   = useState(false);
  const [ecolesOpen,   setEcolesOpen]   = useState(false);
  const [inscrireOpen, setInscrireOpen] = useState(false);
  const [fournOpen,       setFournOpen]       = useState(false);
  const [fournSchoolOpen, setFournSchoolOpen] = useState<string | null>(null);
  const [lang,         setLang]         = useState<Lang>('FR');

  const projetRef   = useRef<HTMLLIElement>(null);
  const ecolesRef   = useRef<HTMLLIElement>(null);
  const inscrireRef = useRef<HTMLDivElement>(null);
  const fournRef    = useRef<HTMLLIElement>(null);

  // Close all dropdowns on outside click
  useEffect(() => {
    function handle(e: MouseEvent) {
      if (projetRef.current  && !projetRef.current.contains(e.target as Node))
        setProjetOpen(false);
      if (ecolesRef.current  && !ecolesRef.current.contains(e.target as Node))
        setEcolesOpen(false);
      if (inscrireRef.current && !inscrireRef.current.contains(e.target as Node))
        setInscrireOpen(false);
      if (fournRef.current && !fournRef.current.contains(e.target as Node)) {
        setFournOpen(false);
        setFournSchoolOpen(null);
      }
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

  function closeAll() {
    setProjetOpen(false);
    setEcolesOpen(false);
    setInscrireOpen(false);
    setFournOpen(false);
    setFournSchoolOpen(null);
    setMobileOpen(false);
  }

  const chevron = (open: boolean) => (
    <svg
      className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`}
      width="10" height="6" viewBox="0 0 10 6" fill="none"
    >
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5"
        strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>

        {/* ── Logo ─────────────────────────────────────────────────── */}
      <Link href="/" className={styles.logoWrap} onClick={closeAll}>
        <img
          src="/images/shared/odgesa-logo-icon.png"
          alt="ODGESA"
          className={styles.logo}
        />
        <span className={styles.logoText}>
         <span className={styles.logoTitle}>Réseau La Persévérance</span>
         <span className={styles.logoSub}>Guadeloupe</span>
        </span>
      </Link>

        {/* ── Nav links ─────────────────────────────────────────────── */}
        <ul className={`${styles.navLinks} ${mobileOpen ? styles.open : ''}`}>

          {/* Projet éducatif dropdown */}
          <li
            ref={projetRef}
            className={styles.dropdownWrap}
            onMouseEnter={() => setProjetOpen(true)}
            onMouseLeave={() => setProjetOpen(false)}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownToggle}`}
              onClick={() => setProjetOpen(p => !p)}
              aria-expanded={projetOpen}
            >
              Projet éducatif
              {chevron(projetOpen)}
            </button>
            {projetOpen && (
              <ul className={styles.dropdown}>
                {projetLinks.map(l => (
                  <li key={l.href}>
                    <Link href={l.href} className={styles.dropdownLink} onClick={closeAll}>
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Nos écoles dropdown */}
          <li
            ref={ecolesRef}
            className={styles.dropdownWrap}
            onMouseEnter={() => setEcolesOpen(true)}
            onMouseLeave={() => setEcolesOpen(false)}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownToggle}`}
              onClick={() => setEcolesOpen(p => !p)}
              aria-expanded={ecolesOpen}
            >
              Nos écoles
              {chevron(ecolesOpen)}
            </button>
            {ecolesOpen && (
              <ul className={styles.dropdown}>
                <li>
                  <Link href="/nos-ecoles" className={styles.dropdownAll} onClick={closeAll}>
                    Toutes nos écoles
                  </Link>
                </li>
                {nosEcolesList.map(s => (
                  <li key={s.slug}>
                    {s.external ? (
                      <a href={s.href} target="_blank" rel="noopener noreferrer" className={styles.dropdownLink} onClick={closeAll}>
                        {s.name}
                      </a>
                    ) : (
                      <Link href={`/nos-ecoles/${s.slug}`} className={styles.dropdownLink} onClick={closeAll}>
                        {s.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Fournitures ▸ École ▸ Classe */}
          <li
            ref={fournRef}
            className={styles.dropdownWrap}
            onMouseEnter={() => setFournOpen(true)}
            onMouseLeave={() => { setFournOpen(false); setFournSchoolOpen(null); }}
          >
            <button
              className={`${styles.navLink} ${styles.dropdownToggle}`}
              onClick={() => { setFournOpen(p => !p); setFournSchoolOpen(null); }}
              aria-expanded={fournOpen}
            >
              2026-2027
              {chevron(fournOpen)}
            </button>
            {fournOpen && (
              <ul className={styles.dropdown}>
                {fournituresData.map(school => (
                  school.classes.length === 0 ? (
                    <li key={school.slug}>
                      <Link
                        href={`/nos-ecoles/${school.slug}#fournitures`}
                        className={styles.dropdownLink}
                        onClick={closeAll}
                      >
                        {school.name}
                      </Link>
                    </li>
                  ) : (
                    <li
                      key={school.slug}
                      className={styles.subDropdownWrap}
                    >
                      <button
                        className={styles.subDropdownToggle}
                        onClick={() =>
                          setFournSchoolOpen(p => (p === school.slug ? null : school.slug))
                        }
                        aria-expanded={fournSchoolOpen === school.slug}
                      >
                        {school.name}
                        {chevron(fournSchoolOpen === school.slug)}
                      </button>
                      {fournSchoolOpen === school.slug && (
                        <ul className={styles.subDropdown}>
                          {school.classes.map(c => (
                            <li key={c.href}>
                              <a
                                href={c.href}
                                className={styles.dropdownLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeAll}
                              >
                                {c.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  )
                ))}
              </ul>
            )}
          </li>

          <li>
            <a href="https://www.ecoledirecte.com/" target="_blank" rel="noopener noreferrer" className={styles.navLink} onClick={closeAll}>
              Parents
            </a>
          </li>
          <li>
            <Link href="/actualites" className={styles.navLink} onClick={closeAll}>
              Actualités
            </Link>
          </li>
          <li>
            <Link href="/galerie" className={styles.navLink} onClick={closeAll}>
              Galerie
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink} onClick={closeAll}>
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
                {i < langs.length - 1 && <span className={styles.langSep}>|</span>}
              </span>
            ))}
          </div>

          {/* S'inscrire — opens school picker dropdown, hors contrat schools only */}
          <div ref={inscrireRef} className={styles.inscrireWrap}>
            <button
              className={styles.cta}
              onClick={() => setInscrireOpen(p => !p)}
              aria-expanded={inscrireOpen}
              aria-haspopup="true"
            >
              S'inscrire
              <svg
                className={`${styles.chevron} ${styles.ctaChevron} ${inscrireOpen ? styles.chevronOpen : ''}`}
                width="9" height="5" viewBox="0 0 10 6" fill="none"
              >
                <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.8"
                  strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {inscrireOpen && (
              <div className={styles.inscrireDropdown} role="menu">
                <p className={styles.inscrireHint}>Choisissez votre établissement</p>
                {schools.map(s => (
                  <Link
                    key={s.slug}
                    href={`/nos-ecoles/${s.slug}#inscription`}
                    className={styles.inscrireLink}
                    role="menuitem"
                    onClick={closeAll}
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
