import { Resend } from 'resend';

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const FROM_EMAIL = process.env.FROM_EMAIL ?? 'noreply@cathdub.fr';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL ?? 'contact@cathdub.fr';

type BookingEmailPayload = {
  name: string;
  email: string;
  date: string;
  time: string;
};

type ContactEmailPayload = {
  name: string;
  email: string;
  message: string;
};

export async function sendBookingConfirmation(payload: BookingEmailPayload): Promise<void> {
  if (!resend) {
    console.warn('sendBookingConfirmation: RESEND_API_KEY not set, skipping email.');
    return;
  }
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: payload.email,
      bcc: ADMIN_EMAIL,
      subject: 'Confirmation de votre rendez-vous',
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:auto;color:#3a3a3a">
          <h2 style="color:#3d623d">Votre rendez-vous est confirm\u00e9</h2>
          <p>Bonjour ${payload.name},</p>
          <p>Votre s\u00e9ance est planifi\u00e9e le <strong>${payload.date}</strong> \u00e0 <strong>${payload.time}</strong>.</p>
          <p>Je vous enverrai un rappel 24h avant. N'h\u00e9sitez pas \u00e0 me contacter en cas de besoin.</p>
          <p style="margin-top:32px">\u00c0 bient\u00f4t,<br/><em>CathDub</em></p>
        </div>
      `,
    });
  } catch (err) {
    console.warn('sendBookingConfirmation error:', err);
  }
}

export async function sendContactEmail(payload: ContactEmailPayload): Promise<void> {
  if (!resend) {
    console.warn('sendContactEmail: RESEND_API_KEY not set, skipping email.');
    return;
  }
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: ADMIN_EMAIL,
      reply_to: payload.email,
      subject: `Message de ${payload.name} via le site`,
      html: `
        <div style="font-family:Georgia,serif;max-width:520px;margin:auto;color:#3a3a3a">
          <h2 style="color:#3d623d">Nouveau message</h2>
          <p><strong>De :</strong> ${payload.name} (${payload.email})</p>
          <p><strong>Message :</strong></p>
          <blockquote style="border-left:3px solid #9bbc9b;padding-left:12px;color:#555">${payload.message}</blockquote>
        </div>
      `,
    });
  } catch (err) {
    console.warn('sendContactEmail error:', err);
  }
}
