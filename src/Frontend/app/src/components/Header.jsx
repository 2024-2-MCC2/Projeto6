import React from 'react'
import NavBar from './NavBar'
import styled from "styled-components";
import logo  from '../imgs/LogoLogo.png';

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
      max-width: 250px;
      max-height: 250px;
      margin-left: 40px;
      transition: all 0.5s ease-in-out;
    }
    .IMGLogo:hover{
      max-width: 255px;
      max-height: 255px;
    }


`

function Header() {
  return (
    <HeaderContainer className="container">
        <div className="Logo">
            <img className="IMGLogo"src={logo}  alt="Logo Fecap Finance" />
            </div>
        <NavBar/>
    </HeaderContainer>
  )
}

export default Header