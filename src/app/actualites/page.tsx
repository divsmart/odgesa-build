import Link from 'next/link';

type Post = {
  slug: string;
  date: string;
  ecole: string;
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

const posts: Post[] = [
  {
    slug: 'nouvelle-direction-baillif-2026',
    date: '25 juin 2026',
    ecole: 'Baillif',
    tag: 'Vie scolaire',
    title: 'Une nouvelle direction pour l\'école de Baillif dès 2026/2027',
    excerpt: 'L\'école primaire La Persévérance de Baillif accueille Madame Vanessa Hatchi à sa direction pour la rentrée 2026/2027, avec un programme enrichi et de nouveaux ateliers.',
    image: '/images/baillif/actualite-baillif-direction.jpg',
    imageAlt: 'Nouvelle direction — École La Persévérance de Baillif',
    body: [
      'L\'école primaire privée La Persévérance de Baillif est heureuse d\'annoncer l\'arrivée de Madame Vanessa Hatchi à sa direction pour la rentrée scolaire 2026/2027.',
      'Sous sa direction, l\'école proposera un programme académique enrichi incluant l\'anglais, l\'espagnol, la méthode Montessori et les valeurs bibliques, ainsi que de nombreuses activités : jardinage, langue des signes, Scrabble et moments de chapelle.',
      'De nouveaux ateliers feront également leur apparition : apprentissage par le mouvement, natation et maths hors les murs — autant d\'approches innovantes pour accompagner chaque enfant dans son développement.',
      'Pour toute information ou inscription, contactez le secrétariat au 0590 801 570 ou par email à laperseverance97123@orange.fr. L\'école est située au 338 route de Cadet, 97123 Baillif.',
    ],
  },
  {
    slug: 'atelier-nutrition-baillif-2026',
    date: '25 juin 2026',
    ecole: 'Baillif',
    tag: 'Santé & bien-être',
    title: 'Atelier Nutrition à l\'école de Baillif',
    excerpt: 'Les élèves de La Persévérance de Baillif ont bénéficié d\'un atelier nutrition animé par un diététicien professionnel, dans le cadre de l\'éducation à la santé.',
    image: '/images/baillif/actualite-baillif-nutrition.jpg',
    imageAlt: 'Atelier Nutrition — École La Persévérance de Baillif',
    body: [
      'Dans le cadre de son engagement pour la santé et le bien-être des élèves, l\'école La Persévérance de Baillif a organisé un atelier nutrition animé par un diététicien professionnel.',
      'Les élèves ont découvert les nutriments essentiels — protéines, glucides, lipides, vitamines et minéraux — de manière interactive et ludique, en lien avec les valeurs alimentaires portées par l\'école.',
      'Cet atelier s\'inscrit dans la continuité du projet éducatif de l\'ODGESA, qui place la santé globale de l\'enfant au cœur de ses priorités, notamment à travers une restauration scolaire végétarienne et équilibrée.',
    ],
  },
  {
    slug: 'ateliers-pause-meridienne-baillif-2026',
    date: '25 juin 2026',
    ecole: 'Baillif',
    tag: 'Activités',
    title: 'Ateliers Pause Méridienne : Couture, Scrabble et Chorale',
    excerpt: 'Chaque midi de 13h à 13h45, les élèves de Baillif participent à des ateliers variés qui enrichissent leur pause méridienne et développent leurs talents.',
    image: '/images/baillif/actualite-baillif-ateliers.jpg',
    imageAlt: 'Ateliers Pause Méridienne — École La Persévérance de Baillif',
    body: [
      'L\'école La Persévérance de Baillif propose chaque jour, de 13h à 13h45, des ateliers de pause méridienne qui permettent aux élèves de s\'épanouir en dehors des temps d\'apprentissage formels.',
      'Au programme : l\'atelier Couture, qui développe la patience et la créativité manuelle ; l\'atelier Scrabble, qui renforce le vocabulaire et l\'esprit de stratégie ; et l\'atelier Chorale, qui cultive la sensibilité musicale et le travail collectif.',
      'Ces activités s\'inscrivent pleinement dans la vision éducative du réseau La Persévérance : former des enfants équilibrés, curieux et ouverts, en valorisant aussi bien les apprentissages académiques que l\'expression personnelle et artistique.',
    ],
  },
];

export default function Page() {
  return (
    <section style={{
      padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      <h1 style={{
        fontFamily: 'var(--font-condensed)',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)',
        color: 'var(--color-teal)',
        marginBottom: '0.5rem',
      }}>
        Actualités
      </h1>
      <p style={{
        color: 'var(--color-text-muted)',
        marginBottom: 'clamp(2rem, 4vw, 3rem)',
        fontSize: 'clamp(0.9rem, 1.4vw, 1rem)',
      }}>
        Les dernières nouvelles du réseau des écoles La Persévérance en Guadeloupe.
      </p>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: 'clamp(1.5rem, 3vw, 2rem)',
      }}>
        {posts.map(post => (
          <article key={post.slug} style={{
            background: '#fff',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            transition: 'box-shadow 0.2s',
          }}>
            <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
              <img
                src={post.image}
                alt={post.imageAlt}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <span style={{
                  background: '#e8f4f8',
                  color: 'var(--color-teal)',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '3px',
                }}>
                  {post.ecole}
                </span>
                <span style={{
                  background: '#fdf3e0',
                  color: '#9a6200',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  padding: '0.2rem 0.6rem',
                  borderRadius: '3px',
                }}>
                  {post.tag}
                </span>
                <span style={{
                  color: 'var(--color-text-muted)',
                  fontSize: '0.78rem',
                  marginLeft: 'auto',
                }}>
                  {post.date}
                </span>
              </div>

              <h2 style={{
                fontFamily: 'var(--font-condensed)',
                fontSize: 'clamp(1.1rem, 1.8vw, 1.3rem)',
                color: 'var(--color-teal)',
                lineHeight: 1.2,
                margin: '0.25rem 0',
              }}>
                {post.title}
              </h2>

              <p style={{
                color: 'var(--color-text-muted)',
                fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)',
                lineHeight: 1.65,
                flex: 1,
              }}>
                {post.excerpt}
              </p>

              <div style={{
                borderTop: '1px solid #e5e7eb',
                paddingTop: '1rem',
                marginTop: '0.5rem',
              }}>
                {post.body.map((para, i) => (
                  <p key={i} style={{
                    color: 'var(--color-text)',
                    fontSize: 'clamp(0.85rem, 1.2vw, 0.92rem)',
                    lineHeight: 1.75,
                    marginBottom: i < post.body.length - 1 ? '0.75rem' : 0,
                  }}>
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
