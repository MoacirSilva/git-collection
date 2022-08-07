import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Rotas } from './rotas';
import {GlobalStyle} from './styles/global'

const App: React.FC = () => {
  return (
    <>
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
    <GlobalStyle/>
    </>
  );
};

export default App;
