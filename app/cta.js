"use client";

import React from "react";

export default function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-green-600 via-emerald-500 to-green-700 text-white">
      <div className="container mx-auto text-center space-y-8">

        <h2 className="text-4xl md:text-5xl font-bold drop-shadow-lg">
          Pronto para criar um futuro sustentável?
        </h2>

       
        <p className="text-lg opacity-90 max-w-2xl mx-auto">
          Agende uma conversa gratuita e descubra como podemos transformar seu
          negócio com soluções verdes e inovadoras.
        </p>

       
        <form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
            className="w-full px-4 py-3 rounded-lg border border-transparent text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-green-300"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg font-semibold bg-white text-green-700 hover:bg-green-100 transition"
          >
            Quero começar
          </button>
        </form>

      
        <p className="text-sm opacity-80">Sem compromisso. Retornamos em até 24 horas.</p>
      </div>
    </section>
  );
}
