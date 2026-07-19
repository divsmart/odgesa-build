'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import type { Post } from './posts';

type Props = {
  posts: Post[];
};

const ALL = 'Toutes';

export default function ActualitesGrid({ posts }: Props) {
  const [ecoleFilter, setEcoleFilter] = useState<string>(ALL);
  const [tagFilter, setTagFilter] = useState<string>(ALL);

  const ecoles = useMemo(
    () => [ALL, ...Array.from(new Set(posts.map(p => p.ecole)))],
    [posts]
  );
  const tags = useMemo(
    () => [ALL, ...Array.from(new Set(posts.map(p => p.tag)))],
    [posts]
  );

  const filtered = posts.filter(
    p =>
      (ecoleFilter === ALL || p.ecole === ecoleFilter) &&
      (tagFilter === ALL || p.tag === tagFilter)
  );

  const filterBtn = (active: boolean): React.CSSProperties => ({
    background: active ? 'var(--color-teal)' : '#fff',
    color: active ? '#fff' : 'var(--color-teal)',
    border: '1px solid var(--color-teal)',
    fontSize: '0.8rem',
    fontWeight: 600,
    padding: '0.4rem 0.9rem',
    borderRadius: '999px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  });

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: 'clamp(2rem, 4vw, 2.5rem)' }}>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {ecoles.map(e => (
            <button key={e} onClick={() => setEcoleFilter(e)} style={filterBtn(ecoleFilter === e)}>
              {e === ALL ? 'Toutes les écoles' : e}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {tags.map(t => (
            <button
              key={t}
              onClick={() => setTagFilter(t)}
              style={{
                ...filterBtn(tagFilter === t),
                background: tagFilter === t ? 'var(--color-orange, #E6B320)' : '#fff',
                borderColor: 'var(--color-orange, #E6B320)',
                color: tagFilter === t ? '#fff' : 'var(--color-orange, #E6B320)',
              }}
            >
              {t === ALL ? 'Toutes les catégories' : t}
            </button>
          ))}
        </div>
      </div>

      {filtered.length === 0 && (
        <p style={{ color: 'var(--color-text-muted)' }}>Aucun article ne correspond à cette sélection.</p>
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: 'clamp(1.5rem, 3vw, 2rem)',
        }}
      >
        {filtered.map(post => (
          <Link
            key={post.slug}
            href={`/actualites/${post.slug}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <article
              style={{
                background: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                transition: 'box-shadow 0.2s',
              }}
            >
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden', background: '#f0f4f5' }}>
                <img
                  src={post.image}
                  alt={post.imageAlt}
                  style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }}
                />
              </div>

              <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                  <span
                    style={{
                      background: '#e8f4f8',
                      color: 'var(--color-teal)',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '3px',
                    }}
                  >
                    {post.ecole}
                  </span>
                  <span
                    style={{
                      background: '#fdf3e0',
                      color: '#9a6200',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      padding: '0.2rem 0.6rem',
                      borderRadius: '3px',
                    }}
                  >
                    {post.tag}
                  </span>
                  <span style={{ color: 'var(--color-text-muted)', fontSize: '0.78rem', marginLeft: 'auto' }}>
                    {post.date}
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'var(--font-condensed)',
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                    color: 'var(--color-teal)',
                    lineHeight: 1.2,
                    margin: '0.25rem 0',
                  }}
                >
                  {post.title}
                </h2>

                <p
                  style={{
                    color: 'var(--color-text-muted)',
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)',
                    lineHeight: 1.65,
                    flex: 1,
                  }}
                >
                  {post.excerpt}
                </p>

                <span
                  style={{
                    color: 'var(--color-orange, #E6B320)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    marginTop: '0.5rem',
                  }}
                >
                  Lire la suite →
                </span>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}
