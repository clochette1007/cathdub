import Hero from '@/components/Hero';
import Section from '@/components/Section';
import ContactForm from '@/components/ContactForm';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <Hero />

      {/* Présentation + détail séance */}
      <Section id="presentation" className="bg-white">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div className="md:col-span-2 space-y-8">
            <div>
              <h2 className="section-title">Détails d’une séance d’hypnose</h2>
              <p className="text-stone-600 leading-relaxed mb-4">
                L’hypnose est un état de relaxation proche de l’endormissement qui permet d’accéder
                à l’inconscient et aux informations nécessaires permettant d’agir sur les différents
                problèmes rencontrés.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                Lors de la première séance, je reçois les personnes soucieuses de leur mieux-être
                pendant 1 heure 30. Cette séance permet de définir l’objectif à atteindre.
              </p>
              <p className="text-stone-600 leading-relaxed mb-4">
                Les séances suivantes se déroulent en deux phases et comprennent :
              </p>
              <ul className="space-y-2 text-stone-600">
                <li>
                  <span className="font-semibold text-sage-700">Phase 1</span> : Mesure des
                  améliorations ressenties, présentation des problèmes rencontrés, définition des
                  objectifs attendus durant la séance.
                </li>
                <li>
                  <span className="font-semibold text-sage-700">Phase 2</span> : travail sous
                  hypnose, familiarisation avec l’état hypnotique et communication avec
                  l’inconscient.
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-cormorant text-3xl text-stone-800 mb-3">Quelques applications</h3>
              <p className="text-stone-600 leading-relaxed">
                Gestion du stress, manque de confiance en soi, phobies, sevrage tabagique, perde de
                poids, douleurs chroniques, troubles du sommeil, énurésie.
              </p>
            </div>

            <div className="bg-beige-50 border border-beige-200 rounded-2xl p-6">
              <h3 className="font-cormorant text-2xl text-stone-800 mb-2">
                Prendre rendez-vous (par téléphone uniquement) :
              </h3>
              <a
                href="tel:0650433067"
                className="text-sage-600 text-2xl font-cormorant hover:text-sage-800 transition-colors"
              >
                06.50.43.30.67
              </a>
              <p className="text-stone-500 text-sm mt-3">
                Ou utilisez le formulaire de contact ci-dessous.
              </p>
            </div>
          </div>

          {/* Photos */}
          <div className="flex flex-col gap-6 items-center">
            <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://static.wixstatic.com/media/8d4d90_8fd15550fb844a2ea7d3eb9701679705~mv2.jpeg"
                alt="Catherine Dubois"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://static.wixstatic.com/media/8d4d90_557cdf016e5c41f2a6623dc3edf61734~mv2.png"
                alt="Certificat HEC Executive Education – Coaching"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
            <div className="relative w-full max-w-[240px] aspect-[3/4] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="https://static.wixstatic.com/media/8d4d90_7e4c6c3ef3a74d4f863b26d5d2fce5b3~mv2.png"
                alt="Certificat complémentaire"
                fill
                className="object-cover"
                sizes="240px"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Tarifs */}
      <Section id="tarifs" className="bg-beige-50">
        <h2 className="section-title text-center mb-12">Tarifs &amp; Prestations</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            {
              title: 'Première séance',
              duration: '1h30',
              price: 'Sur devis',
              desc: 'Bilan complet, définition de l’objectif à atteindre.',
            },
            {
              title: 'Séance de suivi',
              duration: '1h',
              price: 'Sur devis',
              desc: 'Mesure des progrès et travail hypnotique approfondi.',
            },
            {
              title: 'Coaching individuel',
              duration: 'Variable',
              price: 'Sur devis',
              desc: 'Accompagnement personnalisé vers vos objectifs de vie.',
            },
          ].map((offer) => (
            <div
              key={offer.title}
              className="bg-white rounded-2xl p-8 shadow-sm border border-beige-200 flex flex-col gap-3"
            >
              <h3 className="font-cormorant text-2xl text-stone-800">{offer.title}</h3>
              <p className="text-sage-600 text-sm font-medium">{offer.duration}</p>
              <p className="text-stone-600 text-sm leading-relaxed flex-1">{offer.desc}</p>
              <p className="font-cormorant text-2xl text-stone-700 mt-2">{offer.price}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-stone-500 text-sm mt-8">
          Contactez-moi par téléphone au{' '}
          <a href="tel:0650433067" className="text-sage-600 font-medium hover:underline">
            06.50.43.30.67
          </a>{' '}
          pour toute information tarifaire.
        </p>
      </Section>

      {/* Zone */}
      <Section id="zone" className="bg-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title">Accéder au cabinet</h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              Je vous reçois en cabinet sur rendez-vous. N’hésitez pas à m’appeler pour connaître
              l’adresse exacte et les modalités d’accès.
            </p>
            <a href="tel:0650433067" className="btn-primary">
              Appeler le 06.50.43.30.67
            </a>
          </div>
          <div className="bg-beige-100 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <div className="text-5xl mb-3">📍</div>
              <span className="font-cormorant text-xl italic text-stone-500">Carte à configurer</span>
              <p className="text-xs text-stone-400 mt-1">Remplacer par un iframe Google Maps</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" className="bg-beige-50">
        <div className="max-w-xl mx-auto">
          <h2 className="section-title text-center">Me contacter</h2>
          <p className="text-center text-stone-500 mb-10">
            Une question ? Écrivez-moi, je vous répondrai rapidement.
          </p>
          <ContactForm />
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-sage-600 text-white py-20">
        <div className="max-w-2xl mx-auto text-center px-6">
          <h2 className="font-cormorant text-4xl md:text-5xl mb-6">
            Prêt(e) à franchir le pas ?
          </h2>
          <p className="text-sage-100 mb-8 leading-relaxed">
            Appelez-moi directement ou prenez rendez-vous en ligne.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:0650433067"
              className="inline-block bg-white text-sage-700 px-10 py-4 rounded-full hover:bg-beige-50 transition-colors font-worksans font-medium"
            >
              06.50.43.30.67
            </a>
            <Link
              href="/rendez-vous"
              className="inline-block border border-white text-white px-10 py-4 rounded-full hover:bg-sage-700 transition-colors font-worksans"
            >
              Réserver en ligne
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
