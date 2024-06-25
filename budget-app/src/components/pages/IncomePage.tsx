import React, { useReducer } from 'react';
import incomeReducer, { addIncome, removeIncome } from '../../reducers/incomeReducer';
import { useBudget } from '../../contexts/BudgetContext';
import IncomeList from '../IncomeList';
import AddItemForm from '../AddItemForm';

// Assuming initial state is defined within your reducer file or you define it here
const initialState = {
  incomeSources: []
};

const IncomePage = () => {
  const { incomes, incomesDispatch } = useBudget();

  // Define addIncome and removeIncome actions
  const handleAddIncome = (source, amount) => {
    incomesDispatch(addIncome(source, amount));
  };

  const handleRemoveIncome = (id) => {
    incomesDispatch(removeIncome(id));
  };

  return (
    <div>
      <h1>Income Sources</h1>
      <IncomeList incomes={incomes} onRemoveIncome={handleRemoveIncome} />
      <AddItemForm onAdd={handleAddIncome} />
    </div>
  );
};

export default IncomePage;