import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import GabrielChaves    from '../imgs/diretoria/GabrielChaves.jpeg'
import IsabelleTeixeira from '../imgs/diretoria/IsabelleTeixeira.jpeg'
import LeonardoPestana  from '../imgs/diretoria/LeonardoPestana.jpeg'
import LuizFelipeGomes from '../imgs/diretoria/LuizFelipeGomes.jpeg'
import PedroCordeoli from '../imgs/diretoria/PedroCordeoli.jpeg'
import PedroOka from '../imgs/diretoria/PedroOka.jpeg'
import PetraGarcia from '../imgs/diretoria/PetraGarcia.jpeg'
import RobertaIwanaga from '../imgs/diretoria/RobertaIwanaga.jpeg'



export default function BioContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [membro, setMembros] = useState(null);

  useEffect(() => {
    const mockData = [
    { id: "1", nome: "Gabriel Chaves",  texto: 'Contato: chavesm.gabriel@gmail.com', foto: GabrielChaves},
    { id: "2", nome: "Isabelle Teixeira", texto: 'Contato: isabelletxeira@gmail.com', foto: IsabelleTeixeira},
    { id: "3", nome: "Leonardo Pestana", texto: ' Contato: leonardopestana6@gmail.com', foto: LeonardoPestana},
    { id: "4", nome: "Luiz Felipe Gomes", texto: 'Contato: lgsfilho@gmail.com', foto: LuizFelipeGomes},
    { id: "5", nome: "Pedro Cordeoli", texto: 'Contato: pedrocoriolli@gmail.com', foto: PedroCordeoli},
    { id: "6", nome: "Pedro Oka", texto: 'Contato: pedro.oka23@gmail.com', foto: PedroOka},
    { id: "7", nome: "PetraGarcia", texto: 'Contato: petragarcia440@gmail.com', foto: PetraGarcia},
    { id: "8", nome: "Roberta Iwanaga", texto: 'Contato: iwanagaroberta@hotmail.com', foto: RobertaIwanaga},
  ];
  
    const fetchedMembro = mockData.find(char => char.id === id);
    setMembros(fetchedMembro);
  }, [id]);

  const handleBack = () => { navigate(-1); };

  if (!membro) {
    return <div>Membro não encontrado.</div>;
  }

  return (
    <>
      <Container>
        <Content>
          <Image src={membro.foto} alt={membro.nome} />
          <TextContainer>
            <Title>{membro.nome}</Title>
            <Text>{membro.texto}</Text>
            <Button onClick={handleBack}>Voltar</Button>
          </TextContainer>
        </Content>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
  background: #fff;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 300px;
  height: auto;
  border-radius: 10px;
`;

const TextContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Text = styled.p`
  text-align: justify;
`;

const Title = styled.h2`
  text-align: left;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`