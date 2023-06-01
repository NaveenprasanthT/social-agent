// Carousel
// /assets/tempImg.png
import { useState } from 'react';

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(2); // Starting index of the center slide

  const handleSlideChange = (index) => {
    setActiveIndex(index);
  };

  const renderSlides = () => {
    const slideData = [
      { src: '/assets/tempImg.png', alt: 'Slide 1' },
      { src: '/assets/tempImg.png', alt: 'Slide 2' },
      { src: '/assets/tempImg.png', alt: 'Slide 3' },
      { src: '/assets/tempImg.png', alt: 'Slide 4' },
      { src: '/assets/tempImg.png', alt: 'Slide 5' },
      { src: '/assets/tempImg.png', alt: 'Slide 6' },
    ];

    return slideData.map((slide, index) => (
      <div
        key={index}
        className={`slide ${index === activeIndex ? 'active' : ''}`}
      >
        <img style={{width: '100px'}} src={slide.src} alt={slide.alt} />
      </div>
    ));
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        {renderSlides()}
      </div>
      <div className="indicators">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className={`indicator ${index === activeIndex ? 'active' : ''}`}
            onClick={() => handleSlideChange(index)}
          />
        ))}
      </div>
      <style jsx>{`
        .carousel-wrapper {
          max-width: 400px;
          margin: 0 auto;
        }
        
        .carousel {
          display: flex;
          overflow: hidden;
          width: 100%;
          height: 300px;
          position: relative;
        }
        
        .slide {
          flex: 0 0 33.33%;
          transition: transform 0.3s;
        }
        
        .slide.active {
          transform: scale(1.2);
        }
        
        .slide img {
          width: 100%;
          height: auto;
        }
        
        .indicators {
          display: flex;
          justify-content: center;
          margin-top: 10px;
        }
        
        .indicator {
          width: 10px;
          height: 10px;
          background: #ccc;
          margin: 0 5px;
          border-radius: 50%;
          cursor: pointer;
        }
        
        .indicator.active {
          background: #333;
        }
      `}</style>
    </div>
  );
}
