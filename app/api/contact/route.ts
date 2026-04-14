import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    await sendContactEmail({ name, email, message });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST /api/contact error:', error);
    return NextResponse.json({ error: 'Erreur lors de l\'envoi.' }, { status: 500 });
  }
}
