import React, { useState } from 'react';
import NavBar from './NavBar';
import styled from 'styled-components';
import logo from '../imgs/LogoFecapFinanceOriginal.png';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #017033;
    padding: 10px 20px;
    color: #fff;
    font-weight: bold;
    width: 100%;
    box-sizing: border-box;

    .IMGLogo {
        max-width: 70%;
        height: auto;
        max-height: 80px;
        margin-left: 10px;
        transition: all 0.5s ease-in-out;
    }

    .hamburger {
        display: none;
        font-size: 30px;
        cursor: pointer;
    }

    @media (max-width: 768px) {
        .IMGLogo {
            max-height: 60px;
            margin-left: 0;
        }

        .hamburger {
            display: block;
            margin-right: 10px;
        }
    }
    @media (max-width: 900px) {
        .IMGLogo {
            max-height: 60px;
            margin-left: 0;
        }

        .hamburger {
            display: block;
            margin-right: 10px;
        }
    }
`;

const NavBarContainer = styled.div`
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
    @media (max-width: 900px) {
        display: none;
    }
`;

const MenuOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.8);
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 10;

    .close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 30px;
        cursor: pointer;
    }
`;

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleClickLogo = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <HeaderContainer>
                <div className="Logo">
                    <img className="IMGLogo" src={logo} alt="Logo Fecap Finance" onClick={handleClickLogo} />
                </div>
                <NavBarContainer>
                    <NavBar /> {/* Exibe o menu NavBar na versão desktop */}
                </NavBarContainer>
                <div className="hamburger" onClick={toggleMenu}>
                    &#9776; {/* Ícone de menu de hambúrguer */}
                </div>
            </HeaderContainer>

            <MenuOverlay isOpen={isOpen}>
                <div className="close-btn" onClick={toggleMenu}>
                    &times; {/* Ícone de fechar */}
                </div>
                <NavBar /> {/* Exibe o menu NavBar na versão mobile */}
            </MenuOverlay>
        </>
    );
}
