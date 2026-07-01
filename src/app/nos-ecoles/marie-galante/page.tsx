export default function Page() {
  return (
    <main style={{ maxWidth: '900px', margin: '0 auto', padding: 'clamp(3rem, 6vw, 5rem) clamp(1rem, 4vw, 2.5rem)' }}>

      {/* Header */}
      <div style={{ marginBottom: '2.5rem' }}>
        <p style={{ fontFamily: 'var(--font-condensed)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--color-orange)', marginBottom: '0.5rem' }}>
          Grand-Bourg · Marie-Galante
        </p>
        <h1 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: 'var(--color-teal)', marginBottom: '1rem', lineHeight: 1.1 }}>
          École La Persévérance<br />Antoine Moeson
        </h1>
        <p style={{ fontSize: 'clamp(1rem, 1.6vw, 1.15rem)', lineHeight: 1.8, color: 'var(--color-text-muted)', maxWidth: '720px' }}>
          Située à Grand-Bourg, au cœur de Marie-Galante, l&apos;école La Persévérance - Antoine Moeson accueille les enfants de la Petite Section au CM2 dans un environnement bienveillant, favorable à la réussite scolaire et au développement de chacun.
        </p>
      </div>

      {/* Quick facts bar */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { label: 'Niveaux', value: 'PS – CM2' },
          { label: 'Élèves', value: '61' },
          { label: 'Classes', value: '3' },
          { label: 'Fondée', value: '1992' },
        ].map(stat => (
          <div key={stat.label} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '0.85rem 1.25rem', borderLeft: '3px solid var(--color-teal)', minWidth: '110px' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.2rem' }}>{stat.label}</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--color-navy)' }}>{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Présentation */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Notre mission
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Notre établissement a pour mission d&apos;offrir une éducation de qualité, inspirée par les valeurs de l&apos;Éducation adventiste. Nous accompagnons chaque élève dans son développement intellectuel, physique, social et spirituel, en l&apos;encourageant à développer ses talents, son autonomie et le sens des responsabilités.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '0.75rem' }}>Notre établissement se distingue notamment par :</p>
      <ul style={{ paddingLeft: '1.25rem', lineHeight: 2, marginBottom: '3rem', color: 'var(--color-text)' }}>
        <li>l&apos;apprentissage de l&apos;anglais dès la maternelle</li>
        <li>un éveil musical proposé dès la Petite Section</li>
        <li>des activités de jardinage qui sensibilisent les élèves au respect de la nature, de l&apos;environnement et de la Création</li>
        <li>un accompagnement attentif permettant à chaque enfant de progresser à son rythme dans un climat de confiance et de respect</li>
      </ul>

      {/* Histoire */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Notre histoire
      </h2>
      <p style={{ fontStyle: 'italic', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '0.75rem' }}>
        Plus de 30 ans au service de l&apos;éducation à Marie-Galante
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        Fondée en 1992, l&apos;École primaire privée La Persévérance est née de la volonté d&apos;offrir aux familles de Marie-Galante une éducation de qualité fidèle à la vision chrétienne de l&apos;éducation. Les premiers élèves ont été accueillis en janvier 1993 sous la direction de Jean-Claude Souila, avec une classe unique réunissant huit enfants de Petite Section, Moyenne Section et Cours Préparatoire.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        En 2013, l&apos;établissement prend le nom d&apos;école La Persévérance - Antoine Moeson, en hommage à Antoine Moeson dont la générosité a permis l&apos;implantation de l&apos;école sur le terrain qu&apos;il a offert. Aujourd&apos;hui, notre école accueille 61 élèves répartis dans trois classes.
      </p>

      {/* Direction */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Direction et équipe éducative
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Sous la direction de Kathy Bernay, toute l&apos;équipe éducative partage la même ambition : permettre à chaque enfant de révéler ses talents, de développer son autonomie et de progresser sereinement tout au long de sa scolarité.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { role: 'Direction', nom: 'Kathy Bernay' },
          { role: 'Enseignante', nom: 'Nadia Bernay' },
          { role: 'Enseignante', nom: 'Elisabeth Coipel' },
          { role: 'Aide éducative', nom: 'Muriana Bias' },
          { role: 'Aide éducative', nom: 'Victoria Mathias' },
        ].map(p => (
          <div key={p.nom} style={{ background: '#f0f7f9', borderRadius: '8px', padding: '0.85rem 1rem', borderTop: '3px solid var(--color-teal)' }}>
            <p style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-teal)', marginBottom: '0.25rem' }}>{p.role}</p>
            <p style={{ fontWeight: 600, color: 'var(--color-navy)', fontSize: '0.95rem' }}>{p.nom}</p>
          </div>
        ))}
      </div>

      {/* Projet pédagogique */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '0.5rem' }}>
        Projet pédagogique 2025–2030
      </h2>
      <p style={{ fontStyle: 'italic', color: 'var(--color-orange)', fontWeight: 600, marginBottom: '1rem' }}>
        « Marie-Galante, mon île, ma responsabilité »
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '1.5rem' }}>
        Ce projet fédérateur invite les élèves à découvrir leur environnement, à développer leur sens des responsabilités et à devenir des citoyens engagés, autour de quatre grands axes :
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3rem' }}>
        {[
          { titre: 'Citoyenneté & engagement', desc: 'Encourager chaque élève à devenir un citoyen responsable, respectueux des autres et conscient de son rôle au sein de son école, sa famille et son île.' },
          { titre: 'Environnement & développement durable', desc: 'Sensibiliser aux gestes éco-responsables à travers des activités concrètes, apprendre à prendre soin de son cadre de vie.' },
          { titre: 'Patrimoine culturel', desc: 'Découvrir les richesses de Marie-Galante : histoire, traditions, musique, gastronomie, patrimoine et savoir-faire.' },
          { titre: 'Compétences transversales', desc: 'Renforcer l\'expression orale et écrite, le numérique, la recherche documentaire et le travail d\'équipe.' },
        ].map(axe => (
          <div key={axe.titre} style={{ background: '#f9fafb', border: '1px solid #e5e7eb', borderRadius: '8px', padding: '1rem', borderTop: '3px solid var(--color-orange)' }}>
            <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem', fontSize: '0.95rem' }}>{axe.titre}</p>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, color: 'var(--color-text-muted)' }}>{axe.desc}</p>
          </div>
        ))}
      </div>

      {/* Vie scolaire & spirituelle */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Vie scolaire et spirituelle
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem' }}>
        La dimension spirituelle fait naturellement partie de notre projet éducatif. Elle accompagne les élèves dans la découverte des valeurs chrétiennes telles que le respect, la bienveillance, le service, la gratitude et l&apos;espérance.
      </p>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Chaque semaine, les élèves participent à des moments de chapelle animés par l&apos;aumônier Roger Mathias — le lundi à partir de 8h et le vendredi à partir de 11h. Ces temps privilégiés invitent les enfants à réfléchir, chanter, prier et approfondir les enseignements bibliques dans un esprit d&apos;ouverture et de partage.
      </p>

      {/* Horaires & restauration */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Horaires & restauration
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Lundi – Jeudi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h00 – 12h30<br />Après-midi : 14h00 – 16h30</p>
        </div>
        <div style={{ background: '#f0f7f9', borderRadius: '8px', padding: '1rem 1.25rem' }}>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Vendredi</p>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>Matin : 8h00 – 12h30</p>
        </div>
      </div>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        La restauration scolaire propose des repas ovo-lacto-végétariens élaborés par un traiteur, en cohérence avec les valeurs éducatives de l&apos;établissement.
      </p>

      {/* Tarifs */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Tarifs et modalités de paiement
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '1rem', color: 'var(--color-text-muted)' }}>
        Règlement par virement bancaire, chèque ou espèces. Remise de 6% sur les frais d&apos;enseignement à partir du 3e enfant inscrit.
      </p>
      <div style={{ overflowX: 'auto', marginBottom: '3rem' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
          <thead>
            <tr style={{ background: 'var(--color-teal)', color: '#fff' }}>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'left', fontFamily: 'var(--font-condensed)', fontWeight: 700 }}>Frais</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>1 enfant</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>2 enfants</th>
              <th style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>3 enfants et +</th>
            </tr>
          </thead>
          <tbody>
            {[
              { frais: 'Frais d\'inscription', c1: '90 €', c2: '90 € / enfant', c3: '90 € / enfant' },
              { frais: 'Frais d\'enseignement (annuel)', c1: '1 400 €', c2: '2 800 €', c3: 'Remise 6%' },
              { frais: 'Frais de restauration (annuel)', c1: '600 €', c2: '1 200 €', c3: '600 € / enfant' },
            ].map((row, i) => (
              <tr key={row.frais} style={{ background: i % 2 === 0 ? '#f9fafb' : '#fff', borderBottom: '1px solid #e5e7eb' }}>
                <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--color-navy)' }}>{row.frais}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{row.c1}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{row.c2}</td>
                <td style={{ padding: '0.75rem 1rem', textAlign: 'center' }}>{row.c3}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Inscriptions */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Inscriptions
      </h2>
      <p style={{ lineHeight: 1.8, marginBottom: '3rem' }}>
        Les dossiers d&apos;inscription sont disponibles en téléchargement sur ce site. Une fois complétés, ils sont à remettre directement à l&apos;établissement. Pour toute première inscription ou demande d&apos;information, nous vous invitons à prendre rendez-vous par téléphone.
      </p>

      {/* Contact */}
      <h2 style={{ fontFamily: 'var(--font-condensed)', fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)', color: 'var(--color-teal)', marginBottom: '1rem' }}>
        Contact et accès
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Adresse</p>
          <p style={{ lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
            Passage des Braves<br />
            97112 Grand-Bourg<br />
            Marie-Galante – Guadeloupe
          </p>
        </div>
        <div>
          <p style={{ fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.5rem' }}>Téléphone</p>
          <p style={{ lineHeight: 1.8 }}>
            <a href="tel:+590690677517" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>+590 690 67 75 17</a><br />
            <a href="tel:+590590978165" style={{ color: 'var(--color-teal)', textDecoration: 'none' }}>+590 590 97 81 65</a>
          </p>
        </div>
      </div>

      {/* Google Maps */}
      <div style={{ borderRadius: '8px', overflow: 'hidden', marginBottom: '3rem' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3837.45841025882!2d-61.31970098952937!3d15.885037444279519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c6b55ff55536e59%3A0xef72af977cf5f6f0!2sEcole%20La%20Pers%C3%A9v%C3%A9rance%20Antoine%20MOESON!5e0!3m2!1sfr!2sfr!4v1782780280753!5m2!1sfr!2sfr"
          width="100%"
          height="400"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Carte — École La Persévérance Antoine Moeson"
        />
      </div>

    </main>
  );
}
