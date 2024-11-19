import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';
import GabrielChaves from '../imgs/diretoria/GabrielChaves.jpeg';
import IsabelleTeixeira from '../imgs/diretoria/IsabelleTeixeira.jpeg';
import LeonardoPestana from '../imgs/diretoria/LeonardoPestana.jpeg';
import LuizFelipeGomes from '../imgs/diretoria/LuizFelipeGomes.jpeg';
import PedroCordeoli from '../imgs/diretoria/PedroCordeoli.jpeg';
import PedroOka from '../imgs/diretoria/PedroOka.jpeg';
import PetraGarcia from '../imgs/diretoria/PetraGarcia.jpeg';
import RobertaIwanaga from '../imgs/diretoria/RobertaIwanaga.jpeg';

const MainTitle = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Espaço entre os cards */
`;

const ImageCard = styled.div`
  flex: 1 1 30%; /* Faz os cards ocuparem cerca de 30% da linha */
  max-width: 300px; /* Largura máxima para limitar o tamanho do card */
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledName = styled.h2`
  font-size: 1.5em;
`;

const Description = styled.p`
  font-size: 1em;
`;

const A = styled.a`
  margin-left: 0.8em;
  color: #0077B5;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #005785;
  }
`;

const EmailIcon = styled(A)`
  color: #D44638;

  &:hover {
    color: #B23121;
  }
`;
function EquipeCard() {
  return (
    <div>
      <MainTitle>Nossa Diretoria</MainTitle>
      <Container>
      <ImageCard>
          <StyledImage src={LeonardoPestana} alt="Leonardo Pestana" />
          <StyledName>Leonardo Pestana</StyledName>
          <Description>Presidência</Description>
          <A href="https://www.linkedin.com/in/leonardo-pestana-5494a9201/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:leonardopestana6@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={GabrielChaves} alt="Gabriel Chaves" />
          <StyledName>Gabriel Chaves</StyledName>
          <Description>Diretor Projetos</Description>
          <A href="https://www.linkedin.com/in/ogabrielchaves/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:chavesm.gabriel@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={IsabelleTeixeira} alt="Isabelle Teixeira" />
          <StyledName>Isabelle Teixeira</StyledName>
          <Description>Diretor Marketing</Description>
          <A href="https://www.linkedin.com/in/isabelletxeira" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:isabelletxeira@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={LuizFelipeGomes} alt="Luiz Felipe Gomes" />
          <StyledName>Luiz Felipe Gomes</StyledName>
          <Description>Diretor FP&A</Description>
          <A href="https://www.linkedin.com/in/luiz-felipe-gomes-da-silva-filho-19b516212/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:lgsfilho@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={PedroCordeoli} alt="Pedro Cordeoli" />
          <StyledName>Pedro Cordeoli</StyledName>
          <Description>Diretor Administrativo</Description>
          <A href="https://www.linkedin.com/in/pedro-henrique-cordeoli/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:pedrocoriolli@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={PedroOka} alt="Pedro Oka" />
          <StyledName>Pedro Oka</StyledName>
          <Description>Diretor Investment Banking</Description>
          <A href="https://www.linkedin.com/in/pedro-oka" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:pedro.oka23@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={PetraGarcia} alt="Petra Garcia" />
          <StyledName>Petra Garcia</StyledName>
          <Description>Vice Presidência</Description>
          <A href="https://www.linkedin.com/in/petraagarcia" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:petragarcia440@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>
        </ImageCard>

        <ImageCard>
          <StyledImage src={RobertaIwanaga} alt="Roberta Iwanaga" />
          <StyledName>Roberta Iwanaga</StyledName>
          <Description>Diretor Macroeconomia</Description>
          <A href="https://www.linkedin.com/in/roberta-iwanaga/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={35} />
          </A>
          <EmailIcon href="mailto:iwanagaroberta@hotmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope size={35} />
          </EmailIcon>

        </ImageCard>
      </Container>
    </div>
  );
}

export default EquipeCard;
