import React from 'react';

const ExpenseTable = ({ expenses }) => {
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="expense-table-container">
      <h2>Your Expenses</h2>
      {expenses.length === 0 ? (
        <p className="no-expenses">No expenses found. Add an expense or adjust your search.</p>
      ) : (
        <table className="expense-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <td>{expense.name}</td>
                <td>{expense.category}</td>
                <td>${expense.amount.toFixed(2)}</td>
                <td>{formatDate(expense.date)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ExpenseTable;
