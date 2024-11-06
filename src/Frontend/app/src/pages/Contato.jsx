import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";
import Video2 from '../components/video2'
import Mapa from '../components/Mapa'



function Contato() {
    return(
      <>
          <Container>
            <Header />
            <Video2/>
            <ContatoContainer>
              <div className="contato text">
                <H2>Contato</H2>
                <H4>Localização</H4>
                <P> <A href='https://www.google.com.br/maps/place/FECAP+-+Fundação+Escola+de+Comércio+Álvares+Penteado+-+Campus+Liberdade/@-23.5572348,-46.6395381,17z/data=!4m6!3m5!1s0x94ce59a8b4d648f9:0x862df06cefe8bc3e!8m2!3d-23.5572348!4d-46.6369578!16s%2Fg%2F122xff09?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank" rel="noopener noreferrer">Av. da Liberdade, 532 - Liberdade, São Paulo - SP, 01502-001</A></P>
                <P>Entre em contato para marcar reuniões  </P>
                <H4>fecap.finance@edu.fecap.br</H4>
                <H4>(11)99587-2178</H4>
              </div>
              <div className="map">
                <Mapa/>
            </div>
            </ContatoContainer>

            <Footer/>
          </Container>
      </>
  );
}

export default Contato;

const Container = styled.div`
  background-color: #f9f9f9;
`;

const ContatoContainer = styled.div`
  display: flex;
  justify-content: space-around;
`
const H2 = styled.h2`
  font-family: Montserrat;
  font-size:2em;
  align-self:center;
`
const H4 = styled.h4`
  font-family: Montserrat;
  font-size:1.2em;
`
const P = styled.p`
  font-family: Roboto;
  font-size:1em;
`
const A  = styled.a`
  color:  #000000;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover{
    color: #233f52;
  }
`

