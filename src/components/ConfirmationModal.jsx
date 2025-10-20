import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import '../css/ConfirmationModal.css';

function ConfirmationModal() {
    const { confirmation, setConfirmation } = useCart();
    const [dontShowAgain, setDontShowAgain] = useState(false); 

    if (!confirmation.show) {
        return null; // No renderizar si no está visible
    }

    const handleConfirm = () => {
        confirmation.onConfirm(); // Llama a la acción de confirmación desde el contexto
        setConfirmation({ show: false, message: '', onConfirm: () => {} }); // Cierra el modal
        setDontShowAgain(false); // Reinicia el estado del checkbox después de la acción
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className="modal-title">¿Estás seguro?</h3>
                <p className="modal-text">{confirmation.message}</p> {/* Muestra el mensaje desde el contexto */}
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
