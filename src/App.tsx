import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ClientSection from './components/ClientSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import StatsSection from './components/StatsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsappButton from './components/WhatsappButton';
import LocationSection from './components/LocationSection';
import FeaturedServicesModal from './components/FeaturedServicesModal';

function App() {
  return (
    <div className="min-h-screen">
			<FeaturedServicesModal />
			<WhatsappButton />
      <Header />
      <HeroSection />
      <ClientSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
			<LocationSection />
      <Footer />
    </div>
  );
}

export default App;