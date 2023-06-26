import { useState, useRef, useEffect } from "react";
import styles from "@/styles/Home/ServicesCarousel.module.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/Io";

const ServicesCarousel = () => {
  // const [isMouseEntered, setIsMouseEntered] = useState(false);
  // console.log(isMouseEntered)

  // const handleMouseEnter = () => {
  //   setIsMouseEntered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsMouseEntered(false);
  // };
  const [currentIndex, setCurrentIndex] = useState(1);
  const cardRef = useRef(null);

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 14);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const renderCards = () => {
    const cardData = [
      {
        id: 1,
        title: <>Social Media<br/> Marketing</>,
        backgroundImage: "url('/images/gradient5.png')",
      },
      {
        id: 2,
        title: <>SEO &<br/> Marketing</>,
        backgroundImage: "url('/images/gradient12.png')",
      },
      {
        id: 3,
        title: <>Influencer<br/>Marketing</>,
        backgroundImage: "url('/images/gradient10.png')",
      },
      {
        id: 4,
        title: <>Website 
        <br/> Development
        </>,
        backgroundImage: "url('/images/gradient2.png')",
      },
      {
        id: 5,
        title: <>Videography/
        <br/> Photography</>
,        backgroundImage: "url('/images/gradient1.png')",
      },
      {
        id: 6,
        title: <>Online reputation/<br/> Management</>,
        backgroundImage: "url('/images/gradient15.png')",
      },
      {
        id: 7,
        title: <>Digital Strategy 
        <br/>& Consultation</>,
        backgroundImage: "url('/images/gradient7.png')",
      },
      {
        id: 8,
        title: <>Branding & <br/> Print Solutions</>,
        backgroundImage: "url('/images/gradient5.png')",
      },
      {
        id: 9,
        title: <>Email<br/>Marketing</>,
        backgroundImage: "url('/images/gradient12.png')",
      },
      {
        id: 10,
        title: <>SMS<br/> Marketing</>,
        backgroundImage: "url('/images/gradient10.png')",
      },
      {
        id: 11,
        title: <>Video<br/>Marketing</>,
        backgroundImage: "url('/images/gradient2.png')",
      },
      {
        id: 12,
        title: <>Content &<br/> Creatives</>,
        backgroundImage: "url('/images/gradient1.png')",
      },
      {
        id: 13,
        title: <>Analytics & <br/> Reports </>,
        backgroundImage: "url('/images/gradient15.png')",
      },
      {
        id: 14,
        title: <>Performance<br/>Marketing<br/></>,
        backgroundImage: "url('/images/gradient7.png')",
      },

    ];

    const visibleCards = 6;
    const totalCards = cardData.length;

    const startIndex = currentIndex;
    const endIndex = (startIndex + visibleCards) % totalCards;

    const visibleCardData =
      startIndex <= endIndex
        ? cardData.slice(startIndex, endIndex)
        : [
          ...cardData.slice(startIndex),
          ...cardData.slice(0, endIndex),
        ];

    return visibleCardData.map((card, index) => {
      const cardIndex = (startIndex + index) % totalCards;
      const isSelected = index === 4;
      const cardClassName = `${styles.card} ${isSelected ? styles.selected : ""
        }`;

      return (
        <div
          key={card.id}
          className={cardClassName}
          style={{ backgroundImage: card.backgroundImage, backgroundSize: 'cover', }}
          ref={isSelected ? cardRef : null}
        >
        <div className={styles.cardContainer}>
          <div className={styles.contentContainer} >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
          <div className={styles.IconContainer}>
            <IoIosArrowBack></IoIosArrowBack>
            <IoIosArrowForward></IoIosArrowForward>
          </div>
        </div>
        </div>
      );
    });
  };

  return <div className={styles.container}>{renderCards()}</div>;
};

export default ServicesCarousel;
