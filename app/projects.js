"use client";

import React from "react";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Energia Solar Comunitária",
      category: "Energia Renovável",
      impact: "1.200 toneladas de CO₂ economizadas/ano",
      image: "/images/solar-panels-on-community-buildings.jpg",
    },
    {
      title: "Reflorestamento Urbano",
      category: "Biodiversidade",
      impact: "50.000 árvores plantadas",
      image: "/images/urban-forest-reforestation-project.jpg",
    },
    {
      title: "Economia Circular",
      category: "Gestão de Resíduos",
      impact: "80% de redução em aterros",
      image: "/images/circular-economy-recycling-facility.jpg",
    },
    {
      title: "Agricultura Regenerativa",
      category: "Alimentação Sustentável",
      impact: "300 hectares restaurados",
      image: "/images/regenerative-agriculture-organic-farm.jpg",
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted" id="projetos">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Nossos Projetos</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl shadow-lg overflow-hidden hover:scale-[1.02] transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <p className="text-sm font-medium">{project.impact}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
