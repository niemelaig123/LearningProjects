import React, { useContext } from 'react';
import ExpenseList from '../ExpenseList';
import AddItemForm from '../AddItemForm';
import { useBudget } from '../../contexts/BudgetContext';

interface Expense {
  id: string;
  name: string;
  amount: number;
}

const ExpensesPage: React.FC = () => {
  // Use useContext to access BudgetContext
  const { expenses, expensesDispatch } = useBudget();


  // Define addExpense and removeExpense actions if they are not already defined within your context
  const addExpense = (expense) => {
    expensesDispatch({ type: 'ADD_EXPENSE', payload: expense });
  };

  const removeExpense = (id) => {
    expensesDispatch({ type: 'REMOVE_EXPENSE', payload: id });
  };



  return (
    <div>
      <h1>Expenses</h1>
      <ExpenseList expenses={expenses} onRemoveExpense={removeExpense} />
      <AddItemForm onAdd={addExpense} />
    </div>
  );
};

export default ExpensesPage;