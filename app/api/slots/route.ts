import { NextResponse } from 'next/server';
import { getAvailableSlots } from '@/lib/calendar';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const slots = await getAvailableSlots();
    return NextResponse.json({ slots });
  } catch (error) {
    console.error('GET /api/slots error:', error);
    return NextResponse.json({ slots: [], error: 'Impossible de charger les créneaux.' }, { status: 200 });
  }
}
