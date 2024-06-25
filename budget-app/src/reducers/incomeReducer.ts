/**
 * @file Defines the action types, state structure, and initial state for income management in the application.
 */

export enum IncomeActionTypes {
  ADD_INCOME = 'ADD_INCOME',
  REMOVE_INCOME = 'REMOVE_INCOME',
}

interface Income {
    id: number;
    amount: number;
  }
  
type State = Income[];

// Define Action Interfaces
export interface AddIncomeAction {
  type: IncomeActionTypes.ADD_INCOME;
  payload: Income;
}

export interface RemoveIncomeAction {
  type: IncomeActionTypes.REMOVE_INCOME;
  payload: Partial<Income>;
}
  
type IncomeAction = AddIncomeAction | RemoveIncomeAction;
  
const incomeReducer = (state: State, action: IncomeAction): State => {
  switch (action.type) {
    case IncomeActionTypes.ADD_INCOME:
      return [...state, action.payload];
    case IncomeActionTypes.REMOVE_INCOME:
      return state.filter(income => income.id !== action.payload.id);
    default:
      return state;
  }
};

export default incomeReducer;

export const addIncome = (income: Income): AddIncomeAction => ({
  type: IncomeActionTypes.ADD_INCOME,
  payload: income,
});

export const removeIncome = (income: Partial<Income>): RemoveIncomeAction => ({
  type: IncomeActionTypes.REMOVE_INCOME,
  payload: income,
});