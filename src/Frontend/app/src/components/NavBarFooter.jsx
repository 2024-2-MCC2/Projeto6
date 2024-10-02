import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function NavBar() {
    const navigate = useNavigate();
    
    const handleClick1 = () => { navigate('/') };
    const handleClick2 = () => { navigate('/Projetos') };
    const handleClick3 = () => { navigate('/Atividades') }; 
    const handleClick4 = () => { navigate('/Equipe') }; 
    const handleClick5 = () => { navigate('/Contato') }
    const handleClick6 = () => { navigate('/Mailing') };

    return (
        
        <NavBarContainer>
            <Menu onClick={handleClick1}>Home</Menu>
            <Menu onClick={handleClick2}>Projetos</Menu>
            <Menu onClick={handleClick3}>Atividades</Menu>
            <Menu onClick={handleClick4}>Equipe</Menu>
            <Menu onClick={handleClick5}>Contato</Menu>
            <Menu onClick={handleClick6}>Mailing</Menu> 
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
    flex-direction: column;
    font-weight: bold;

`

const Menu = styled.a`
    &{
    justify-content: space-around;
    margin: 0 1em;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out; /* Adicionei essa linha */
    margin-bottom: 20px;
    font-weight: bold;
    }

    &:hover{
         font-weight: bold; 
        opacity: 0.7; /* Adicionei essa linha */
        text-decoration: underline;
        /* esse & Ã© para alterar o atual e colocar com hover */
    }

`

