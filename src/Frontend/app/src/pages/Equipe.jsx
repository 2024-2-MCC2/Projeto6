import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from '../Components/Video3';
import { FaLinkedin } from 'react-icons/fa';
import EquipeCard from '../components/EquipeCard';
import styled from "styled-components";

import GabrielChaves    from '../imgs/diretoria/GabrielChaves.jpeg'
import IsabelleTeixeira from '../imgs/diretoria/IsabelleTeixeira.jpeg'
import LeonardoPestana  from '../imgs/diretoria/LeonardoPestana.jpeg'
import LuizFelipeGomes from '../imgs/diretoria/LuizFelipeGomes.jpeg'
import PedroCordeoli from '../imgs/diretoria/PedroCordeoli.jpeg'
import PedroOka from '../imgs/diretoria/PedroOka.jpeg'
import PetraGarcia from '../imgs/diretoria/PetraGarcia.jpeg'
import RobertaIwanaga from '../imgs/diretoria/RobertaIwanaga.jpeg'


export default function Equipe() {

  const navigate = useNavigate();
  const membroData = [
    { id: 1, src: GabrielChaves   , nome: "Gabriel Chaves", content: "Diretor Projetos"},
    { id: 2, src: IsabelleTeixeira, nome: "Isabelle Teixeira", content: "Diretor Marketing" },
    { id: 3, src: LeonardoPestana , nome: "Leonardo Pestana", content: "Presidente" },
    { id: 4, src: LuizFelipeGomes , nome: "Luiz Felipe Gomes", content: "Diretor FP&A" },
    { id: 5, src: PedroCordeoli, nome: "Pedro Cordeoli", content: "Diretor Administrativo" },
    { id: 6, src: PedroOka, nome: "Pedro Oka", content: "Diretor Investment Banking" },
    { id: 7, src: PetraGarcia, nome: "Pedro Oka", content: "Vice-Presidente" },
    { id: 8, src: RobertaIwanaga, nome: "Roberta Iwanaga", content: "Diretor Macroeconomia" },
];


  return (
    <div>
      <Header />
      <Video />
      <EquipeCard membroData={membroData} navigate={navigate} />
      

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
