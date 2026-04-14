'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function AdminContent() {
  const [password, setPassword] = useState('');
  const [isAuth, setIsAuth] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const showLogin = searchParams.get('login') === '1';

  useEffect(() => {
    // Check if already authenticated
    const checkAuth = async () => {
      const res = await fetch('/api/admin/check');
      if (res.ok) setIsAuth(true);
    };
    checkAuth();
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });
      if (res.ok) {
        setIsAuth(true);
        router.replace('/admin');
      } else {
        setError('Mot de passe incorrect.');
      }
    } catch {
      setError('Erreur réseau.');
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    await fetch('/api/admin/logout', { method: 'POST' });
    setIsAuth(false);
  };

  if (!isAuth) {
    return (
      <main className="min-h-screen bg-beige-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-beige-200 p-10 w-full max-w-sm">
          <h1 className="font-cormorant text-4xl text-stone-800 mb-2 text-center">Admin</h1>
          <p className="text-center text-stone-500 text-sm mb-8">Espace privé</p>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="input-field"
              required
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full text-center"
            >
              {loading ? 'Vérification...' : 'Se connecter'}
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-beige-50">
      <div className="section-container">
        <div className="flex items-center justify-between mb-12">
          <h1 className="font-cormorant text-5xl text-stone-800">Tableau de bord</h1>
          <button onClick={handleLogout} className="btn-secondary text-sm">
            Se déconnecter
          </button>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-6 border border-beige-200 shadow-sm">
            <h2 className="font-cormorant text-2xl mb-2">Rendez-vous</h2>
            <p className="text-stone-500 text-sm">Consultez et gérez les réservations.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-beige-200 shadow-sm">
            <h2 className="font-cormorant text-2xl mb-2">Messages</h2>
            <p className="text-stone-500 text-sm">Formulaires de contact reçus.</p>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-beige-200 shadow-sm">
            <h2 className="font-cormorant text-2xl mb-2">Agenda</h2>
            <p className="text-stone-500 text-sm">Synchronisation Google Calendar.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function AdminPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-beige-50" />}>
      <AdminContent />
    </Suspense>
  );
}
