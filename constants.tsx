
import { Review, Plan } from './types';

/**
 * CONFIGURACIÓN DE IMÁGENES
 * Importante: Descargá tu foto y guardala como 'leo-foffani.png' 
 * en la misma carpeta que el archivo index.html.
 */
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  review1: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
  review2: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1974&auto=format&fit=crop",
  review3: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop",
  leo: "/leo.png"
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Nico C.',
    rating: 5,
    imageUrl: IMAGES.review1,
    text: '"Me ayudo a una recomposicion corporal, ganando masa muscular y perdiendo grasa. Una rutina adaptada a mis necesidades y objetivos."'
  },
  {
    id: '2',
    name: 'Juan C.',
    rating: 5,
    imageUrl: IMAGES.review2,
    text: '"Leo me ayudo a mejorar mi tecnica y a ganar fuerza. Un genio. Ademas, me enseño a comer mejor y a cuidar mi cuerpo. Totalmente recomendado"'
  },
  {
    id: '3',
    name: 'Franco C.',
    rating: 5,
    imageUrl: IMAGES.review3,
    text: '"Con las rutinas de Leo pude ganar mucha fuerza y masa muscular, ademas de eliminar dolores que traia hace mucho tiempo. Un genio. Ademas, me enseño a elegir bien que comer y como entrenar."'
  },
  {
    id: '4',
    name: 'Jazmin C.',
    rating: 5,
    imageUrl: IMAGES.review3,
    text: '"Pude lorgrar el cambio fisico que tanto queria, y me siento mas sana y feliz. Gracias Leo!"'
  }
];

export const MAIN_PLAN: Plan = {
  id: 'all-in-one',
  name: 'TODO EN UNO',
  price: 35000,
  originalPrice: 50000,
  tag: 'Más Popular',
  features: [
    { id: 'f1', text: 'Rutina de Entrenamiento Personalizada' },
    { id: 'f2', text: 'Plan de Nutrición a Medida' },
    { id: 'f3', text: 'Soporte 24/7 vía WhatsApp' },
    { id: 'f4', text: 'Seguimiento Semanal de Progreso' },
    { id: 'f5', text: 'Seguimiento presencial en gimnasio' }
  ]
};
