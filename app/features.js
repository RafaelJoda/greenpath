"use client";

import React from "react";
import { Leaf, BarChart3, Recycle, Globe } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: "Diagnóstico Sustentável",
      desc: "Analisamos o impacto ambiental atual da sua empresa e identificamos oportunidades de melhoria.",
    },
    {
      icon: BarChart3,
      title: "Estratégia Personalizada",
      desc: "Criamos um plano de ação adaptado ao seu negócio, com metas de sustentabilidade e redução de custos.",
    },
    {
      icon: Recycle,
      title: "Implementação Prática",
      desc: "Conectamos você a parceiros e tecnologias que tornam sua operação mais verde e eficiente.",
    },
    {
      icon: Globe,
      title: "Impacto Global",
      desc: "Mensuramos resultados e comunicamos o impacto positivo do seu negócio para o mundo.",
    },
  ];

  return React.createElement(
    "section",
    { className: "py-20 px-4" },
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
          "Como Funciona"
        ),
        React.createElement(
          "p",
          { className: "text-lg text-muted-foreground max-w-2xl mx-auto" },
          "Nossa metodologia une tecnologia, estratégia e sustentabilidade para gerar valor real e impacto duradouro."
        )
      ),

      // Grid de recursos
      React.createElement(
        "div",
        {
          className:
            "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto",
        },
        features.map((item, i) =>
          React.createElement(
            "div",
            {
              key: i,
              className:
                "p-6 rounded-2xl border border-border bg-background/50 backdrop-blur-sm shadow-sm hover:shadow-lg transition",
            },
            React.createElement(item.icon, {
              className: "h-10 w-10 text-primary mx-auto mb-4",
            }),
            React.createElement(
              "h3",
              { className: "text-xl font-semibold mb-2" },
              item.title
            ),
            React.createElement(
              "p",
              { className: "text-sm text-muted-foreground" },
              item.desc
            )
          )
        )
      )
    )
  );
}
