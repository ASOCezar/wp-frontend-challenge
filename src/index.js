import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { GlobalStyles } from './styles/global-styles';
import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <Home />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
);
