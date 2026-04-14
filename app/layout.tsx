import type { Metadata } from 'next';
import { Cormorant_Garamond, Work_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
  display: 'swap',
});

const workSans = Work_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-worksans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Catherine Dubois | Coach & Hypnothérapeute',
  description:
    'Catherine Dubois, Coach certifiée HEC et Hypnothérapeute. Séances d’hypnose et coaching pour gérer le stress, les phobies, le sevrage tabagique, la perte de poids et bien plus.',
  keywords: ['hypnose', 'hypnothérapeute', 'coach', 'coaching', 'stress', 'phobies', 'sevrage tabagique'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${workSans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
