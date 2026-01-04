import { useState, useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import StatsCounter from './components/StatsCounter';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Navigation scrolled={scrolled} />
      <Hero />
      <TrustSignals />
      <StatsCounter />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
