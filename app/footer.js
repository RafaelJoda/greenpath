"use client";

import React from "react";
import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="transition-colors duration-300 bg-[var(--background)] text-[var(--foreground)] py-12 px-6 border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto grid gap-10 md:grid-cols-3 text-center md:text-left">
        {/* Logo e descrição */}
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-[var(--foreground)]">EcoFuturo</h3>
          <p className="text-sm opacity-80">
            Conectando tecnologia e sustentabilidade para construir um planeta mais verde.
          </p>
        </div>

        {/* Links rápidos */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[var(--foreground)]">Links</h4>
          <ul className="space-y-2">
            <li>
              <a
                href="#projetos"
                className="hover:text-green-500 transition"
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className="hover:text-green-500 transition"
              >
                Sobre Nós
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-green-500 transition"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="space-y-3">
          <h4 className="text-lg font-semibold text-[var(--foreground)]">Conecte-se</h4>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="#" className="hover:text-green-500 transition">
              <Facebook size={22} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Instagram size={22} />
            </a>
            <a href="#" className="hover:text-green-500 transition">
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:contato@EcoFuturo.com"
              className="hover:text-green-500 transition"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Linha de direitos autorais */}
      <div className="mt-10 pt-6 text-center text-sm opacity-70 border-t border-gray-300 dark:border-gray-700">
        © {new Date().getFullYear()} EcoFuturo. Todos os direitos reservados.
      </div>
    </footer>
  );
}
