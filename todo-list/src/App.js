import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="app">
      <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleComplete} onUpdate={updateTask}/>
    </div>
  );
}

export default App;
