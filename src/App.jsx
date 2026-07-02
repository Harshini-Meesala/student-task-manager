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
  function addTask(newTask) {
    const taskWithId = {
      ...newTask,
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

  // FILTERED TASKS
  const filteredTasks = tasks.filter((task) => {
    if (filter === "COMPLETED") return task.completed;
    if (filter === "ACTIVE") return !task.completed;
    return true;
  });

  // STATS
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = tasks.filter((t) => !t.completed).length;

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

      {/* DASHBOARD */}
      <Dashboard
        total={totalTasks}
        completed={completedTasks}
        pending={pendingTasks}
      />

      {/* TASK FORM */}
      <TaskForm onAddTask={addTask} />

      <h2 className="title">Task List</h2>

      {/* FILTER BUTTONS */}
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

      {/* TASK LIST */}
      {tasks.length === 0 ? (
        <p className="empty-text">No tasks added yet</p>
      ) : (
        <ul className="task-list">
          {filteredTasks.map((task) => (
            <li
              key={task.id}
              className={`task-item ${task.completed ? "completed" : ""
                }`}
            >
              <span className="task-text">
                {task.name} - {task.priority}
              </span>

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
                  ❌
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