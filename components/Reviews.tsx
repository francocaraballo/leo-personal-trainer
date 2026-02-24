
import React, { useState, useEffect, useCallback, useRef } from 'react';
import { REVIEWS } from '../constants';

const Reviews: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Check if we are on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  }, []);

  // Auto-scroll for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(nextSlide, 2000); // Change review every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isMobile, nextSlide]);

  // For desktop, we calculate how many slides to show
  const visibleReviews = isMobile ? 1 : Math.min(3, REVIEWS.length);
  
  // Slide calculation: we want to show 'visibleReviews' at a time
  // On desktop, we want to slide one by one or by sets? 
  // The user asked for "flecha a cada lado para scrollear horizontalmente a las demas".
  // Let's implement a sliding container.

  return (
    <section id="reviews" className="py-24 px-6 max-w-[1200px] mx-auto overflow-hidden">
      <div className="flex items-center gap-4 mb-12">
        <div className="h-1 w-12 bg-primary"></div>
        <h2 className="text-3xl font-bold uppercase tracking-tight text-white">Testimonios de Éxito</h2>
      </div>

      <div className="relative group/carousel">
        {/* Navigation arrows for desktop - Left */}
        {!isMobile && REVIEWS.length > 3 && (
          <button 
            onClick={prevSlide}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background-dark/80 border border-border-gray rounded-full hover:bg-primary hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined block">chevron_left</span>
          </button>
        )}

        {/* Navigation arrows for desktop - Right */}
        {!isMobile && REVIEWS.length > 3 && (
          <button 
            onClick={nextSlide}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-background-dark/80 border border-border-gray rounded-full hover:bg-primary hover:text-black transition-all opacity-0 group-hover/carousel:opacity-100 focus:opacity-100"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined block">chevron_right</span>
          </button>
        )}

        <div 
          ref={scrollContainerRef}
          className="flex transition-transform duration-500 ease-in-out"
          style={{ 
            transform: `translateX(-${currentIndex * (100 / visibleReviews)}%)`,
          }}
        >
          {REVIEWS.map((review) => (
            <div 
              key={review.id} 
              className={`flex-shrink-0 px-4 transition-all duration-500`}
              style={{ width: `${100 / visibleReviews}%` }}
            >
              <div className="bg-surface-dark border border-border-gray p-8 rounded-xl hover:border-primary/50 transition-colors group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="size-16 rounded-full bg-cover bg-center border-2 border-primary group-hover:scale-105 transition-transform" 
                    style={{ backgroundImage: `url("${review.imageUrl}")` }}
                  />
                  <div>
                    <p className="text-lg font-bold text-white">{review.name}</p>
                    <div className="flex items-center text-primary">
                      <span className="text-sm font-bold mr-1">{review.rating.toFixed(1)}</span>
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm">star</span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-400 leading-relaxed">{review.text}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicators for both mobile and desktop (optional but good) */}
        <div className="flex justify-center gap-2 mt-8">
          {REVIEWS.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? 'w-8 bg-primary' : 'w-2 bg-gray-600'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
