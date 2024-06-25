// HomePage.tsx
import React, { useReducer } from 'react';
import ExpenseList from '../ExpenseList';
import IncomeList from '../IncomeList';
import SavingsGoal from '../SavingsGoals';
import expenseReducer from '../../reducers/expenseReducer';
import incomeReducer from '../../reducers/incomeReducer';
import savingsReducer from '../../reducers/savingsReducer';
import { useBudget } from '../../contexts/BudgetContext';

// Define initial states
const initialExpensesState = [];
const initialIncomeState = [];
const initialSavingsGoalState = { goal: 1000, current: 500 };

const HomePage = () => {
  const { expenses, expensesDispatch, incomes, incomeDispatch, savings, savingsDispatch} = useBudget();
  return (
    <div>
      <h1>Dashboard</h1>
      <ExpenseList expenses={expenses} onRemoveExpense={{}}/>
      <IncomeList incomes={incomes} />
      <SavingsGoal goal={savings.goal} current={savings.current} />
    </div>
  );
};

export default HomePage;