import React from 'react';

const ExpenseList = ({ budgets, onDelete }) => {
    return (
        <div>
            <h2>Your Expenses</h2>
            {budgets.length === 0 ? (
                <p>No budgets added yet.</p>
            ) : (
                <ul>
                    {budgets.map((budget, index) => (
                        <li key={index}>
                            {budget.name} - N{budget.maxAmount}
                            <button onClick={() => onDelete(budget)}>Delete</button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ExpenseList;