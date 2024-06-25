import React, { useState } from 'react';

const SavingsPage = () => {
  const [savingsGoal, setSavingsGoal] = useState(1000); // Example default goal
  const [currentSavings, setCurrentSavings] = useState(0);

  const handleGoalChange = (event) => {
    setSavingsGoal(event.target.value);
  };

  const handleSavingsChange = (event) => {
    setCurrentSavings(event.target.value);
  };

  return (
    <div>
      <h1>Savings Goal</h1>
      <div>
        <label htmlFor="goal">Set your savings goal:</label>
        <input
          type="number"
          id="goal"
          value={savingsGoal}
          onChange={handleGoalChange}
        />
      </div>
      <div>
        <label htmlFor="current">Current Savings:</label>
        <input
          type="number"
          id="current"
          value={currentSavings}
          onChange={handleSavingsChange}
        />
      </div>
      <div>
        <p>You have saved {((currentSavings / savingsGoal) * 100).toFixed(2)}% of your goal.</p>
      </div>
    </div>
  );
};

export default SavingsPage;