import React, { useState } from 'react';

const ExpenseForm = ({ onAddExpense }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && description && amount && category && date) {
      onAddExpense({
        id: Date.now(),
        name,
        description,
        amount: parseFloat(amount),
        category,
        date,
      });

  setName('');
  setDescription('');
  setAmount('');
  setCategory('');
  setDate('');
}
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
      <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
      <input type="number" placeholder="Amount" value={amount} onChange={(e) => setAmount(e.target.value)} required />
      <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} required />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">Add Expense</button>
    </form>
  );
};

export default ExpenseForm;     