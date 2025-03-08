import { useState } from "react";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    if (text.trim() !== "") {
      const newTask = {
        id: Date.now(),
        text: text,
        completed: false,
      };
      setTasks([...tasks, newTask]);
    }
  }
  function handleDeleteTask(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }
  function toggleComplete(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              <h1 className="h4 mb-0">Todo List</h1>
            </div>

            <div className="card-body">
              <InputBox onAddTask={handleAddTask} />

              <TaskList
                tasks={tasks}
                onToggleComplete={toggleComplete}
                onDeleteTask={handleDeleteTask}
              />

              {tasks.length > 0 && (
                <div className="card bg-light mt-3">
                  <div className="card-body p-2">
                    <div className="row text-center">
                      <div className="col">
                        <h6>Total</h6>
                        <span className="badge bg-secondary">
                          {tasks.length}
                        </span>
                      </div>
                      <div className="col">
                        <h6>Completed</h6>
                        <span className="badge bg-success">
                          {tasks.filter((task) => task.completed).length}
                        </span>
                      </div>
                      <div className="col">
                        <h6>Remaining</h6>
                        <span className="badge bg-warning text-dark">
                          {tasks.filter((task) => !task.completed).length}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
