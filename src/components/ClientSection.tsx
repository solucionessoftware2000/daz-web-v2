import React from 'react';

const ClientSection: React.FC = () => {
  const clients = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLabs', logo: 'IL' },
    { name: 'DataSolutions', logo: 'DS' },
    { name: 'CloudFirst', logo: 'CF' },
    { name: 'SecureNet', logo: 'SN' },
    { name: 'Digital Plus', logo: 'DP' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl text-gray-600 mb-12 font-medium">
          Empresas que confían en nosotros
        </h2>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-infinite space-x-12">
            {[...clients, ...clients].map((client, index) => (
              <div
                key={`${client.name}-${index}`}
                className="flex-shrink-0 w-32 h-20 bg-white rounded-lg shadow-md flex items-center justify-center group hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-400 group-hover:from-cyan-400 group-hover:to-blue-500 rounded-lg flex items-center justify-center transition-all duration-300">
                  <span className="text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {client.logo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;