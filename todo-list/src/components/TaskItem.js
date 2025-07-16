import { useState } from "react";

function TaskItem({ task, onDelete, onToggle, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(task.title);
  const [editDescription, setEditDescription] = useState(task.description);
  
  function handleUpdate() {
    onUpdate(task.id, {
      title: editTitle,
      description: editDescription,
    });
    setIsEditing(false);
  }

  if (isEditing) {
    return (
      <div className={`task-item ${task.completed ? "completed" : ""}`}>
        <input value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
        <textarea value={editDescription} onChange={(e) => setEditDescription(e.target.value)}/>
        <button onClick={handleUpdate}>Save</button>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.completed ? "completed" : ""}`}>
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.completed ? "↩️ Cancel" : "✅ Done"}
        </button>
        <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
        <button onClick={() => onDelete(task.id)}>🗑️ Remove</button>
      </div>
    </div>
  );
}

export default TaskItem;