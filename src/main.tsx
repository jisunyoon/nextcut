import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Global } from '@emotion/react';
import { App } from "./App";
import { BrowserRouter } from 'react-router-dom';
import { globalStyles } from './styles/globalStyles';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={globalStyles} />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
