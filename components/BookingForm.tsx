'use client';

import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import { fr } from 'date-fns/locale';

type Slot = string; // ISO date string

export default function BookingForm() {
  const [slots, setSlots] = useState<Slot[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<string>('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [loadingSlots, setLoadingSlots] = useState(true);

  useEffect(() => {
    fetch('/api/slots')
      .then((r) => r.json())
      .then((data) => setSlots(data.slots ?? []))
      .catch(() => setSlots([]))
      .finally(() => setLoadingSlots(false));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedSlot) return;
    setStatus('loading');

    const dt = parseISO(selectedSlot);
    const date = format(dt, 'yyyy-MM-dd');
    const time = format(dt, 'HH:mm');

    try {
      const res = await fetch('/api/book', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, date, time }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-10 text-center">
        <p className="font-cormorant text-3xl text-sage-700 mb-3">Réservation envoyée !</p>
        <p className="text-stone-500">
          Votre demande a bien été transmise. Je vous confirmerai le rendez-vous sous 24h.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Slot picker */}
      <div>
        <label className="block text-sm text-stone-600 mb-3">Choisissez un créneau</label>
        {loadingSlots ? (
          <p className="text-stone-400 text-sm">Chargement des disponibilités...</p>
        ) : slots.length === 0 ? (
          <p className="text-stone-400 text-sm">Aucun créneau disponible pour le moment.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-60 overflow-y-auto pr-1">
            {slots.map((slot) => {
              const dt = parseISO(slot);
              return (
                <button
                  key={slot}
                  type="button"
                  onClick={() => setSelectedSlot(slot)}
                  className={`text-xs py-2 px-3 rounded-lg border transition-colors ${
                    selectedSlot === slot
                      ? 'bg-sage-600 text-white border-sage-600'
                      : 'bg-white border-beige-300 text-stone-600 hover:border-sage-400'
                  }`}
                >
                  <span className="block font-medium">{format(dt, 'EEE d MMM', { locale: fr })}</span>
                  <span className="block">{format(dt, 'HH:mm')}</span>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Personal info */}
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">Prénom & Nom</label>
          <input type="text" name="name" value={form.name} onChange={handleChange} className="input-field" required />
        </div>
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">Email</label>
          <input type="email" name="email" value={form.email} onChange={handleChange} className="input-field" required />
        </div>
      </div>
      <div>
        <label className="block text-sm text-stone-600 mb-1.5">Téléphone (optionnel)</label>
        <input type="tel" name="phone" value={form.phone} onChange={handleChange} className="input-field" />
      </div>
      <div>
        <label className="block text-sm text-stone-600 mb-1.5">Message (optionnel)</label>
        <textarea name="message" value={form.message} onChange={handleChange} rows={3} className="input-field resize-none" />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading' || !selectedSlot}
        className="btn-primary w-full text-center disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'loading' ? 'Envoi...' : 'Confirmer la demande'}
      </button>
    </form>
  );
}
