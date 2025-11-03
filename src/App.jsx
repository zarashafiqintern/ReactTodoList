import { useState, useEffect } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { SAVE_COMPLETED_DATA, SAVE_DATA } from "./Const";
import "./App.css";

function App() {
  const [tickItem, setTickItem] = useState(() => {
    try {
      const showData = localStorage.getItem(SAVE_COMPLETED_DATA);
      if (!showData || showData === "undefined") return [];
      return JSON.parse(showData);
    } catch {
      return [];
    }
  });

  const [items, setItems] = useState(() => {
    try {
      const showData = localStorage.getItem(SAVE_DATA);
      if (!showData || showData === "undefined") return [];
      return JSON.parse(showData);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(SAVE_COMPLETED_DATA, JSON.stringify(tickItem));
  }, [tickItem]);

  useEffect(() => {
    localStorage.setItem(SAVE_DATA, JSON.stringify(items));
  }, [items]);

  const [editIndex, setEditIndex] = useState(null);
  const [editValue, setEditValue] = useState("");

  const Tick = (item, index) => {
    setTickItem([...tickItem, item]);
    setItems(items.filter((_, i) => i !== index));
  };

  const startEdit = (item, index) => {
    setEditIndex(index);
    setEditValue(item);
  };

  const handleEditChange = (e) => setEditValue(e.target.value);

  const updateItem = (index) => {
    const updated = [...items];
    updated[index] = editValue;
    setItems(updated);
    setEditIndex(null);
    setEditValue("");
  };

  const del = (item) => {
    setItems(items.filter((element) => element !== item));
  };

  const undo = (item, index) => {
    setItems([...items, item]);
    setTickItem(tickItem.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="input-section">
        <TodoInput onAdd={(newItem) => setItems([...items, newItem])} />

        <TodoList
          items={items}
          tickItem={tickItem}
          editIndex={editIndex}
          editValue={editValue}
          handleEditChange={handleEditChange}
          startEdit={startEdit}
          updateItem={updateItem}
          del={del}
          Tick={Tick}
          undo={undo}
        />
      </div>
    </div>
  );
}

export default App;
