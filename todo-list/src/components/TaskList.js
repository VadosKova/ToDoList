import TaskItem from "./TaskItem";

function TaskList({ tasks, onDelete, onToggle, onUpdate }) {
  if (tasks.length === 0) {
    return <p className="empty">No tasks yet 😴</p>;
  }

}