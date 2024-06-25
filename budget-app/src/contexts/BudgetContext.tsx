import React, { createContext, useContext, useReducer  } from 'react';
import savingsReducer from '../reducers/savingsReducer';
import expenseReducer from "../reducers/expenseReducer";
import incomeReducer from "../reducers/incomeReducer";

const BudgetContext = createContext({});

export const useBudget = () => useContext(BudgetContext);

const BudgetProvider = ({ children }: { children: React.ReactNode }) => {
  const [savings, savingsDispatch] = useReducer(savingsReducer, []);
  const [expenses, expensesDispatch] = useReducer(expenseReducer, []);
  const [incomes, incomesDispatch] = useReducer(incomeReducer, []);

  return (
    <BudgetContext.Provider value={{ savings, savingsDispatch, expenses, expensesDispatch, incomes, incomesDispatch }}>
      {children}
    </BudgetContext.Provider>
  );
};

export default BudgetProvider;