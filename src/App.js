import './App.css';
import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NovoUsuario from './components/NovoUsuario';
import Login from './components/Login';
import Home from "./components/Home";
import MeuCurriculo from './components/MeuCurriculo';
import Vagas from './components/Vagas';
import NovaEmpresa from './components/NovaEmpresa';

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
          <Route exact path="/meu-curriculo" element={<MeuCurriculo />} />
          <Route exact path="/vagas" element={<Vagas />} />
          <Route exact path="/novo-usuario" element={<NovoUsuario />} />
          <Route exact path="/nova-empresa" element={NovaEmpresa} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
