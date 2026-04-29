export default function HomePage() {
  return (
    <main className="font-sans text-gray-800">

      {/* Hero Section */}
      <section className="bg-blue-950 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-6">
          Perfect comfort meets exceptional efficiency
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          We deliver comprehensive heating, ventilation, and air conditioning
          solutions that transform your spaces into havens of comfort.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-white text-blue-900 px-6 py-3 rounded-xl font-semibold">
            Schedule Service
          </button>
          <button className="bg-blue-700 px-6 py-3 rounded-xl font-semibold">
            Our Services
          </button>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12 text-blue-900">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Heating</h3>
            <p>
              Professional heating installation and maintenance for homes and businesses.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Ventilation</h3>
            <p>
              Reliable ventilation systems to ensure fresh and clean air circulation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Air Conditioning</h3>
            <p>
              Energy-efficient cooling solutions tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-8 text-blue-900">Contact Us</h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Votre nom"
            className="w-full p-4 rounded-xl border"
            required
          />
          <input
            type="email"
            placeholder="Votre email"
            className="w-full p-4 rounded-xl border"
            required
          />
          <textarea
            placeholder="Votre message"
            className="w-full p-4 rounded-xl border"
            rows={5}
            required
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-800"
          >
            Envoyer la demande
          </button>
        </form>

        <div className="mt-10 text-gray-700 space-y-2">
          <p><strong>Téléphone:</strong> 0484 47 77 80</p>
          <p><strong>Email:</strong> accompany.srlinfo@gmail.com</p>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-blue-900">
          Zones d’intervention
        </h2>
        <p className="text-lg text-gray-700 max-w-4xl mx-auto">
          Nous intervenons rapidement à Bruxelles, Waterloo, Wavre, Louvain,
          Hal, Vilvorde, Nivelles et dans un rayon de 50 km pour tous vos
          besoins en chauffage, ventilation, climatisation, maintenance HVAC.
        </p>
      </section>

      {/* Google Maps */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold mb-8 text-blue-900">
          Notre zone d’intervention
        </h2>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Bruxelles&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center py-6">
        <p>© 2026 HVAC PRO SERVICES - Tous droits réservés</p>
      </footer>
    </main>
  )
}
