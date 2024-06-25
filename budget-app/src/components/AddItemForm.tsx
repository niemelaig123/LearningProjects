import React, { useState } from 'react';

const AddItemForm = ({ onAdd }) => {
  const [itemName, setItemName] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!itemName || !amount) {
      alert('Please fill in all fields');
      return;
    }
    console.log('Adding item:', itemName, amount);
    onAdd({ id: itemName, amount: parseFloat(amount) });
    // Reset form fields
    setItemName('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="itemName">Item Name:</label>
        <input
          type="text"
          id="itemName"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForm;