
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Reviews from './components/Reviews';
import Plans from './components/Plans';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary selection:text-black">
      <Header />
      <main>
        <Hero />
        <Reviews />
        <Plans />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
