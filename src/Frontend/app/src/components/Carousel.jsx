import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';

import Carousel1 from '../imgs/FinanceTeam1.png';
import Carousel2 from '../imgs/FinanceTeam2.png';
import Carousel3 from '../imgs/FinanceTeam3.png';
import Carousel4 from '../imgs/Evento Boas Vindas Novos Membros.jpeg';
import Carousel5 from '../imgs/Evento Z Summit.jpeg';
import Carousel6 from '../imgs/Palestra Banco Pan.jpeg';
import Carousel7 from '../imgs/Palestra Caio Schettino.jpeg';
import Carousel8 from '../imgs/Palestra Fernando Bueno.jpeg';

const SwiperContainer = styled(Swiper)`
  width: 90%;
  max-width: 1200px;
  margin: 3em auto;
  padding: 20px;
`;

const Card = styled.div`
  position: relative;
  background: #f5f5f5;
  padding: 0;
  text-align: center;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  border-radius: 8px;
`;

const CardImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  transition: transform 0.3s ease;
  
  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6); 
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${Card}:hover & {
    opacity: 1;
  }
`;

const images = [
  { id: 1, src: Carousel4, alt: 'Evento Boas Vindas Novos Membros', text: 'Evento Boas Vindas' },
  { id: 2, src: Carousel5, alt: 'Evento Z Summit', text: 'Evento Z Summit' },
  { id: 3, src: Carousel1, alt: 'Equipe Finance 2023.1', text: 'Equipe Finance 2023.1' },
  { id: 4, src: Carousel3, alt: 'Equipe Finance 2024.1', text: 'Equipe Finance 2024.1' },
  { id: 5, src: Carousel6, alt: 'Palestra Banco Pan', text: 'Palestra Banco Pan' },
  { id: 6, src: Carousel7, alt: 'Palestra Caio Schettino', text: 'Palestra Caio Schettino' },
  { id: 7, src: Carousel8, alt: 'Palestra Fernando Bueno', text: 'Palestra Fernando Bueno' },
];

const Carousel = () => {
  return (
    <SwiperContainer
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      spaceBetween={20}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {images.map((image) => (
        <SwiperSlide key={image.id}>
          <Card>
            <CardImage src={image.src} alt={image.alt} />
            <Overlay>{image.text}</Overlay>
          </Card>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  );
};

export default Carousel;
