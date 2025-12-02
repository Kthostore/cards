import { ReactNode, useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [slidesPerView, setSlidesPerView] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const totalSlides = children.length;
  
  // Update slides per view based on window width
  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 768) {
        setSlidesPerView(1); // Mobile
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(2); // Tablet
      } else {
        setSlidesPerView(3); // Desktop
      }
    };

    updateSlidesPerView();
    window.addEventListener('resize', updateSlidesPerView);
    return () => window.removeEventListener('resize', updateSlidesPerView);
  }, []);
  
  // Clone slides for infinite effect based on slidesPerView
  const clonedChildren = [
    ...children.slice(-slidesPerView),  // Last slides at the beginning
    ...children,                         // Original slides
    ...children.slice(0, slidesPerView)  // First slides at the end
  ];

  const goToNext = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev + 1);
  };

  const goToPrev = () => {
    if (!isTransitioning) return;
    setCurrentIndex((prev) => prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index + slidesPerView); // Offset by slidesPerView because of cloned slides
  };

  // Touch event handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchEnd(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50; // Minimum distance for a swipe
    
    if (Math.abs(distance) < minSwipeDistance) return;
    
    if (distance > 0) {
      // Swiped left - go to next
      goToNext();
    } else {
      // Swiped right - go to previous
      goToPrev();
    }
    
    setTouchStart(0);
    setTouchEnd(0);
  };

  // Handle infinite loop
  useEffect(() => {
    if (currentIndex === 0) {
      // At the cloned end slides, jump to real end
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(totalSlides);
      }, 500);
    } else if (currentIndex === totalSlides + slidesPerView) {
      // At the cloned start slides, jump to real start
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(slidesPerView);
      }, 500);
    }

    const timer = setTimeout(() => {
      setIsTransitioning(true);
    }, 50);

    return () => clearTimeout(timer);
  }, [currentIndex, totalSlides, slidesPerView]);

  // Reset to initial position when slidesPerView changes
  useEffect(() => {
    setIsTransitioning(false);
    setCurrentIndex(slidesPerView);
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }, [slidesPerView]);

  // Get the actual slide index for dots (accounting for clones)
  const getActualIndex = () => {
    if (currentIndex < slidesPerView) return totalSlides + currentIndex - slidesPerView;
    if (currentIndex >= totalSlides + slidesPerView) return currentIndex - totalSlides - slidesPerView;
    return currentIndex - slidesPerView;
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-cyan-500/80 rounded-full flex items-center justify-center transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 md:w-12 md:h-12 bg-black/50 hover:bg-cyan-500/80 rounded-full flex items-center justify-center transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Slides Container */}
      <div 
        className="overflow-hidden px-12 md:px-0"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          className={`flex ${isTransitioning && !isDragging ? 'transition-transform duration-500 ease-out' : ''}`}
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesPerView)}%)`,
          }}
        >
          {clonedChildren.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2 md:px-3"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
              index === getActualIndex()
                ? "bg-cyan-500 w-6 md:w-8"
                : "bg-cyan-500/40 hover:bg-cyan-500/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}