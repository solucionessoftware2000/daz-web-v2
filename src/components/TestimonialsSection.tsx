import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  quote: string;
  name: string;
  company: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials: Testimonial[] = [
    {
      quote: "DAZ Solutions transformó completamente nuestra infraestructura. Su equipo profesional y su soporte 24/7 nos han permitido crecer sin preocupaciones tecnológicas.",
      name: "María González",
      company: "TechCorp Solutions"
    },
    {
      quote: "La migración a la nube que realizaron fue impecable. Redujimos costos en un 40% y mejoramos significativamente nuestro rendimiento operativo.",
      name: "Carlos Mendez",
      company: "InnovateLabs"
    },
    {
      quote: "Su sistema de videovigilancia y el soporte técnico han sido fundamentales para la seguridad de nuestras instalaciones. Altamente recomendados.",
      name: "Ana Ruiz",
      company: "SecureNet Industries"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-slate-800 rounded-2xl p-8 md:p-12 text-center border border-slate-700">
                    <Quote className="h-12 w-12 text-cyan-400 mx-auto mb-6" />
                    
                    <blockquote className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <div className="text-xl font-semibold text-white mb-1">
                        {testimonial.name}
                      </div>
                      <div className="text-cyan-400">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 bg-slate-700 hover:bg-slate-600 text-white p-3 rounded-full transition-colors duration-300"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-cyan-400' : 'bg-slate-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;