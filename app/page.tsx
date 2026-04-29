export default function Home() {
  return (
    <main className="font-sans text-gray-800">

      {/* HERO */}
      <section className="bg-blue-950 text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          HVAC Pro Services in Belgium
        </h1>
        <p className="text-xl max-w-3xl mx-auto mb-8">
          Professional heating, ventilation and air conditioning services for homes
          and businesses across Brussels and surrounding areas.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="tel:0484477780"
            className="bg-white text-blue-950 px-8 py-4 rounded-xl font-semibold"
          >
            Call Now
          </a>
          <a
            href="#contact"
            className="bg-blue-700 px-8 py-4 rounded-xl font-semibold"
          >
            Request a Quote
          </a>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Our HVAC Services
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Heating Installation</h3>
            <p>
              Professional installation of heating systems for residential and commercial properties.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Air Conditioning</h3>
            <p>
              Efficient cooling solutions including installation, maintenance and repairs.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-4">Ventilation Systems</h3>
            <p>
              Reliable ventilation systems for improved indoor air quality and comfort.
            </p>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-12">
          Why Choose HVAC Pro Services?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Fast Intervention</h3>
            <p>Rapid response across Brussels and surrounding cities.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Certified Technicians</h3>
            <p>Experienced HVAC professionals for all heating and cooling systems.</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">Transparent Pricing</h3>
            <p>Clear quotations with no hidden fees for every intervention.</p>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="py-20 px-6 bg-blue-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Service Areas
        </h2>
        <p className="max-w-4xl mx-auto text-lg">
          We provide HVAC services in Brussels, Waterloo, Wavre, Nivelles, Leuven,
          Vilvoorde and surrounding areas throughout Belgium.
        </p>
      </section>

      {/* GOOGLE MAPS */}
      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Find Us
        </h2>
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-lg">
          <iframe
            title="Google Maps"
            src="https://www.google.com/maps?q=Brussels,Belgium&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold text-blue-900 mb-8">
          Request a Quote
        </h2>
        <form className="max-w-xl mx-auto space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-4 rounded-xl border"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-900 text-white px-8 py-4 rounded-xl font-semibold"
          >
            Send Request
          </button>
        </form>

        <div className="mt-10 text-lg">
          <p><strong>Phone:</strong> 0484 47 77 80</p>
          <p><strong>Email:</strong> accompany.srlinfo@gmail.com</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>© 2026 HVAC Pro Services - All rights reserved.</p>
      </footer>
    </main>
  );
}
