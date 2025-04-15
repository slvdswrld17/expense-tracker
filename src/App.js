import React, { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {

  const [expenses, setExpenses] = useState([
    { id: 1, name: 'iPad', amount: 799, description: 'Purchased for digital art', category: 'Electronics', date: '2025-06-15' },
    { id: 2, name: 'Bluetooth Speaker', amount: 120, description: 'Gift for a friend', category: 'Gadgets', date: '2025-07-01' },
    { id: 3, name: 'Dog Food', amount: 55, description: 'Monthly supply of pet food', category: 'Pet Care', date: '2025-04-03' },
    { id: 4, name: 'Notebook Pack', amount: 75, description: 'Supplies for school', category: 'Stationery', date: '2025-08-20' },
    { id: 5, name: 'Flight to Paris', amount: 950, description: 'Business trip airfare', category: 'Travel', date: '2025-05-25' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const filteredExpenses = expenses.filter((exp) =>
    exp.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

return (
    <div className="container">
      <h1>Expense Tracker</h1>
      <p>Start taking control of your finances and life. Record, categorise, and analyse your spending.</p>
  
      <div className="app-grid">
        <div className="form-section">
          <h2>Add Expense</h2>
          <ExpenseForm onAddExpense={addExpense} />
        </div>
  
        <div className="table-section">
          <SearchBar onSearch={setSearchTerm} />
          <h2>Expense List</h2>
          <ExpenseTable items={filteredExpenses} />
        </div>
      </div>
    </div>
  );
  
  
};

export default App;        app. js 