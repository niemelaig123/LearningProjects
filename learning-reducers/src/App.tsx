// src/App.tsx
import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const App = () => {
  const { users, dispatch } = useContext(UserContext);

  return (
    <div>
      <button onClick={() => dispatch({ type: "ADD_USER", payload: { id: Date.now(), name: "New User" } })}>
        Add User
      </button>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
};

export default App;