import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import SlideHero from '../components/slides/SlideHero';
import SlideProblem from '../components/slides/SlideProblem';
import SlideMain from '../components/slides/SlideMain';
import SlideTech from '../components/slides/SlideTech';
import SlideFinal from '../components/slides/SlideFinal';
import { SlideId } from '../types';

const SLIDES: SlideId[] = ['hero', 'problem', 'main', 'tech', 'final'];

export default function Index() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  const currentSlideId = SLIDES[currentSlideIndex];

  return (
    <div className="relative w-full h-screen overflow-hidden bg-background">
      <AnimatePresence mode="wait">
        {currentSlideId === 'hero' && <SlideHero key="hero" onNext={nextSlide} />}
        {currentSlideId === 'problem' && <SlideProblem key="problem" onNext={nextSlide} />}
        {currentSlideId === 'main' && <SlideMain key="main" onNext={nextSlide} />}
        {currentSlideId === 'tech' && <SlideTech key="tech" onNext={nextSlide} />}
        {currentSlideId === 'final' && <SlideFinal key="final" onNext={nextSlide} />}
      </AnimatePresence>

      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 md:gap-4 bg-foreground/10 backdrop-blur-md px-4 py-2 rounded-full border border-foreground/10 shadow-lg">
        <button
          onClick={prevSlide}
          className="text-foreground/50 hover:text-foreground transition-colors p-2 active:scale-95"
        >
          ←
        </button>
        <div className="flex gap-1.5 md:gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'bg-secondary w-5 md:w-6' : 'bg-foreground/20 w-2 hover:bg-foreground/40'}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="text-foreground/50 hover:text-foreground transition-colors p-2 active:scale-95"
        >
          →
        </button>
      </div>
    </div>
  );
}
