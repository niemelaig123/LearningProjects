import { AddIncomeAction, IncomeActionTypes, RemoveIncomeAction } from '../../src/reducers/incomeReducer';
import incomeReducer from '../../src/reducers/incomeReducer';

describe('incomeReducer', () => {
    test('should add an income', () => {
      const initialState = [];
      const action = { type: IncomeActionTypes.ADD_INCOME, payload: { id: 1, amount: 100 } };
      const newState = incomeReducer(initialState, action);
      expect(newState).toEqual([{ id: 1, amount: 100 }]);
    });
    test('should remove an income transaction by id', () => {
        const initialState = []
        const action: RemoveIncomeAction = { type: IncomeActionTypes.REMOVE_INCOME, payload: { id: 1 } };
        const newState = incomeReducer(initialState, action);
        expect(newState).toEqual([])
    });
    test('should reduce income with a negative transaction', () => {
        const initialState = [{ id: 1, amount: 100 }];
        const action: AddIncomeAction = { type: IncomeActionTypes.ADD_INCOME, payload: { id: 2, amount: -50}};
        const newState = incomeReducer(initialState, action);
        expect(newState).toEqual([{ id: 1, amount: 100 }, { id: 2, amount: -50 }])
    })
  });