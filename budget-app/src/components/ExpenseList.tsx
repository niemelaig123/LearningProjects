import React from 'react';

// Assuming Expense has at least an id and name
interface Expense {
  id: string;
  name: string;
}

interface ExpenseListProps {
  expenses: Expense[];
  onRemoveExpense: (id: string) => void; // Function to remove an expense
}

const ExpenseList: React.FC<ExpenseListProps> = ({ expenses, onRemoveExpense }) => {
  console.log("Expenses from ExpenseList.tsx: ", expenses)
  return (
    <div>
      <h2>Expenses</h2>
      <ul>
        {expenses.map((expense, id) => (
          <li key={id}>
            {expense.id} {expense.amount}
            <button onClick={() => onRemoveExpense(expense.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseList;