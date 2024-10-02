import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Carousel from '../components/Carousel';
import styled, { createGlobalStyle } from 'styled-components';

export default function SobreNos() {
  return (
    <Container>
      <GlobalStyle />
      <Header />
      <Carousel />
      <Intro>
        <Title>Sobre Nós</Title>
        <Text>A FECAP Finance é uma liga financeira formada por estudantes apaixonados pelo mercado financeiro e economia. Nosso objetivo é proporcionar um ambiente de aprendizado prático, onde os membros possam desenvolver habilidades em análise de investimentos, gestão financeira e estudo de mercado. Através de projetos, eventos e simulações, buscamos criar oportunidades para que os participantes se aprofundem nas dinâmicas do mercado financeiro, preparando-se para enfrentar os desafios da área com conhecimento e segurança. <br/> <br/>

        Estamos comprometidos em promover a educação financeira, incentivar o networking entre estudantes e profissionais do mercado, e contribuir para a formação de futuros líderes financeiros.</Text>
      </Intro>
      <Section>
        <SectionTitle>Nossa História</SectionTitle>
        <Text>Em 2019, a FECAP Finance foi fundada por um grupo de estudantes de Ciências Econômicas com o fim de reunir e integrar os estudantes interessados no tópic afim de criar networking e desenvolver os alunos não apenas como indíviduos mas também como grupo.</Text>
      </Section>
      <Section>
        <SectionTitle>Nossos Objetivos</SectionTitle>
        <Text>blabalblabalbalbalblabla</Text>
      </Section>
      <Section>
        <SectionTitle>Nossos Valores</SectionTitle>
        <Text>Excelência Acadêmica e Profissional: Buscamos continuamente aprimorar nosso conhecimento e habilidades, proporcionando um ambiente de aprendizado que estimula o desenvolvimento técnico e crítico dos membros. <br/> <br/>
        Ética e Transparência: Agimos com integridade e transparência em todas as nossas atividades, respeitando os princípios éticos do mercado financeiro e promovendo práticas responsáveis. <br/> <br/>
        Colaboração e Trabalho em Equipe: Valorizamos o trabalho em equipe e a troca de conhecimento entre nossos membros, promovendo um ambiente colaborativo onde todos podem crescer juntos. <br/><br/>
        Inovação e Proatividade: Incentivamos a inovação e a busca por soluções criativas para os desafios do mercado financeiro, sempre com uma postura proativa e voltada para o futuro.</Text>
      </Section>
      <Section>
        <SectionTitle>Nossas Parcerias</SectionTitle>
        <Text>blabalblabalbalbalblabla</Text>
      </Section>
      <Section>
        <SectionTitle>Seja um de Nós!</SectionTitle>
        <Text>Aqui vai um formulário para fazer parte</Text>
      </Section>
      <Footer/>
    </Container>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Intro = styled.div`
  padding: 20px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

const Section = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;
