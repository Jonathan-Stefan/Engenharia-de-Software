import React from 'react';
import { render } from 'react-dom';
import './index.css';
import Calculator from './components/Calculator';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
