import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Présentation */}
      <Section id="presentation" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Une approche douce &amp; personnalisée</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Je suis praticienne bien-être, passionnée par l&apos;accompagnement holistique. Mon approche combine des
              techniques douces pour vous aider à retrouver équilibre et sérénité au quotidien.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              Chaque séance est adaptée à vos besoins, dans un espace bienveillant et confidentiel.
            </p>
            <Link href="/rendez-vous" className="btn-primary">
              Prendre rendez-vous
            </Link>
          </div>
          <div className="bg-beige-100 rounded-2xl h-72 flex items-center justify-center text-beige-400">
            <span className="font-cormorant text-2xl italic">Photo à venir</span>
          </div>
        </div>
      </Section>

      {/* Tarifs */}
      <Section id="tarifs" className="bg-beige-50">
        <h2 className="section-title text-center mb-12">Tarifs &amp; Prestations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { title: 'Séance découverte', duration: '45 min', price: '45 €', desc: 'Première rencontre pour définir vos besoins.' },
            { title: 'Séance individuelle', duration: '60 min', price: '65 €', desc: 'Accompagnement personnalisé en profondeur.' },
            { title: 'Forfait 5 séances', duration: '5 × 60 min', price: '290 €', desc: 'Suivi régulier pour des résultats durables.' },
          ].map((offer) => (
            <div key={offer.title} className="bg-white rounded-2xl p-8 shadow-sm border border-beige-200 flex flex-col gap-3">
              <h3 className="font-cormorant text-2xl text-stone-800">{offer.title}</h3>
              <p className="text-sage-600 text-sm font-medium">{offer.duration}</p>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">{offer.desc}</p>
              <p className="font-cormorant text-3xl text-stone-800 mt-2">{offer.price}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Zone desservie */}
      <Section id="zone" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Zone d&apos;intervention</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Je reçois en cabinet et me déplace à domicile dans un rayon de 30 km.
              N&apos;hésitez pas à me contacter pour vérifier votre secteur.
            </p>
            <ul className="text-stone-600 text-sm space-y-1 list-disc list-inside">
              <li>Consultations en cabinet sur rendez-vous</li>
              <li>Déplacements à domicile possibles</li>
              <li>Séances en ligne disponibles</li>
            </ul>
          </div>
          <div className="bg-beige-100 rounded-2xl h-64 flex items-center justify-center text-beige-400">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <span className="font-cormorant text-xl italic text-stone-500">Carte à configurer</span>
              <p className="text-xs text-stone-400 mt-1">Ajouter iframe Google Maps</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-beige-50">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title text-center">Me contacter</h2>
          <p className="text-center text-stone-500 mb-10">Une question ? N&apos;hésitez pas à m&apos;écrire.</p>
          <ContactForm />
        </div>
      </Section>

      {/* CTA Rendez-vous */}
      <section className="bg-sage-600 text-white py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">Prêt(e) à commencer ?</h2>
          <p className="text-sage-100 mb-8 leading-relaxed">
            Réservez votre séance en quelques clics. Je vous réponds sous 24h pour confirmer.
          </p>
          <Link href="/rendez-vous" className="inline-block bg-white text-sage-700 px-10 py-4 rounded-full hover:bg-beige-50 transition-colors font-worksans font-medium">
            Réserver ma séance
          </Link>
        </div>
      </section>
    </main>
  );
}
