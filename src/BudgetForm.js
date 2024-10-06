import React, { useState } from 'react';

const BudgetForm = ({ addBudget }) => {
    const [name, setName] = useState('');
    const [maxAmount, setMaxAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addBudget({ name, maxAmount });
        setName('');
        setMaxAmount('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter budget name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
            />
            <input
                type="number"
                placeholder="Enter max amount"
                value={maxAmount}
                onChange={(e) => setMaxAmount(e.target.value)}
                required
            />
            <button type="submit">Add Budget</button>
        </form>
    );
};

export default BudgetForm;