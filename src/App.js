import './App.css';
import React from "react"
import {BrowserRouter as Router, Route, Routes} from "react-router-dom" 
import  NovoUsuario from './components/NovoUsuario';
import Login from './components/Login';

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
        <Route exact path="/" element={<Login/>}/>
          <Route exact path="/novo-usuario" element={<NovoUsuario />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
