import React from "react";
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { CiEdit } from "react-icons/ci";
import { BiUndo } from "react-icons/bi";

const TodoItem = ({
  item,
  index,
  editIndex,
  editValue,
  handleEditChange,
  startEdit,
  updateItem,
  del,
  Tick,
  undo,
  completed = false,
}) => {
  if (completed) {
    return (
      <p>
        {item}
        <BiUndo
          onClick={() => undo(item, index)}
        />
      </p>
    );
  }

  return (
    <p>
      <TiTick onClick={() => Tick(item, index)} style={{ cursor: "pointer" }} />
      {editIndex === index ? (
        <>
          <input
            type="text"
            value={editValue}
            onChange={handleEditChange}
          />
          <button
            onClick={() => updateItem(index)}
          >
            Update
          </button>
        </>
      ) : (
        <>
          {item}
          <CiEdit
            onClick={() => startEdit(item, index)}
          />
          <MdDelete
            onClick={() => del(item)}
          />
        </>
      )}
    </p>
  );
};

export default TodoItem;
