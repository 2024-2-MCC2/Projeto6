import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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


export default function BioContent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [membro, setMembros] = useState(null);

  useEffect(() => {
    const mockData = [
        { id: '1', nome: 'Ana Barreto', texto: 'Assistente do gerente regional...', foto: Membro1 },
        { id: '2', nome: 'Brenno Augusto', texto: 'Gerente regional da filial...', foto: Membro2 },
        { id: '3', nome: 'Caio Chaves', texto: 'Um dos vendedores da Dunder Mifflin...', foto: Membro3 },
        { id: '4', nome: 'Gabriel Nunes', texto: 'Recepcionista da Dunder Mifflin...', foto: Membro4 },
        { id: '5', nome: 'Isaac Silva', texto: 'Contadora. Rígida e séria...', foto: Membro5 },
        { id: '6', nome: 'Isabelle Luca', texto: 'Ela é um tipo quieto...', foto: Membro6 },
        { id: '7', nome: 'Isabelle Texeira', texto: 'Funcionário sério...', foto: Membro7 },
        { id: '8', nome: 'Ítalo Alencar', texto: 'Chega à Dunder Mifflin...', foto: Membro8 },
        { id: '9', nome: 'João Cardoso', texto: 'Estagiário e estudante de administração.', foto: Membro9 },
        { id: '10', nome: 'João Castilho', texto: 'Assistente do gerente regional...', foto: Membro10 },
        { id: '11', nome: 'João Grassi', texto: 'Gerente regional da filial...', foto: Membro11 },
        { id: '12', nome: 'João Kozseran', texto: 'Um dos vendedores da Dunder Mifflin...', foto: Membro12 },
        { id: '13', nome: 'Jorge Pardim', texto: 'Recepcionista da Dunder Mifflin...', foto: Membro13 },
        { id: '14', nome: 'Leonardo Pestana', texto: 'Contadora. Rígida e séria...', foto: Membro14 },
        { id: '15', nome: 'Luis Filho', texto: 'Ela é um tipo quieto...', foto: Membro15 },
        { id: '16', nome: 'Luiza Manta', texto: 'Funcionário sério...', foto: Membro16 },
        { id: '17', nome: 'Micael Ortis', texto: 'Chega à Dunder Mifflin...', foto: Membro17 },
        { id: '18', nome: 'Rafael Rocha', texto: 'Estagiário e estudante de administração.', foto: Membro18 },
        { id: '19', nome: 'Rodrigo Argolo', texto: 'Funcionário sério...', foto: Membro19 },
        { id: '20', nome: 'Thiago Florido', texto: 'Chega à Dunder Mifflin...', foto: Membro20 },
        { id: '21', nome: 'Victor Nunes', texto: 'Estagiário e estudante de administração.', foto: Membro21 }
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

const TextContainer = styled.div`
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