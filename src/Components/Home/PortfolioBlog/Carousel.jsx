import React, { useState } from 'react';

const Carousel = ({ mobile }) => {
  const [activeItemOne, setActiveItemOne] = useState('item-4');

  const handleClick = (itemId) => {
    setActiveItemOne(itemId);
  };

  return (
    <div>
    
    {
      mobile?
        <div>
      < div className = "container__sliderTwo" >
    <div className="containerTwo">
      <input type="radio" name="sliderTwo" id="item-4" checked={activeItemOne === 'item-4'} />
      <input type="radio" name="sliderTwo" id="item-5" checked={activeItemOne === 'item-5'} />
      <input type="radio" name="sliderTwo" id="item-6" checked={activeItemOne === 'item-6'} />
      <div className="cardsTwo">
        <label className="cardTwo" htmlFor="item-4" id="selector-4" onClick={() => handleClick('item-4')}>
          <img src="/assets/portfolio/portfolio2.png" alt="Image 1" />
        </label>
        <label className="cardTwo" htmlFor="item-2" id="selector-5" onClick={() => handleClick('item-5')}>
          <img src="/assets/portfolio/portfolio1.png" alt="Image 2" />
        </label>
        <label className="cardTwo" htmlFor="item-3" id="selector-6" onClick={() => handleClick('item-6')}>
          <img src="/assets/portfolio/portfolio5.png" alt="Image 3" />
        </label>
      </div>
    </div>
      </div >

  <style jsx>{`

        .carousel{
          dispaly:none;
        }

        .container__sliderTwo {
          max-width: 1000px;
          height: 250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 30px 10px;
        }

        input[type='radio'] {
          display: none;
        }

        .containerTwo {
          width: 100%;
          max-width: 500px;
          height: 100%;
          max-height: 230px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cardsTwo {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .cardTwo {
          position: absolute;
          width: 60%;
          height: 100%;
          left: 0;
          right: 0;
          margin: auto;
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
        }

        img {
          width: 100%;
          height: 100%;
          border-radius: 10px;
          -o-object-fit: cover;
          object-fit: cover;                        
        }

        #item-5:checked ~ .cardsTwo #selector-4,
        #item-4:checked ~ .cardsTwo #selector-6,
        #item-6:checked ~ .cardsTwo #selector-5 {
          transform: translateX(-60%) scale(0.8);
          opacity: 0.6;
          z-index: 0;
        }

        #item-6:checked ~ .cardsTwo #selector-4,
        #item-4:checked ~ .cardsTwo #selector-5,
        #item-5:checked ~ .cardsTwo #selector-6 {
          transform: translateX(60%) scale(0.8);
          opacity: 0.6;
          z-index: 0;
        }

        #item-4:checked ~ .cardsTwo #selector-4,
        #item-5:checked ~ .cardsTwo #selector-5,
        #item-:checked ~ .cardsTwo #selector-6 {
          transform: translateX(0) scale(1);
          z-index: 1;
        }
      `}</style>
    </div > : ''
    }
    </div>
    
  );
};

export default Carousel;