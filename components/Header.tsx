
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'reviews', 'plans', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
      window.history.pushState(null, '', `#${targetId}`);
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'reviews', label: 'Reseñas' },
    { id: 'plans', label: 'Planes' },
    { id: 'contact', label: 'Contacto' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border-gray bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="material-symbols-outlined text-primary text-3xl font-black">keyboard_double_arrow_up</span>
          </div>
          <h2 className="text-xl font-black tracking-tighter uppercase italic text-white flex flex-col leading-none">
            <span className="text-primary text-2xl">Peak</span>
            <span className="text-[10px] tracking-[0.3em] font-bold">Leo Foffani</span>
          </h2>
        </div>
        
        <nav className="hidden md:flex flex-1 justify-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`relative py-2 text-sm font-bold uppercase tracking-wider transition-colors duration-500 overflow-hidden group ${
                activeSection === link.id ? 'text-primary' : 'text-white hover:text-primary'
              }`}
            >
              {link.label}
              <span 
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-500 ease-out origin-center ${
                  activeSection === link.id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="flex items-center">
          <a 
            href="#contact"
            onClick={(e) => handleNavClick(e, 'contact')}
            className="bg-primary text-black px-6 py-2 rounded-lg text-sm font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg shadow-primary/20"
          >
            Entrenar ahora
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
