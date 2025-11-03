import React, { useState } from "react";
import "./TodoInput.css";
const TodoInput = ({ onAdd }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => setInputValue(e.target.value);

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      onAdd(inputValue); 
      setInputValue("");
    }
  };

  return (
    <div className="input-row">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter a task..."
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default TodoInput;
