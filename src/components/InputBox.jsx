import { useState } from "react";

function InputBox({ onAddTask, darkMode }) {
  const [inputValue, setInputValue] = useState("");
  const [isGlowing, setIsGlowing] = useState(false);

  function handleSubmit() {
    if (inputValue.trim() !== "") {
      setIsGlowing(true);
      onAddTask(inputValue);
      setInputValue("");

      // Reset glowing effect after animation completes
      setTimeout(() => setIsGlowing(false), 700);
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  // Style for the glowing animation
  const glowStyle = isGlowing
    ? {
        boxShadow: `0 0 10px 3px ${darkMode ? "#d45802" : "#fc6a03"}`,
        transition: "box-shadow 0.7s ease-in-out",
      }
    : {};

  // Custom styles for the input field with improved placeholder visibility
  const inputStyle = {
    transition: "background-color 0.3s ease, color 0.3s ease",
    // The ::placeholder selector is handled in CSS
  };

  return (
    <div className="input-group mb-4" style={glowStyle}>
      <input
        type="text"
        className={`form-control ${
          darkMode ? "bg-dark text-light border-secondary dark-mode-input" : ""
        }`}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
        style={inputStyle}
      />
      <button
        className="btn"
        onClick={handleSubmit}
        style={{
          backgroundColor: darkMode ? "#d45802" : "#fc6a03",
          color: "white",
          transition: "background-color 0.3s ease",
        }}
      >
        Add
      </button>
    </div>
  );
}

export default InputBox;
