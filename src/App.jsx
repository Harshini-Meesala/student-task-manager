import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import TaskForm from "./components/TaskForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [filter, setFilter] = useState("ALL");
  const [tasks, setTasks] = useState([]);

  // ADD TASK
  function addTask(task) {
    const taskWithId = {
      ...task,
      id: Date.now(),
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  }

  // DELETE TASK
  function deleteTask(idToDelete) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== idToDelete)
    );
  }

  // TOGGLE COMPLETE
  function toggleComplete(idToToggle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === idToToggle
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  // FILTER TASKS
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.completed;
    if (filter === "ACTIVE") return !task.completed;
    return true;
  });

  // DASHBOARD STATS
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div className="app-container">

      <Header
        title="Student Task Manager"
        user="Harshini"
        date="1 July 2026"
      />

      <Profile
        name="Harshini"
        branch="CSE"
        year="4th Year"
        college="MRCET"
      />

      <Dashboard
        total={totalTasks}
        completed={completedTasks}
        pending={pendingTasks}
      />

      {/* Fixed prop name */}
      <TaskForm addTask={addTask} />

      <h2 className="title">Task List</h2>

      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => setFilter("ALL")}
        >
          All
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("ACTIVE")}
        >
          Active
        </button>

        <button
          className="filter-btn"
          onClick={() => setFilter("COMPLETED")}
        >
          Completed
        </button>
      </div>

      {tasks.length === 0 ? (
        <p className="empty-text">No tasks added yet</p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""}`}
            >
              <div className="task-info">
                <h3>{task.title}</h3>

                <p>{task.description}</p>

                <p>
                  <strong>Priority:</strong> {task.priority}
                </p>

                <p>
                  <strong>Category:</strong> {task.category}
                </p>

                <p>
                  <strong>Due Date:</strong> {task.dueDate}
                </p>
              </div>

              <div className="task-actions">
                <button
                  className="done-btn"
                  onClick={() => toggleComplete(task.id)}
                >
                  {task.completed ? "Undo" : "✔ Done"}
                </button>

                <button
                  className="delete-btn"
                  onClick={() => deleteTask(task.id)}
                >
                  ❌ Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <Home />
      <Footer />
    </div>
  );
}

export default App;