import React, { useState } from 'react';
import ExpenseForm from './Components/ExpenseForm';
import ExpenseTable from './Components/ExpenseTable';
import SearchBar from './Components/SearchBar';

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredExpenses = expenses.filter(expense =>
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Expense Tracker</h1>
      <SearchBar onSearch={handleSearch} />
      <ExpenseForm onAddExpense={addExpense} />
      <ExpenseTable expenses={filteredExpenses} />
    </div>
  );
};

export default App;