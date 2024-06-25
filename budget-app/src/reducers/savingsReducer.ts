enum SavingsGoalActionTypes {
  ADD_SAVINGS_GOAL = 'ADD_SAVINGS_GOAL',
  UPDATE_SAVINGS_GOAL = 'UPDATE_SAVINGS_GOAL',
  REMOVE_SAVINGS_GOAL = 'REMOVE_SAVINGS_GOAL',
}

interface SavingsGoal {
  id: string;
  name: string;
  targetAmount: number;
  currentAmount: number;
}
  
type SavingsGoalState = SavingsGoal[];
  
interface AddSavingsGoalAction {
  type: typeof SavingsGoalActionTypes.ADD_SAVINGS_GOAL;
  payload: SavingsGoal;
}
  
interface UpdateSavingsGoalAction {
  type: typeof SavingsGoalActionTypes.UPDATE_SAVINGS_GOAL;
  payload: { id: string; data: Partial<SavingsGoal> };
}
  
interface RemoveSavingsGoalAction {
  type: typeof SavingsGoalActionTypes.REMOVE_SAVINGS_GOAL;
  payload: { id: string };
}
  
type SavingsGoalActions = AddSavingsGoalAction | UpdateSavingsGoalAction | RemoveSavingsGoalAction;

const savingsReducer = (state: SavingsGoalState = [], action: SavingsGoalActions): SavingsGoalState => {
  switch (action.type) {
    case SavingsGoalActionTypes.ADD_SAVINGS_GOAL:
      return [...state, action.payload];
    case SavingsGoalActionTypes.UPDATE_SAVINGS_GOAL:
      return state.map(goal =>
        goal.id === action.payload.id ? { ...goal, ...action.payload.data } : goal
      );
    case SavingsGoalActionTypes.REMOVE_SAVINGS_GOAL:
      return state.filter(goal => goal.id !== action.payload.id);
    default:
      return state;
  }
};

export default savingsReducer;

export const addSavingsGoal = (goal: SavingsGoal): AddSavingsGoalAction => ({
  type: SavingsGoalActionTypes.ADD_SAVINGS_GOAL,
  payload: goal,
});

export const updateSavingsGoal = (id: string, data: Partial<SavingsGoal>): UpdateSavingsGoalAction => ({
  type: SavingsGoalActionTypes.UPDATE_SAVINGS_GOAL,
  payload: { id, data },
});

export const removeSavingsGoal = (id: string): RemoveSavingsGoalAction => ({
  type: SavingsGoalActionTypes.REMOVE_SAVINGS_GOAL,
  payload: { id },
});