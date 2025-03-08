function Task({ task, onToggleComplete, onDeleteTask }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="form-check">
        <input
          type="checkbox"
          className="form-check-input"
          checked={task.completed}
          onChange={() => onToggleComplete(task.id)}
          id={`task-${task.id}`}
        />
        <label
          className={`form-check-label ${
            task.completed ? "text-decoration-line-through text-muted" : ""
          }`}
          htmlFor={`task-${task.id}`}
        >
          {task.text}
        </label>
      </div>
      <button
        className="btn btn-sm btn-danger"
        onClick={() => onDeleteTask(task.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Task;
