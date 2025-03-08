import { useState } from "react";

function InputBox({ onAddTask }) {
  const [inputValue, setInputValue] = useState("");

  function handleSubmit() {
    if (inputValue.trim() !== "") {
      onAddTask(inputValue);
      setInputValue("");
    }
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <div className="input-group mb-4">
      <input
        type="text"
        className="form-control"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Add a new task..."
      />
      <button className="btn btn-primary" onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
}

export default InputBox;
