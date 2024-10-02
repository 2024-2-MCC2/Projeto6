import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel1 from '../imgs/FinanceTeam1.png'
import Carousel2 from '../imgs/FinanceTeam2.png'
import Carousel3 from '../imgs/FinanceTeam3.png'
const Carousel = () => {
  const images = [
    { id: 1, src: Carousel1, alt: 'Equipe Finance 2023.1' },
    { id: 2, src: Carousel2, alt: 'Equipe Finance 2023.2' },
    { id: 3, src: Carousel3, alt: 'Equipe Finance 2024.1' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3500); 

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  const handleNavClick = (index) => {
    setCurrentIndex(index);
  };

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <CarouselContainer>
      {images.map((image, index) => (
        <CarouselImage
          key={image.id}
          src={image.src}
          alt={image.alt}
          style={{
            opacity: index === currentIndex ? 1 : 0,
          }}
        />
      ))}
      <CarouselNav>
        <CarouselNavItem onClick={handlePrevClick}>
          &#10094;
        </CarouselNavItem>
        {images.map((image, index) => (
          <CarouselNavItem
            key={image.id}
            onClick={() => handleNavClick(index)}
          >
            &#8226;
          </CarouselNavItem>
        ))}
        <CarouselNavItem onClick={handleNextClick}>
          &#10095;
        </CarouselNavItem>
      </CarouselNav>
    </CarouselContainer>
  );
};

export default Carousel;

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  height: 550px; /* Adjust the height to fit your images */
  overflow: hidden;
`;

const CarouselImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s ease;
`;

const CarouselNav = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  width: 100px;
`;

const CarouselNavItem = styled.span`
  cursor: pointer;
  margin: 0 10px;
  font-size: 24px;
  color: #fff;
`;