import React from 'react';
import styled from 'styled-components';
import logo  from '../imgs/LogoFecapFinanceOriginal.png';
import NavBarFooter from './NavBarFooter'
import { FaLinkedin } from 'react-icons/fa';
import  { FaInstagram } from 'react-icons/fa';
import   { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import EmailLink from './EmailLink';
import { useNavigate } from 'react-router-dom';

const FooterContainer = styled.footer`
 display: flex;
 background-color: #017033;
 color: #fff;
 padding: 20px;
 text-align: center;
 margin-top: 10px;
 align-items: center;
justify-content: space-evenly; 

  /* Adapt to different screen sizes using flexbox */
  @media (max-width: 768px) {
    flex-direction: column; /* Stack elements vertically on small screens */
    padding: 10px; /* Adjust padding for smaller layouts */
  }
  @media (max-width: 850px) {
    flex-direction: column; /* Stack elements vertically on small screens */
    padding: 10px; /* Adjust padding for smaller layouts */
  }
`;

const FooterText1 = styled.p`
  margin-top: 3em;
  text-align: center; /* Center text on all screens */
  @media (max-width: 768px) {
    margin-top: 2em;
    font-size: 0.7em
  }
`;




const ImgLogo = styled.img`
  width: 100%; 
  max-width: 350px; 
  margin: 10px auto; 
  @media (max-width: 768px) {
    margin-top: 1.5em;
  }
  `

const NavBar = styled.p`

`;

const HorizontalLine = styled.hr`
  border-color: #fff;
  border: 1.5px solid;
  margin: 1em 0;
  --lnw: 3px;
`;

const A = styled.a`
  margin-left: 0.8em;
  color: #f5f5f5;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    color: #ccc;
  }
`;

const Logo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* Adjust alignment on smaller screens (optional) */
  align-items: center; /* Center content within the logo section */
`;


const Footer = () => {
  return (
    <FooterContainer>
      
      <Logo>
        <ImgLogo className="IMGLogo"src={logo} alt="Logo Fecap Finance" />
        <FooterText1>© 2024 Fecap Finance - Todos os direitos reservados</FooterText1>
      
      </Logo>
      <NavBar>
        <HorizontalLine/>
        <NavBarFooter/>
      </NavBar>

      <div className="rightside">
        <div className="links">
          <HorizontalLine/>
          <A href="https://www.linkedin.com/company/fecap-finance/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={50} /></A>
          <A href="https://www.facebook.com/profile.php?id=100080028912366&mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook size={50} /></A>
          <A href="https://www.instagram.com/fecapfinance?igsh=cGd0Y2Qwa2N3MXpz" target="_blank" rel="noopener noreferrer"><FaInstagram size={50} /></A>
          <A href="https://youtube.com/@fecap?si=cYFIMrS-1OczwAr-" target="_blank" rel="noopener noreferrer"><FaYoutube size={50} /></A>
          <HorizontalLine/>
        </div>
        <div className="contato">
          <EmailLink email="fecap.finance@edu.fecap.br" subject="Informações sobre eventos" body="Olá, gostaria de saber mais sobre os eventos da FECAP Finance." />
          <HorizontalLine/>        
        </div>
        <div className="endereco">
        <p><A href='https://www.google.com.br/maps/place/FECAP+-+Fundação+Escola+de+Comércio+Álvares+Penteado+-+Campus+Liberdade/@-23.5572348,-46.6395381,17z/data=!4m6!3m5!1s0x94ce59a8b4d648f9:0x862df06cefe8bc3e!8m2!3d-23.5572348!4d-46.6369578!16s%2Fg%2F122xff09?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D' target="_blank" rel="noopener noreferrer">Av. da Liberdade, 532</A></p>
        <p>São Paulo - SP</p>
        </div>
      </div>
    </FooterContainer>
  );
};

export default Footer;