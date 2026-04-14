import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <header>
      {/* Nav */}
      <nav className="border-b border-beige-200 bg-white">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <p className="font-cormorant text-2xl text-stone-800 leading-tight">Catherine Dubois</p>
            <p className="font-worksans text-sm text-sage-600 tracking-wide">Coach &amp; Hypnothérapeute</p>
          </div>
          <div className="flex items-center gap-6 text-sm font-worksans">
            <Link href="/" className="text-sage-600 font-medium">Accueil</Link>
            <Link href="#presentation" className="text-stone-600 hover:text-sage-600 transition-colors">La séance</Link>
            <Link href="#contact" className="text-stone-600 hover:text-sage-600 transition-colors">Contact</Link>
            <Link href="/rendez-vous" className="btn-primary !py-2 !px-5 text-xs">
              Rendez-vous
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero banner */}
      <div className="relative bg-stone-800 min-h-[380px] flex items-end overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://static.wixstatic.com/media/8d4d90_8fd15550fb844a2ea7d3eb9701679705~mv2.jpeg"
            alt="Catherine Dubois – Coach &amp; Hypnothérapeute"
            fill
            className="object-cover object-top opacity-40"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-800/40 to-transparent" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pb-16 pt-24">
          <p className="text-sage-300 text-sm tracking-widest uppercase mb-3 font-worksans">
            Coach certifiée HEC &amp; Hypnothérapeute
          </p>
          <h1 className="font-cormorant text-5xl md:text-7xl text-white leading-tight mb-6">
            Retrouvez votre
            <span className="block italic text-sage-300">liberté intérieure</span>
          </h1>
          <p className="text-stone-300 text-lg max-w-xl leading-relaxed mb-10 font-worksans">
            Gestion du stress, confiance en soi, phobies, sevrage tabagique… Un accompagnement
            professionnel et bienveillant pour vous aider à atteindre vos objectifs.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="tel:0650433067" className="btn-primary">
              Appeler 06.50.43.30.67
            </a>
            <Link href="/rendez-vous" className="btn-secondary !border-white !text-white hover:!bg-white/10">
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
