import "../styles/UpcomingTasks.css";

function UpcomingTasks({ tasks }) {
    // Get incomplete tasks with a due date
    const upcomingTasks = tasks
        .filter((task) => !task.completed && task.dueDate)
        .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
        .slice(0, 3);

    return (
        <div className="upcoming-container">
            <h2 className="upcoming-title">📅 Upcoming Tasks</h2>

            {upcomingTasks.length === 0 ? (
                <p className="no-upcoming">
                    No upcoming tasks 🎉
                </p>
            ) : (
                upcomingTasks.map((task) => (
                    <div className="upcoming-card" key={task.id}>
                        <div>
                            <h3>{task.title}</h3>

                            <p>{task.category}</p>
                        </div>

                        <div className="upcoming-date">
                            <span>Due</span>
                            <strong>{task.dueDate}</strong>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
}

export default UpcomingTasks;