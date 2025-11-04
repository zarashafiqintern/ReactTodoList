import React from "react";
import "./Completed.css";

const Completed = ({ todos, handleUndoTask }) => {
  return (
    <div className="completed-tasks">
      <h3>Completed Tasks</h3>

      {todos.map((todo) => (
        <div key={todo.id} className="todo-item">
          <span>{todo.text}</span>
          <button onClick={() => handleUndoTask(todo.id)}>Undo</button>
        </div>
      ))}
    </div>
  );
};

export default Completed;
