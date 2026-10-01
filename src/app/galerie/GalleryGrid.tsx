'use client';

import { useMemo, useState } from 'react';
import LightboxImage from '@/components/LightboxImage';
import styles from './GalleryGrid.module.css';
import type { GalleryPhoto } from './photos';

type Props = {
  photos: GalleryPhoto[];
};

const ALL = 'Toutes les écoles';

export default function GalleryGrid({ photos }: Props) {
  const schools = useMemo(() => {
    const seen = new Set<string>();
    const list: string[] = [];
    for (const photo of photos) {
      if (!seen.has(photo.school)) {
        seen.add(photo.school);
        list.push(photo.school);
      }
    }
    return list;
  }, [photos]);

  const [active, setActive] = useState<string>(ALL);

  const visible = active === ALL ? photos : photos.filter((photo) => photo.school === active);

  return (
    <div>
      <div className={styles.filters}>
        <button
          type="button"
          className={active === ALL ? styles.filterActive : styles.filter}
          onClick={() => setActive(ALL)}
        >
          {ALL}
        </button>
        {schools.map((school) => (
          <button
            key={school}
            type="button"
            className={active === school ? styles.filterActive : styles.filter}
            onClick={() => setActive(school)}
          >
            {school}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className={styles.empty}>Aucune photo pour le moment.</p>
      ) : (
        <div className={styles.grid}>
          {visible.map((photo) => (
            <LightboxImage key={photo.src} src={photo.src} alt={photo.alt} className={styles.thumb} />
          ))}
        </div>
      )}
    </div>
  );
}
