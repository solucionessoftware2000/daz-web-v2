import React from 'react';
import { MapPin } from 'lucide-react';

// Ubicación actualizada del cliente:
// Panamá, Parque Lefevre, Edif. Park Place, Ofc. 207
const GOOGLE_MAPS_EMBED_URL =
  "https://www.google.com/maps?q=PH%20Park%20Place%2C%20Parque%20Lefevre%2C%20Panam%C3%A1&z=17&output=embed";

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-20 text-white bg-slate-900">
      <div className="container px-4 mx-auto">
        
        {/* Título de la Sección */}
        <h2 className="mb-10 text-4xl font-bold text-center md:text-5xl">
          Encuéntranos en Panamá
        </h2>
        
        {/* Contenido principal: Mapa */}
        <div className="flex flex-col gap-8">
          
          {/* Bloque de Dirección */}
          <div className="flex items-center justify-center mb-4 space-x-3 text-center">
            <MapPin className="flex-shrink-0 w-6 h-6 text-cyan-400" />
            <p className="text-xl font-medium text-gray-300">
              Edif. Park Place, Ofc. 207, Parque Lefevre, Panamá
            </p>
          </div>

          {/* Mapa */}
          <div className="w-full overflow-hidden border-2 shadow-2xl rounded-xl border-cyan-500/30">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="550"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Oficina en Parque Lefevre, Panamá"
              className="transition-opacity duration-500 grayscale contrast-125 opacity-90 hover:opacity-100"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationSection;