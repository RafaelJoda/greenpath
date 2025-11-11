"use client";

import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A parceria com a EcoFuturo transformou nossa operação — reduzimos 40% dos custos energéticos e fortalecemos nossa imagem de marca.",
      author: "Maria Silva",
      role: "CEO, TechVerde Corp",
    },
    {
      quote:
        "Implementar soluções sustentáveis nunca foi tão simples. O retorno sobre investimento veio em menos de um ano.",
      author: "João Santos",
      role: "Diretor de Sustentabilidade, GreenBiz",
    },
    {
      quote:
        "Com a EcoFuturo atingimos neutralidade de carbono 2 anos antes do previsto. Uma equipe excelente e resultados concretos.",
      author: "Ana Costa",
      role: "VP de Operações, EcoLogistics",
    },
  ];

  return React.createElement(
    "section",
    { className: "py-20 px-4 bg-card" },
    React.createElement(
      "div",
      { className: "container mx-auto text-center space-y-12" },

      // Título da seção
      React.createElement(
        "div",
        { className: "space-y-4" },
        React.createElement(
          "h2",
          { className: "text-4xl font-bold text-foreground" },
          "O que nossos parceiros dizem"
        ),
        React.createElement(
          "p",
          { className: "text-lg text-muted-foreground max-w-2xl mx-auto" },
          "Resultados reais de empresas que escolheram um futuro sustentável."
        )
      ),

      // Depoimentos
      React.createElement(
        "div",
        { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto" },
        testimonials.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className:
                "p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition text-left",
            },
            React.createElement(
              "p",
              { className: "italic text-muted-foreground mb-4" },
              `"${item.quote}"`
            ),
            React.createElement(
              "div",
              { className: "pt-4 border-t border-border" },
              React.createElement(
                "h4",
                { className: "font-semibold text-foreground" },
                item.author
              ),
              React.createElement(
                "span",
                { className: "text-sm text-muted-foreground" },
                item.role
              )
            )
          )
        )
      )
    )
  );
}
