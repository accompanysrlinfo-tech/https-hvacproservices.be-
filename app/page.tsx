export default function Home() {
  return (
    <main className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3">
            <img src="/logo.png" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-lg text-[#1f2937]">
                A&C Company SRL
              </p>
              <p className="text-xs text-gray-500">
                Chauffage • Sanitaire • Plomberie
              </p>
            </div>
          </div>

          <a
            href="tel:+32400000000"
            className="text-[#2563eb] font-medium"
          >
            📞 Appeler
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#1f2937] text-white py-24 text-center px-6">

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chauffage • Sanitaire • Plomberie
        </h1>

        <p className="max-w-xl mx-auto mb-8 text-gray-300">
          Services professionnels en Belgique. Installation, dépannage rapide
          et entretien de systèmes de chauffage et plomberie.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="tel:+32400000000"
            className="bg-[#2563eb] px-6 py-3 rounded text-white hover:bg-[#1e3a8a] transition"
          >
            Demander un devis
          </a>

          <a
            href="https://wa.me/32400000000"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-[#1f2937] transition"
          >
            WhatsApp
          </a>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-semibold mb-12 text-[#1f2937]">
            Nos Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Chauffage</h3>
              <p className="text-gray-600">
                Installation et dépannage de systèmes de chauffage performants.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Sanitaire</h3>
              <p className="text-gray-600">
                Installation complète de salles de bain et équipements sanitaires.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border">
              <h3 className="font-semibold text-lg mb-2">Plomberie</h3>
              <p className="text-gray-600">
                Réparation de fuites, débouchage et installations.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-white py-20 px-6 text-center border-t">
        <h2 className="text-3xl font-semibold mb-12 text-[#1f2937]">
          Pourquoi nous choisir ?
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div>
            <p className="font-semibold mb-2">⚡ Rapide</p>
            <p className="text-gray-600">Intervention en Belgique</p>
          </div>

          <div>
            <p className="font-semibold mb-2">👷 Professionnel</p>
            <p className="text-gray-600">Techniciens qualifiés</p>
          </div>

          <div>
            <p className="font-semibold mb-2">💰 Transparent</p>
            <p className="text-gray-600">Devis gratuit</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#1f2937] text-white py-20 px-6 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Demandez votre devis
        </h2>

        <form className="max-w-xl mx-auto mt-8 space-y-4">

          <input
            placeholder="Nom"
            className="w-full p-3 rounded bg-white text-black"
          />

          <input
            placeholder="Email"
            className="w-full p-3 rounded bg-white text-black"
          />

          <textarea
            placeholder="Votre demande..."
            className="w-full p-3 rounded bg-white text-black"
          />

          <button className="bg-[#2563eb] px-6 py-3 rounded w-full hover:bg-[#1e3a8a] transition">
            Envoyer
          </button>

        </form>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          <a href="tel:+32400000000" className="border px-6 py-3 rounded">
            📞 Appeler
          </a>

          <a href="https://wa.me/32400000000" className="bg-green-500 px-6 py-3 rounded">
            WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6 text-sm">
        © 2025 A&C Company SRL — Belgique
      </footer>

    </main>
  );
}
