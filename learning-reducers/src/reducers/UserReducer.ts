import { User } from "../model/User";

type Action = { type: "ADD_USER"; payload: User } | { type: "REMOVE_USER"; payload: number };

export const UserReducer = (state: User[], action: Action): User[] => {
  switch (action.type) {
    case "ADD_USER":
      return [...state, action.payload];
    case "REMOVE_USER":
      return state.filter(user => user.id !== action.payload);
    default:
      return state;
  }
};