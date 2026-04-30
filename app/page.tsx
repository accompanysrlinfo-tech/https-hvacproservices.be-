"use client";

import { useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);

  return (
    <main className="min-h-screen bg-[#f3f4f6] text-gray-800 font-sans">

      {/* HEADER */}
      <header className="bg-white border-b">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">

          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="A&C Company logo" className="w-10 h-10" />
            <div>
              <p className="font-semibold text-lg text-[#1f2937]">
                A&C Company SRL
              </p>
              <p className="text-xs text-gray-500">
                Chauffage • Sanitaire • Plomberie
              </p>
            </div>
          </div>

          <a href="tel:+32400000000" className="text-[#2563eb] font-medium">
            📞 Appeler
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#1f2937] text-white py-28 text-center px-6">

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Chauffage • Sanitaire • Plomberie
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Intervention rapide à Bruxelles et partout en Belgique.
          Installation, dépannage et entretien par des professionnels certifiés.
        </p>

        <div className="mb-8 text-sm text-gray-400">
          ✔ +10 ans d'expérience • ✔ Intervention 24h • ✔ Devis gratuit
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="tel:+32400000000"
            className="bg-[#2563eb] px-6 py-3 rounded text-white hover:bg-[#1e3a8a]"
          >
            📞 Appeler maintenant
          </a>

          <a
            href="https://wa.me/32400000000?text=Bonjour%20je%20souhaite%20un%20devis"
            className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black"
          >
            💬 WhatsApp
          </a>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">Nos Services</h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">

          <div className="bg-white p-6 rounded border">
            <h3 className="font-semibold mb-2">Chauffage</h3>
            <p>Installation et dépannage de systèmes de chauffage.</p>
          </div>

          <div className="bg-white p-6 rounded border">
            <h3 className="font-semibold mb-2">Sanitaire</h3>
            <p>Installation de salles de bain et équipements sanitaires.</p>
          </div>

          <div className="bg-white p-6 rounded border">
            <h3 className="font-semibold mb-2">Plomberie</h3>
            <p>Réparation de fuites et débouchage.</p>
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section className="bg-[#1f2937] text-white py-20 px-6 text-center">

        <h2 className="text-3xl font-semibold mb-4">
          Demandez votre devis gratuit
        </h2>

        <form
          className="max-w-xl mx-auto mt-8 space-y-4"
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);

            const formData = new FormData(e.currentTarget);

            const data = {
              name: formData.get("name"),
              email: formData.get("email"),
              message: formData.get("message"),
            };

            await fetch("/api/contact", {
              method: "POST",
              body: JSON.stringify(data),
            });

            setLoading(false);
            alert("Message envoyé !");
          }}
        >

          <input
            name="name"
            placeholder="Nom"
            className="w-full p-3 rounded text-black"
            required
          />

          <input
            name="email"
            placeholder="Email"
            className="w-full p-3 rounded text-black"
            required
          />

          <textarea
            name="message"
            placeholder="Votre demande..."
            className="w-full p-3 rounded text-black"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-[#2563eb] px-6 py-3 rounded w-full hover:bg-[#1e3a8a]"
          >
            {loading ? "Envoi..." : "Envoyer"}
          </button>

        </form>

        <div className="flex flex-col md:flex-row gap-4 justify-center mt-8">

          <a href="tel:+32400000000" className="border px-6 py-3 rounded">
            📞 Appeler
          </a>

          <a
            href="https://wa.me/32400000000?text=Bonjour%20je%20souhaite%20un%20devis"
            className="bg-green-500 px-6 py-3 rounded"
          >
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
