import { verifySolution } from 'altcha-lib';
import { NextRequest, NextResponse } from 'next/server';

const SCHOOL_EMAILS: Record<string, string> = {
    baillif: process.env.CONTACT_EMAIL_BAILLIF || '',
    duportail: process.env.CONTACT_EMAIL_DUPORTAIL || '',
    'marie-galante': process.env.CONTACT_EMAIL_MARIE_GALANTE || '',
    abymes: process.env.CONTACT_EMAIL_ABYMES || '',
};

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { type, nom, prenom, email, telephone, ecoles, domaine, niveau, discipline, message, altcha } = body;

        const hmacKey = process.env.ALTCHA_HMAC_KEY || 'dev-hmac-key-change-in-production';
        const valid = await verifySolution(altcha, hmacKey);
        if (!valid) {
            return NextResponse.json({ error: 'Vérification échouée.' }, { status: 400 });
        }

        const subject = `[${type}] Message de ${prenom} ${nom}`;
        let htmlContent = `
        <p><strong>Type :</strong> ${type}</p>
        <p><strong>Nom :</strong> ${prenom} ${nom}</p>
        <p><strong>Email :</strong> ${email}</p>
        `;
        if (telephone) htmlContent += `<p><strong>Téléphone :</strong> ${telephone}</p>`;
        if (ecoles?.length) htmlContent += `<p><strong>École(s) :</strong> ${ecoles.join(', ')}</p>`;
        if (domaine) htmlContent += `<p><strong>Domaine :</strong> ${domaine}</p>`;
        if (niveau) htmlContent += `<p><strong>Niveau(x) :</strong> ${niveau}</p>`;
        if (discipline) htmlContent += `<p><strong>Discipline :</strong> ${discipline}</p>`;
        if (message) htmlContent += `<p><strong>Message :</strong><br>${message.replace(/\n/g, '<br>')}</p>`;

        let toEmail = process.env.CONTACT_EMAIL_GENERAL || '';
        if (ecoles?.length === 1 && SCHOOL_EMAILS[ecoles[0]]) {
            toEmail = SCHOOL_EMAILS[ecoles[0]];
        }

        const response = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': process.env.BREVO_API_KEY || '',
            },
            body: JSON.stringify({
                sender: { name: 'Écoles Persévérance', email: process.env.CONTACT_SENDER_EMAIL },
                to: [{ email: toEmail }],
                replyTo: { email },
                subject,
                htmlContent,
            }),
        });

        if (!response.ok) {
            const err = await response.json();
            console.error('Brevo error:', err);
            return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (err) {
        console.error('Contact route error:', err);
        return NextResponse.json({ error: 'Erreur serveur.' }, { status: 500 });
    }
}
