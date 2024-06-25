/**
 * @file Defines the action types, state structure, and initial state for expense management in the application.
 * This includes actions to add, remove, and update expenses.
*/

export enum ExpenseActionTypes {
  ADD_EXPENSE = 'ADD_EXPENSE',
  REMOVE_EXPENSE = 'REMOVE_EXPENSE',
  UPDATE_EXPENSE = 'UPDATE_EXPENSE',
}
  
// 2. Define State Type
interface Expense {
  id: string;
  description: string;
  amount: number;
}
  
type ExpenseState = Expense[];
  
// 3. Create Initial State
const initialState: ExpenseState = [];
  
// 4. Define Action Interfaces
export interface AddExpenseAction {
  type: ExpenseActionTypes.ADD_EXPENSE;
  payload: Expense;
}
  
export interface RemoveExpenseAction {
  type: ExpenseActionTypes.REMOVE_EXPENSE;
  payload: { id: string };
}
  
export interface UpdateExpenseAction {
  type: ExpenseActionTypes.UPDATE_EXPENSE;
  payload: Expense;
}
  
type ExpenseAction = AddExpenseAction | RemoveExpenseAction | UpdateExpenseAction;
  
// 5. Create Reducer Function
const expenseReducer = (state: ExpenseState = initialState, action: ExpenseAction): ExpenseState => {
  switch (action.type) {
    case ExpenseActionTypes.ADD_EXPENSE:
      return [...state, action.payload];
    case ExpenseActionTypes.REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== action.payload.id);
    case ExpenseActionTypes.UPDATE_EXPENSE:
      return state.map(expense => expense.id === action.payload.id ? action.payload : expense);
    default:
      return state;
  }
};
  
export default expenseReducer;

export const addExpense = (expense: Expense): AddExpenseAction => ({
    type: ExpenseActionTypes.ADD_EXPENSE,
    payload: expense,
});

export const removeExpense = (id: string): RemoveExpenseAction => ({
    type: ExpenseActionTypes.REMOVE_EXPENSE,
    payload: { id },
});

export const updateExpense = (expense: Expense): UpdateExpenseAction => ({
    type: ExpenseActionTypes.UPDATE_EXPENSE,
    payload: expense,
});