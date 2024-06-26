import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NovoUsuario from './components/NovoUsuario';
import Login from './components/Login';
import Home from "./components/Home";
import MeuCurriculo from './components/MeuCurriculo';
import Vagas from './components/Vagas';
import NovaEmpresa from './components/NovaEmpresa';
import EsqueciSenha from './components/EsqueciSenha';
import NovoCurriculo from './components/NovoCurriculo';
import NovaVaga from './components/NovaVaga';
import Empresas from './components/Empresas';
import Curriculos from './components/Curriculos';

const App = () => {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         first
  //       </a>
  //     </header>
  //   </div>
  // );
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/home" element={<Home />} />
          {/* <Route exact path="/meu-curriculo" element={<MeuCurriculo />} /> */}
          <Route exact path="/vagas" element={<Vagas />} />
          <Route exact path="/novo-usuario" element={<NovoUsuario />} />
          <Route exact path="/empresa" element={<NovaEmpresa />} />
          <Route exact path="/empresa/:id" element={<NovaEmpresa/>}/>
          <Route exact path="/empresas" element={<Empresas />} />
          <Route exact path="/curriculos" element={<Curriculos />} />
          <Route exact path="/curriculo" element={<NovoCurriculo />} />
          <Route exact path="/curriculo/:id" element={<NovoCurriculo />} />
          <Route exact path="/esqueci-senha" element={<EsqueciSenha />} />
          <Route exact path="/vaga" element={<NovaVaga />} />
          <Route exact path="/vaga/:id" element={<NovaVaga/>}/>
          <Route exact path="/vagas" element={<Vagas />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
