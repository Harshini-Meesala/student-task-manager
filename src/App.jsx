import { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import TaskForm from "./components/TaskForm";
import Dashboard from "./components/Dashboard";
import SearchBar from "./components/SearchBar";

function App() {
  const [filter, setFilter] = useState("ALL");

  // Load tasks from localStorage when the app starts
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [editingTask, setEditingTask] = useState(null);

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

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

  // UPDATE TASK
  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === updatedTask.id ? updatedTask : task
      )
    );

    setEditingTask(null);
  }

  // FILTER + SEARCH
  const filteredTasks = tasks
    .filter((task) => {
      const matchesFilter =
        filter === "ALL"
          ? true
          : filter === "COMPLETED"
            ? task.completed
            : !task.completed;

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search.toLowerCase());

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "newest":
          return b.id - a.id;

        case "oldest":
          return a.id - b.id;

        case "priority": {
          const order = {
            High: 1,
            Medium: 2,
            Low: 3,
          };
          return order[a.priority] - order[b.priority];
        }

        case "duedate":
          return new Date(a.dueDate) - new Date(b.dueDate);

        default:
          return 0;
      }
    });
  // DASHBOARD
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

      <SearchBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <TaskForm
        addTask={addTask}
        editingTask={editingTask}
        updateTask={updateTask}
      />

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

      {filteredTasks.length === 0 ? (
        <p className="empty-text">No matching tasks found.</p>
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
                  <strong>Priority:</strong>

                  <span
                    className={`priority-badge ${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>
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
                  className="edit-btn"
                  onClick={() => setEditingTask(task)}
                >
                  ✏ Edit
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