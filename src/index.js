import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { UserProvider } from './context/UserContext';
import { CupcakeProvider} from './context/CupcakeContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <UserProvider>
  <CupcakeProvider>
  <App />
  </CupcakeProvider>
  </UserProvider>
  </BrowserRouter>
);
