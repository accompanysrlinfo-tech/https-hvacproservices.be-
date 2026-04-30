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

          <a href="tel:+32484477780" className="text-[#2563eb] font-medium">
            📞 Appeler
          </a>

        </div>
      </header>

      {/* HERO */}
      <section className="bg-[#1f2937] text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Chauffage • Sanitaire • Plomberie en Belgique
        </h1>

        <p className="text-gray-300 max-w-xl mx-auto mb-6">
          Intervention rapide à Bruxelles et partout en Belgique.
          Installation, dépannage et entretien par des professionnels certifiés.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center">

          <a
            href="tel:+32484477780"
            className="bg-[#2563eb] px-6 py-3 rounded"
          >
            📞 Appeler maintenant
          </a>

          <a
            href="https://wa.me/32484477780?text=Bonjour%20je%20souhaite%20un%20devis"
            className="border border-white px-6 py-3 rounded"
          >
            💬 WhatsApp
          </a>

        </div>
      </section>

      {/* PROFIL / ABOUT */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <img
            src="/profile.jpg"
            alt="Technicien A&C Company"
            className="rounded-xl shadow-lg w-full"
          />

          {/* TEXT */}
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-[#1f2937]">
              Votre expert en chauffage et plomberie
            </h2>

            <p className="text-gray-600 mb-4">
              Chez A&C Company SRL, nous proposons des services professionnels
              de chauffage, plomberie et installation sanitaire en Belgique.
              Nous garantissons des interventions rapides, un travail de qualité
              et des solutions adaptées à chaque client.
            </p>

            <p className="text-gray-600 mb-6">
              ✔ Installation complète  
              ✔ Dépannage rapide  
              ✔ Entretien professionnel  
            </p>

            <a
              href="tel:+32484477780"
              className="bg-[#2563eb] text-white px-6 py-3 rounded"
            >
              📞 Contactez-nous
            </a>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-12">
          Nos Services
        </h2>

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

          <input name="name" placeholder="Nom" className="w-full p-3 rounded text-black" required />
          <input name="email" placeholder="Email" className="w-full p-3 rounded text-black" required />
          <textarea name="message" placeholder="Votre demande..." className="w-full p-3 rounded text-black" required />

          <button className="bg-[#2563eb] px-6 py-3 rounded w-full">
            {loading ? "Envoi..." : "Envoyer"}
          </button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white text-center p-6 text-sm">
        © 2025 A&C Company SRL — Belgique
      </footer>

    </main>
  );
}
