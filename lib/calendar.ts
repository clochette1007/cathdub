// Node.js runtime only — do not import in edge functions
import { google } from 'googleapis';
import { addHours, format, parseISO } from 'date-fns';

type BookingPayload = {
  name: string;
  email: string;
  date: string; // ISO date string YYYY-MM-DD
  time: string; // HH:mm
  message?: string;
};

function getCalendarClient() {
  const serviceAccountRaw = process.env.GOOGLE_SERVICE_ACCOUNT;
  const calendarId = process.env.GOOGLE_CALENDAR_ID;

  if (!serviceAccountRaw || !calendarId) return null;

  try {
    const credentials = JSON.parse(serviceAccountRaw);
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });
    return { calendar: google.calendar({ version: 'v3', auth }), calendarId };
  } catch (err) {
    console.warn('calendar.ts: Invalid GOOGLE_SERVICE_ACCOUNT JSON', err);
    return null;
  }
}

export async function getAvailableSlots(): Promise<string[]> {
  const client = getCalendarClient();
  if (!client) {
    // Return placeholder slots when Google is not configured
    return generatePlaceholderSlots();
  }

  try {
    const now = new Date();
    const twoWeeksLater = addHours(now, 24 * 14);

    const res = await client.calendar.events.list({
      calendarId: client.calendarId,
      timeMin: now.toISOString(),
      timeMax: twoWeeksLater.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
    });

    const busySlots = (res.data.items ?? []).map((e) => e.start?.dateTime ?? '');

    // Generate available 1h slots Mon–Sat 9h–18h excluding busy ones
    const available: string[] = [];
    for (let day = 1; day <= 14; day++) {
      const d = addHours(now, 24 * day);
      const dayOfWeek = d.getDay();
      if (dayOfWeek === 0) continue; // skip Sunday
      for (let hour = 9; hour < 18; hour++) {
        const slotStart = new Date(d);
        slotStart.setHours(hour, 0, 0, 0);
        const iso = slotStart.toISOString();
        if (!busySlots.some((b) => b.startsWith(iso.slice(0, 13)))) {
          available.push(iso);
        }
      }
    }
    return available;
  } catch (err) {
    console.warn('getAvailableSlots error:', err);
    return generatePlaceholderSlots();
  }
}

export async function createCalendarEvent(payload: BookingPayload): Promise<void> {
  const client = getCalendarClient();
  if (!client) {
    console.warn('createCalendarEvent: Google Calendar not configured, skipping.');
    return;
  }

  try {
    const startDateTime = parseISO(`${payload.date}T${payload.time}:00`);
    const endDateTime = addHours(startDateTime, 1);

    await client.calendar.events.insert({
      calendarId: client.calendarId,
      requestBody: {
        summary: `RDV — ${payload.name}`,
        description: `Email: ${payload.email}\n${payload.message ?? ''}`.trim(),
        start: { dateTime: startDateTime.toISOString(), timeZone: 'Europe/Paris' },
        end: { dateTime: endDateTime.toISOString(), timeZone: 'Europe/Paris' },
        attendees: [{ email: payload.email, displayName: payload.name }],
      },
    });
  } catch (err) {
    console.warn('createCalendarEvent error:', err);
  }
}

function generatePlaceholderSlots(): string[] {
  const slots: string[] = [];
  const now = new Date();
  for (let day = 1; day <= 7; day++) {
    const d = new Date(now);
    d.setDate(d.getDate() + day);
    if (d.getDay() === 0) continue;
    for (const hour of [9, 10, 11, 14, 15, 16]) {
      const s = new Date(d);
      s.setHours(hour, 0, 0, 0);
      slots.push(s.toISOString());
    }
  }
  return slots;
}
