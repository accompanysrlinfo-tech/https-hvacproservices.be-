export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 font-sans">

      {/* HEADER */}
      <header className="bg-white shadow p-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">

          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="A&C Company logo" className="w-10 h-10" />
            <div className="flex flex-col leading-tight">
              <span className="font-bold text-lg">A&C Company SRL</span>
              <span className="text-xs text-gray-500">
                Chauffage • Sanitaire • Plomberie
              </span>
            </div>
          </div>

          <a href="tel:+32400000000" className="text-blue-600 font-semibold">
            📞 Appeler maintenant
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-blue-600 text-white text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chauffage, Sanitaire & Plomberie en Belgique
        </h1>

        <p className="mb-6 max-w-2xl mx-auto">
          A&C Company SRL propose des services professionnels en chauffage,
          plomberie et sanitaire à Bruxelles et partout en Belgique.
          Intervention rapide et devis gratuit.
        </p>

        <p className="mb-8">
          ✔ Intervention rapide • ✔ Devis gratuit • ✔ Service garanti
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="tel:+32400000000"
            className="bg-white text-blue-600 px-6 py-3 rounded shadow hover:bg-gray-100"
          >
            📞 Demander un devis
          </a>

          <a
            href="https://wa.me/32400000000?text=Bonjour%20je%20souhaite%20un%20devis"
            className="bg-green-500 px-6 py-3 rounded shadow hover:bg-green-600"
          >
            💬 WhatsApp
          </a>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-3xl font-bold mb-12">Nos Services</h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Chauffage</h3>
              <p>
                Installation, entretien et dépannage de chaudières et systèmes de chauffage.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Sanitaire</h3>
              <p>
                Installation de salles de bain, robinetterie et équipements sanitaires.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-bold text-xl mb-3">Plomberie</h3>
              <p>
                Réparation de fuites, débouchage et installations de plomberie.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* WHY */}
      <section className="bg-gray-200 py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">
          Pourquoi choisir A&C Company SRL ?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">⚡ Rapide</h3>
            <p>Intervention rapide partout en Belgique.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">👷 Qualifié</h3>
            <p>Techniciens expérimentés.</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-2">💰 Transparent</h3>
            <p>Prix clairs et devis gratuit.</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-blue-600 text-white py-16 text-center px-6">

        <h2 className="text-3xl font-bold mb-4">
          Demandez votre devis gratuit
        </h2>

        <p className="mb-6">
          Contactez A&C Company SRL pour chauffage, plomberie et sanitaire en Belgique.
        </p>

        {/* FORM */}
        <form
          className="max-w-xl mx-auto mt-8 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            alert("Message envoyé !");
          }}
        >
          <input name="name" placeholder="Nom" className="w-full p-3 border rounded text-black" required />
          <input name="email" placeholder="Email" className="w-full p-3 border rounded text-black" required />
          <textarea name="message" placeholder="Votre demande..." className="w-full p-3 border rounded text-black" required />

          <button type="submit" className="bg-white text-blue-600 px-6 py-3 rounded font-semibold">
            Envoyer la demande
          </button>
        </form>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          <a href="tel:+32400000000" className="bg-white text-blue-600 px-6 py-3 rounded">
            📞 Appeler
          </a>

          <a href="https://wa.me/32400000000" className="bg-green-500 px-6 py-3 rounded">
            WhatsApp
          </a>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white text-center p-6">
        © 2025 A&C Company SRL - Belgique <br />
        Chauffage • Sanitaire • Plomberie
      </footer>

    </main>
  );
}
