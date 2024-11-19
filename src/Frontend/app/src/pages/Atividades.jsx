import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Swiper from '../components/Swiper';
import styled from "styled-components";
import Video3 from '../components/video3'

const H1atv = styled.h1`
  text-align: center;
  font-family: Montserrat;
  color: #01612c;
`
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */
  

`
const SectionAtv = styled.section`
  display: flex;
  flex-direction: row;
`
const Section = styled.section`
    /* background-color: #f3ebeb; */
    background-color: #15794f ;
    flex: 1;
    
    margin-inline: 0.5em;
    margin-bottom: 0.5em;
    padding: 0.5em;
    width:  30em;
`
const H2atv = styled.h2`
  text-align: center;
  font-family: Montserrat;
`
const Psection= styled.p`
  text-align: center;
  text-align: justify;
  font-family: Montserrat;
`

const SwiperContainer = styled.div`
`

function Atividades() {
  return (
    <div className="container">
        <Header />      
        <Video3/>
        
        <div className='AtivadesFooter'>
          <H1atv>Para novos eventos acesse nossa agenda</H1atv>
          <SwiperContainer>
            <Swiper/>
          </SwiperContainer>
          {/* <HorizontalLine/> */}
        </div>
     
        
        <Footer/>
    </div>
  )
}

export default Atividades

{/* <div className='atividades'>
          <H1atv>Nossa lista de atividades</H1atv>
          <HorizontalLine/>
        </div>
        <SectionAtv>
          <Section>
            <H2atv>Dia XX/XX</H2atv>
            <Psection>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A amet architecto dignissimos, quis qui assumenda optio minima asperiores deleniti exercitationem officia, commodi magni, eaque nisi quos in esse voluptatem. Sunt?</Psection>
          </Section>
          <Section>
            <H2atv>Dia XX/XX</H2atv>
            <Psection>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores soluta accusantium nam perspiciatis ipsum libero delectus, blanditiis ad a quos amet optio impedit in quidem quis distinctio minima praesentium excepturi!</Psection>
          </Section>
          <Section>
            <H2atv>Dia XX/XX</H2atv>
            <Psection>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, voluptas unde enim ipsum assumenda libero, eaque corrupti eum, atque facere beatae maxime minus voluptates iure quasi! Eos porro vero quia?</Psection>
          </Section>
          <Section>
            <H2atv>Dia XX/XX</H2atv>
            <Psection>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat cum temporibus delectus, ratione quasi, quia doloremque laudantium, autem ullam obcaecati natus excepturi tenetur quam ipsa voluptatem voluptate quo cumque suscipit?</Psection>
          </Section>
        </SectionAtv>
        <HorizontalLine/> */}