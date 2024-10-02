import React from 'react';
import Home from './pages/Home.jsx';
import Contato from './pages/Contato.jsx';
import Atividades from './pages/Atividades.jsx';
import Projetos from './pages/Projetos.jsx';
import SobreNos from './pages/SobreNos.jsx';
import Equipe from './pages/Equipe.jsx'; // Importando o componente Equipe
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyle';

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
                    <Route path='/SobreNos' element={<SobreNos />} />
                    <Route path='/Equipe' element={<Equipe />} /> {/* Adicionando a rota para Equipe */}
                </Routes>
            </Router>
        </div>
    );
}

export default App;
