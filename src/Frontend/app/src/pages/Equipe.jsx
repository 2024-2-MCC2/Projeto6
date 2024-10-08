import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";

const H1equipe = styled.h1`
  text-align: center;
  font-family: Montserrat;
  color: #01612c;
`
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */ 
`
const Sectionquemsomos = styled.section`
  background: #D9D9D9;
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding:0.5em;
`
const Section = styled.section`
  text-align: center;
  text-align: justify;
    /* background-color: #f3ebeb; */
   
    flex: 1;
    
    margin-inline: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.5em;
    width:  30em;
`
const SectionEquipe = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const H2equipe = styled.h2`
   text-align: center;
  font-family: Montserrat;
`
const Phistoria = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Montserrat;
  font-weight: bold;
  font-size: 20px;
`
const Pvalores = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Montserrat;
  font-weight: bold;
  font-size:20px;
`
const P = styled.p`
   text-align: center;
  text-align: justify;
  font-family: Montserrat;
  font-weight: bold;
`

function Equipe() {
  return (
    <div className="container">
        <Header />
        <Carousel />
          <div className='quemsomos'>
            <H1equipe>Quem somos</H1equipe>
            <HorizontalLine/>
          </div>
            <Sectionquemsomos>
              <P>
              "A vida é uma jornada de aprendizado contínuo, e aqueles que abraçam a educação incessante são os que realmente prosperam no mercado financeiro." – Jamie Dimon, CEO do JPMorgan Chase
              </P>
            </Sectionquemsomos>
          <div className='historia'>
              <H2equipe>Historia</H2equipe>
              <HorizontalLine/>
            </div>
          <SectionEquipe>
            <Section>
              <Phistoria>Fundada em 2021, a FECAP Finance é a liga de mercado financeiro do Centro Universitário FECAP. Nossa missão é alavancar a carreira dos nossos membros, preparando-os para se tornarem destaques nas melhores Instituições do Mercado. Para isso, oferecemos intensa capacitação através de aulas, projetos desafiadores e oportunidades práticas como eventos, palestras com profissionais renomados e visitas técnicas.
              </Phistoria>
            </Section>
          </SectionEquipe>
              <div className='valores'>
              <H2equipe>Valores</H2equipe>
              <HorizontalLine/>
              </div>
              <SectionEquipe>
              <Section>
              <Pvalores>Em prol de garantir uma formação completa, contamos com três núcleos educacionais especializados: Macro Research, Asset Management e Investment Banking. Esses núcleos cobrem as principais áreas do mercado financeiro, proporcionando uma visão aprofundada e abrangente de cada segmento.
              </Pvalores>
            </Section>
          </SectionEquipe>
        <Footer/>
    </div>
  )
}

export default Equipe