import React from 'react'
import ImageAbout from "../imgs/FinanceTeam1.png"
import styled from 'styled-components';

export default function sobreNos() {
  return (
    <div>
        <Container>
      <Image src= {ImageAbout} alt="Description of your image"/>
      <TextContainer>
      <H2Projetos>Sobre nós</H2Projetos>
        <TextProjeto>
      <HorizontalLineProjetos/>
        No final de 2020, um grupo de estudantes da FECAP, movidos
        pelo desejo de se aprofundar no mercado financeiro, plantou a
        semente do que viria a ser a Liga de Mercado Financeiro da
        instituição. Em fevereiro de 2021, a liga foi oficialmente criada e,
        com o tempo, evoluiu para a FECAP Finance que conhecemos
        hoje. Unindo nossa paixão pelo mercado financeiro, nos
        tornamos uma entidade dedicada à formação de futuros
        profissionaisdo setor com excelência. </TextProjeto>
         </TextContainer>
         </Container>
    </div>
  )
}
const Container = styled.div`
  display: flex;
  width: 100%;
  height: 400px;
  overflow: hidden;
  position: relative;
`;
const Image = styled.img`
  width: 50%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.8s ease;
  
`;
const TextContainer = styled.div`
  width: 50%;
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
`;
const HorizontalLineProjetos = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  max-width:100%;
  
  `