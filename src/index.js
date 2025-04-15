import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
