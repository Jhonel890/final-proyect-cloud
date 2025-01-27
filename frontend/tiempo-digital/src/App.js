import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import Login from './pages/login/login';
import NotFound from './pages/notfound';
import Register from './pages/register/register';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/principal" element={<Dashboard />} />
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
