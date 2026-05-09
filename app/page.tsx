"use client"

import Image from "next/image"
import { useState } from "react"

export default function Home() {
  const [loading, setLoading] = useState(false)

  async function handleSubmit(
    e: React.FormEvent<HTMLFormElement>
  ) {
    e.preventDefault()

    setLoading(true)

    const formData = new FormData(e.currentTarget)

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      if (result.success) {
        alert("Message envoyé avec succès !")
        e.currentTarget.reset()
      } else {
        alert("Erreur lors de l'envoi.")
      }
    } catch (error) {
      alert("Erreur serveur.")
    }

    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800">

      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <Image
              src="/logo.png"
              alt="A&C Company SRL"
              width={50}
              height={50}
              className="rounded-full"
            />

            <div>
              <h1 className="text-xl font-bold text-slate-900">
                A&C Company SRL
              </h1>

              <p className="text-sm text-gray-500">
                Chauffage • Sanitaire • Plomberie
              </p>
            </div>

          </div>

          <a
            href="tel:+32484477780"
            className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-5 py-3 rounded-xl shadow-lg"
          >
            📞 Appeler
          </a>

        </div>

      </header>

      {/* HERO */}
      <section className="pt-40 pb-28 px-6 bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm mb-6">
              Bruxelles • Belgique
            </div>

            <h2 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Experts en chauffage & plomberie
            </h2>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Installation, dépannage et entretien professionnel
              partout en Belgique.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">

              <a
                href="tel:+32484477780"
                className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl text-center"
              >
                📞 Appeler maintenant
              </a>

              <a
                href="https://wa.me/32484477780?text=Bonjour%20je%20souhaite%20un%20devis"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-white/20 hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-semibold text-center"
              >
                💬 WhatsApp
              </a>

            </div>

          </div>

          <div>

            <div className="bg-white/10 backdrop-blur border border-white/10 rounded-3xl p-8 shadow-2xl">

              <div className="grid grid-cols-2 gap-6">

                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-4xl font-black">
                    24/7
                  </p>

                  <p className="text-slate-300 mt-2">
                    Service d'urgence
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6">
                  <p className="text-4xl font-black">
                    100%
                  </p>

                  <p className="text-slate-300 mt-2">
                    Satisfaction client
                  </p>
                </div>

                <div className="bg-white/10 rounded-2xl p-6 col-span-2">
                  <p className="text-2xl font-bold">
                    TVA BE 0765439470
                  </p>

                  <p className="text-slate-300 mt-2">
                    Entreprise enregistrée en Belgique
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ABOUT */}
      <section className="py-28 px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          <div>

            <Image
              src="/profile.jpg"
              alt="Technicien HVAC"
              width={700}
              height={700}
              className="rounded-3xl shadow-2xl w-full object-cover"
            />

          </div>

          <div>

            <p className="text-blue-600 uppercase tracking-widest font-semibold mb-4">
              À propos
            </p>

            <h3 className="text-5xl font-black text-slate-900 leading-tight mb-8">
              Votre partenaire HVAC en Belgique
            </h3>

            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              A&C Company SRL propose des solutions professionnelles
              de chauffage, plomberie et sanitaire.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Intervention rapide, travail professionnel
              et équipements modernes.
            </p>

            <div className="space-y-4 mb-8">

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Installation complète</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Dépannage rapide</p>
              </div>

              <div className="flex items-center gap-3">
                <span>✔</span>
                <p>Entretien professionnel</p>
              </div>

            </div>

            <a
              href="tel:+32484477780"
              className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white px-8 py-4 rounded-2xl inline-block font-semibold shadow-xl"
            >
              📞 Contactez-nous
            </a>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <section className="py-28 px-6 bg-gray-50">

        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">

            <p className="text-blue-600 uppercase tracking-widest font-semibold mb-4">
              Nos Services
            </p>

            <h3 className="text-5xl font-black text-slate-900 mb-6">
              Solutions professionnelles
            </h3>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Chauffage",
                desc: "Installation et dépannage de chauffage.",
              },
              {
                title: "Sanitaire",
                desc: "Installation sanitaire complète.",
              },
              {
                title: "Plomberie",
                desc: "Réparation et entretien plomberie.",
              },
            ].map((service, index) => (

              <div
                key={index}
                className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300"
              >

                <div className="w-14 h-14 rounded-2xl bg-blue-600 mb-6" />

                <h4 className="text-2xl font-bold mb-4">
                  {service.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {service.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="py-28 px-6 bg-slate-950 text-white">

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-blue-400 uppercase tracking-widest font-semibold mb-4">
            Contact
          </p>

          <h3 className="text-5xl font-black mb-6">
            Demandez votre devis gratuit
          </h3>

          <p className="text-slate-300 text-lg mb-12">
            Contactez-nous pour une intervention rapide.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              required
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              required
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <textarea
              name="message"
              placeholder="Votre message"
              rows={6}
              required
              className="w-full bg-white/10 border border-white/10 rounded-2xl px-5 py-4 outline-none"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 transition-all duration-300 py-4 rounded-2xl font-bold shadow-xl"
            >
              {loading ? "Envoi..." : "Envoyer"}
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-slate-800 text-slate-400 py-8 text-center">

        <div className="max-w-7xl mx-auto px-6">

          <p>
            © 2026 A&C Company SRL • Bruxelles • Belgique
          </p>

        </div>

      </footer>

      {/* WHATSAPP FLOAT */}
      <a
        href="https://wa.me/32484477780"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-2xl z-50"
      >
        💬
      </a>

    </main>
  )
}
