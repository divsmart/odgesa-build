import Image from 'next/image';
import styles from './StickyMedia.module.css';

const galleryPhotos = [
  { src: '/images/duportail/hero-left.jpg', alt: 'École La Persévérance de Duportail — façade' },
  { src: '/images/duportail/hero-right.jpg', alt: 'Élèves de l\'École La Persévérance de Duportail' },
];

const supplyLists = [
  { level: 'TPS / PS / MS', file: 'fournitures-duportail-tps-ps-ms.pdf' },
  { level: 'GS', file: 'fournitures-duportail-gs.pdf' },
  { level: 'CP', file: 'fournitures-duportail-cp.pdf' },
  { level: 'CE1', file: 'fournitures-duportail-ce1.pdf' },
  { level: 'CE2', file: 'fournitures-duportail-ce2.pdf' },
  { level: 'CM1', file: 'fournitures-duportail-cm1.pdf' },
  { level: 'CM2', file: 'fournitures-duportail-cm2.pdf' },
  { level: 'Montessori (PS–GS)', file: 'fournitures-duportail-montessori.pdf' },
];

export default function Page() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>
          Duportail · Sainte-Rose
        </p>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-teal)', marginBottom: '1rem', lineHeight: 1.1 }}>
          École La Persévérance<br />de Duportail
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.8, color: 'var(--color-text-muted)', maxWidth: '720px' }}>
          Nichée dans un écrin de verdure à Duportail, Sainte-Rose, l&apos;école accueille les enfants de la
          Très Petite Section (TPS) au CM2 dans un cadre paisible où la nature devient un véritable
          partenaire de l&apos;éducation.
        </p>
      </div>

      {/* Quick facts bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { label: 'Niveaux', value: 'TPS – CM2' },
          { label: 'Élèves', value: '≈ 190' },
          { label: 'Classes', value: '8' },
          { label: 'Fondée', value: '1965' },
        ].map(stat => (
          <div key={stat.label} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '0.85rem 1.25rem', borderLeft: '3px solid var(--color-teal)', minWidth: '110px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.2rem' }}>{stat.label}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Notre mission */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
        Notre mission
      </h2>
      <p style={{ fontStyle: 'italic', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '1rem' }}>
        Accompagner chaque enfant vers sa réussite
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Notre projet éducatif s&apos;inspire des valeurs de l&apos;Éducation adventiste et place l&apos;enfant au
        cœur de ses apprentissages. Dans un climat de bienveillance, de respect et d&apos;écoute, nous
        encourageons chaque élève à développer ses connaissances, ses talents et son sens des
        responsabilités.
      </p>

      {/* Notre histoire */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
        Notre histoire
      </h2>
      <p style={{ fontStyle: 'italic', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '1rem' }}>
        Plus de 60 ans au service de l&apos;éducation
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Tout commence en 1965, à La Rayette, dans la commune de Sainte-Rose, lorsque les membres de
        l&apos;Église adventiste du Septième Jour décident de créer une école fondée sur les valeurs
        chrétiennes. Installé dans une modeste salle attenante à l&apos;église, l&apos;établissement accueille
        ses premiers élèves sous la direction de Mme Viviane Pierre-Victor.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        En 1985, sous la direction de Mme Cécile Solvar, l&apos;établissement s&apos;installe sur le site de
        Duportail, offrant aux élèves un cadre naturel exceptionnel, plus spacieux et particulièrement
        propice aux apprentissages et à l&apos;épanouissement.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Aujourd&apos;hui, sous la direction de Mme Stella Nomed Jean-Baptiste, notre établissement accueille
        près de 190 élèves, répartis dans 8 classes. Plus de soixante ans après sa création, il continue
        d&apos;évoluer afin de répondre aux besoins des élèves et des familles, tout en conservant son
        identité et son esprit de famille.
      </p>

      {/* Direction et équipe éducative */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Direction et équipe éducative
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.25rem', marginBottom: '3rem' }}>
        {[
          { role: 'Direction', noms: ['Stella Nomed Jean-Baptiste'] },
          { role: 'Secrétariat', noms: ['Danidza Lusine'] },
          { role: 'Équipe enseignante', noms: ['Béatrice Phibel', 'Anne-Flore Mondelice', 'Maria Gautier', 'Mireille Alphonso', 'Sandrine Retel', 'Jhade Goffin', 'Fernande Soliveau', 'Stella Nomed Jean-Baptiste'] },
          { role: 'ATSEM', noms: ['Isis Noble', 'Guernina Hanany', 'Chrystèle Kanga'] },
          { role: 'Restauration', noms: ['Mariana Cideron', 'José Lautric', 'Sylvia Moulin'] },
          { role: 'Personnel polyvalent', noms: ['Harry Roselia'] },
        ].map(group => (
          <div key={group.role} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem', borderTop: '3px solid var(--color-teal)' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
              {group.role}
            </p>
            {group.noms.map(nom => (
              <p key={nom} style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.9rem', lineHeight: 1.6 }}>{nom}</p>
            ))}
          </div>
        ))}
      </div>

      {/* Projet pédagogique */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Projet pédagogique
      </h2>

      <div style={{ background: '#f0f7f9', borderLeft: '3px solid var(--color-orange)', borderRadius: '8px', padding: '1.25rem 1.5rem', marginBottom: '1.5rem' }}>
        <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>
          🌱 Classe maternelle Montessori — PS à GS
        </p>
        <p style={{ lineHeight: 1.8, fontSize: '0.95rem' }}>
          Cette pédagogie respecte le rythme naturel de l&apos;enfant et lui permet de développer sa
          concentration, sa confiance en lui, son autonomie et le goût de la découverte grâce à un
          environnement soigneusement préparé et à un matériel pédagogique adapté.
        </p>
      </div>

      <p style={{ lineHeight: 1.8, marginBottom: '0.5rem', fontWeight: 600, color: 'var(--color-navy)' }}>
        Une ouverture sur le monde
      </p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '1.5rem' }}>
        <li>Apprentissage de l&apos;anglais</li>
        <li>Enseignement de la musique à partir du CE2</li>
        <li>Initiation à la Langue des Signes Française (LSF)</li>
      </ul>

      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Le jardinage, les sorties pédagogiques, les projets culturels, sportifs et artistiques, ainsi
        qu&apos;un stage de natation d&apos;une semaine pour chaque classe, complètent les apprentissages en
        classe et développent la curiosité, l&apos;autonomie et le sens des responsabilités.
      </p>

      {/* Vie scolaire et spirituelle — sticky image, scrolling text */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Vie scolaire et spirituelle
      </h2>
      <div className={styles.wrapper}>
        <div className={styles.imageCol}>
          <div className={styles.mainImage}>
            <Image
              src={galleryPhotos[1].src}
              alt={galleryPhotos[1].alt}
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className={styles.thumbRow}>
            <div className={styles.thumb}>
              <Image
                src={galleryPhotos[0].src}
                alt={galleryPhotos[0].alt}
                fill
                sizes="(max-width: 768px) 50vw, 195px"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
        <div className={styles.textCol}>
          <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
            Notre aumônerie est animée par l&apos;aumônier Elie Brown Buhire, qui accompagne les élèves
            tout au long de l&apos;année. Chaque lundi, de 8h30 à 11h, les élèves participent à un temps de
            chapelle par cycle — chants, récits bibliques, réflexion et prière.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            À partir de 11h, le pasteur assure une permanence d&apos;écoute ouverte aux élèves, aux familles
            et au personnel, dans le respect des convictions de chacun.
          </p>
        </div>
      </div>

      {/* Horaires & restauration */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Horaires & restauration
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Lundi – Jeudi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h15 – 12h15<br />Après-midi : 13h30 – 16h30</p>
        </div>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Vendredi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h15 – 12h15</p>
        </div>
      </div>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Les enseignements sont répartis sur 24 heures hebdomadaires, conformément aux programmes de
        l&apos;Éducation nationale. Une heure supplémentaire est consacrée à l&apos;enseignement des valeurs
        bibliques.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Les repas ovo-lacto-végétariens sont préparés sur place par notre équipe de cuisine qualifiée,
        variés et équilibrés, en cohérence avec les principes de santé et les valeurs éducatives de
        notre projet d&apos;établissement.
      </p>

      {/* Temps forts */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Les temps forts de l&apos;année
      </h2>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: '2', marginBottom: '3rem' }}>
        <li>Deux semaines d&apos;emphase spirituelle (novembre et mars)</li>
        <li>Une journée « Sans cartable »</li>
        <li>Une journée sportive inter-écoles La Persévérance</li>
        <li>Le concert et la fête de fin d&apos;année</li>
        <li>Des sorties pédagogiques tout au long de l&apos;année</li>
        <li>Des projets culturels, sportifs, artistiques et solidaires</li>
      </ul>

      {/* Tarifs */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Tarifs et modalités de paiement
      </h2>
      <div style={{ overflowX: 'auto', marginBottom: '1rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: 'var(--color-teal)', color: '#fff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-condensed)', fontWeight: 700 }}>Rubrique</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Montant</th>
            </tr>
          </thead>
          <tbody>
            {[
              { rubrique: 'Frais de scolarité', montant: '1 550 € à 2 200 € / an' },
              { rubrique: 'Restauration scolaire', montant: '415 € à 510 € / an (selon le quotient familial)' },
              { rubrique: 'Frais administratifs', montant: '121,50 € à 255,50 € / an' },
              { rubrique: 'Prestations obligatoires', montant: '23 € à 72 € / an' },
              { rubrique: 'Mode de paiement', montant: 'Virement · Chèque · Espèces' },
              { rubrique: 'Réduction familiale', montant: 'À partir du 3ᵉ enfant inscrit' },
            ].map((row, i) => (
              <tr key={row.rubrique} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff', borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-navy)' }}>{row.rubrique}</td>
                <td style={{ padding: '0.75rem 1rem' }}>{row.montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-text-muted)', fontSize: '0.9rem' }}>
        Pour connaître le détail des tarifs par niveau de classe, n&apos;hésitez pas à contacter le
        secrétariat ou à consulter la grille tarifaire disponible auprès de l&apos;établissement.
      </p>

      {/* Inscriptions */}
      <h2 id="inscription" style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem', scrollMarginTop: '100px' }}>
        Inscriptions
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Le dossier d&apos;inscription est disponible au secrétariat. Une fois complété, il devra être
        déposé avec les pièces justificatives demandées. Pour toute demande de renseignements ou pour
        prendre rendez-vous, notre équipe se tient à votre disposition.
      </p>
      {/* NOTE (Michael): unlike Baillif/Marie-Galante, there's no fiche-inscription PDF
          on file for Duportail yet, so no download button here — add one once a file
          exists, following the same pattern:
          <a href="/documents/duportail/fiche-inscription-duportail-2026-2027.pdf" download>...</a> */}

      {/* Fournitures scolaires */}
      <h2 id="fournitures" style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem', scrollMarginTop: '100px' }}>
        Listes de fournitures scolaires 2026–2027
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Choisissez la classe de votre enfant pour télécharger uniquement la liste qui le concerne.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
        {supplyLists.map(item => (
          <a
            key={item.file}
            href={`/documents/duportail/${item.file}`}
            download
            style={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '0.35rem', textAlign: 'center',
              background: '#f0f7f9', border: '1px solid #dceaee', borderRadius: '8px',
              padding: '1rem 0.75rem', textDecoration: 'none',
              borderTop: '3px solid var(--color-teal)',
            }}
          >
            <span style={{ fontFamily: 'var(--font-condensed)', fontWeight: 700, color: 'var(--color-navy)', fontSize: '1rem' }}>
              {item.level}
            </span>
            <span style={{ fontSize: '0.75rem', color: 'var(--color-teal)', fontWeight: 600 }}>
              Télécharger PDF
            </span>
          </a>
        ))}
      </div>

      {/* Espace Parents */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Espace Parents
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Grâce à{' '}
        <a href="https://www.ecoledirecte.com/" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--color-teal)', fontWeight: 600 }}>
          École Directe
        </a>
        , les familles peuvent suivre la scolarité de leur enfant, consulter les informations de
        l&apos;établissement, communiquer avec l&apos;équipe éducative et accéder aux documents importants.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
        Le règlement intérieur, remis en début d&apos;année scolaire, définit les règles de vie de
        l&apos;établissement et sera disponible en téléchargement prochainement.
      </p>

      {/* Contact */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Contact et accès
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Adresse</p>
          <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            Chemin de Grande Rivière à Goyaves<br />
            97115 Sainte-Rose<br />
            Guadeloupe
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Téléphone & courriel</p>
          <p style={{ lineHeight: 1.8 }}>
            <a href="tel:+590590225004" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>05 90 22 50 04</a><br />
            <a href="tel:+590691244442" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>06 91 24 44 42</a><br />
            <a href="mailto:laperseverance97115@wanadoo.fr" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>laperseverance97115@wanadoo.fr</a>
          </p>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '3rem' }}>
        <iframe
          src="https://www.google.com/maps?q=16.2596898,-61.7002293&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Carte — École La Persévérance de Duportail"
        />
      </div>

    </main>
  );
}
