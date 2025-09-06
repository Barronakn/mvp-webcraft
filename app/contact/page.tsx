'use client'

import { Button } from "@/components/ui/button";
import Navbar from "../(home)/_components/header/Navbar";
import Footer from "../components/layout/Footer";
import PageHeader from "../components/PageHeader";
import MobileNavbar from "../(home)/_components/header/MobileNavbar";

export default function page() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
            <MobileNavbar />

      <PageHeader
        title="Contactez-nous"
        description="Vous avez des questions ou souhaitez en savoir plus sur nos circuits et artisans ? Envoyez-nous un message et nous vous répondrons rapidement."
        breadcrumb={[
          { label: "Accueil", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="flex-1 bg-white py-16 px-4 sm:px-8 lg:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="p-8">
            <h2 className="text-2xl font-jost font-semibold mb-6 text-gray-800">Envoyez-nous un message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:outline-none"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:outline-none"
                  placeholder="Votre email"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-1" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full border resize-none border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-terracotta-500 focus:outline-none"
                  placeholder="Votre message"
                />
              </div>
              <Button>Envoyer</Button>
            </form>
          </div>

          <div className="flex flex-col justify-center gap-6">
            <div>
              <h3 className="text-xl font-jost font-semibold mb-2">Adresse</h3>
              <p className="text-gray-700">123 Rue de la Culture, Cotonou, Bénin</p>
            </div>
            <div>
              <h3 className="text-xl font-jost font-semibold mb-2">Email</h3>
              <p className="text-gray-700">contact@wakponbenin.com</p>
            </div>
            <div>
              <h3 className="text-xl font-jost font-semibold mb-2">Téléphone</h3>
              <p className="text-gray-700">+229 0162345678</p>
            </div>
            <div>
              <h3 className="text-xl font-jost font-semibold mb-2">Horaires</h3>
              <p className="text-gray-700">Lundi - Vendredi : 08h00 - 18h00</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
