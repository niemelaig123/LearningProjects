import React from 'react';

interface SavingsGoal {
  id: string;
  goalName: string;
  targetAmount: number;
  currentAmount: number;
}

interface SavingsGoalsProps {
  savingsGoals: SavingsGoal[];
  onRemoveGoal: (id: string) => void;
}

const SavingsGoals: React.FC<SavingsGoalsProps> = ({ savingsGoals, onRemoveGoal }) => {
  return (
    <div>
      <h2>Savings Goals</h2>
      <ul>
        {savingsGoals ? savingsGoals.map(({ id, goalName, targetAmount, currentAmount }) => (
          <li key={id}>
            {goalName}: ${currentAmount.toFixed(2)} / ${targetAmount.toFixed(2)}
            <button onClick={() => onRemoveGoal(id)}>Remove</button>
          </li>
        )) : null}
      </ul>
    </div>

  );
};

export default SavingsGoals;