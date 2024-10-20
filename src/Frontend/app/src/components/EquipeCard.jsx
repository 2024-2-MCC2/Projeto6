import React from 'react';
import styled from 'styled-components';

// Definindo os componentes estilizados
const MainTitle = styled.h1`
  text-align: center;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ImageCard = styled.div`
  margin: 10px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

const StyledName = styled.h2`
  font-size: 1.5em;
`;

const Description = styled.p`
  font-size: 1em;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

// Componente EquipeCard
function EquipeCard({ membroData, navigate }) {
  if (!Array.isArray(membroData)) {
    return <p>Dados da equipe não estão disponíveis.</p>;
  }

  return (
    <div>
      <MainTitle>Nossa Equipe</MainTitle>
      <Container>
        {membroData.map((membro, index) => (
          <ImageCard key={index}>
            <StyledImage src={membro.src} alt={membro.nome} />
            <StyledName>{membro.nome}</StyledName>
            <Description>{membro.content}</Description>
            <Button onClick={() => navigate(`/bio/${membro.id}`)}>Saiba Mais</Button>
          </ImageCard>
        ))}
      </Container>
    </div>
  );
}

export default EquipeCard;