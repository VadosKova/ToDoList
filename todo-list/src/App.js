import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import logo from './logo.svg';
import "./styles.css";

function App() {
  const [tasks, setTasks] = useState([]);

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
      <h1>📝 TO-DO List</h1>
      <TaskForm onAdd={addTask} />
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} onUpdate={updateTask}/>
    </div>
  );
}

export default App;
