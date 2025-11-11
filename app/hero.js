"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return React.createElement(
    "section",
    { className: "pt-32 pb-20 px-4" },
    React.createElement(
      "div",
      { className: "container mx-auto" },
      React.createElement(
        "div",
        { className: "max-w-4xl mx-auto text-center space-y-8" },

        React.createElement(
          Badge,
          { className: "bg-primary/10 text-primary border-primary/20" },
          "O Futuro Sustentável Começa Hoje"
        ),

        React.createElement(
          "h1",
          {
            className:
              "text-5xl md:text-7xl font-bold text-foreground leading-tight text-balance",
          },
          "Transforme seu negócio com ",
          React.createElement("span", { className: "text-primary" }, "economia verde")
        ),

        React.createElement(
          "p",
          {
            className:
              "text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty",
          },
          "Conectamos empresas a soluções sustentáveis que reduzem custos, geram impacto positivo e constroem um futuro melhor para todos."
        ),

        React.createElement(
          "div",
          { className: "flex flex-col sm:flex-row gap-4 justify-center" },
          React.createElement(
            Button,
            { size: "lg", className: "text-base" },
            "Agendar Consulta Gratuita",
            React.createElement(ArrowRight, { className: "ml-2 h-5 w-5" })
          ),
          React.createElement(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "text-base bg-transparent",
            },
            "Ver Projetos"
          )
        )
      )
    )
  );
}
