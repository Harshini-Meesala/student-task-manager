import "../styles/Dashboard.css";
import AnimatedCounter from "./AnimatedCounter";

function Dashboard({ total, completed, pending }) {
    return (
        <div className="dashboard-wrapper">
            <h2 className="dashboard-title">Dashboard</h2>

            <div className="dashboard">
                <div className="card total">
                    <h3>Total</h3>
                    <p><AnimatedCounter target={total} /></p>
                </div>

                <div className="card completed">
                    <h3>Completed</h3>
                    <p><AnimatedCounter target={completed} /></p>
                </div>

                <div className="card pending">
                    <h3>Pending</h3>
                    <p><AnimatedCounter target={pending} /></p>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;