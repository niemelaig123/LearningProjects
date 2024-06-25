import React from 'react';

// Assuming IncomeSource is the type for each income source object
interface IncomeSource {
  id: string;
  source: string;
  amount: number;
}

interface IncomeListProps {
  incomeSources: IncomeSource[];
  onRemoveIncome: (id: string) => void;
}

const IncomeList: React.FC<IncomeListProps> = ({ incomeSources, onRemoveIncome }) => {
  return (
    <div>
      <h2>Income</h2>
      <ul>
        {incomeSources ? incomeSources.map(({ id, source, amount }) => (
          <li key={id}>
            {source}: ${amount.toFixed(2)}
            <button onClick={() => onRemoveIncome(id)}>Remove</button>
          </li>
        )) : null}
      </ul>
    </div>

  );
};

export default IncomeList;