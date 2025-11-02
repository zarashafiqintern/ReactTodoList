import React from "react";

const TodoInput = ({ inputValue, handleChange, buttonClick }) => {
  return (
    <div className="input-row">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Enter a task..."
      />
      <button onClick={buttonClick}>Add</button>
    </div>
  );
};

export default TodoInput;