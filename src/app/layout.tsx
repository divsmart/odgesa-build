import type { Metadata } from 'next';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import './globals.css';

export const metadata: Metadata = {
  title: {
    template: '%s — ODGESA',
    default: 'ODGESA — Réseau scolaire adventiste de Guadeloupe',
  },
  description:
  'Quatre établissements chrétiens adventistes en Guadeloupe — Baillif, Duportail, ' +
  'Marie-Galante et la Cité Scolaire J.Bigord Les Abymes. ' +
  'Une pédagogie chrétienne intégrale, une alimentation saine, le plein épanouissement de l\'enfant.',
  robots: { index: false, follow: false },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/images/favicon/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/images/favicon/icon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/images/favicon/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/images/favicon/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/images/favicon/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/images/favicon/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
    <body>
    <NavBar />
    <main>{children}</main>
    <Footer />
    <CookieBanner />
    </body>
    </html>
  );
}
