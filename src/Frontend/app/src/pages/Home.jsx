import React, { useState } from 'react'
import Header from '../Components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";
import imgProjetos from '../imgs/imgProjetos.jpg';
import Video from '../components/Video3'
import ImageAbout from "../imgs/FinanceTeam1.png"
import grupoEstudos from  '../imgs/grupoEstudos.png'
import SobreNos from "../components/sobreNos"
import GrupoEstudos from '../components/GrupoEstudos';



function home() {

  return (
    <div className="container">
        <Header />
        <Video />
        {/* <VideoLoop/> */}
        <SectionContainer>
            <Section1>
                <H2Section>Missão</H2Section>
                <HorizontalLine/>
                <PSection>Nossa missão é simplificar o mercado financeiro, levando conhecimento de qualidade, especialmente aos alvaristas da nossa liga.</PSection>

            </Section1>
            <Section2>
                <H2Section>Visão</H2Section>
                <HorizontalLine/>
                <PSection> Desenvolver os integrantes através do estudo e do pensamento crítico.</PSection>
            </Section2>
            <Section1>
                <H2Section>Valores</H2Section>
                <HorizontalLine/>
                <PValores>Excelência Acadêmica<br/>Ética <br/> Colaboração<br/>Proatividade</PValores>
            </Section1>
        </SectionContainer>
        <H1>Conheça a FECAP Finance</H1>
        <br/><br/>

        <SobreNos />
        
         <H1>Conheça Nossos Projetos</H1>
        
        
         <GrupoEstudos/>
         <H1>Nosso Grupo</H1>
         <Carousel />
        
        <Footer/>
    </div>
  )
}
const SectionContainer = styled.section`
  display: flex;
  flex-direction: row;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on small screens */
    margin: 0 auto; /* Center content horizontally */
  }
`;
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */

`
const H2Section = styled.h2`
    text-align: center;
    font-family: Montserrat;
`
const Section1 = styled.section`
    flex: 1;
    margin-inline: 6em;
    padding: 0.5em;
    @media (max-width: 768px) {
        margin-inline: 1em;
  }
    
`
const Section2 = styled.section`
    flex: 1;
    margin-inline: 6em;
    padding: 0.5em;
    background-color: #fff;
    @media (max-width: 768px) {
        margin-inline: 1em;
  }
`
const PValores =  styled.p`
    text-align: center;
    /* text-align: justify; */
    font-family: Roboto;
`
const PSection =  styled.p`
    text-align: center;
    text-align: justify;
    font-family: Roboto;
`

const TextProjeto = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 5em;
`

const H1 = styled.h1`
    text-align: center;
    font-family: Montserrat;
    color: #01612c;
`

export default home