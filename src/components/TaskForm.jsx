import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask }) {
    // State variables
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("High");

    // Function to run when Add Task button is clicked
    function handleAddTask() {
        const newTask = {
            name: taskName,
            priority: priority,
        };

        onAddTask(newTask);

        setTaskName("");
        setPriority("High");
    }

    return (
        <div className="task-form">
            <h2>Add New Task</h2>

            <input
                type="text"
                placeholder="Enter task name"
                value={taskName}
                onChange={(event) => setTaskName(event.target.value)}
            />

            <select
                value={priority}
                onChange={(event) => setPriority(event.target.value)}
            >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

            <button onClick={handleAddTask}>
                Add Task
            </button>
        </div>
    );
}

export default TaskForm;