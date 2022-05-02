import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../pages/Login';

const AppRoutes = () => (
  <Routes>
    <Route exact path="/" element={ <Login /> } />
    <Route exact path="/login" element={ <Login /> } />
  </Routes>
);

export default AppRoutes;
