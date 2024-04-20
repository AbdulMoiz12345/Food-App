import React, { createContext, useState } from 'react';

export const Itemcontext = createContext(null);

const ShopContextProvider = ({ children }) => {
  const [cartitem, setcartitem] = useState([
  ]);

  return (
    <Itemcontext.Provider value={{ cartitem, setcartitem }}>
      {children}
    </Itemcontext.Provider>
  );
};

export default ShopContextProvider;
