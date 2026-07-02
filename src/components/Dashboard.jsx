import "../styles/Dashboard.css";
import AnimatedCounter from "./AnimatedCounter";

function Dashboard({ total, completed, pending }) {

    const progress =
        total === 0 ? 0 : Math.round((completed / total) * 100);

    return (
        <div className="dashboard-wrapper">

            <h2 className="dashboard-title">
                Dashboard
            </h2>

            <div className="dashboard">

                <div className="card total">
                    <h3>Total</h3>
                    <p>
                        <AnimatedCounter target={total} />
                    </p>
                </div>

                <div className="card completed">
                    <h3>Completed</h3>
                    <p>
                        <AnimatedCounter target={completed} />
                    </p>
                </div>

                <div className="card pending">
                    <h3>Pending</h3>
                    <p>
                        <AnimatedCounter target={pending} />
                    </p>
                </div>

            </div>

            {/* Progress Section */}

            <div className="progress-container">

                <div className="progress-header">
                    <span>Overall Progress</span>
                    <span>{progress}%</span>
                </div>

                <div className="progress-bar">

                    <div
                        className="progress-fill"
                        style={{ width: `${progress}%` }}
                    ></div>

                </div>

                <p className="progress-text">
                    {completed} of {total} tasks completed
                </p>

            </div>

        </div>
    );
}

export default Dashboard;