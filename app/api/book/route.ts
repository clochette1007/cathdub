import { NextRequest, NextResponse } from 'next/server';
import { createCalendarEvent } from '@/lib/calendar';
import { sendBookingConfirmation } from '@/lib/resend';

export const runtime = 'nodejs';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time, message } = body;

    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: 'Champs requis manquants.' }, { status: 400 });
    }

    // Create calendar event (graceful fallback if Google not configured)
    await createCalendarEvent({ name, email, date, time, message });

    // Send confirmation email (graceful fallback if Resend not configured)
    await sendBookingConfirmation({ name, email, date, time });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('POST /api/book error:', error);
    return NextResponse.json({ error: 'Erreur lors de la réservation.' }, { status: 500 });
  }
}
