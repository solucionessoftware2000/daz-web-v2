import React from 'react';
import { Users, Target, Headphones } from 'lucide-react';

const WhyChooseUsSection: React.FC = () => {
  const benefits = [
    {
      icon: <Users className="h-12 w-12" />,
      title: 'Equipo Experto',
      description: 'Contamos con profesionales certificados para garantizar la excelencia en cada proyecto.'
    },
    {
      icon: <Target className="h-12 w-12" />,
      title: 'Soluciones a la Medida',
      description: 'Analizamos tus necesidades para ofrecerte soluciones personalizadas, no paquetes genéricos.'
    },
    {
      icon: <Headphones className="h-12 w-12" />,
      title: 'Soporte Proactivo',
      description: 'Monitoreamos tus sistemas para anticiparnos a los problemas antes de que ocurran.'
    }
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Tu Socio Estratégico en Tecnología
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-cyan-100">
                <div className="text-cyan-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;