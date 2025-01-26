import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Principal from './pages/principal'; 
import Login from './pages/login/login';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/principal" element={<Principal />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
