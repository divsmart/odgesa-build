import GalleryGrid from './GalleryGrid';
import { photos } from './photos';

export default function Page() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '3rem 1.5rem' }}>
      <h1 style={{ marginBottom: '0.5rem' }}>Galerie</h1>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
        Un aperçu de la vie de nos écoles — filtrez par établissement.
      </p>
      <GalleryGrid photos={photos} />
    </section>
  );
}
