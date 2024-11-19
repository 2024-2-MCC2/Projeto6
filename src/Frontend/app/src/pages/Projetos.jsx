import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from "styled-components";
import Video2 from '../components/Video3';

import FinanceColegio3 from '../imgs/projetos/FinanceColegio3.jpeg';
import FinanceColegio1 from '../imgs/projetos/FinanceColegio.jpeg';
import FinanceColegio2 from '../imgs/projetos/FinanceColegio2.jpeg';
import FinanceConvida from '../imgs/projetos/Palestra Banco Pan.jpeg';
import FinanceSocial from '../imgs/projetos/FinanceSocial.png'
import BoasVindas from '../imgs/Evento Boas Vindas Novos Membros.jpeg'
import Grupo from '../imgs/GrupoEstudo2.jpeg'
const Projetos = () => {
  const projetos = [
    {
      titulo: "Projeto: Finance no Colégio",
      descricao: "A iniciativa visa aproximar o Finance com os alunos do Colégio da FECAP com o objetivo de apresentar a entidade e temas relevantes do MF de modo a despertar interesse nos alunos e continuarem estudando na FECAP e posteriormente entrarem na liga, gerando uma parceria benéfica para ambos os lados.",
      imagem: FinanceColegio3,
    },
    {
      titulo: "Projeto: Finance Visita",
      descricao: "A iniciativa visa os membros do Finance com instituições do MF sobretudo Bancos. Assim, serão organizadas visitas técnicas para que os membros conheçam áreas e o funcionamento da empresa e possam aproveitar para tirar dúvidas.",
      imagem: FinanceColegio1,
    },
    {
      titulo: "Projeto: Finance Capacita",
      descricao: "A iniciativa visa capacitar os membros do Finance que pode ser feito de diversas formas: Aquisição de Cursos, Elaboração de Oficinas, Apoio aos Processos Seletivos.",
      imagem: Grupo,
    },
    {
      titulo: "Projeto: Finance Convida",
      descricao: "A iniciativa busca trazer nomes relevantes do MF e de diversas áreas para palestrar na FECAP. Algumas palestras serão destinadas apenas para membros da liga e outras para o público em geral.",
      imagem: FinanceColegio2,
    },
    {
      titulo: "Projeto: Econogiro",
      descricao: "A iniciativa busca promover debates com um caráter mais informal entre os membros sobre temas relevantes da atualidade. A ideia é que seja feito uma vez por mês num formato de roda de discussão com a entrega de textos de apoio prévios.",
      imagem: FinanceConvida,
    },
    {
      titulo: "Projeto: Finance Social",
      descricao: "O projeto visa realizar iniciativas de cunho social e campanhas em datas específicas (Arrecadação de Brinquedos para o Dia das Crianças, Doação de Sangue, Ajuda a Moradores de Rua, por exemplo). O coletivo tem contatos de algumas ONGS que podem ajudar a divulgar as ações e também a realizar as mesmas como voluntários.",
      imagem: FinanceSocial,
    },
    {
      titulo: "Projeto: Finance Week",
      descricao: "Semana com diversas palestras com profissionais de renome no mercado e de diversas áreas no teatro da FECAP e aberto ao público.",
      imagem: BoasVindas,
    },
    // Adicione outros projetos aqui
  ];

  return (
    <div>
      <Header />
      <Video2 />

      <Container>
        <div className='atividades'>
          <H1Projetos>Conheça nossa lista de Projetos</H1Projetos>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>

        {projetos.map((projeto, index) => (
          <ProjectContainer key={index}>
            <Image src={projeto.imagem} alt={projeto.titulo} />
            <TextContainer>
            <TextProjeto>
              <H2Projetos>{projeto.titulo}</H2Projetos>
              <HorizontalLineProjetos />
              {projeto.descricao}</TextProjeto>
            </TextContainer>
          </ProjectContainer>
        ))}
      </Container>

      <Footer />
    </div>
  );
};

export default Projetos;

// Styled Components
const Container = styled.div`
  width: 100%;
`;

const ProjectContainer = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  margin-bottom: 2em;
  position: relative;
  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const Image = styled.img`
  width: 75vh;
  height: auto;
  /* max-width: 750px; */
  object-fit: cover;
  transition: transform 0.8s ease;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 50vh;
    height: auto;
  }
`;

const TextContainer = styled.div`
  width: 70%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
`;

const H1Projetos = styled.h1`
  text-align: center;
  font-family: Montserrat;
  color: #01612c;
`;

const H2Projetos = styled.h2`
  text-align: center;
  font-family: Montserrat;
  font-size: 2em;
`;

const TextProjeto = styled.p`
  text-align: justify;
  font-family: Roboto;
  font-size: 1.2em;
  margin: 1em 0;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

const HorizontalLineProjetos = styled.hr`
  border-color: #15794f;
  max-width: 100%;
`;
