import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-theme", isDark);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { ...newTask, id: Date.now(), completed: false }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        newTasks.push({
          id: tasks[i].id,
          title: tasks[i].title,
          description: tasks[i].description,
          completed: !tasks[i].completed,
        });
      } else {
        newTasks.push(tasks[i]);
      }
    }

    setTasks(newTasks);
  };

  const updateTask = (id, updatedTask) => {
    const newTasks = [];

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === id) {
        newTasks.push({
          id: tasks[i].id,
          title: updatedTask.title,
          description: updatedTask.description,
          completed: tasks[i].completed,
        });
      } else {
        newTasks.push(tasks[i]);
      }
    }

    setTasks(newTasks);
  };

  return (
    <div className="app">
      <button className="theme-toggle" onClick={toggleTheme}>
        {isDark ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" width="24" height="24">
            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.8 1.42-1.42zm10.45 10.45l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM12 4V1h-1v3h1zm0 19v-3h-1v3h1zm8-11h3v-1h-3v1zm-19 0h3v-1H1v1zm3.76 7.45l-1.8 1.79 1.41 1.41 1.79-1.8-1.4-1.4zm13.48-13.48l1.8-1.79-1.41-1.41-1.79 1.8 1.4 1.4zM12 6a6 6 0 100 12 6 6 0 000-12z"/>
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" width="24" height="24">
            <path d="M12.74 2a9 9 0 000 18c4.97 0 9-4.03 9-9 0-.5-.04-.99-.11-1.47A8 8 0 0112.74 2z"/>
          </svg>
        )}
      </button>
      <h1>📝 TO-DO List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} onUpdate={updateTask}/>
    </div>
  );
}

export default App;
