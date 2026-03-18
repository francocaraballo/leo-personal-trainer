
import { Review, Plan } from './types';

/**
 * CONFIGURACIÓN DE IMÁGENES
 * Importante: Descargá tu foto y guardala como 'leo-foffani.png' 
 * en la misma carpeta que el archivo index.html.
 */
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
  review1: "/reviews/man-blue-shirt.png",
  review2: "/reviews/man-green-shirt.png",
  review3: "/reviews/man-pink-shirt.png",
  review4: "/reviews/man-purple-shirt.png",
  review5: "/reviews/man-red-shirt.png",
  review6: "/reviews/man-white-shirt.png",
  review7: "/reviews/man-blue-shirt.png",
  review8: "/reviews/woman-black-shirt.png",
  review9: "/reviews/woman-grey-shirt.png",
  review10: "/reviews/woman-orange-shirt.png",
  leo: "/leo.png"
};

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Nico C.',
    rating: 5,
    imageUrl: IMAGES.review1,
    text: '"Con el seguimiento nutricional pude lograr una recomposicion corporal, ganando masa muscular y perdiendo grasa. Un genio el Leo"'
  },
  {
    id: '2',
    name: 'Fabio O.',
    rating: 5,
    imageUrl: IMAGES.review2,
    text: '"Una masa las rutinas de Leo, me ayudaron a mejorar mi estado fisico y a sentirme mas saludable. Recomendado al 100%"'
  },
  {
    id: '3',
    name: 'Franco C.',
    rating: 5,
    imageUrl: IMAGES.review4,
    text: '"Me ayudo a la recuperacion de una lesion en el pectoral, un dolor que tuve muchos meses, se tomo el tiempo  de ayudarme en cada entrenamiento y el dolor se me fue. Un crack el Leo"'
  },
  {
    id: '4',
    name: 'Jazmin F.',
    rating: 5,
    imageUrl: IMAGES.review8,
    text: '"Pude lorgrar el cambio fisico que tanto queria, y me siento mas sana y feliz. Gracias Leo!"'
  },
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
