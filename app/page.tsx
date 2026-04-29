export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* HEADER */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <div>
            <h1 className="text-2xl font-bold text-blue-900">HVAC Pro Services</h1>
            <p className="text-sm text-gray-500">Chauffage • Ventilation • Climatisation</p>
          </div>

          <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
            <a href="#services" className="hover:text-blue-900">Services</a>
            <a href="#avantages" className="hover:text-blue-900">Avantages</a>
            <a href="#contact" className="hover:text-blue-900">Contact</a>
          </nav>

          <div className="flex gap-3">
            <a href="tel:0484477780" className="bg-blue-900 text-white px-4 py-2 rounded-lg font-semibold">
              Appeler
            </a>
            <a href="https://wa.me/32484477780" className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section
        className="text-white py-28 px-6 text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(10,25,47,0.75), rgba(10,25,47,0.75)), url('https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1500&q=80')",
        }}
      >
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Experts HVAC en Belgique
        </h2>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Solutions professionnelles de chauffage, ventilation et climatisation
          pour particuliers et entreprises.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="tel:0484477780" className="bg-white text-blue-950 px-8 py-4 rounded-xl font-semibold">
            Appelez maintenant
          </a>
          <a href="#contact" className="bg-blue-700 px-8 py-4 rounded-xl font-semibold">
            Demander un devis
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Nos Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Installation Chauffage</h3>
            <p>Installation et maintenance de systèmes de chauffage performants.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Climatisation</h3>
            <p>Installation, entretien et réparation de systèmes de climatisation.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Ventilation</h3>
            <p>Solutions de ventilation modernes pour un air intérieur sain.</p>
          </div>

        </div>
      </section>

      {/* WHY US */}
      <section id="avantages" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">Pourquoi nous choisir ?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div>
            <h3 className="text-2xl font-semibold mb-4">Intervention Rapide</h3>
            <p>Nous intervenons rapidement partout à Bruxelles et aux alentours.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Techniciens Qualifiés</h3>
            <p>Des experts expérimentés pour tous vos systèmes HVAC.</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Prix Transparente</h3>
            <p>Des devis clairs et sans frais cachés.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">Demander un devis gratuit</h2>

        <form className="max-w-xl mx-auto bg-white p-8 rounded-2xl shadow-lg space-y-4">
          <input type="text" placeholder="Votre nom" className="w-full p-4 rounded-xl border" />
          <input type="email" placeholder="Votre email" className="w-full p-4 rounded-xl border" />
          <textarea placeholder="Votre message" rows={5} className="w-full p-4 rounded-xl border"></textarea>

          <button type="submit" className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold w-full">
            Envoyer la demande
          </button>
        </form>

        <div className="mt-10 text-lg">
          <p><strong>Téléphone:</strong> 0484 47 77 80</p>
          <p><strong>Email:</strong> accompany.srlinfo@gmail.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 HVAC Pro Services - Tous droits réservés.</p>
      </footer>

    </main>
  );
}
