"use client";

import React from "react";

export default function Stats() {
  const stats = [
    { value: "500+", label: "Projetos Sustentáveis" },
    { value: "2M+", label: "Toneladas de CO₂ Reduzidas" },
    { value: "120+", label: "Empresas Parceiras" },
    { value: "15", label: "Países Atendidos" },
  ];

  return React.createElement(
    "section",
    { className: "py-20 bg-muted/30" },
    React.createElement(
      "div",
      { className: "container mx-auto px-4" },
      React.createElement(
        "div",
        {
          className:
            "grid grid-cols-2 md:grid-cols-4 gap-8 text-center max-w-4xl mx-auto",
        },
        stats.map((item, index) =>
          React.createElement(
            "div",
            { key: index, className: "space-y-2" },
            React.createElement(
              "h3",
              { className: "text-4xl font-bold text-primary" },
              item.value
            ),
            React.createElement(
              "p",
              { className: "text-sm text-muted-foreground" },
              item.label
            )
          )
        )
      )
    )
  );
}
