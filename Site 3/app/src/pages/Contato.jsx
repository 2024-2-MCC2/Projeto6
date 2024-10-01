import React from 'react'
import Header from '../components/Header';
import Footer  from '../components/Footer';
import Carousel from '../components/Carousel';
import styled from "styled-components";



function Contato() {
    return(
      <>
          <Container>
          <Header />
          <Carousel />
          <H2>Entre em contato</H2>

          <Container>
            
            <FormGroup>
              <Label>Nome</Label>
              <Input type="text" placeholder="Name" />
            </FormGroup>
            <FormGroup>
              <Label>E-mail</Label>
              <Input type="email" placeholder="Email" />
            </FormGroup>
            <FormGroup>
              <Label>Mensagem</Label>
              <TextArea placeholder="Message" />
            </FormGroup>
            <Button>Enviar</Button>
          </Container>

          <Footer/>
        </Container>
      </>
  );
}

export default Contato;

const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  
`
const FormGroup = styled.div`

  
`;

const Label = styled.label`

  display: block;
  margin-bottom: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 60%;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
  width: 60%;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

const Button = styled.button`
  width: 40%;
  height: 40px;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 1em;
`;
const Container = styled.div`
  background-color: #f9f9f9;
  
`;