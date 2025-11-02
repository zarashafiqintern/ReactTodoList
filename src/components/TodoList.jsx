import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({
  items,
  tickItem,
  editIndex,
  editValue,
  handleEditChange,
  startEdit,
  updateItem,
  del,
  Tick,
  undo,
}) => {
  return (
    <>
      <div className="list">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            editIndex={editIndex}
            editValue={editValue}
            handleEditChange={handleEditChange}
            startEdit={startEdit}
            updateItem={updateItem}
            del={del}
            Tick={Tick}
          />
        ))}
      </div>

      <div className="tick_box">
        <h3>Completed Tasks</h3>
        {tickItem.map((item, index) => (
          <TodoItem
            key={index}
            item={item}
            index={index}
            undo={undo}
            completed={true}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;




























