import React from 'react';
import { MessageCircle } from 'lucide-react'; // Usaremos este icono para representar WhatsApp

const WhatsappButton: React.FC = () => {
    // El número de teléfono con el código de país
    const phoneNumber = '+50765207865'; 
    
    // El mensaje predefinido que se enviará
    const predeterminedMessage = "Hola DAZ SOLUTIONS CORP, me gustaría obtener más información sobre sus soluciones tecnológicas integrales.";

    // Codificamos el mensaje para que sea seguro en la URL
    const encodedMessage = encodeURIComponent(predeterminedMessage);
    
    // URL completa de WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    return (
        // CONTENEDOR FLOTANTE:
        // 'fixed' lo hace flotante
        // 'bottom-8' y 'right-8' lo posicionan abajo a la derecha
        // 'z-50' asegura que esté por encima de otros elementos (incluso el nav)
        <a
            href={whatsappUrl}
            target="_blank" // Abrir en una nueva pestaña
            rel="noopener noreferrer" // Seguridad al abrir nuevos enlaces
            className="fixed z-50 flex items-center justify-center p-4 text-white transition-all duration-300 transform bg-green-500 rounded-full shadow-2xl cursor-pointer bottom-8 right-8 hover:scale-110 hover:bg-green-600 w-14 h-14 md:w-16 md:h-16" // Ajuste de tamaño para que sea un círculo visible
            aria-label="Contactar por WhatsApp"
        >
            {/* Icono de mensaje o WhatsApp. Se usa 'MessageCircle' si no tienes un icono de WhatsApp */}
            <MessageCircle size={32} className="w-full h-full" />
        </a>
    );
};

export default WhatsappButton;