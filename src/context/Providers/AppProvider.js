import { useState } from 'react';
import { AppContext } from 'context';

const AppProvider = ({ children }) => {
  const [view, setView] = useState('req_page');
  const [info, setInfo] = useState({});
  const [amount, setAmount] = useState('');
  const [dimension, setDimension] = useState('dimension_1');

  return (
    <AppContext.Provider
      value={{
        view,
        dimension,
        amount,
        info,
        setView,
        setDimension,
        setAmount,
        setInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
