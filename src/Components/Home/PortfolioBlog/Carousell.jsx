import React, { useState } from 'react';

const Carousell = () => {
  const [activeItem, setActiveItem] = useState('item-1');

  const handleClick = (itemId) => {
    setActiveItem(itemId); 
  };

  return (
    <div>
      <div className="container__slider">
        <div className="container">
          <input type="radio" name="slider" id="item-1" checked={activeItem === 'item-1'} />
          <input type="radio" name="slider" id="item-2" checked={activeItem === 'item-2'} />
          <input type="radio" name="slider" id="item-3" checked={activeItem === 'item-3'} />
          <div className="cards">
            <label className="card" htmlFor="item-1" id="selector-1" onClick={() => handleClick('item-1')}>
              <img src="/assets/Blog/img1.png" alt="Image 1" />
            </label>
            <label className="card" htmlFor="item-2" id="selector-2" onClick={() => handleClick('item-2')}>
              <img src="/assets/Blog/img2.png" alt="Image 2" />
            </label>
            <label className="card" htmlFor="item-3" id="selector-3" onClick={() => handleClick('item-3')}>
              <img src="/assets/Blog/img3.png" alt="Image 3" />
            </label>
          </div>
        </div>
      </div>

      <style jsx>{`
        .container__slider {
          max-width: 1000px;
          height: 250px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 10px;
        }

        input[type='radio'] {
          display: none;
        }

        .container {
          width: 100%;
          max-width: 500px;
          height: 100%;
          max-height: 230px;
          transform-style: preserve-3d;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .cards {
          position: relative;
          width: 100%;
          height: 100%;
        }

        .card {
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

        #item-2:checked ~ .cards #selector-1,
        #item-1:checked ~ .cards #selector-3,
        #item-3:checked ~ .cards #selector-2 {
          transform: translateX(-60%) scale(0.8);
          opacity: 0.6;
          z-index: 0;
        }

        #item-3:checked ~ .cards #selector-1,
        #item-1:checked ~ .cards #selector-2,
        #item-2:checked ~ .cards #selector-3 {
          transform: translateX(60%) scale(0.8);
          opacity: 0.6;
          z-index: 0;
        }

        #item-1:checked ~ .cards #selector-1,
        #item-2:checked ~ .cards #selector-2,
        #item-3:checked ~ .cards #selector-3 {
          transform: translateX(0) scale(1);
          z-index: 1;
        }
      `}</style>
    </div>
  );
};

export default Carousell;