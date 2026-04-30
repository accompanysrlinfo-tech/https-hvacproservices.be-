export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HEADER */}
      <div className="flex items-center gap-3 p-4">
        <img src="/logo.png" alt="A&C Company logo" className="w-10 h-10" />
        <div className="flex flex-col leading-tight">
          <span className="font-bold text-lg">A&C Company SRL</span>
          <span className="text-xs text-gray-500">
            Chauffage • Climatisation • Ventilation
          </span>
        </div>
      </div>

      {/* HERO */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Chauffage, Climatisation & Ventilation en Belgique
        </h2>

        <p className="mb-6">
          A&C Company SRL propose des services professionnels d'installation,
          dépannage et entretien HVAC pour particuliers et entreprises.
        </p>

        <a
          href="tel:+32400000000"
          className="bg-white text-blue-600 px-6 py-2 rounded"
        >
          📞 Demander un devis
        </a>
      </section>

    </main>
  );
}
