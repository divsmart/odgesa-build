import ContactForm from '@/components/ContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Écoles Persévérance Guadeloupe',
  description: 'Contactez le réseau des écoles adventistes La Persévérance en Guadeloupe.',
};

export default function Page() {
  return (
    <main>
    <ContactForm />
    </main>
  );
}
