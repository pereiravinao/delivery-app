import React from 'react';
import AppRoutes from './routes/AppRoutes';
import './App.css';
import DeliveryProvider from './context/deliveryProvider';

function App() {
  return (
    <DeliveryProvider>
      <AppRoutes />
    </DeliveryProvider>
  );
}

export default App;
