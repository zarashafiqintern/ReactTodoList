import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import Active from "./components/Active";
import Completed from "./components/Completed";
import { SAVE_DATA } from "./Const";
import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    try {
      const data = localStorage.getItem(SAVE_DATA);
      if (!data || data === "undefined") return [];
      return JSON.parse(data);
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(SAVE_DATA, JSON.stringify(todos));
  }, [todos]);

  const handleAddTask = (newText) => {
    setTodos([...todos, { id: uuidv4(), text: newText, completed: false }]);
  };

  const handleCompleteTask = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updated);
  };

  const handleUndoTask = (id) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: false } : todo
    );
    setTodos(updated);
  };

  const handleUpdateTask = (id, newText) => {
    const updated = todos.map((todo) =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updated);
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container">
      <h2>Todo App</h2>

      <TodoInput onAdd={handleAddTask} />

      <div className="tasks-wrapper">
        <Active
          todos={todos}
          handleCompleteTask={handleCompleteTask}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <Completed todos={todos} handleUndoTask={handleUndoTask} />
      </div>
    </div>
  );
}

export default App;
