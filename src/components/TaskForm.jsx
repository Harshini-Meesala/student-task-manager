import { useState } from "react";
import "../styles/TaskForm.css";

function TaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
    const [priority, setPriority] = useState("High");

    function handleAddTask() {
        const newTask = {
            name: taskName,
            priority: priority,
            completed: false,
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
                onChange={(e) => setTaskName(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
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