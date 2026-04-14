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
  title: 'CathDub | Praticienne bien-être',
  description: 'Prenez soin de vous. Séances de bien-être, accompagnement personnalisé et prise de rendez-vous en ligne.',
  keywords: ['bien-être', 'praticienne', 'relaxation', 'rendez-vous'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${workSans.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
