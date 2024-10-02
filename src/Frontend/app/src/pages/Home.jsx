import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";
import imgProjetos from '../imgs/imgProjetos.jpg';
import VideoLoop from '../components/VideoLoop';



function home() {
  return (
    <div className="container">
        <Header />
        <Carousel />
        {/* <VideoLoop/> */}
        <SectionContainer>
            <Section>
                <H2Section>Missão</H2Section>
                <HorizontalLine/>
                <PSection>Nossa missão é simplificar o mercado financeiro, levando conhecimento de qualidade, especialmente aos alvaristas da nossa liga.</PSection>

            </Section>
            <Section>
                <H2Section>Visão</H2Section>
                <HorizontalLine/>
                <PSection> Desenvolver os integrantes através do estudo e do pensamento crítico.</PSection>
            </Section>
            <Section>
                <H2Section>Valores</H2Section>
                <HorizontalLine/>
                <PValores>Excelência Acadêmica<br/>Ética <br/> Colaboração<br/>Proatividade</PValores>
            </Section>
        </SectionContainer>


        <div className="projetosContainer">
            <H1>Conheça Nossos Projetos</H1>
            <Projetos>
                <div className="imgProjeto">
                    <Img src= {imgProjetos} alt="blabla" />
                </div>
                <Section>
                        <H2Projetos>Grupos de Estudos</H2Projetos>
                        <HorizontalLineProjetos/>
                        <TextProjeto>Mussum Ipsum, cacilds vidis litro abertis.  Morbi viverra placerat justo, vel pharetra turpis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo! Delegadis gente finis, bibendum egestas augue arcu ut est. Leite de capivaris, leite de mula manquis sem cabeça.

                            Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Interagi no mé, cursus quis, vehicula ac nisi. Diuretics paradis num copo é motivis de denguis. Suco de cevadiss deixa as pessoas mais interessantis.

                            Negão é teu passadis, eu sou faxa pretis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Si u mundo tá muito paradis? Toma um mé que o mundo vai girarzis!

                        Leite de capivaris, leite de mula manquis sem cabeça. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Vehicula non. Ut sed ex eros. Vivamus sit amet nibh non tellus tristique interdum. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.</TextProjeto>
                </Section>
            </Projetos>
            
        </div>

        
        <Footer/>
    </div>
  )
}
const SectionContainer = styled.section`
    display: flex;
    flex-direction:  row;

`
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */

`
const HorizontalLineProjetos = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  max-width:40em;

`
const Section = styled.section`
    flex: 1;
    
    margin-inline: 6em;
    padding: 0.5em;
    width:  30em;

`
const H2Section = styled.h2`
    text-align: center;
    font-family: Montserrat;
 
`
const H2Projetos = styled.h2`
    text-align: center;
    font-family: Montserrat;
    font-size: 2em;   
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
const Projetos = styled.div`
    display:flex;


`
const TextProjeto = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 0 5em;
`;
const H1 = styled.h1`
    text-align: center;
    font-family: Montserrat;
    color: #01612c;
`
const Img = styled.img`
    width: 105%;
    height: auto;
    margin: 0.5em;
    margin-top:2.5em;
`

export default home