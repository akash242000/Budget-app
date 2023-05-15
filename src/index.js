import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BudgetProvider } from './contex/BudgetContex'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BudgetProvider>
     <App />
    </BudgetProvider>
  </React.StrictMode>
);

reportWebVitals();
