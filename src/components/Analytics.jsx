import "../styles/Analytics.css";

function Analytics({
    high,
    medium,
    low,
    overdue,
    dueToday,
    completion,
}) {
    return (
        <div className="analytics-container">

            <h2 className="analytics-title">
                📊 Task Analytics
            </h2>

            <div className="analytics-grid">

                <div className="analytics-card high">
                    <h3>🔴 High Priority</h3>
                    <p>{high}</p>
                </div>

                <div className="analytics-card medium">
                    <h3>🟠 Medium Priority</h3>
                    <p>{medium}</p>
                </div>

                <div className="analytics-card low">
                    <h3>🟢 Low Priority</h3>
                    <p>{low}</p>
                </div>

                <div className="analytics-card overdue">
                    <h3>⚠️ Overdue</h3>
                    <p>{overdue}</p>
                </div>

                <div className="analytics-card today">
                    <h3>📅 Due Today</h3>
                    <p>{dueToday}</p>
                </div>

                <div className="analytics-card completion">
                    <h3>📈 Completion</h3>
                    <p>{completion}%</p>
                </div>

            </div>
        </div>
    );
}

export default Analytics;