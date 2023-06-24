import Image from "next/image";
import styles from "@/styles/ServicesPage/Carousel.module.css";

import Search from '../../../../public/assets/Search.png';
import Influencer from '../../../../public/assets/Influencer.png';
import Social from '../../../../public/assets/Social.png';
import UX from '../../../../public/assets/UX.png';
import Website from '../../../../public/assets/Website.png';
import { useEffect, useState } from "react";
import Link from "next/link";

function Work() {
  const [img1, setImg1] = useState(Search);
  const [img2, setImg2] = useState(Social);
  const [img3, setImg3] = useState(Influencer);
  const [img4, setImg4] = useState(UX);
  const [img5, setImg5] = useState(Website);

  const [isMouseEntered, setIsMouseEntered] = useState(false);

  const handleMouseEnter = () => {
    setIsMouseEntered(true);
  };

  const handleMouseLeave = () => {
    setIsMouseEntered(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
        if (!isMouseEntered) {
        const temp = img5;
        setImg5(img4);
        setImg4(img3);
        setImg3(img2);
        setImg2(img1);
        setImg1(temp);
        }
    }, 3500);

    return () => {
      clearInterval(interval);
    };
  });

  const handleClick1 = () => {
    const temp = img5;
    setImg5(img4);
    setImg4(img3);
    setImg3(img2);
    setImg2(img1);
    setImg1(temp);

    const delayedFunction = () => {
      const temp = img4;
      setImg5(img3);
      setImg4(img2);
      setImg3(img1);
      setImg2(img5);
      setImg1(temp);
    };

    const delay = 1000;

    const timeoutId = setTimeout(delayedFunction, delay);

    return () => clearTimeout(timeoutId);
  }

  const handleClick2 = () => {
    const delayedFunction = () => {
      const temp = img5;
      setImg5(img4);
      setImg4(img3);
      setImg3(img2);
      setImg2(img1);
      setImg1(temp);
    };

    const delay = 300;

    const timeoutId = setTimeout(delayedFunction, delay);
    return () => clearTimeout(timeoutId);
  }

  const handleClick4 = () => {
    const delayedFunction = () => {
      const temp = img1;
      setImg5(temp);
      setImg4(img5);
      setImg3(img4);
      setImg2(img3);
      setImg1(img2);
    };

    const delay = 300;

    const timeoutId = setTimeout(delayedFunction, delay);
    return () => clearTimeout(timeoutId);
  }

  const handleClick5 = () => {
    const temp = img1;
      setImg5(temp);
      setImg4(img5);
      setImg3(img4);
      setImg2(img3);
      setImg1(img2);
    const delayedFunction = () => {
      const temp = img3;
      setImg5(img2);
      setImg4(img1);
      setImg3(img5);
      setImg2(img4);
      setImg1(temp);
    };

    const delay = 1000;

    const timeoutId = setTimeout(delayedFunction, delay);
    return () => clearTimeout(timeoutId);
  }
  
  return (
    <div className={styles.mainContent}>
      <h1>Our Works</h1>
      <div className={styles.container}>
        <div 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick1}
          >
          <Image src={img1} alt=""/>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick2}
        >
          <Image src={img2} alt=""/>
        </div>
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick2}
        >
          <Image src={img3} alt=""/>
        </div>
        <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick4}
        >
          <Image src={img4} alt=""/>
        </div>
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick5}
        >
          <Image src={img5} alt=""/>
        </div>
      </div>
      <Link href="/Portfolio">
      </Link>
    </div>
  );
}

export default Work;