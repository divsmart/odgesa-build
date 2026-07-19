import Link from 'next/link';
import { notFound } from 'next/navigation';
import { posts } from '../posts';
import styles from '../ArticleSticky.module.css';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  return { title: post ? post.title : 'Actualité — ODGESA' };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find(p => p.slug === slug);
  if (!post) notFound();

  const [intro, ...rest] = post.body;

  return (
    <main className={styles.wrap}>
      <Link href="/actualites" className={styles.back}>
        ← Retour aux actualités
      </Link>

      <p className={styles.kicker}>
        {post.ecole} · {post.tag}
      </p>
      <h1 className={styles.title}>{post.title}</h1>
      <p className={styles.date}>{post.date}</p>

      {intro && <p className={styles.intro}>{intro}</p>}

      {rest.length > 0 ? (
        <div className={styles.stickyBlock}>
          <div className={styles.stickyCol}>
            <img src={post.image} alt={post.imageAlt} />
          </div>
          <div className={styles.textCol}>
            {rest.map((para, i) => (
              <p key={i} className={i === 0 ? styles.dropcap : undefined}>
                {para}
              </p>
            ))}
          </div>
        </div>
      ) : (
        <div style={{ margin: '2rem 0' }}>
          <img
            src={post.image}
            alt={post.imageAlt}
            style={{ width: '100%', borderRadius: '8px', display: 'block' }}
          />
        </div>
      )}
    </main>
  );
}
