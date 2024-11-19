import React, { useState } from 'react';
import axios from 'axios';
import styled from "styled-components";
import Header from '../components/Header';
import Footer from '../components/Footer';
import Video from '../components/Video3';

export default function Mailing() {
  const [email, setEmail] = useState();
  const [subject, setSubject] = useState();
  const [message, setMessage] = useState();

  const sendMail = () => {
    axios
      .get("http://localhost:3000/", {
        params: {
          email,
          subject,
          message,
        },
      })
      .then(() => {
        //success
        console.log("success");
      })
      .catch(() => {
        console.log("failure");
      });
  };


  return (
    <Container>
      <Header />
      <Video />
      <H2>Entre em contato conosco</H2>

      <FormGroup>
        <Label>Nome</Label>
        <Input
          type="text"
          placeholder="Nome"
          onChange={(e) => setSubject(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>E-mail</Label>
        <Input
          type="email"
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label>Telefone</Label>
        <Input
          type="tel"
          placeholder="(11) 11111-1111"
          onChange={(e) => setMessage(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Button onClick={sendMail}>Enviar</Button>
      </FormGroup>


      <Footer />
    </Container>
  );
}

const H2 = styled.h2`
  font-size: 2rem;
  text-align: center;
  
`
const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  
`;

const Label = styled.label`

  display: block;
  margin: 10px;
  font-weight: bold;
`;

const Input = styled.input`
width: 30em;
  height: 40px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-sizing: border-box;
`;

const TextArea = styled.textarea`
width: 30em;
  height: 100px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
  resize: none;
`;

const Button = styled.button`
  width: 8em;
  height: 40px;
  background-color: #4CAF50;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  margin-bottom: 1em;
  margin-top: 0.5em;
  &:hover{
    background-color: #419a44;
    transition: background-color 0.3s ease-in-out;
  }
`;
const Container = styled.div`
  background-color: #f9f9f9;

  
`;