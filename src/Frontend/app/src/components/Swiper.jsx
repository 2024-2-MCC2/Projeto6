// Carousel.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import styled from 'styled-components';
import Ativ1 from '../imgs/ativ1.png';
import Ativ2 from '../imgs/ativ2.png';
import Ativ3 from '../imgs/ativ3.png';
import Ativ4 from '../imgs/ativ4.png';

const SwiperContainer = styled(Swiper)`
  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

const Card = styled.div`
  background: #ebe8e8; /* cor verde */
  color: #fff;
  padding: 20px;

  text-align: center;
  /* border-radius: 8px; */
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const Carrossel = styled.div`
    margin: 10em;
`

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
            <SwiperSlide>
                <Card>
                    <CardImage src={Ativ1} alt="Atividade 1" />
                </Card>
            </SwiperSlide>

            <SwiperSlide>
                <Card>
                    <CardImage src={Ativ2} alt="Atividade 2" />
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card>
                    <CardImage src={Ativ3} alt="Atividade 3" />
                </Card>
            </SwiperSlide>
            <SwiperSlide>
                <Card>
                    <CardImage src={Ativ4} alt="Atividade 4" />
                </Card>
            </SwiperSlide>
            {/* Adicione mais SwiperSlides conforme necessário */}
        </SwiperContainer>

    );
};

export default Carousel;
