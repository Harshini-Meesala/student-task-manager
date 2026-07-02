import { useState } from "react";

function TaskForm({ addTask }) {
    const [task, setTask] = useState({
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        category: "Study",
    });

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.title.trim()) return;

        addTask({
            ...task,
            completed: false,
            id: Date.now(),
        });

        setTask({
            title: "",
            description: "",
            priority: "Medium",
            dueDate: "",
            category: "Study",
        });
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>Add New Task</h2>

            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
            />

            <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
            ></textarea>

            <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
            >
                <option>High</option>
                <option>Medium</option>
                <option>Low</option>
            </select>

            <input
                type="date"
                name="dueDate"
                value={task.dueDate}
                onChange={handleChange}
            />

            <select
                name="category"
                value={task.category}
                onChange={handleChange}
            >
                <option>Study</option>
                <option>Personal</option>
                <option>Work</option>
                <option>Shopping</option>
            </select>

            <button type="submit">Add Task</button>
        </form>
    );
}

export default TaskForm;