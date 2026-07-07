import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Profile from './components/Profile';
import TaskForm from './components/TaskForm';
import Dashboard from './components/Dashboard';
import SearchBar from './components/SearchBar';
import TaskList from './components/TaskList';
import DeleteModal from './components/DeleteModal';
import toast, { Toaster } from 'react-hot-toast'; // Added Toaster for notifications to work
import Analytics from './components/Analytics';
import TaskChart from './components/TaskChart';
import UpcomingTasks from './components/UpcomingTasks';
import './styles/DarkMode.css';
import WelcomeBanner from "./components/WelcomeBanner";

function App() {
  const [filter, setFilter] = useState('ALL');

  // Load tasks from localStorage when the app starts
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  const [search, setSearch] = useState('');
  const [sortBy, setSortBy] = useState('newest');
  const [editingTask, setEditingTask] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);

  const [darkMode, setDarkMode] = useState(() => {
    return JSON.parse(localStorage.getItem('darkMode')) || false;
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  // ADD TASK
  function addTask(task) {
    const taskWithId = { ...task, id: Date.now(), completed: false };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
    toast.success('Task added successfully!');
  }

  // DELETE TASK
  function deleteTask(idToDelete) {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== idToDelete));
    toast.success('Task deleted successfully!');
  }

  function openDeleteModal(id) {
    setTaskToDelete(id);
    setShowDeleteModal(true);
  }

  function confirmDelete() {
    console.log('Confirm button clicked');
    console.log('Task ID:', taskToDelete);
    deleteTask(taskToDelete);
    setShowDeleteModal(false);
    setTaskToDelete(null);
  }

  // TOGGLE COMPLETE
  function toggleComplete(idToToggle) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === idToToggle) {
          const updated = { ...task, completed: !task.completed };
          if (updated.completed) {
            toast.success('Task completed!');
          } else {
            toast('Task marked as pending');
          }
          return updated;
        }
        return task;
      })
    );
  }

  // UPDATE TASK
  function updateTask(updatedTask) {
    setTasks((prevTasks) =>
      prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
    setEditingTask(null);
    toast.success('Task updated!');
  }

  // FILTER + SEARCH
  const filteredTasks = tasks
    .filter((task) => {
      // Use exact strings 'ALL' and 'COMPLETED' for filter checking
      const matchesFilter =
        filter === 'ALL'
          ? true
          : filter === 'COMPLETED'
            ? task.completed
            : !task.completed;

      const matchesSearch = task.title
        .toLowerCase()
        .includes(search ? search.toLowerCase() : '');

      return matchesFilter && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return b.id - a.id;
        case 'oldest':
          return a.id - b.id;
        case 'priority': {
          const order = { High: 1, Medium: 2, Low: 3 };
          return order[a.priority] - order[b.priority];
        }
        case 'duedate':
          return new Date(a.dueDate) - new Date(b.dueDate);
        default:
          return 0;
      }
    });

  // DASHBOARD
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const highPriority = tasks.filter((task) => task.priority === 'High').length;
  const mediumPriority = tasks.filter((task) => task.priority === 'Medium').length;
  const lowPriority = tasks.filter((task) => task.priority === 'Low').length;

  const today = new Date().toISOString().split('T')[0];
  const dueToday = tasks.filter((task) => task.dueDate === today && !task.completed).length;
  const overdue = tasks.filter((task) => !task.completed && task.dueDate < today).length;

  const completion = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className={darkMode ? 'app-container dark' : 'app-container'}>
      <Header
        title="Student Task Manager"
        user="Harshini"
        date="1 July 2026"
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <WelcomeBanner />

      <Profile
        name="Harshini"
        branch="CSE"
        year="4th Year"
        college="MRCET"
      />
      <Profile name="Harshini" branch="CSE" year="4th Year" college="MRCET" />
      <Dashboard total={totalTasks} completed={completedTasks} pending={pendingTasks} />
      <Analytics
        high={highPriority}
        medium={mediumPriority}
        low={lowPriority}
        overdue={overdue}
        dueToday={dueToday}
        completion={completion}
      />
      <TaskChart completed={completedTasks} pending={pendingTasks} />
      <UpcomingTasks tasks={tasks} />

      <SearchBar
        search={search}
        setSearch={setSearch}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <TaskForm addTask={addTask} editingTask={editingTask} updateTask={updateTask} />

      <h2 className="title">Task List</h2>
      <div className="filter-container">
        <button onClick={() => setFilter('ALL')} className="filter-btn">
          All
        </button>
        <button onClick={() => setFilter('ACTIVE')} className="filter-btn">
          Active
        </button>
        <button onClick={() => setFilter('COMPLETED')} className="filter-btn">
          Completed
        </button>
      </div>

      <TaskList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        openDeleteModal={openDeleteModal}
        setEditingTask={setEditingTask}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
      />

      <Home />
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
