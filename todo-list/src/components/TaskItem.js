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
}