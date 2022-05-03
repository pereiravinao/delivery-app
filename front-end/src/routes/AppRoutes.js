import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Customer from '../pages/Customer';

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={ <Navigate to="/login" /> } />
    <Route exact path="/login" element={ <Login /> } />
    <Route exact path="/register" element={ <Register /> } />
    <Route exact path="/customer/products" element={ <Customer /> } />
  </Routes>
);

export default AppRoutes;
