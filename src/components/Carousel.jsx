import { useEffect, useRef, useState } from "react";
import "../styles/Carousel.css"; // use your CSS file

function Carousel({ images = [], itemsPerView = 4 }) {
  const trackRef = useRef(null);
  const [slides, setSlides] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(itemsPerView);

  // Setup cloned slides
  useEffect(() => {
    if (images.length === 0) return;
    const cloneFirst = images.slice(0, itemsPerView);
    const cloneLast = images.slice(-itemsPerView);
    setSlides([...cloneLast, ...images, ...cloneFirst]);
    setCurrentIndex(itemsPerView);
  }, [images, itemsPerView]);

  // Update slide position
  useEffect(() => {
    if (!trackRef.current || slides.length === 0) return;
    const slideWidth = trackRef.current.children[0].getBoundingClientRect().width;
    trackRef.current.style.transition = "transform 0.5s ease-in-out";
    trackRef.current.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }, [currentIndex, slides]);

  // Handle transition end for infinite loop
  const handleTransitionEnd = () => {
    if (currentIndex >= slides.length - itemsPerView) {
      setCurrentIndex(itemsPerView);
      trackRef.current.style.transition = "none";
      const slideWidth = trackRef.current.children[0].getBoundingClientRect().width;
      trackRef.current.style.transform = `translateX(-${itemsPerView * slideWidth}px)`;
    }
    if (currentIndex < itemsPerView) {
      const newIndex = slides.length - itemsPerView * 2;
      setCurrentIndex(newIndex);
      trackRef.current.style.transition = "none";
      const slideWidth = trackRef.current.children[0].getBoundingClientRect().width;
      trackRef.current.style.transform = `translateX(-${newIndex * slideWidth}px)`;
    }
  };

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        ref={trackRef}
        onTransitionEnd={handleTransitionEnd}
      >
        {slides.map((src, i) => (
          <div className="carousel-slide" key={i}>
            <img src={src} alt={`slide-${i}`} />
          </div>
        ))}
      </div>
      <button
        className="carousel-button prev"
        onClick={() => setCurrentIndex((prev) => prev - 1)}
      >
        &#8249;
      </button>
      <button
        className="carousel-button next"
        onClick={() => setCurrentIndex((prev) => prev + 1)}
      >
        &#8250;
      </button>
    </div>
  );
}

export default Carousel;
