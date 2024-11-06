import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Carousel1 from '../imgs/FinanceTeam1.png'
import Carousel2 from '../imgs/FinanceTeam2.png'
import Carousel3 from '../imgs/FinanceTeam3.png'


const Carousel = () => {
  // Array de imagens do grupo e reuniões
  const images = [
    { id: 1, src: Carousel1, alt: 'Equipe Finance 2023.1' },
    { id: 2, src: Carousel2, alt: 'Equipe Finance 2023.2' },
    { id: 3, src: Carousel3, alt: 'Equipe Finance 2024.1' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Alterna automaticamente entre as imagens a cada 3.5 segundos
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((currentIndex + 1) % images.length);
    }, 3500);

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);

  // Funções de navegação
  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  return (
    <CarouselContainer>
      <ImageContainer>
        {images.map((image, index) => (
          <CarouselImage
            key={image.id}
            src={image.src}
            alt={image.alt}
            isVisible={index === currentIndex}
          />
        ))}
      </ImageContainer>
      <CarouselNav>
        <NavButton onClick={handlePrevClick}>&#10094;</NavButton>
        {images.map((_, index) => (
          <NavDot
            key={index}
            isActive={index === currentIndex}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
        <NavButton onClick={handleNextClick}>&#10095;</NavButton>
      </CarouselNav>
    </CarouselContainer>
  );
};

export default Carousel;

// Styled Components

const CarouselContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%; /* Reduz a largura para melhorar o ajuste */
  height: 80vh; /* Ajuste para ocupar menos espaço vertical */
  overflow: hidden;
  background-color: #f5f5f5;
  margin: 0 auto; /* Centraliza horizontalmente */
  padding: 20px; /* Espaçamento interno */
  box-sizing: border-box;
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%; /* Usa toda a largura do contêiner */
  height: 70vh; /* Ajuste conforme necessário para centralizar verticalmente */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0; /* Remove margens extras */
  padding: 0;
`;

const CarouselImage = styled.img`
  position: absolute;
  max-width: 100%;
  max-height: 100%;
  object-fit: cover;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.5s ease;
`;
const NavButton = styled.span`
  cursor: pointer;
  font-size: 25px; /* Diminui o tamanho da fonte */
  color: #333;
  margin: 0 10px; /* Reduz a margem para aproximar os botões */
  user-select: none;
`;

const CarouselNav = styled.div`
  position: absolute;
  bottom: 10px; /* Aproxima a navegação do carrossel */
  display: flex;
  align-items: center;
  padding: 10px;
`;

const NavDot = styled.span`
  cursor: pointer;
  width: 12px;
  height: 12px;
  margin: 0 5px;
  background-color: ${({ isActive }) => (isActive ? '#333' : '#ddd')};
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.3s ease;
`;
