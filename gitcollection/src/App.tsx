import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './rotas';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
};

export default App;
