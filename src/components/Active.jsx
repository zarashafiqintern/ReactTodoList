import React, { useState } from "react";
import TodoItem from "./TodoItem"; 
import "./Active.css";

const Active = ({ todos, handleCompleteTask, handleUpdateTask, handleDeleteTask }) => {
  const [editTask, setEditTask] = useState({ id: null, value: "" });

  const startEdit = (id, text) => setEditTask({ id, value: text });
  const handleChange = (e) => setEditTask({ ...editTask, value: e.target.value });
  const saveUpdate = (id) => {
    handleUpdateTask(id, editTask.value);
    setEditTask({ id: null, value: "" });
  };

  return (
    <div className="active-tasks">
      <h3>Active Tasks</h3>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          isEditing={editTask.id === todo.id}
          editValue={editTask.value}
          onCheckboxChange={handleCompleteTask}
          onEditClick={startEdit}
          onDeleteClick={handleDeleteTask}
          onInputChange={handleChange}
          onSaveClick={saveUpdate}
        />
      ))}
    </div>
  );
};

export default Active;
