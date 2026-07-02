import { useState, useEffect } from "react";

function TaskForm({ addTask, editingTask, updateTask }) {
    const emptyTask = {
        title: "",
        description: "",
        priority: "Medium",
        dueDate: "",
        category: "Study",
    };

    const [task, setTask] = useState(emptyTask);

    // Fill form when editing, clear when not editing
    useEffect(() => {
        if (editingTask) {
            setTask(editingTask);
        } else {
            setTask(emptyTask);
        }
    }, [editingTask]);

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!task.title.trim()) return;

        if (editingTask) {
            updateTask(task);
        } else {
            addTask({
                ...task,
                completed: false,
                id: Date.now(),
            });

            // Clear form after adding a task
            setTask(emptyTask);
        }
    };

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <h2>
                {editingTask ? "Edit Task" : "Add New Task"}
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Task Title"
                value={task.title}
                onChange={handleChange}
                required
            />

            <textarea
                name="description"
                placeholder="Task Description"
                value={task.description}
                onChange={handleChange}
            />

            <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
            >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
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
                <option value="Study">Study</option>
                <option value="Personal">Personal</option>
                <option value="Work">Work</option>
                <option value="Shopping">Shopping</option>
            </select>

            <button type="submit">
                {editingTask ? "Update Task" : "Add Task"}
            </button>
        </form>
    );
}

export default TaskForm;