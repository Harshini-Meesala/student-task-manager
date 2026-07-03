import {
    FaCalendarAlt,
    FaCheckCircle,
    FaEdit,
    FaTrash,
    FaBook,
    FaFlag,
} from "react-icons/fa";

import "../styles/TaskCard.css";

function TaskCard({
    task,
    toggleComplete,
    openDeleteModal,
    setEditingTask,
}) {
    const today = new Date();
    const dueDate = new Date(task.dueDate);

    let dueStatus = "";
    let dueClass = "";

    if (task.completed) {
        dueStatus = "Completed";
        dueClass = "completed-status";
    } else if (dueDate < today) {
        dueStatus = "Overdue";
        dueClass = "overdue-status";
    } else {
        dueStatus = "Upcoming";
        dueClass = "upcoming-status";
    }

    return (
        <div className={`task-card ${task.completed ? "completed" : ""}`}>

            <div className="task-header">
                <FaBook className="task-icon" />
                <h2>{task.title}</h2>
            </div>

            <p className="task-description">
                {task.description}
            </p>

            <div className="task-details">

                <p>
                    <FaFlag />
                    <span
                        className={`priority-badge ${task.priority.toLowerCase()}`}
                    >
                        {task.priority}
                    </span>
                </p>

                <p>
                    📂 {task.category}
                </p>

                <p>
                    <FaCalendarAlt />
                    {task.dueDate}
                </p>

            </div>

            <div className={`status-badge ${dueClass}`}>
                {dueStatus}
            </div>

            <div className="task-actions">

                <button
                    className="done-btn"
                    onClick={() => toggleComplete(task.id)}
                >
                    <FaCheckCircle />
                    {task.completed ? "Undo" : "Done"}
                </button>

                <button
                    className="edit-btn"
                    onClick={() => setEditingTask(task)}
                >
                    <FaEdit />
                    Edit
                </button>

                <button
                    className="delete-btn"
                    onClick={() => openDeleteModal(task.id)}
                >
                    <FaTrash />
                    Delete
                </button>

            </div>

        </div>
    );
}

export default TaskCard;