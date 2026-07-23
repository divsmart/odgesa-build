import Image from 'next/image';
import styles from './StickyMedia.module.css';

const galleryPhotos = [
  { src: '/images/baillif/ecole-baillif-exterieur.jpg', alt: 'École La Persévérance de Baillif — façade' },
  { src: '/images/baillif/ecole-baillif-classe.jpg', alt: 'Salle de classe — École La Persévérance de Baillif' },
];

export default function Page() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>
          Baillif
        </p>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-teal)', marginBottom: '1rem', lineHeight: 1.1 }}>
          École La Persévérance<br />de Baillif
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.8, color: 'var(--color-text-muted)', maxWidth: '720px' }}>
          Située au 338 route de Cadet à Baillif, l&apos;école La Persévérance accueille les enfants de la Toute Petite Section au CM2 dans un cadre chrétien, bienveillant et exigeant, tourné vers le développement de futurs citoyens engagés.
        </p>
      </div>

      {/* Quick facts bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { label: 'Niveaux', value: 'TPS – CM2' },
          { label: 'Semaine', value: '25h30' },
          { label: 'Repas', value: 'Ovo-lacto-végétarien' },
          { label: 'Écolage', value: '1 500 € – 2 000 €' },
        ].map(stat => (
          <div key={stat.label} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '0.85rem 1.25rem', borderLeft: '3px solid var(--color-teal)', minWidth: '110px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.2rem' }}>{stat.label}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Mission & Vision */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
        Notre mission
      </h2>
      <p style={{ fontStyle: 'italic', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '1rem' }}>
        Être une école chrétienne de référence dans le domaine de la transition écologique, contribuant à bâtir pour tous, un avenir durable et équitable.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Offrir une formation holistique, s&apos;appuyant sur les valeurs chrétiennes, afin de préparer les élèves à devenir les leaders de demain et des citoyens engagés et conscients de leur environnement.
      </p>

      {/* Direction */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Direction
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        L&apos;établissement est placé sous la direction de Mme Vanessa Hatchi pour l&apos;année scolaire 2026–2027.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { role: 'Direction', nom: 'Vanessa Hatchi' },
        ].map(p => (
          <div key={p.nom} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '0.85rem 1rem', borderTop: '3px solid var(--color-teal)' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.25rem' }}>{p.role}</p>
            <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.95rem' }}>{p.nom}</p>
          </div>
        ))}
      </div>

      {/* Vie scolaire & spirituelle — sticky image, scrolling text */}
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
            L&apos;enseignement des valeurs bibliques fait partie intégrante de la vie scolaire : au quotidien dans chaque classe, lors d&apos;un service de chapelle hebdomadaire, et à l&apos;occasion de deux semaines d&apos;emphase spirituelle réparties dans l&apos;année.
          </p>
          <p style={{ lineHeight: 1.8 }}>
            Le port de l&apos;uniforme est obligatoire pour tous les élèves, dans un esprit d&apos;égalité et de sentiment d&apos;appartenance à la communauté scolaire.
          </p>
        </div>
      </div>

      {/* Horaires & restauration */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Horaires & restauration
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Lundi, Mardi, Jeudi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h00 – 12h30<br />Après-midi : 13h45 – 16h15</p>
        </div>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Vendredi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h00 – 12h30</p>
        </div>
      </div>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        La restauration scolaire propose des repas ovo-lacto-végétariens. Service de 11h20 à 12h15 pour la maternelle, et de 12h30 à 13h10 pour l&apos;élémentaire.
      </p>

      {/* Tarifs */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Tarifs et modalités de paiement
      </h2>

      <p style={{ lineHeight: 1.8, marginBottom: '0.75rem', fontWeight: 600, color: 'var(--color-navy)' }}>
        Contribution familiale annuelle
      </p>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: 'var(--color-teal)', color: '#fff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-condensed)', fontWeight: 700 }}>Niveau</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Contribution annuelle</th>
            </tr>
          </thead>
          <tbody>
            {[
              { niveau: 'Maternelle (TPS)', montant: '2 000 €' },
              { niveau: 'PS au CM2', montant: '1 500 €' },
            ].map((row, i) => (
              <tr key={row.niveau} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff', borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-navy)' }}>{row.niveau}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{row.montant}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ lineHeight: 1.8, marginBottom: '0.75rem', fontWeight: 600, color: 'var(--color-navy)' }}>
        Demi-pension — selon le revenu fiscal de référence
      </p>
      <div style={{ overflowX: 'auto', marginBottom: '1.5rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: 'var(--color-teal)', color: '#fff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-condensed)', fontWeight: 700 }}>Tarif</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>Montant annuel</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left' }}>Tranche de revenu fiscal de référence</th>
            </tr>
          </thead>
          <tbody>
            {[
              { tarif: 'Tarif 1', montant: '320 €', tranche: 'Inférieur à 11 000 €' },
              { tarif: 'Tarif 2', montant: '370 €', tranche: 'Entre 11 001 € et 28 000 €' },
              { tarif: 'Tarif 3', montant: '420 €', tranche: 'Supérieur à 28 000 €' },
            ].map((row, i) => (
              <tr key={row.tarif} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff', borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-navy)' }}>{row.tarif}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{row.montant}</td>
                <td style={{ padding: '0.75rem 1rem' }}>{row.tranche}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p style={{ lineHeight: 1.8, marginBottom: '0.5rem', color: 'var(--color-text-muted)' }}>
        Frais d&apos;inscription ou de réinscription : 90 € / an (non remboursables). Réduction de 10% par enfant à partir du 3e enfant inscrit simultanément ; réduction de 5% en cas de règlement intégral au mois de septembre.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
        Prestations en option : espagnol (CM2) et Langue des Signes Française — 10 € / mois chacune (réduction de 50% sur la seconde prestation pour les élèves de CM2 inscrits aux deux) ; club de scrabble — 5 € / mois ; location de couchette en maternelle (obligatoire) — 20 €.
      </p>

      {/* Inscriptions */}
      <h2 id="inscription" style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem', scrollMarginTop: '100px' }}>
        Inscriptions
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Les dossiers d&apos;inscription sont disponibles en téléchargement ci-dessous. Une fois complétés, ils sont à remettre directement à l&apos;établissement. Pour toute première inscription ou demande d&apos;information, nous vous invitons à prendre rendez-vous par téléphone.
      </p>
      <a
        href="/documents/baillif/fiche-inscription-baillif-2026-2027.pdf"
        download
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          background: 'var(--color-orange)', color: '#fff', fontWeight: 700,
          fontFamily: 'var(--font-condensed)', fontSize: '0.95rem',
          padding: '0.75rem 1.5rem', borderRadius: '6px', textDecoration: 'none',
          marginBottom: '3rem',
        }}
      >
        Télécharger la fiche d&apos;inscription 2026–2027
      </a>

      {/* Fournitures scolaires — lists not yet available */}
      <h2 id="fournitures" style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem', scrollMarginTop: '100px' }}>
        Listes de fournitures scolaires 2026–2027
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem', color: 'var(--color-text-muted)' }}>
        Les listes de fournitures par classe seront mises en ligne prochainement.
      </p>

      {/* Documents */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Documents
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Retrouvez ci-dessous les documents officiels de l&apos;établissement pour l&apos;année scolaire 2026–2027.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '0.75rem', marginBottom: '3rem' }}>
        {[
          { label: 'Règlement intérieur', file: 'reglement-interieur-baillif-2026-2027.pdf' },
          { label: 'Convention de scolarisation & règlement financier', file: 'convention-reglement-financier-baillif-2026-2027.pdf' },
          { label: "Fiche d'inscription", file: 'fiche-inscription-baillif-2026-2027.pdf' },
          { label: "Fiche d'urgence & droit à l'image", file: 'fiche-urgence-droit-image-baillif-2026-2027.pdf' },
        ].map(doc => (
          <a
            key={doc.file}
            href={`/documents/baillif/${doc.file}`}
            download
            style={{
              display: 'flex', alignItems: 'center', gap: '0.6rem',
              background: '#f0f7f9', border: '1px solid #dceaee', borderRadius: '8px',
              padding: '0.85rem 1rem', textDecoration: 'none',
              borderLeft: '3px solid var(--color-teal)',
            }}
          >
            <span style={{ fontSize: '1.1rem', lineHeight: 1 }}>📄</span>
            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-navy)', lineHeight: 1.4 }}>
              {doc.label}
            </span>
          </a>
        ))}
      </div>

      {/* Contact */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Contact et accès
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Adresse</p>
          <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            338 route de Cadet<br />
            97123 Baillif<br />
            Guadeloupe
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Téléphone & courriel</p>
          <p style={{ lineHeight: 1.8 }}>
            <a href="tel:+590590801570" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>05 90 80 15 70</a><br />
            <a href="tel:+590690473642" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>06 90 47 36 42</a><br />
            <a href="mailto:laperseverance97123@orange.fr" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>laperseverance97123@orange.fr</a>
          </p>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '3rem' }}>
        <iframe
          src="https://www.google.com/maps?q=338+route+de+Cadet,+97123+Baillif,+Guadeloupe&output=embed"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Carte — École La Persévérance de Baillif"
        />
      </div>

    </main>
  );
}
