import React, { useState } from "react";

const TodoItem = ({ todo, onCheckboxChange, onDeleteClick, onSaveClick }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(todo.text);

  const handleSave = () => {
    if (editValue.trim() === "") return;
    onSaveClick(todo.id, editValue);
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onCheckboxChange(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={(e) => setEditValue(e.target.value)}
          />
          <button onClick={handleSave}>Update</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
