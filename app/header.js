"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 dark:bg-white/20 backdrop-blur-md border-b border-green-400/30 shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
     
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-lg shadow-green-400/50 shadow-md animate-pulse" />
          <h1 className="text-2xl font-semibold text-green-300 dark:text-green-700 tracking-widest select-none">
            Eco<span className="text-green-500">Futuro</span>
          </h1>
        </div>

      
        <nav className="hidden md:flex gap-8 text-green-200 dark:text-green-700 text-sm font-medium">
          {["Início", "Sobre", "Projetos", "Blog", "Contato"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-green-400 transition-all group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full border border-green-400/40 text-green-300 dark:text-green-700 hover:bg-green-400/10 transition-colors"
          >
            {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button className="px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold rounded-full shadow-lg shadow-green-400/20 hover:scale-105 transition-transform">
            Participe
          </button>
        </div>

      
        <button
          className="md:hidden text-green-300 dark:text-green-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-black/80 dark:bg-white/80 backdrop-blur-md border-t border-green-400/20 transition-colors">
          <nav className="flex flex-col items-center gap-4 py-6 text-green-200 dark:text-green-700">
            {["Início", "Sobre", "Projetos", "Blog", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="hover:text-green-400 transition-colors"
              >
                {item}
              </a>
            ))}

            <div className="flex gap-3 mt-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full border border-green-400/40 text-green-300 dark:text-green-700 hover:bg-green-400/10 transition-colors"
              >
                {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button className="px-5 py-2 bg-gradient-to-r from-green-400 to-emerald-600 text-black font-semibold rounded-full shadow-md hover:scale-105 transition-transform">
                Participe
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
