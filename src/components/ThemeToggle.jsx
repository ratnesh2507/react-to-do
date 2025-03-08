function ThemeToggle({ darkMode, toggleTheme }) {
  return (
    <button
      className={`btn btn-sm ${darkMode ? "btn-light" : "btn-dark"}`}
      onClick={toggleTheme}
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? "☀️" : "🌙"}
    </button>
  );
}

export default ThemeToggle;
