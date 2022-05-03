import React from 'react';
import PropTypes from 'prop-types';
import DeliveryContext from './deliveryContext';

const DeliveryProvider = ({ children }) => {
  const context = { };
  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
};

DeliveryProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DeliveryProvider;
