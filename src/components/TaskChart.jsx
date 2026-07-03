import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

import "../styles/TaskChart.css";

const COLORS = ["#22c55e", "#ef4444"];

function TaskChart({ completed, pending }) {
    const total = completed + pending;

    const completion =
        total === 0
            ? 0
            : Math.round((completed / total) * 100);

    const data = [
        {
            name: "Completed",
            value: completed,
        },
        {
            name: "Pending",
            value: pending,
        },
    ];

    return (
        <div className="task-insights">

            <h2 className="chart-title">
                📊 Task Insights
            </h2>

            <div className="chart-content">

                <div className="pie-wrapper">

                    <ResponsiveContainer width="100%" height={220}>
                        <PieChart>
                            <Pie
                                data={data}
                                dataKey="value"
                                outerRadius={70}
                            >
                                {data.map((entry, index) => (
                                    <Cell
                                        key={index}
                                        fill={COLORS[index]}
                                    />
                                ))}
                            </Pie>

                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>

                </div>

                <div className="chart-summary">

                    <div className="summary-card green">
                        <h3>✅ Completed</h3>
                        <p>{completed}</p>
                    </div>

                    <div className="summary-card red">
                        <h3>⏳ Pending</h3>
                        <p>{pending}</p>
                    </div>

                    <div className="summary-card blue">
                        <h3>📈 Success Rate</h3>
                        <p>{completion}%</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default TaskChart;