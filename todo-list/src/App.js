import { useState } from "react";
import TaskForm from "./components/TaskForm";
import "./styles.css";

function App() {
  return (
    <div className="app">
      <h1>📝 ToDo List</h1>
      <TaskForm onAdd={addTask} />
    </div>
  );
}

export default App;
