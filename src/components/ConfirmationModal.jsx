import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../css/ConfirmationModal.css';

function ConfirmationModal() {
    const { confirmation, setConfirmation } = useCart();
    const [dontShowAgain, setDontShowAgain] = useState(false); 

    if (!confirmation.show) {
        return null; // Don't render if not visible
    }

    const handleConfirm = () => {
        confirmation.onConfirm(); // Call the confirm action from context
        setConfirmation({ show: false, message: '', onConfirm: () => {} }); // Close the modal
        setDontShowAgain(false); // Reset checkbox state after action
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className="modal-title">¿Estás seguro?</h3>
                <p className="modal-text">{confirmation.message}</p> {/* Display message from context */}
                <div className="modal-checkbox-container">
                    <input
                        type="checkbox"
                        id="dont-show-again"
                        checked={dontShowAgain}
                        onChange={(e) => setDontShowAgain(e.target.checked)}
                    />
                    <label htmlFor="dont-show-again">No volver a mostrar este mensaje</label>
                </div>
                <div className="modal-actions">
                    <button onClick={() => setConfirmation({ show: false })} className="modal-button cancel">Cancelar</button>
                    <button onClick={handleConfirm} className="modal-button confirm">Continuar</button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmationModal;
