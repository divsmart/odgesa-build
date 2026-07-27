export type Post = {
  slug: string;
  date: string;
  ecole: string | string[];
  tag: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  body: string[];
};

const RESEAU = ['Baillif', 'Duportail', 'Marie-Galante', 'Les Abymes'];

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
  {
    slug: 'psychologue-referent-etablissements-2026',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Santé & bien-être',
    title: 'Nouveau dès la rentrée 2026-2027 : un psychologue référent dans chaque établissement',
    excerpt: 'Le réseau La Persévérance renforce son accompagnement avec un psychologue référent dans chaque école, au service des parents, des enfants et du personnel.',
    image: '/images/actualites/actualite-reseau-psychologue-referent-2026.jpg',
    imageAlt: 'Un psychologue référent dans chaque établissement du réseau La Persévérance',
    body: [
      'Dès la rentrée scolaire 2026-2027, chaque établissement du réseau La Persévérance disposera d\'un psychologue référent, au service des parents, des enfants et du personnel.',
      'Cette nouvelle ressource s\'inscrit dans la vision holistique de l\'ODGESA, qui prend en compte non seulement les apprentissages, mais aussi la dimension émotionnelle, relationnelle et morale de chaque élève.',
      'Écouter, accompagner, soutenir : cette présence contribue à faire de chaque école un lieu bienveillant et épanouissant, en complémentarité avec les directions, les enseignants, l\'aumônerie et les familles.',
    ],
  },
  {
    slug: 'pourquoi-choisir-reseau-perseverance-2026',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Projet éducatif',
    title: 'Pourquoi choisir les écoles du réseau La Persévérance ?',
    excerpt: 'Une éducation complète pour former le corps, l\'esprit et le cœur : apprentissage, ouverture au monde, épanouissement et bien-être, au sein d\'un réseau à taille humaine enraciné en Guadeloupe.',
    image: '/images/actualites/actualite-reseau-pourquoi-choisir-infographie.jpg',
    imageAlt: 'Pourquoi choisir les écoles du réseau La Persévérance — infographie',
    body: [
      'Le réseau La Persévérance propose une éducation complète, pensée pour former le corps, l\'esprit et le cœur de chaque enfant, de la maternelle au CM2.',
      'Apprendre, s\'ouvrir au monde, grandir, s\'épanouir, bien vivre et faciliter le quotidien des familles : six piliers qui structurent le projet éducatif de nos établissements, portés par une exigence académique, une ouverture linguistique et culturelle, et un cadre sécurisant et bienveillant.',
      'Des écoles à taille humaine, enracinées en Guadeloupe, pour former des enfants équilibrés, cultivés et ouverts au monde — une alternative crédible et humaine entre l\'école publique et les établissements privés élitistes.',
    ],
  },
  {
    slug: 'reseau-la-perseverance-guadeloupe-presentation',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Projet éducatif',
    title: 'Le réseau La Persévérance-Guadeloupe',
    excerpt: 'Quatre établissements, une vision commune. Découvrez les grandes orientations qui unissent nos écoles à travers la Guadeloupe.',
    image: '/images/actualites/actualite-reseau-vue-ensemble-infographie.jpg',
    imageAlt: 'Le réseau La Persévérance-Guadeloupe — présentation',
    body: [
      'Le réseau La Persévérance-Guadeloupe forme aujourd\'hui les femmes et les hommes de demain à travers ses établissements répartis sur le territoire guadeloupéen.',
      'Chaque école partage une vision stratégique commune : exigence académique, ouverture linguistique et culturelle, développement intégral de l\'enfant et cadre éducatif rassurant.',
      'Identité et cohérence du réseau, attractivité et recrutement, excellence pédagogique, vie scolaire, relation aux familles et gouvernance : ces grandes orientations guident chacun de nos établissements vers un même objectif, celui de former des enfants équilibrés, cultivés et ouverts au monde.',
    ],
  },
  {
    slug: 'valeurs-choisir-la-perseverance',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Projet éducatif',
    title: 'Des repères solides pour construire sa vie',
    excerpt: 'Choisir La Persévérance, c\'est offrir à son enfant un environnement où l\'excellence éducative s\'allie à des valeurs fortes : respect, responsabilité, intégrité, bienveillance et sens du service.',
    image: '/images/actualites/actualite-reseau-choisir-perseverance-valeurs.jpg',
    imageAlt: 'Choisir La Persévérance — des repères solides pour construire sa vie',
    body: [
      'Choisir La Persévérance, c\'est offrir à son enfant un environnement où l\'excellence éducative s\'allie à des valeurs fortes.',
      'Le respect, la responsabilité, l\'intégrité, la bienveillance et le sens du service constituent le socle de l\'accompagnement quotidien de chaque élève, au sein d\'une communauté éducative attentive à son épanouissement.',
      'Des repères solides pour construire sa vie : c\'est l\'engagement que porte chaque établissement du réseau auprès des familles qui lui font confiance.',
    ],
  },
  {
    slug: 'savoirs-valeurs-caractere-coeur',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Projet éducatif',
    title: 'Savoirs, valeurs, caractère, cœur',
    excerpt: 'Parce que les connaissances ouvrent les portes de l\'avenir, mais que les valeurs en tracent le chemin — une éducation qui forme l\'intelligence, le caractère et le cœur.',
    image: '/images/actualites/actualite-reseau-savoirs-valeurs-1.jpg',
    imageAlt: 'Savoirs, valeurs, caractère, cœur — projet éducatif La Persévérance',
    body: [
      'Parce que les connaissances ouvrent les portes de l\'avenir, mais que les valeurs en tracent le chemin, les familles qui rejoignent La Persévérance font le choix d\'une éducation qui forme l\'intelligence, le caractère et le cœur.',
      'Des savoirs pour comprendre le monde, des valeurs pour faire les bons choix, un caractère forgé pour affronter les défis, et un cœur bienveillant pour aimer et servir les autres : quatre dimensions indissociables de notre projet éducatif.',
    ],
  },
  {
    slug: 'transmettre-heritage-valeurs-familles',
    date: '26 juillet 2026',
    ecole: RESEAU,
    tag: 'Vie scolaire',
    title: 'Le plus bel héritage qu\'une école puisse transmettre',
    excerpt: 'Les familles qui nous font confiance souhaitent transmettre à leurs enfants des repères durables — des valeurs qui façonnent les adultes de demain.',
    image: '/images/actualites/actualite-reseau-familles-heritage.jpg',
    imageAlt: 'Le plus bel héritage qu\'une école puisse transmettre',
    body: [
      'Les familles qui nous font confiance souhaitent transmettre à leurs enfants des repères durables.',
      'Elles savent que les valeurs acquises pendant l\'enfance façonnent les adultes de demain et constituent le plus bel héritage qu\'une école puisse transmettre — une conviction que porte chaque établissement du réseau La Persévérance au quotidien.',
    ],
  },
];
