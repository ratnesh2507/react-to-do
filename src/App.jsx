import { useState, useEffect } from "react";
import InputBox from "./components/InputBox";
import TaskList from "./components/TaskList";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  //save theme preference to local storage
  useEffect(() => {
    const savedTheme = localStorage.getItem("darkMode");
    if (savedTheme) {
      setDarkMode(JSON.parse(savedTheme));
    }
  }, []);

  //applying theme
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("bg-dark", "text-light");
    } else {
      document.body.classList.remove("bg-dark", "text-light");
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

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

  function toggleTheme() {
    setDarkMode(!darkMode);
  }

  const headerStyle = {
    backgroundColor: darkMode ? "#d45802" : "#fc6a03",
    transition: "background-color 0.3s ease",
  };

  return (
    <div
      className={`container py-5 ${darkMode ? "dark-theme" : "light-theme"}`}
    >
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div
            className={`card shadow ${
              darkMode ? "bg-dark text-light border-secondary" : ""
            }`}
          >
            <div
              className="card-header d-flex justify-content-between align-items-center"
              style={headerStyle}
            >
              <h1 className="h4 mb-0 text-white">Todo List</h1>
              <ThemeToggle darkMode={darkMode} toggleTheme={toggleTheme} />
            </div>

            <div className={`card-body ${darkMode ? "bg-dark" : ""}`}>
              <InputBox onAddTask={handleAddTask} darkMode={darkMode} />

              <TaskList
                tasks={tasks}
                onToggleComplete={toggleComplete}
                onDeleteTask={handleDeleteTask}
                darkMode={darkMode}
              />

              {tasks.length > 0 && (
                <div
                  className={`card mt-3 ${
                    darkMode ? "bg-secondary text-light" : "bg-light"
                  }`}
                >
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
                        <span
                          className={`badge ${
                            darkMode
                              ? "bg-warning text-dark"
                              : "bg-warning text-dark"
                          }`}
                        >
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
