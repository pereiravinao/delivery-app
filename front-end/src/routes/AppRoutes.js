import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate to="/login" /> } />
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/register" element={ <Register /> } />
  </Routes>
);

export default AppRoutes;
