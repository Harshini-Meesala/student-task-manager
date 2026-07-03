import "../styles/DeleteModal.css";
function DeleteModal({ isOpen, onClose, onConfirm }) {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="delete-modal">
                <h2>Delete Task</h2>

                <p>Are you sure you want to delete this task?</p>

                <div className="modal-buttons">
                    <button className="cancel-btn" onClick={onClose}>
                        Cancel
                    </button>

                    <button className="confirm-btn" onClick={onConfirm}>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DeleteModal;