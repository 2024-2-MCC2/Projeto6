import React from 'react';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
import Atividades from './pages/Atividades.jsx';
import Projetos from './pages/Projetos.jsx';
import Mailing from './pages/Mailing.jsx'
import Challenges from './Pages/Challenges.jsx';
import Estruturacao from './Pages/Estruturacao.jsx'
import Equipe from './pages/Equipe.jsx'; // Importando o componente Equipe
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';
import Bio from './pages/Bio.jsx';

function App() {
    return (
        <div>
            <Router>
                <GlobalStyle />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/Contato' element={<Contato />} /> 
                    <Route path='/Atividades' element={<Atividades />} />
                    <Route path='/Projetos' element={<Projetos />} />
                    <Route path='/Equipe' element={<Equipe />} />
                    <Route path='/Challenges' element={<Challenges />} />
                    <Route path='/Estruturacao' element={<Estruturacao />} />
                    <Route path='/Mailing' element={<Mailing />} />
                    <Route path="/bio/:id" element={<Bio/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;
