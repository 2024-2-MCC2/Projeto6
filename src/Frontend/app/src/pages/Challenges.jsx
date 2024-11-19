import Header from "../components/Header";
import Video from "../Components/Video3";
import Footer from "../components/Footer";
import styled from "styled-components";
import Challenge1 from "../Components/Challenge1";
import Challenge2 from "../Components/Challenge2";
import Challenge3 from "../Components/Challenge3";

export default function Challenges(){
    return(
        <>
        <Header/>
        <Video/>
        <SectionContainer>
            <H1>Challenges</H1>
            <Text>Challenges na FECAP Finance são cruciais para o desenvolvimento profissional dos participantes. Ao simular situações reais do mercado, eles permitem que os estudantes vivenciem na prática a tomada de decisões, análise de riscos e trabalho em equipe. Essa imersão prática desenvolve habilidades essenciais para a carreira financeira, como análise de dados e resolução de problemas.

            Além disso, os desafios aumentam a motivação e o engajamento dos participantes, proporcionando um ambiente competitivo e            colaborativo. Ao trabalhar em equipe para alcançar objetivos comuns, os membros da liga constroem uma rede de contatos valiosa e se         preparam para os desafios do mercado de trabalho.</Text>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>


            <Challenge1/>
            <Challenge2/>
            <Challenge3/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>

            <Text1>*Clique nas imagens para baixar o estudo*</Text1>
        </SectionContainer>
        <Footer/>
        </>
    );
}

const SectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex-direction: column; /* Stack sections vertically on small screens */
    margin: 0 auto; /* Center content horizontally */
  }
`;
const HorizontalLine = styled.hr`
  border-color: #15794f; /* Change the color to a blue shade */

`
const H1 = styled.h1`
    text-align: center;
    font-family: Montserrat;
    color: #01612c;
    margin: 0 auto;
    font-size: 3em;
    margin-bottom: 0.5em;
`
const Text = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 0 20%;
  @media (max-width: 768px) {
    margin: 0 10%;
  }
`
const Text1 = styled.p`
  text-align: center;
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 0 auto;
  color: #01612c;
  font-weight: bold;
`