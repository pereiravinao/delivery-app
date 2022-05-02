import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Login from '../pages/Login';

const AppRoutes = () => {
  const navigate = useNavigate();
  
  return(
    <Routes>
      <Route path="/" element={ <Login /> }>
        <Navigate to="/login" replace={true} />
      </Route>
      <Route exact path="/login" element={ <Login /> } />
    </Routes>
  );
};

export default AppRoutes;
