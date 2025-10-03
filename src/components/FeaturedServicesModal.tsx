import React, { useState, useEffect } from "react";
import { X, ArrowLeft, ArrowRight, MessageCircle } from "lucide-react";

// Las URLS y WHATSAPP_NUMBER se mantienen igual
const SECURITY_IMAGE_URL =
  "https://techassist24.com/wp-content/uploads/2025/03/tenweb_media_rj9fdyuwi.webp";
const NUBE_IMAGE_URL =
  "https://whitestack.com/wp-content/uploads/2024/04/Cloud-computing_img-01.webp";
const SOPORTE_IMAGE_URL =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRodIeKrrVra_MygHitIThkyczsFnSbQPFhnQ&s";
const WHATSAPP_NUMBER = "+50765207865";

// --- Datos de los Servicios Destacados ---
const featuredServices = [
  {
    name: "Ciberseguridad Proactiva",
    image: SECURITY_IMAGE_URL,
    description:
      "Sistemas de seguridad integral para proteger sus activos 24/7.",
    whatsappMessage:
      "Hola, me gustaría recibir más información sobre sus servicios de Ciberseguridad Proactiva.",
  },
  {
    name: "Soluciones Cloud",
    image: NUBE_IMAGE_URL,
    description:
      "Escalabilidad y eficiencia con soluciones Cloud y optimización de costos.",
    whatsappMessage:
      "Hola, me gustaría recibir más información sobre sus Soluciones Cloud.",
  },
  {
    name: "Soporte TI | 24/7",
    image: SOPORTE_IMAGE_URL,
    description:
      "Asistencia técnica continua y monitoreo remoto para toda su infraestructura.",
    whatsappMessage:
      "Hola, me gustaría recibir más información sobre su Soporte TI 24/7.",
  },
];

interface CarouselProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Carousel: React.FC<CarouselProps> = ({ setIsOpen }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentService = featuredServices[currentIndex];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === featuredServices.length - 1 ? 0 : prev + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? featuredServices.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === featuredServices.length - 1 ? 0 : prev + 1
    );
  };

  const getWhatsAppLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
  };

  return (
    <div className="relative w-full h-full">
      {/* Ítem del Carrusel con transición de opacidad (fade) */}
      <div
        key={currentIndex}
        className="relative w-full h-full overflow-hidden animate-fadeIn"
        style={{ animationDuration: "0.6s" }}
      >
        {/* IMAGEN DE FONDO */}
        <img
          src={currentService.image}
          alt={currentService.name}
          className="absolute inset-0 object-cover w-full h-full"
          style={{ filter: "brightness(0.35) contrast(1.2)" }}
        />

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center sm:p-8 bg-black/10">
          <h3 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {currentService.name}
          </h3>
          <p className="max-w-lg mt-2 mb-8 text-base text-gray-300 sm:text-lg">
            {currentService.description}
          </p>

          {/* Botón de WhatsApp */}
          <a
            href={getWhatsAppLink(currentService.whatsappMessage)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center px-8 py-3 space-x-2 font-bold text-lg text-white transition-all duration-300 transform bg-gradient-to-r from-green-500 to-green-600 rounded-lg hover:from-green-600 hover:to-green-700 hover:scale-[1.03] shadow-lg shadow-green-700/50"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Consultar Ahora</span>
          </a>
        </div>

        {/* Flechas */}
        <button
          onClick={prevSlide}
          className="absolute z-20 hidden p-3 text-white transition-colors transform -translate-y-1/2 rounded-full left-4 top-1/2 bg-slate-700/50 hover:bg-slate-700 focus:outline-none sm:block"
          aria-label="Servicio anterior"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute z-20 hidden p-3 text-white transition-colors transform -translate-y-1/2 rounded-full right-4 top-1/2 bg-slate-700/50 hover:bg-slate-700 focus:outline-none sm:block"
          aria-label="Servicio siguiente"
        >
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>

      {/* Puntos */}
      <div className="absolute flex justify-center w-full mt-4 space-x-3 bottom-2">
        {featuredServices.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-cyan-400 ring-2 ring-cyan-400/50 scale-110"
                : "bg-slate-500/70 hover:bg-cyan-400/50"
            }`}
            aria-label={`Ir al servicio ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// ===== Modal con entrada/salida animada =====
const FeaturedServicesModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);   // Montado lógico
  const [enter, setEnter] = useState(false);     // Estado de animación

  // Aparece 3s después, con animación de entrada
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);                 // Monta el modal
      requestAnimationFrame(() => {    // Siguiente frame: dispara transición
        setEnter(true);
      });
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Cerrar con animación de salida
  const handleClose = () => {
    setEnter(false); // dispara animación de salida
  };

  // Cuando la transición termina y estamos en "salida", desmontamos
  const handleTransitionEnd = () => {
    if (!enter) setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    // Backdrop: de transparente -> negro 80%, con fade
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300 ${
        enter ? "bg-black/80 opacity-100" : "bg-black/0 opacity-0 pointer-events-none"
      } backdrop-blur-sm`}
      onTransitionEnd={handleTransitionEnd}
    >
      {/* Panel: de scale-95 + opacidad 0 -> scale-100 + opacidad 100 */}
      <div
        className={`relative w-full max-w-4xl mx-4 overflow-hidden transition-all duration-300 transform rounded-lg h-96 bg-slate-900 shadow-3xl ${
          enter ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2"
        }`}
      >
        {/* Cerrar */}
        <button
          onClick={handleClose}
          className="absolute z-30 p-2 text-white transition-colors top-3 right-3 hover:text-cyan-400 focus:outline-none"
          aria-label="Cerrar ventana"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Carrusel */}
        <Carousel setIsOpen={setIsOpen} />
      </div>
    </div>
  );
};

export default FeaturedServicesModal;
