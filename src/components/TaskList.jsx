import Task from "./Task";
function TaskList({ tasks, onToggleComplete, onDeleteTask }) {
  if (tasks.length === 0) {
    <div className="alert alert-info text-center">
      No tasks yet. Add a task to get started!
    </div>;
  }
  return (
    <ul className="list-group mb-3">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;
