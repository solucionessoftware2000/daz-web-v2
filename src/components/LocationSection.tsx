import React from 'react';
import { MapPin } from 'lucide-react';

// ⚠️ IMPORTANTE: Esta URL aún debe ser reemplazada por el 'src' del iframe real 
// que obtienes de Google Maps para "Panamá, Betania, Edif. MAA, Piso 1" para que el marcador sea exacto.
const GOOGLE_MAPS_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.6459874042084!2d-79.52680029999999!3d9.004685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8faca9842b4a224f%3A0xb81b29473b3d90e6!2sEdificio%20MAA!5e0!3m2!1ses-419!2spe!4v1759018044830!5m2!1ses-419!2spe"; 


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
          
          {/* Bloque de Dirección (para mantener la información visible) */}
          <div className="flex items-center justify-center mb-4 space-x-3 text-center">
              <MapPin className="flex-shrink-0 w-6 h-6 text-cyan-400" />
              <p className="text-xl font-medium text-gray-300">
                Edificio MAA, Piso 1, Calle principal de Betania, Betania, Panamá
              </p>
          </div>

          {/* Mapa (Ahora ocupa el 100% del ancho) */}
          <div className="w-full overflow-hidden border-2 shadow-2xl rounded-xl border-cyan-500/30">
            <iframe
              src={GOOGLE_MAPS_EMBED_URL}
              width="100%"
              height="550" // Aumento la altura para que luzca más prominente
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de la Oficina en Panamá"
              className="transition-opacity duration-500 grayscale contrast-125 opacity-90 hover:opacity-100"
            ></iframe>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default LocationSection;