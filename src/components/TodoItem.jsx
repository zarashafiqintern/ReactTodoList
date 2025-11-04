import React from "react";

const TodoItem = ({
  todo,
  isEditing,
  editValue,
  onCheckboxChange,
  onEditClick,
  onDeleteClick,
  onInputChange,
  onSaveClick,
}) => {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        onChange={() => onCheckboxChange(todo.id)}
        checked={todo.completed || false}
      />

      {isEditing ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={onInputChange}
          />
          <button onClick={() => onSaveClick(todo.id)}>Update</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => onEditClick(todo.id, todo.text)}>Edit</button>
          <button onClick={() => onDeleteClick(todo.id)}>Delete</button>
        </>
      )}
    </div>
  );
};

export default TodoItem;
