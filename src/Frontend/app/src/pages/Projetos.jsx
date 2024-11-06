import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";
import Video2 from '../components/video2'


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
    margin: 2em;
    border-radius: 0.5em;
    color: #f1f1f1;  
    
`
const H2atv = styled.h2`
  text-align: left;
  font-family: Montserrat;
  margin-left: 1em;
  transition: all 0.3s ease-in-out;


   &:hover{
    text-decoration: underline;

  } 
`
 const Psection= styled.p`
   text-align: center;
   text-align: justify;
   font-family: Montserrat;
   padding: 1em;
 `

 const ULSection = styled.ul`
  font-family: Montserrat;
  text-align: center;
  text-align: justify;
  padding: 0.1em;
  margin-left: 3em;
 `
 const ULdiv = styled.div`
  text-align: left;
  /* max-width: 70em; */
`


function Projetos() {
  return (
    <div className="container">
        <Header />
        {/* <Carousel /> */}
        <Video2/>


        <div className='atividades'>
          <H1atv>Nossa lista de Projetos</H1atv>
          <HorizontalLine/>
        </div>
        <SectionAtv>
          <Section>
            <H2atv>Projeto: Finance no Colégio</H2atv>
            <Psection>A iniciativa visa aproximar o Finance com os alunos do Colégio da FECAP com o objetivo de apresentar a entidade e temas relevantes do MF de modo a despertar interesse nos alunos e continuarem estudando na FECAP e posteriormente entrarem na liga, gerando uma parceria benéfica para ambos os lados.</Psection>
          </Section>
          <Section>
            <H2atv>Projeto: Finance Visita</H2atv>
            <Psection>A iniciativa visa os membros do Finance com instituições do MF sobretudo Bancos. Assim, serão organizadas visitas técnicas para que os membros conheçam áreas e o funcionamento da empresa e possam aproveitar para tirar dúvidas.</Psection>
          </Section>
          <Section>
            <H2atv>Projeto: Finance Convida</H2atv>
            <Psection>A iniciativa busca trazer nomes relevantes do MF e de diversas áreas para palestrar na FECAP. Algumas palestras serão destinadas apenas para membros da liga e outras para o público em geral. Almeja-se aumentar a visibilidade da liga sobretudo com nomes de "mais" peso no Mercado. O Núcleo de Projetos fica responsável por toda a estruturação, desde o recrutamento dos palestrantes, definição da temática, local e horário.</Psection>
          </Section>
          <Section>
            <H2atv>Projeto: Econogiro</H2atv>
            <Psection>A iniciativa busca promover debates com um caráter mais informal entre os membros sobre temas relevantes da atualidade. A ideia é que seja feito uma vez por mês num formato de roda de discussão com a entrega de textos de apoio prévios.</Psection>
          </Section>

          <Section>
            <H2atv>Projeto: Finance Social</H2atv>
            <Psection>O projeto visa realizar iniciativas de cunho social e campanhas em datas específicas (Arrecadação de Brinquedos para o Dia das Crianças, Doação de Sangue, Ajuda a Moradores de Rua, por exemplo). O coletivo tem contatos de algumas ONGS que podem ajudar a divulgar as ações e também a realizar as mesmas como voluntários.</Psection>
          </Section>

          <Section>
            <H2atv>Projeto: Finance Capacita</H2atv>
            <Psection>A iniciativa visa capacitar os membros do Finance que pode ser feito de diversas formas:</Psection>
            <ULdiv>
              <ULSection>
                <li>Aquisição de Cursos: Adquirir cursos mediante um interesse grande dos membros (Ou como "prêmio).</li>
                <li>Elaboração de Oficinas: Oficinas práticas com foco em ferramentas como por exemplo Excel, PPT. A ideia é se vermos uma demanda dos membros acerca de um tema específico, elaborar essas oficinas para ajudar no entendimento da questão.</li>
                <li>Apoio aos Processos Seletivos: Simulação de Entrevistas: Materiais com perguntas frequentes.</li>
              </ULSection>
            </ULdiv>
          </Section>

          <Section>
            <H2atv>Projeto: Finance Week</H2atv>
            <Psection>Semana com diversas palestras com profissionais de renome no mercado e de diversas áreas no teatro da FECAP e aberto ao público.</Psection>
          </Section>
        </SectionAtv>
        <HorizontalLine/>
        <div className='AtividadesFooter'>
          <H1atv>Para novos eventos acesse nossa agenda</H1atv>
          <HorizontalLine/>
        </div>
     
        
        <Footer/>
    </div>
  )
}

export default Projetos