
import React from 'react';
import { IMAGES } from '../constants';

const Hero: React.FC = () => {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center animate-fade-in scale-105" 
        style={{ 
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.9)), url("${IMAGES.hero}")` 
        }}
      />
      <div className="relative z-10 max-w-[1000px] px-6 text-center">
        <div className="inline-block border-2 border-primary px-4 py-1 mb-6 animate-fade-in-up">
           <span className="text-primary text-xs font-black uppercase tracking-[0.4em]">Personal Coaching System</span>
        </div>
        <h1 className="text-white text-6xl md:text-8xl font-black leading-[0.9] tracking-tighter mb-8 uppercase italic animate-fade-in-up">
          ALCANZÁ TU<br/><span className="text-primary">MÁXIMO NIVEL</span>
        </h1>
        <p className="text-gray-200 text-lg md:text-2xl max-w-2xl mx-auto mb-12 font-medium animate-fade-in-up-delay opacity-0 [animation-fill-mode:forwards]">
          Transformamos tu esfuerzo en resultados reales. Con MOVE, el entrenamiento funcional se adapta a tu vida, no al revés.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center animate-fade-in-up-delay opacity-0 [animation-fill-mode:forwards]">
          <a 
            href="#contact"
            onClick={(e) => scrollTo(e, 'contact')}
            className="flex items-center justify-center min-w-[220px] bg-primary text-black h-16 rounded-lg text-lg font-black uppercase tracking-widest hover:scale-105 hover:bg-white transition-all duration-300 shadow-xl shadow-primary/20"
          >
            Empezar hoy
          </a>
          <a 
            href="#plans"
            onClick={(e) => scrollTo(e, 'plans')}
            className="min-w-[220px] flex items-center justify-center border-2 border-white/20 text-white h-16 rounded-lg text-lg font-black uppercase tracking-widest hover:scale-105 hover:bg-white/10 hover:border-white transition-all duration-300"
          >
            Ver mis planes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
