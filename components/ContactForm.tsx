'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-sage-50 border border-sage-200 rounded-2xl p-8 text-center">
        <p className="font-cormorant text-2xl text-sage-700 mb-2">Message envoyé !</p>
        <p className="text-stone-500 text-sm">Je vous répondrai dans les plus brefs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">Prénom & Nom</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-stone-600 mb-1.5">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="input-field"
            required
          />
        </div>
      </div>
      <div>
        <label className="block text-sm text-stone-600 mb-1.5">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          className="input-field resize-none"
          required
        />
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
      )}
      <button type="submit" disabled={status === 'loading'} className="btn-primary w-full text-center">
        {status === 'loading' ? 'Envoi en cours...' : 'Envoyer le message'}
      </button>
    </form>
  );
}
