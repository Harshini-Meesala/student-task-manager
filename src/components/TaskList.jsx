{
    tasks.map((task) => (
        <div className="task-card" key={task.id}>
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p>
                <strong>Priority:</strong> {task.priority}
            </p>

            <p>
                <strong>Category:</strong> {task.category}
            </p>

            <p>
                <strong>Due:</strong> {task.dueDate}
            </p>
        </div>
    ))
}