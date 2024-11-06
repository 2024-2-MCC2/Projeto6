import React from 'react'
import NavBar from './NavBar'
import styled from "styled-components";
import logo  from '../imgs/LogoFecapFinanceOriginal.png';
import { useNavigate } from 'react-router-dom';

// import logoFecap from '../imgs/logoFecapImg.png';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #017033; //Padrão:  #00893E

    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    padding: 20px;
    .IMGLogo{
      max-width: 300px; //Logo horizontal 300px; Logo vertical 100px
      max-height: 300px; //Logo horizontal 300px; Logo vertical 100px
      margin-left: 40px;
      transition: all 0.5s ease-in-out;
    }
    &:hover{
      cursor:  pointer;
    }

`

function Header() {

  const navigate = useNavigate();
  const handleClick1 = () => { navigate('/') }; //tem que ta dentro de uma função


  return (
    <HeaderContainer className="container">
        <div className="Logo">
            <img className="IMGLogo"src={logo}  alt="Logo Fecap Finance" onClick={handleClick1} />
            </div>
        <NavBar/>
    </HeaderContainer>
  )
}

export default Header