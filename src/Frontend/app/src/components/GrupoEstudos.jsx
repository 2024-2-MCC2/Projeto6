import React from 'react'
import ImageAbout from "../imgs/FinanceTeam2.png"
import styled from 'styled-components';

export default function GrupoEstudos() {
  return (
    <div>
        <Container>
         <Image src= {ImageAbout} alt="Description of your image"/>
      <TextContainer>
      
        <TextProjeto>
        <H2Projetos>Grupos de Estudos</H2Projetos>
      <HorizontalLineProjetos/>
      Atualmente, contamos com uma equipe engajada, composta por
            Núcleos Educacionais e de Apoio, que, em conjunto,
            impulsionam nosso crescimento e impacto. Trabalhamos lado a
            lado para garantir que a liga continue avançando, sempre
            criando novas e melhores oportunidades para nossos membros.
            Além disso, mantemos um estreito relacionamento com grandes
            bancos e empresas parceiras, o que nos permite oferecer
            experiências enriquecedoras e preparar nossos integrantes para
            osdesafiosdo mercado financeiro. </TextProjeto>
         </TextContainer>
         </Container>

    </div>
  )
}
const Container = styled.div`
  display: flex;
  width: 100%;

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
  width: 80%;
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


