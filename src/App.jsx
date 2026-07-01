import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import TaskForm from "./components/TaskForm";

function App() {
  // State to store all tasks
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Function to delete a task
  function deleteTask(indexToDelete) {
    const updatedTasks = tasks.filter(
      (task, index) => index !== indexToDelete
    );
    setTasks(updatedTasks);
  }

  return (
    <>
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

      <TaskForm onAddTask={addTask} />

      <h2>Task List</h2>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task.name} - {task.priority}

            <button
              onClick={() => deleteTask(index)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>

      <Home />

      <Footer />
    </>
  );
}

export default App;