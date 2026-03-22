import { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import SlideHero from '../components/slides/SlideHero';
import SlideProblem from '../components/slides/SlideProblem';
import SlideMain from '../components/slides/SlideMain';
import SlideTech from '../components/slides/SlideTech';
import SlideFinal from '../components/slides/SlideFinal';
import { SlideId } from '../types';

const SLIDES: SlideId[] = ['hero', 'problem', 'main', 'tech', 'final'];
const SWIPE_THRESHOLD = 50;

export default function Index() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const mouseStart = useRef<{ x: number; dragging: boolean } | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.min(prev + 1, SLIDES.length - 1));
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlideIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') nextSlide();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStart.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart.current) return;
    const dx = e.changedTouches[0].clientX - touchStart.current.x;
    const dy = e.changedTouches[0].clientY - touchStart.current.y;
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
    touchStart.current = null;
  };

  // Mouse drag swipe (PC)
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseStart.current = { x: e.clientX, dragging: true };
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!mouseStart.current?.dragging) return;
    const dx = e.clientX - mouseStart.current.x;
    if (Math.abs(dx) > SWIPE_THRESHOLD) {
      if (dx < 0) nextSlide();
      else prevSlide();
    }
    mouseStart.current = null;
  };

  const currentSlideId = SLIDES[currentSlideIndex];

  return (
    <div
      className="relative w-full h-screen overflow-hidden bg-background select-none"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <AnimatePresence mode="wait">
        {currentSlideId === 'hero' && <SlideHero key="hero" onNext={nextSlide} />}
        {currentSlideId === 'problem' && <SlideProblem key="problem" onNext={nextSlide} />}
        {currentSlideId === 'main' && <SlideMain key="main" onNext={nextSlide} />}
        {currentSlideId === 'tech' && <SlideTech key="tech" onNext={nextSlide} />}
        {currentSlideId === 'final' && <SlideFinal key="final" onNext={nextSlide} />}
      </AnimatePresence>

      {/* Dot indicators only — no arrows on mobile */}
      <div className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-3 md:gap-4 bg-foreground/10 backdrop-blur-md px-4 py-2 rounded-full border border-foreground/10 shadow-lg">
        <div className="flex gap-1.5 md:gap-2">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlideIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${idx === currentSlideIndex ? 'bg-secondary w-5 md:w-6' : 'bg-foreground/20 w-2 hover:bg-foreground/40'}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
