
import React, { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Carousel = ({ children, className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const items = React.Children.toArray(children);
  const totalItems = items.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
  }, [totalItems]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
  };
  
  // Optional: Auto-play functionality
  // useEffect(() => {
  //   const timer = setInterval(nextSlide, 5000);
  //   return () => clearInterval(timer);
  // }, [nextSlide]);

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <div className="relative h-full">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="w-full h-full absolute inset-0"
          >
            {items[currentIndex]}
          </motion.div>
        </AnimatePresence>
      </div>
      <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full z-10">
        <ArrowLeft className="h-5 w-5 text-gray-800" />
      </button>
      <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/50 hover:bg-white/80 p-2 rounded-full z-10">
        <ArrowRight className="h-5 w-5 text-gray-800" />
      </button>
       <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${currentIndex === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white'}`}
          />
        ))}
      </div>
    </div>
  );
};

export const CarouselItem = ({ children, className }) => (
  <div className={`w-full h-full ${className}`}>{children}</div>
);
