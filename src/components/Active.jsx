import React, { useState } from "react";
import "./Active.css";

const Active = ({ todos, handleCompleteTask, handleUpdateTask, handleDeleteTask }) => {
  const [editTask, setEditTask] = useState({ id: null, value: "" });

  const startEdit = (id, text) => {
    setEditTask({ id, value: text });
  };

  const handleChange = (e) => {
    setEditTask({ ...editTask, value: e.target.value });
  };

  const saveUpdate = (id) => {
    handleUpdateTask(id, editTask.value);
    setEditTask({ id: null, value: "" });
  };

  return (
    <div className="active-tasks">
      <h3>Active Tasks</h3>

      {todos
        .filter((todo) => !todo.completed)
        .map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              onChange={() => handleCompleteTask(todo.id)}
            />

            {editTask.id === todo.id ? (
              <>
                <input
                  type="text"
                  value={editTask.value}
                  onChange={handleChange}
                />
                <button onClick={() => saveUpdate(todo.id)}>Update</button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>
                <button onClick={() => startEdit(todo.id, todo.text)}>Edit</button>
                <button onClick={() => handleDeleteTask(todo.id)}>Delete</button>
              </>
            )}
          </div>
        ))}
    </div>
  );
};

export default Active;
