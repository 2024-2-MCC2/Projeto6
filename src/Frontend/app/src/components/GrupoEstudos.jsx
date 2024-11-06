import React from 'react'
import grupoEstudos from  '../imgs/grupoEstudo2.jpeg'
import styled from 'styled-components';

export default function GrupoEstudos() {
  return (
    <div>
        <Container>
      <TextContainer>
      <H2Projetos>Grupos de Estudos</H2Projetos>
        <TextProjeto>
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
         <Image src= {grupoEstudos} alt="Description of your image"/>
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


