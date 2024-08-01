// src/App.js
import React from 'react';
import './App.css';
import NavBar from './componentes/NavBar';
import LogIn from './componentes/LogIn';
import Formulario from './componentes/Formulario';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Lista from './componentes/Lista';

function App() {
  return (
     <>     
      <BrowserRouter>
        <NavBar />
        <div className="App">
        <div className='contenido'>
          <Routes>
            <Route path='/' element={<Lista />} />
            <Route path='/login' element={<LogIn />} />
            <Route path='/formulario' element={<Formulario />} />
          </Routes>
        </div>
        </div>    
      </BrowserRouter>    
    </>
  );
}

export default App;
