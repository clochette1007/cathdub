import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-beige-100 min-h-[90vh] flex items-center">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige-100 via-beige-50 to-sage-50 opacity-80" />

      <div className="relative max-w-5xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-sage-600 text-sm tracking-widest uppercase mb-4 font-worksans">
            Praticienne bien-être
          </p>
          <h1 className="font-cormorant text-6xl md:text-7xl text-stone-800 leading-tight mb-8">
            Retrouvez votre
            <span className="block text-sage-600 italic">équilibre naturel</span>
          </h1>
          <p className="text-stone-600 text-lg leading-relaxed mb-10 font-worksans">
            Un accompagnement doux et personnalisé pour prendre soin de vous, corps et esprit.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/rendez-vous" className="btn-primary">
              Prendre rendez-vous
            </Link>
            <Link href="#presentation" className="btn-secondary">
              En savoir plus
            </Link>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <div className="w-80 h-96 bg-sage-100 rounded-3xl flex items-center justify-center border border-sage-200">
            <span className="font-cormorant text-2xl italic text-sage-400">Photo portrait</span>
          </div>
        </div>
      </div>
    </section>
  );
}
