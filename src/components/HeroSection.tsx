import React from 'react';
import { ArrowDown } from 'lucide-react';
// Eliminamos la importación de ParticleBackground ya que será reemplazada por una imagen
// import ParticleBackground from './ParticleBackground';

const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // URL de ejemplo para una imagen de fondo de servidores o TI
  // RECUERDA: Debes reemplazar 'URL_DE_TU_IMAGEN_DE_SERVIDORES' con la URL o la ruta de tu imagen real.
  const imageUrl = 'https://static.vecteezy.com/system/resources/thumbnails/011/582/700/small_2x/server-room-view-photo.jpg'; 

  return (
    <section 
      id="hero" 
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
    >
      {/* Contenedor para la imagen de fondo y el overlay */}
      <div 
        className="absolute inset-0 bg-center bg-cover" 
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        {/* Overlay oscuro y azulado para mantener la estética y mejorar la legibilidad del texto */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100/10 via-slate-800/90 to-slate-100/20 backdrop-blur-sm"></div>
      </div>
      
      {/* Contenido principal (el resto del componente) */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl animate-fade-in-up">
            Transformamos tu Negocio con{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Soluciones Tecnológicas Integrales
            </span>
          </h1>
          
          <p className="mb-8 text-xl text-gray-300 md:text-2xl animate-fade-in-up animation-delay-300">
            Innovación, infraestructura y soporte a la medida de tus necesidades.
          </p>
          
          <button
            onClick={scrollToServices}
            className="inline-flex items-center px-8 py-4 space-x-2 text-lg font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 hover:scale-105 hover:shadow-lg animate-fade-in-up animation-delay-600"
          >
            <span>Explorar Soluciones</span>
            <ArrowDown className="w-5 h-5 ml-2 animate-bounce" />
          </button>
        </div>
      </div>
      
      {/* Indicador de scroll animado */}
      <div className="absolute z-10 transform -translate-x-1/2 bottom-8 left-1/2 animate-bounce">
        <div className="flex justify-center w-6 h-10 border-2 rounded-full border-white/30">
          <div className="w-1 h-3 mt-2 rounded-full bg-white/60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;