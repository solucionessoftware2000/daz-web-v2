import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.message.trim()) {
      alert('Por favor, completa todos los campos.');
      return;
    }

    const phoneNumber = '+50765207865'; // Costa Rica code + phone number
    const message = `Hola, soy ${formData.name.trim()}, mi mensaje es: ${formData.message.trim()}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-slate-800">
            Hablemos de tu Proyecto
          </h2>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </div>

        <div className="grid max-w-6xl gap-12 mx-auto md:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-slate-800">
                Información de Contacto
              </h3>
              <p className="mb-8 text-gray-600">
                Estamos aquí para ayudarte. Contáctanos y descubre cómo podemos transformar tu negocio con nuestras soluciones tecnológicas.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-cyan-500">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Teléfono</h4>
                  <p className="text-gray-600">+507 6520-7865</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="p-3 rounded-lg bg-cyan-500">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-800">Correo Electrónico</h4>
                  <p className="text-gray-600">atenciones@daz-solutions.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-8 bg-white shadow-lg rounded-2xl">
            <form onSubmit={handleWhatsAppSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-semibold text-slate-800">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Tu nombre completo"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-semibold text-slate-800">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 transition-all duration-300 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                  placeholder="Cuéntanos sobre tu proyecto o necesidad..."
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center justify-center w-full px-6 py-4 space-x-2 font-semibold text-white transition-all duration-300 transform rounded-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 hover:scale-105 hover:shadow-lg"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Enviar por WhatsApp</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;