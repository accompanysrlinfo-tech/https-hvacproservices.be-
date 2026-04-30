export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900">

      {/* HEADER */}
      <div className="flex items-center gap-3">
  <img src="/logo.png" alt="A&C Company logo" className="w-10 h-10" />
  <div className="flex flex-col leading-tight">
    <span className="font-bold text-lg">A&C Company SRL</span>
    <<span className="text-xs text-gray-500">
  Chauffage • Sanitaire • Plomberie
</span>
    </span>
  </div>
</div>

      {/* HERO */}
      <section className="bg-blue-600 text-white text-center py-20">
        <h2 className="text-4xl font-bold mb-4">
          Experts HVAC en Belgique
        </h2>
        <p className="mb-6">
          Chauffage • Ventilation • Climatisation
        </p>
        <button className="bg-white text-blue-600 px-6 py-2 rounded">
          Demander un devis
        </button>
      </section>

      {/* SERVICES */}
      <section id="services" className="p-10">
        <h3 className="text-2xl font-bold mb-6">Nos Services</h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 shadow rounded">
            <h4 className="font-bold">Chauffage</h4>
            <p>Installation et maintenance.</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h4 className="font-bold">Climatisation</h4>
            <p>Installation et réparation.</p>
          </div>

          <div className="bg-white p-6 shadow rounded">
            <h4 className="font-bold">Ventilation</h4>
            <p>Air sain et solutions modernes.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="bg-gray-900 text-white text-center p-6">
        <p>© 2025 HVAC Pro Services</p>
      </footer>

    </main>
  );
}
