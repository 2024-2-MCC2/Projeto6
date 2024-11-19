import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
    const navigate = useNavigate();
    
    const handleClick1 = () => { navigate('/') };
    const handleClick2 = () => { navigate('/Projetos') };
    const handleClick3 = () => { navigate('/Atividades') }; 
    const handleClick4 = () => { navigate('/Estruturacao') };
    const handleClick5 = () => { navigate('/Equipe') }; 
    const handleClick6 = () => { navigate('/Challenges') };
    const handleClick7 = () => { navigate('/Contato') };
    const handleClick8 = () => { navigate('/Mailing') };

    return (
        <NavBarContainer>
            <Menu onClick={handleClick1}>Home</Menu>
            <Menu onClick={handleClick2}>Projetos</Menu>
            <Menu onClick={handleClick3}>Atividades</Menu>
            <Menu onClick={handleClick4}>Estruturação</Menu>
            <Menu onClick={handleClick5}>Equipe</Menu>
            <Menu onClick={handleClick6}>Challenges</Menu>
            <Menu onClick={handleClick7}>Contato</Menu> 
            <Menu onClick={handleClick8}>Mailing</Menu> 
        </NavBarContainer>
    );
}

export default NavBar;

const NavBarContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1em 0;
    margin: 0 2em;

    @media (max-width: 768px) {
        flex-direction: column; // Alinha os itens verticalmente em telas menores
        align-items: flex-start; // Alinha à esquerda
        margin: 0; // Remove margens em telas menores
    }
`;

const Menu = styled.a`
    cursor: pointer;
    margin: 0 1em;
    transition: opacity 0.3s ease-in-out;

    &:hover {
        opacity: 0.7;
        text-decoration: underline;
    }

    @media (max-width: 768px) {
        margin: 0.5em 0; // Ajusta a margem em telas menores
    }
`;