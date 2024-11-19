import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Video from '../components/Video3'
import styled from 'styled-components'

const Container = styled.div`
    @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on small screens */
    margin: 0 auto; /* Center content horizontally */
  }
`

const H1atv = styled.h1`
  text-align: center;
  font-family: Montserrat;
  color: #01612c;
`
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  

`
const SectionAtv = styled.section`
  // display: flex;
  flex-direction: row;
`
const Section = styled.section`
    /* background-color: #f3ebeb; */
    background-color: #15794f ;
    flex: 1;
    
    /* margin-inline: 0.5em;
    margin-bottom: 0.5em;*/
    padding: 0.5em;
    margin: 2em 8%;
    border-radius: 0.5em;
    color: #f1f1f1;  
    
`
const H2atv = styled.h2`
  text-align: center;
  font-family: Montserrat;
  
  transition: all 0.3s ease-in-out;


   &:hover{
    text-decoration: underline;

  } 
`
 const Psection= styled.p`
   text-align: center;
   
   font-family: Montserrat;
   padding: 1em;
 `




function Estruturacao() {
  return (
    <Container>
        <Header />
        {/* <Carousel /> */}
        <Video/>


        <div className='atividades'>
          <H1atv>Como é a estruturação da FECAP Finance?</H1atv>
          <HorizontalLine/>
        </div>
        <SectionAtv>
          <Section>
            <H2atv>Direção Geral</H2atv>
            <Psection>A Direção Geral é composta pela Presidência e Vice-Presidência, responsáveis pela definição dos objetivos estratégicos da Liga e pelo planejamento de atividades em conjunto com os demais núcleos. A direção também representa a Liga perante a faculdade e parceiros, além de supervisionar os núcleos de apoio e educacionais.</Psection>
          </Section>
          <Section>
            <H2atv>Núcleos de Apoio</H2atv>
            <Psection>Os Núcleos de Apoio englobam áreas essenciais que sustentam as atividades e iniciativas da Liga, garantindo suporte operacional e estratégico para o funcionamento dos demais núcleos.</Psection>
          </Section>
          <Section>
            <H2atv>Projetos</H2atv>
            <Psection>Responsável por conceber, planejar e executar iniciativas e eventos que agreguem valor aos membros da Liga, como workshops, palestras, aulas abertas, competições, projetos de captação de recursos e visitas a empresas. O núcleo também coordena a interação com outras organizações estudantis, professores, profissionais do setor financeiro, a faculdade e potenciais patrocinadores para definir projetos e parcerias.</Psection>
          </Section>
          <Section>
            <H2atv>Administrativo</H2atv>
            <Psection>Responsável pela gestão operacional da Liga, incluindo a manutenção dos registros de membros, agendamento de reuniões, comunicação interna e externa, reserva de salas e gestão dos recursos físicos e digitais da Liga.</Psection>
          </Section>

          <Section>
            <H2atv>FP&A</H2atv>
            <Psection>Responsável pela gestão financeira da Liga, incluindo a elaboração do orçamento, controle de contribuições financeiras e prestação de contas por meio de demonstrações financeiras, assegurando que os recursos sejam utilizados de maneira responsável e transparente, de acordo com as prioridades da Liga.</Psection>
          </Section>

          <Section>
            <H2atv>Marketing</H2atv>
            <Psection>Responsável por promover a imagem e aumentar a visibilidade da Liga, abrangendo a criação e execução de estratégias de marketing e comunicação, gestão das redes sociais, produção de materiais promocionais, divulgação de eventos e desenvolvimento da identidade visual da Liga.</Psection>
          </Section>

          <Section>
            <H2atv>Núcleos Educacionais</H2atv>
            <Psection>Os Núcleos Educacionais são divididos em três frentes e têm como missão capacitar os membros por meio de aulas, desafios internos, oficinas e workshops.</Psection>
          </Section>

          <Section>
            <H2atv>Investment Banking</H2atv>
            <Psection>Tem como objetivo capacitar os alunos nas habilidades técnicas e interpessoais necessárias para atuar em Investment Banking, incluindo modelagem financeira, valuation e elaboração de pitchs. O núcleo também participa de desafios (challenges) de avaliação de empresas.</Psection>
          </Section>

          <Section>
            <H2atv>Macro Research</H2atv>
            <Psection>Tem o propósito de aplicar os conceitos teóricos aprendidos em sala de aula, capacitando os membros a compreender e analisar os eventos mais relevantes que impulsionam a economia global. Os membros desenvolvem conhecimento em indicadores macroeconômicos e habilidades analíticas para avaliar políticas econômicas.</Psection>
          </Section>
        </SectionAtv>
        
        <HorizontalLine/>
        
     
        
        <Footer/>
    </Container>
  )
}

export default Estruturacao


// Núcleos Educacionais: Os Núcleos Educacionais são divididos em três frentes e têm como missão capacitar os membros por meio de aulas, desafios internos, oficinas e workshops.

// - Investment Banking: Tem como objetivo capacitar os alunos nas habilidades técnicas e interpessoais necessárias para atuar em Investment Banking, incluindo modelagem financeira, valuation e elaboração de pitchs. O núcleo também participa de desafios (challenges) de avaliação de empresas.

// - Macro Research Tem o propósito de aplicar os conceitos teóricos aprendidos em sala de aula, capacitando os membros a compreender e analisar os eventos mais relevantes que impulsionam a economia global. Os membros desenvolvem conhecimento em indicadores macroeconômicos e habilidades analíticas para avaliar políticas econômicas.