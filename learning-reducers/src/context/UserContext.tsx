import React, { createContext, useReducer, ReactNode } from "react";
import { User } from "../model/User";
import { UserReducer } from "../reducers/UserReducer";

type InitialStateType = {
  users: User[];
  dispatch: React.Dispatch<any>;
};

const initialState = {
  users: [],
  dispatch: () => null
};

export const UserContext = createContext<InitialStateType>(initialState);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState.users);

  return (
    <UserContext.Provider value={{ users: state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};