import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header: React.FC = () => {
  // Estado para manejar el menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  // ✨ 1. Nuevo estado para manejar el fondo opaco al hacer scroll
  const [isScrolled, setIsScrolled] = useState(false);

  // ✨ 2. useEffect para escuchar el evento de scroll y cambiar el fondo
  useEffect(() => {
    const handleScroll = () => {
      // Activa el fondo si el scroll vertical es mayor a 50px
      const shouldBeScrolled = window.scrollY > 50; 
      if (shouldBeScrolled !== isScrolled) {
        setIsScrolled(shouldBeScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    // ✨ 3. Aplicamos el fondo dinámico y el logo más pequeño cuando se hace scroll
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/90 backdrop-blur-sm shadow-xl border-b border-cyan-500/30" // Fondo oscuro con blur y sombra al hacer scroll
          : "bg-transparent" // Transparente al inicio
      }`}
    >
      <nav className="container flex items-center justify-between px-8 py-4 mx-auto">
        <button
          className="text-xl font-bold"
          onClick={() => scrollToSection("hero")}
        >
          <img
            src="/assets/logo.png"
            alt="DAZ SOLUTIONS CORP Logo"
            // ✨ El logo se reduce al hacer scroll
            className={`w-auto transition-all duration-300 ${
              isScrolled ? "h-16 lg:h-20" : "h-20 sm:h-20 md:h-16 lg:h-36" 
            }`}
          />
        </button>

        {/* Desktop Navigation */}
        <div className="hidden space-x-8 md:flex md:items-center">
          {[
            { label: "Inicio", id: "hero" },
            { label: "Servicios", id: "services" },
            { label: "Por Qué Elegirnos", id: "why-choose-us" },
            { label: "Contacto", id: "contact", isButton: true }, // Marcamos Contacto como botón
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={
                item.isButton 
                  ? // ESTILO DE BOTÓN DESTACADO
                    "px-4 py-2 text-white font-semibold rounded-lg shadow-xl transition-all duration-300 transform hover:scale-105 " +
                    "bg-gradient-to-r from-cyan-500 to-blue-600" // Degradado cian a azul
                  : // ESTILO DE ENLACE NORMAL
                    "relative text-gray-300 transition-colors duration-300 hover:text-cyan-400 group"
              }
            >
              {item.label}
              {/* Mantenemos el underline solo para los enlaces que no son botones */}
              {!item.isButton && (
                <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-cyan-400 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              )}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="text-gray-300 md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="shadow-lg md:hidden bg-slate-800/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-4">
            {[
              { label: "Inicio", id: "hero" },
              { label: "Servicios", id: "services" },
              { label: "Por Qué Elegirnos", id: "why-choose-us" },
              { label: "Contacto", id: "contact" },
            ].map((item) => (
              // Usamos un estilo de botón más sencillo para el menú móvil
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full py-2 text-left text-gray-300 transition-colors duration-300 hover:text-cyan-400 hover:pl-2"
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;