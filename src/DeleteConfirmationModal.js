import React, { useEffect } from 'react';
import './DeleteConfirmationModal.css'; // Import the CSS for the modal

const DeleteConfirmationModal = ({ isOpen, onRequestClose, onDelete }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onDelete(); // Call onDelete to remove the budget
                onRequestClose(); // Close the modal after deletion
            }, 3000); // Auto close after 3 seconds
            return () => clearTimeout(timer);
        }
    }, [isOpen, onDelete, onRequestClose]);

    return (
        <div className={`notification ${isOpen ? 'show' : ''}`}>
            <h2>Budget Deleted Successfully!</h2>
            <p>👏</p>
        </div>
    );
};

export default DeleteConfirmationModal;