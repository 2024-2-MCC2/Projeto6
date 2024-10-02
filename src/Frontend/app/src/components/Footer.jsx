import React from 'react';
import styled from 'styled-components';
import logo  from '../imgs/LogoLogo.png';
import NavBarFooter from './NavBarFooter'

const FooterContainer = styled.footer`
  display: flex;
  background-color: #017033;
  color: #fff;
  padding: 20px;
  text-align: center;
  margin-top: 10px;
  align-items: center;
 justify-content: space-around; 
`;

const FooterText1 = styled.p`
  margin-bottom: 10px;
  /* margin-left: 50px; */
`;

const FooterText2 = styled.p`
  margin-bottom: 10px;
  /* margin-left: 50px; */
`;

const FooterLink = styled.a`
  color: #fff;
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: #ccc;
  }
`;

const ImgLogo = styled.img`
  margin-top: 10px;
  display: flex;
  max-width: 270px;
  max-height: 270px;
  margin-left: 50px;
`;

const NavBar = styled.p`
  margin-right: 100px;
  /* font-size: 300px; */
`

const HorizontalLine = styled.hr`
  border-color: #fff; 
  font-weight: bold;
  /* --lnw: 3px; */
`

const Footer = () => {
  return (
    <FooterContainer>
      <div className="Logo">
        <ImgLogo className="IMGLogo"src={logo} alt="Logo Fecap Finance" />
      </div>

      <div className='FooterText'>
      <HorizontalLine/>
      <FooterText1>© 2024 Fecap Finance - Todos os direitos reservados</FooterText1>
      <FooterText2>
        <FooterLink href="https://www.fecap.br">Fecap</FooterLink> | 
        <FooterLink href="mailto:contato@fecapfinance.com"> contato@fecapfinance.com</FooterLink>
      </FooterText2>
      </div>
    
      <NavBar>
        <HorizontalLine/>
        <NavBarFooter/>
      </NavBar>
    </FooterContainer>
  );
};

export default Footer;