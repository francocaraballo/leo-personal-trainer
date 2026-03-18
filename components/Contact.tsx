
import React, { useState } from 'react';
import { IMAGES } from '../constants';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modalState, setModalState] = useState<{isOpen: boolean, type: 'success' | 'error', message: string}>({
    isOpen: false,
    type: 'success',
    message: ''
  });

  const showModal = (type: 'success' | 'error', message: string) => {
    setModalState({ isOpen: true, type, message });
    setTimeout(() => {
      setModalState(prev => ({ ...prev, isOpen: false }));
    }, 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_phone: formData.phone,
          message: formData.message,
        },
        publicKey
      );

      showModal('success', '¡Gracias! Me pondré en contacto con vos pronto.');
      setFormData({ name: '', phone: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      showModal('error', 'Hubo un problema al enviar el mensaje. Por favor, intentá de nuevo o contactame por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 max-w-[1200px] mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1">
          <div className="mb-10">
            <h2 className="text-5xl font-black uppercase mb-3 italic text-white leading-none">
              ¿LISTO PARA <br/><span className="text-primary">EL CAMBIO?</span>
            </h2>
            <p className="text-gray-400 text-lg">Dejá tus datos abajo para que diseñemos juntos tu plan de entrenamiento.</p>
          </div>
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Nombre Completo</label>
              <input 
                className="w-full bg-surface-dark border-border-gray rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 h-16 transition-all outline-none" 
                placeholder="Ingresá tu nombre" 
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">WhatsApp</label>
              <input 
                className="w-full bg-surface-dark border-border-gray rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 h-16 transition-all outline-none" 
                placeholder="+54 9 ..." 
                type="number"
                required
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="group">
              <label className="block text-xs font-black uppercase tracking-[0.2em] text-primary mb-2">Objetivo</label>
              <textarea 
                className="w-full bg-surface-dark border-border-gray rounded-lg focus:border-primary focus:ring-1 focus:ring-primary text-white p-5 transition-all outline-none" 
                placeholder="Contame un poco sobre tus metas..." 
                rows={4}
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className={`w-full h-16 rounded-lg font-black uppercase tracking-widest transition-all duration-300 shadow-xl active:scale-[0.98] ${
                isSubmitting 
                  ? 'bg-gray-600 text-gray-400 cursor-not-allowed' 
                  : 'bg-primary text-black hover:bg-white shadow-primary/10'
              }`}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>
        
        <div className="order-1 md:order-2">
          <div className="relative group">
            {/* Brillo de fondo */}
            <div className="absolute -inset-1 bg-primary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
            
            <div className="relative bg-surface-dark rounded-2xl overflow-hidden border border-border-gray shadow-2xl">
              <img 
                alt="Coach Leo Foffani" 
                className="w-full h-[700px] object-cover object-center filter contrast-[1.05] saturate-[1.1] group-hover:scale-105 transition-all duration-[2000ms]"         
                src={IMAGES.leo} 
                loading="eager"
              />
              
              {/* Overlay con Info */}
              <div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t from-black via-black/90 to-transparent">
                <div className="flex flex-col">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-[2px] w-8 bg-primary"></span>
                    <span className="text-primary text-xs font-black uppercase tracking-[0.3em]">Head Coach</span>
                  </div>
                  <h3 className="text-white font-black text-4xl uppercase italic leading-none mb-1">Leo Foffani</h3>
                  <p className="text-gray-300 font-bold uppercase tracking-widest text-[10px]">Especialista en Funcional & Fitness</p>
                </div>
              </div>
              
              {/* Badge de Verificado */}
              <div className="absolute top-8 right-8 bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-lg">verified</span>
                {/* <span className="text-white text-[10px] font-black uppercase tracking-widest"></span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm transition-opacity">
          <div className={`bg-surface-dark border p-8 rounded-2xl shadow-2xl max-w-md w-full text-center transform transition-all ${modalState.type === 'success' ? 'border-primary/50' : 'border-red-500/50'}`}>
            <div className={`mx-auto flex items-center justify-center h-16 w-16 rounded-full mb-6 ${modalState.type === 'success' ? 'bg-primary/10 text-primary' : 'bg-red-500/10 text-red-500'}`}>
              <span className="material-symbols-outlined text-4xl">
                {modalState.type === 'success' ? 'check_circle' : 'error'}
              </span>
            </div>
            <h3 className="text-2xl font-black uppercase text-white mb-2">
              {modalState.type === 'success' ? '¡Mensaje Enviado!' : 'Error'}
            </h3>
            <p className="text-gray-400 text-lg">
              {modalState.message}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
