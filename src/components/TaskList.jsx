import TaskCard from "./TaskCard";

function TaskList({
    tasks,
    toggleComplete,
    openDeleteModal,
    setEditingTask,
}) {
    if (tasks.length === 0) {
        return <p className="empty-text">No matching tasks found.</p>;
    }

    return (
        <div className="task-list">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    task={task}
                    toggleComplete={toggleComplete}
                    openDeleteModal={openDeleteModal}
                    setEditingTask={setEditingTask}
                />
            ))}
        </div>
    );
}

export default TaskList;