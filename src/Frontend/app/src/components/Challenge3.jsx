import React, { useRef } from 'react';
import grupoEstudos from '../imgs/grupoEstudo2.jpeg';
import Drogasil from '../imgs/drogasil.png'
import styled from 'styled-components';

export default function Challenge1() {
  const downloadLinkRef = useRef(null);

  const handleImageClick = () => {
    const arquivoParaDownload = '../../public/arq/Challenge Raia Drogasil.pdf';

    downloadLinkRef.current.href = arquivoParaDownload;
    downloadLinkRef.current.click();
  };

  return (
    <div>
      <Container>
        <Image src={Drogasil} alt="Descrição da imagem" onClick={handleImageClick} />
        <TextContainer>
        <TextProjeto>
          <H2Projetos>Challenge Raia Drogasil</H2Projetos>
          <HorizontalLineProjetos/>
          O objetivo da pesquisa sobre a Raia Drogasil é avaliar seu desempenho e perspectivas no setor de varejo farmacêutico brasileiro, destacando sua posição de liderança e vantagens competitivas. A análise abrange indicadores financeiros como ROE, ROA e alavancagem, em que a empresa se sobressai entre seus pares. A pesquisa também considera os desafios da empresa, como a concorrência de pequenos varejistas e o crescimento do mercado digital, que impactam seu potencial de crescimento. Com uma recomendação de "Hold", a pesquisa sugere uma perspectiva moderada de valorização para a empresa.</TextProjeto>
        </TextContainer>
      </Container>
      <a ref={downloadLinkRef} style={{ display: 'none' }} download>
        {/* Este link será clicado programaticamente para iniciar o download */}
      </a>
    </div>
  );
}
const Container = styled.div`
  display: flex;
margin: 0 10%;

  overflow: hidden;
  position: relative;
  @media (max-width: 768px) {
        flex-wrap:wrap;
        justify-content: center;
  }
  
`;
const Image = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
  transition: transform 0.8s ease;
  @media (max-width: 768px) {
    width: 50vh;
    height: auto;
  }
  
`;
const TextContainer = styled.div`
  width: 85%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const H2Projetos = styled.h2`
    text-align: center;
    font-family: Montserrat;
    font-size: 2em; 
      
`
const TextProjeto = styled.p`
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 2em 5em; /* Margem superior e inferior ajustadas para 2em */
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const HorizontalLineProjetos = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  max-width:100%;
  
  `