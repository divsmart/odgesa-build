'use client';

import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import styles from './RelatedPosts.module.css';

export type RelatedPostCard = {
  slug: string;
  title: string;
  date: string;
  tag: string;
  image: string;
  imageAlt: string;
};

type Props = {
  posts: RelatedPostCard[];
  heading?: string;
};

export default function RelatedPosts({ posts, heading = 'À lire aussi' }: Props) {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const update = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    update();
    el.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      el.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [update]);

  const scroll = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.9, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  if (posts.length === 0) return null;

  return (
    <section className={styles.section} aria-labelledby="related-posts-heading">
      <div className={styles.header}>
        <h2 id="related-posts-heading" className={styles.heading}>
          {heading}
        </h2>
        <div className={styles.arrows}>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scroll(-1)}
            disabled={!canPrev}
            aria-label="Articles précédents"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path d="M8 2L2 8l6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            className={styles.arrow}
            onClick={() => scroll(1)}
            disabled={!canNext}
            aria-label="Articles suivants"
          >
            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" aria-hidden="true">
              <path d="M2 2l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <ul ref={trackRef} className={styles.track}>
        {posts.map((p) => (
          <li key={p.slug} className={styles.item}>
            <Link href={`/actualites/${p.slug}`} className={styles.card}>
              <div className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={p.image} alt={p.imageAlt} loading="lazy" />
              </div>
              <div className={styles.meta}>
                <span className={styles.tag}>{p.tag}</span>
                <span aria-hidden="true"> · </span>
                <span>{p.date}</span>
              </div>
              <h3 className={styles.cardTitle}>{p.title}</h3>
            </Link>
          </li>
        ))}
        <li className={styles.item}>
          <Link href="/actualites" className={`${styles.card} ${styles.allCard}`}>
            Toutes les actualités&nbsp;→
          </Link>
        </li>
      </ul>
    </section>
  );
}
