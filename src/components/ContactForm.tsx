'use client';

import { useState } from 'react';
import styles from './ContactForm.module.css';

type FormType = 'general' | 'benevol' | 'candidature' | '';

const ECOLES = [
  { value: 'baillif', label: 'La Persévérance Baillif' },
  { value: 'duportail', label: 'La Persévérance Duportail / Sainte-Rose' },
  { value: 'marie-galante', label: 'La Persévérance Marie-Galante' },
  { value: 'abymes', label: 'Cité Scolaire J. Bigord Les Abymes' },
];

const DOMAINES = [
  'Enseignement',
  'Administratif',
  'Technique / Maintenance',
  'Entretien',
  'Transport',
  'Communication',
  'Autre',
];

export default function ContactForm() {
  const [type, setType] = useState<FormType>('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [telephone, setTelephone] = useState('');
  const [ecoles, setEcoles] = useState<string[]>([]);
  const [domaine, setDomaine] = useState('');
  const [niveau, setNiveau] = useState('');
  const [discipline, setDiscipline] = useState('');
  const [message, setMessage] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const toggleEcole = (value: string) => {
    setEcoles(prev =>
      prev.includes(value) ? prev.filter(e => e !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          type, nom, prenom, email, telephone,
          ecoles, domaine, niveau, discipline, message,
          _hp: (document.getElementById('_hp') as HTMLInputElement)?.value || '',
          _t: Number((document.getElementById('_t') as HTMLInputElement)?.value || 0),
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        setError(data.error || 'Une erreur est survenue.');
      }
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className={styles.container}>
        <div className={styles.success}>
          Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contactez-nous</h1>
      <p className={styles.subtitle}>
        Remplissez le formulaire ci-dessous et nous vous répondrons dans les meilleurs délais.
      </p>

      <form className={styles.form} onSubmit={handleSubmit}>

        {/* Honeypot */}
        <input id="_hp" name="_hp" type="text" defaultValue="" style={{ position: 'absolute', left: '-9999px' }} tabIndex={-1} autoComplete="off" />
        {/* Time trap */}
        <input id="_t" name="_t" type="hidden" defaultValue={String(Date.now())} />

        <div className={styles.field}>
          <label className={styles.label} htmlFor="type">Type de demande *</label>
          <select id="type" className={styles.select} value={type}
            onChange={e => setType(e.target.value as FormType)} required>
            <option value="">-- Sélectionnez --</option>
            <option value="general">Demande générale</option>
            <option value="benevol">Bénévolat</option>
            <option value="candidature">Candidature enseignement</option>
          </select>
        </div>

        {type && (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="prenom">Prénom *</label>
              <input id="prenom" className={styles.input} type="text" value={prenom}
                onChange={e => setPrenom(e.target.value)} required />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="nom">Nom *</label>
              <input id="nom" className={styles.input} type="text" value={nom}
                onChange={e => setNom(e.target.value)} required />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email *</label>
              <input id="email" className={styles.input} type="email" value={email}
                onChange={e => setEmail(e.target.value)} required />
            </div>
          </>
        )}

        {(type === 'benevol' || type === 'candidature') && (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="telephone">Téléphone</label>
              <input id="telephone" className={styles.input} type="tel" value={telephone}
                onChange={e => setTelephone(e.target.value)} />
            </div>

            <div className={styles.field}>
              <label className={styles.label}>École(s) d'intérêt</label>
              <div className={styles.checkboxGroup}>
                {ECOLES.map(ecole => (
                  <label key={ecole.value} className={styles.checkboxLabel}>
                    <input type="checkbox" checked={ecoles.includes(ecole.value)}
                      onChange={() => toggleEcole(ecole.value)} />
                    {ecole.label}
                  </label>
                ))}
              </div>
            </div>
          </>
        )}

        {type === 'benevol' && (
          <div className={styles.field}>
            <label className={styles.label} htmlFor="domaine">Domaine de compétence</label>
            <select id="domaine" className={styles.select} value={domaine}
              onChange={e => setDomaine(e.target.value)}>
              <option value="">-- Sélectionnez --</option>
              {DOMAINES.map(d => <option key={d} value={d}>{d}</option>)}
            </select>
          </div>
        )}

        {type === 'candidature' && (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="niveau">Niveau(x) visé(s)</label>
              <input id="niveau" className={styles.input} type="text" value={niveau}
                onChange={e => setNiveau(e.target.value)} placeholder="ex. CP, CE1, CM2..." />
            </div>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="discipline">Discipline</label>
              <input id="discipline" className={styles.input} type="text" value={discipline}
                onChange={e => setDiscipline(e.target.value)} placeholder="ex. Mathématiques, Anglais..." />
            </div>
          </>
        )}

        {type && (
          <>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea id="message" className={styles.textarea} value={message}
                onChange={e => setMessage(e.target.value)} />
            </div>

            {error && <div className={styles.error}>{error}</div>}

            <button type="submit" className={styles.submit} disabled={submitting}>
              {submitting ? 'Envoi en cours...' : 'Envoyer'}
            </button>
          </>
        )}

      </form>
    </div>
  );
}
