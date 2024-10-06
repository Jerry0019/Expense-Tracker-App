// src/App.js
import React, { useState } from 'react';
import BudgetForm from './BudgetForm';
import ExpenseList from './ExpenseList';
import DeleteConfirmationModal from './DeleteConfirmationModal';
import logo from './assets/logo.png'; // Adjust the path as needed
import './App.css'; // For styling

const App = () => {
    const [budgets, setBudgets] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [budgetToDelete, setBudgetToDelete] = useState(null);

    const addBudget = (budget) => {
        setBudgets([...budgets, budget]);
    };

    const openDeleteModal = (budget) => {
        setBudgetToDelete(budget);
        setModalIsOpen(true);
    };

    const deleteBudget = () => {
        setBudgets(budgets.filter(b => b !== budgetToDelete));
        setModalIsOpen(false);
        setBudgetToDelete(null);
    };

    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} alt="App Logo" className="logo" />
                <h1>Expense Tracker</h1>
            </header>
            <BudgetForm addBudget={addBudget} />
            <ExpenseList budgets={budgets} onDelete={openDeleteModal} />
            <DeleteConfirmationModal
                isOpen={modalIsOpen}
                onRequestClose={() => setModalIsOpen(false)}
                onDelete={deleteBudget}
            />
        </div>
    );
};

export default App;