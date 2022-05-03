import React from 'react';
import DeliveryContext from './deliveryContext';

const DeliveryProvider = ({ children }) => {
  const context = { };
  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
};

export default DeliveryProvider;
