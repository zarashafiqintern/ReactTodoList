import React from "react";
import TodoItem from "./TodoItem";
import "./Active.css";

const Active = ({ todos, handleCompleteTask, handleUpdateTask, handleDeleteTask }) => {
  return (
    <div className="active-tasks">
      <h3>Active Tasks</h3>

      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onCheckboxChange={handleCompleteTask}
          onDeleteClick={handleDeleteTask}
          onSaveClick={handleUpdateTask}
        />
      ))}
    </div>
  );
};

export default Active;
