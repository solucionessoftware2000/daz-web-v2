import React from 'react';

const ClientSection: React.FC = () => {
  const certifications = [
    { name: 'Adobe', src: '/certificaciones/adobe.png' },
    { name: 'Adobe Logos', src: '/certificaciones/adobe_logos.jpg' },
    { name: 'Cisco CCIE', src: '/certificaciones/CISCO_CCIE.png' },
    { name: 'Cisco CCNA', src: '/certificaciones/CISCO_CCNA.png' },
    { name: 'Cisco CCNP', src: '/certificaciones/CISCO_CCNP.png' },
    { name: 'Cisco Security', src: '/certificaciones/CISCO_SECURITY.png' },
    {
      name: 'Dahua Technology',
      src: '/certificaciones/Dahua_Technology_logo.svg.png',
    },
    { name: 'Fortinet', src: '/certificaciones/Fortinet_Logo.png' },
    { name: 'Google 2015', src: '/certificaciones/Google_2015_logo.svg.png' },
    { name: 'Hikvision', src: '/certificaciones/hikvision_logo.png' },
    { name: 'Logo Cisco', src: '/certificaciones/LOGO_CISCO.jpg' },
    { name: 'Logo Cisco 2', src: '/certificaciones/logo_cisco_2.jpg' },
    { name: 'Logo UniFi', src: '/certificaciones/logo_UniFi.webp' },
    { name: 'Microsoft', src: '/certificaciones/microsoft_logo.webp' },
    {
      name: 'Microsoft Azure',
      src: '/certificaciones/Microsoft-Azure-Logo.png',
    },
    {
      name: 'Nexxt Solutions',
      src: '/certificaciones/Nexxt-Solutions_logo.jpg',
    },
    { name: 'Ubiquiti', src: '/certificaciones/Ubiquiti_Logo.png' },
    {
      name: 'UniFi UFSP UWA',
      src: '/certificaciones/UWA_LOGO.png',
    },
    { name: 'UniFi UNS', src: '/certificaciones/UNIFI_UNS.webp' },
    { name: 'UNMS UniFi', src: '/certificaciones/UNMS_UNIFI.png' },
    { name: 'VMware', src: '/certificaciones/vmware_logo.jpg' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 mx-auto">
        <h2 className="mb-12 text-2xl font-medium text-center text-gray-600">
          Certificaciones y tecnologías que respaldan nuestro trabajo
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex w-max space-x-6 animate-scroll-infinite">
            {[...certifications, ...certifications].map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group flex-shrink-0 w-40 h-24 px-4 bg-white border border-gray-100 shadow-sm rounded-xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  loading="lazy"
                  className="object-contain max-w-full max-h-14 transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;