export type Post = {
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

export const posts: Post[] = [
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
