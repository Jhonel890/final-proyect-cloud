// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './pages/principal'; // Importa la página 'principal'

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define la ruta para la página principal */}
        <Route path="/principal" element={<Principal />} />
        {/* Puedes agregar otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
