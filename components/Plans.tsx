
import React from 'react';
import { MAIN_PLAN } from '../constants';

const Plans: React.FC = () => {
  return (
    <section id="plans" className="bg-surface-dark/50 py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-white text-4xl font-black uppercase mb-4 italic">Plan Personalizado</h2>
          <p className="text-primary font-semibold text-lg uppercase tracking-widest">La opción para el cambio está acá</p>
        </div>
        
        <div className="max-w-3xl mx-auto bg-background-dark border-4 border-primary p-8 md:p-12 rounded-2xl shadow-2xl relative">
          {MAIN_PLAN.tag && (
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-primary text-black font-black px-8 py-2 rounded-full uppercase italic text-sm tracking-widest shadow-xl">
              {MAIN_PLAN.tag}
            </div>
          )}
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-black mb-6 text-white uppercase italic">{MAIN_PLAN.name}</h3>
              <ul className="space-y-4">
                {MAIN_PLAN.features.map((feature) => (
                  <li key={feature.id} className="flex items-center gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-primary font-bold">check_circle</span>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="text-center md:border-l border-border-gray md:pl-12">
              <p className="text-gray-500 line-through text-xl mb-1">${MAIN_PLAN.originalPrice}/mes</p>
              <div className="flex flex-col mb-8">
                <span className="text-6xl font-black text-white tracking-tighter">${MAIN_PLAN.price}</span>
                <span className="text-sm font-bold uppercase tracking-widest text-primary mt-1">Precio Lanzamiento</span>
              </div>
              <a 
                href="#contact"
                className="block text-center w-full bg-primary text-black py-4 rounded-xl font-black uppercase text-lg hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                Quiero este plan
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plans;
