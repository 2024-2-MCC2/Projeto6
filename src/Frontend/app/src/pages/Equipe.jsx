import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from '../components/Video';
import EquipeCard from '../components/EquipeCard';
import styled from "styled-components";
import Membro1 from '../imgs/group/anaBarreto.jpg'
import Membro2 from '../imgs/group/brennoAugusto.jpg'
import Membro3 from '../imgs/group/caioNunes.jpg'
import Membro4 from '../imgs/group/gabrielChaves.jpg'
import Membro5 from '../imgs/group/isaacSilva.jpg'
import Membro6 from '../imgs/group/isabelleLuca.jpg'
import Membro7 from '../imgs/group/isabelleTeixeira.jpg'
import Membro8 from '../imgs/group/italoAlencar.jpg'
import Membro9 from '../imgs/group/joaoCardoso.jpg'
import Membro10 from '../imgs/group/joaoCastilho.jpg'
import Membro11 from '../imgs/group/joaoGrassi.jpg'
import Membro12 from '../imgs/group/joaoKozseran.jpg'
import Membro13 from '../imgs/group/jorgePardim.jpg'
import Membro14 from '../imgs/group/leonardoPestana.jpg'
import Membro15 from '../imgs/group/luisFilho.jpg'
import Membro16 from '../imgs/group/luizaManta.jpg'
import Membro17 from '../imgs/group/micaelOrtiz.jpg'
import Membro18 from '../imgs/group/rafaelRocha.jpg'
import Membro19 from '../imgs/group/rodrigoArgolo.jpg'
import Membro20 from '../imgs/group/thiagoFlorido.jpg'
import Membro21 from '../imgs/group/victorNunes.jpg'

export default function Equipe() {
  const navigate = useNavigate();
  const membroData = [
    {id:1, src: Membro1,nome:"Ana Barreto", content: "blablabla"},
    {id:2, src: Membro2,nome:"Brenno Augusto", content: "blablabla"},
    {id:3, src: Membro3,nome:"Caio Chaves", content: "blablabla"},
    {id:4, src: Membro4,nome:"Gabriel Nunes", content: "blablabla"},
    {id:5, src: Membro5,nome:"Isaac Silva", content: "blablabla"},
    {id:6, src: Membro6,nome:"Isabelle Luca", content: "blablabla"},
    {id:7, src: Membro7,nome:"Isabelle Texeira", content: "blablabla"},
    {id:8, src: Membro8,nome:"Ítalo Alencar", content: "blablabla"},
    {id:9, src: Membro9,nome:"João Cardoso", content: "blablabla"},
    {id:10, src:Membro10, nome:"João Castilho", content: "blablabla"},
    {id:11, src:Membro11, nome:"João Grassi", content: "blablabla"},
    {id:12, src:Membro12, nome:"João Kozseran", content: "blablabla"},
    {id:13, src:Membro13, nome:"Jorge Pardim", content: "blablabla"},
    {id:14, src:Membro14, nome:"Leonardo Pestana", content: "blablabla"},
    {id:15, src:Membro15, nome:"Luis Filho", content: "blablabla"},
    {id:16, src:Membro16, nome:"Luiza Manta", content: "blablabla"},
    {id:17, src:Membro17, nome:"Micael Ortis", content: "blablabla"},
    {id:18, src:Membro18, nome:"Rafael Rocha", content: "blablabla"},
    {id:19, src:Membro19, nome:"Rodrigo Argolo", content: "blablabla"},
    {id:20, src:Membro20, nome:"Thiago Florido", content: "blablabla"},
    {id:21, src:Membro21, nome:"Victor Nunes", content: "blablabla"},
  ];

  return (
    <div>
      <Header />
      <Video />
      <EquipeCard membroData={membroData} navigate={navigate} />
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

      <Footer />
    </div>
  );
}

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
