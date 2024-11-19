import React, { useRef } from 'react';
import grupoEstudos from '../imgs/grupoEstudo2.jpeg';
import Natura from '../imgs/natura.jpg';
import styled from 'styled-components';

export default function Challenge1() {
  const downloadLinkRef = useRef(null);

  const handleImageClick = () => {
    const arquivoParaDownload = '../../public/arq/Challenge Natura.pdf';

    downloadLinkRef.current.href = arquivoParaDownload;
    downloadLinkRef.current.click();
  };

  return (
    <div>
      <Container>
        <Image src={Natura} alt="Descrição da imagem" onClick={handleImageClick} />
        <TextContainer>
        <TextProjeto>
          <H2Projetos>Challenge Natura</H2Projetos>
          <HorizontalLineProjetos/>
          O objetivo desta pesquisa é analisar a trajetória financeira e o valor de mercado da Natura & Co., destacando os desafios enfrentados pela empresa no setor de cosméticos e cuidados pessoais. Entre os pontos abordados, a pesquisa apresenta uma análise dos múltiplos de avaliação da empresa, como EV/Revenues, EV/EBITDA, e P/E, que mostram um período de declínio em 2022 e 2023 devido a reduções significativas em receitas e lucro operacional. A Natura enfrentou uma queda no valor de mercado, impacto nos lucros e até mesmo a suspensão dos dividendos, indicando uma fase de reestruturação e ajustes operacionais para melhorar sua saúde financeira.</TextProjeto>
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
    margin-bottom: 4em;

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
  @media(max-width: 768px){
    margin: 0;
    
  }
`;
const HorizontalLineProjetos = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  max-width:100%;
  
  `