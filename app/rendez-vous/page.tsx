import BookingForm from '@/components/BookingForm';

export const metadata = {
  title: 'Prendre rendez-vous | CathDub',
  description: 'Réservez votre séance bien-être en ligne.',
};

export default function RendezVousPage() {
  return (
    <main className="min-h-screen bg-beige-50">
      <div className="section-container">
        <div className="max-w-xl mx-auto">
          <h1 className="font-cormorant text-5xl text-stone-800 mb-4 text-center">Prendre rendez-vous</h1>
          <p className="text-center text-stone-500 mb-12">
            Choisissez un créneau disponible. Je confirmerai votre réservation sous 24h.
          </p>
          <BookingForm />
        </div>
      </div>
    </main>
  );
}
