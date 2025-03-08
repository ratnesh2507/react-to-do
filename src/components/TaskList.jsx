import Task from "./Task";
function TaskList({ tasks, onToggleComplete, onDeleteTask, darkMode }) {
  if (tasks.length === 0) {
    return (
      <div
        className={`alert ${
          darkMode ? "alert-dark" : "alert-info"
        } text-center`}
      >
        No tasks yet. Add a task to get started!
      </div>
    );
  }

  return (
    <ul className={`list-group mb-3 ${darkMode ? "dark-mode-list" : ""}`}>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
          darkMode={darkMode}
        />
      ))}
    </ul>
  );
}

export default TaskList;
