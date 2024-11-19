import React, { useRef } from 'react';
import grupoEstudos from '../imgs/grupoEstudo2.jpeg';
import styled from 'styled-components';
import Petz from '../imgs/petz.jpg'

export default function Challenge1() {
  const downloadLinkRef = useRef(null);

  const handleImageClick = () => {
    const arquivoParaDownload = '../../public/arq/Challenge Petz.pdf';

    downloadLinkRef.current.href = arquivoParaDownload;
    downloadLinkRef.current.click();
  };

  return (
    <div>
      <Container>
        <Image src={Petz} alt="Descrição da imagem" onClick={handleImageClick} />
        <TextContainer>
        <TextProjeto>
          <H2Projetos>Challenge Petz</H2Projetos>
          <HorizontalLineProjetos/>
          O objetivo da pesquisa sobre a Petz é avaliar seu desempenho e potencial de crescimento no mercado brasileiro de produtos e serviços para animais de estimação. A análise foca nas vantagens competitivas da empresa, como sua posição consolidada de liderança e seu ecossistema abrangente, que inclui desde produtos para animais até serviços veterinários e de cuidados gerais. Além disso, o estudo considera os principais riscos e oportunidades para a Petz, incluindo a expansão para regiões inexploradas do Brasil, a possibilidade de fusão com a Cobasi e os impactos de fatores macroeconômicos. A pesquisa visa, portanto, fornecer uma perspectiva sobre o valor de mercado e os caminhos estratégicos para o fortalecimento da marca no setor.</TextProjeto>
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
  @media (max-width: 768px) {
    margin: 0;
  }
`;
const HorizontalLineProjetos = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  max-width:100%;
  
  `