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
