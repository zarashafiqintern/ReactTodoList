import { useMemo } from "react";
import useLocalStorage from "./hooks/UseLocalStorage";
import { SAVE_DATA } from "./Const";
import { v4 as uuidv4 } from "uuid";
import TodoInput from "./components/TodoInput";
import Active from "./components/Active";
import Completed from "./components/Completed";
import "./App.css";

function App() {
  const [todos, setTodos] = useLocalStorage(SAVE_DATA, []);

  const handleAddTask = (newText) => {
    setTodos([...todos, { id: uuidv4(), text: newText, completed: false }]);
  };

  const handleCompleteTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const handleUndoTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: false } : todo
      )
    );
  };

  const handleUpdateTask = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const handleDeleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const { activeTodos, completedTodos } = useMemo(() => {
    const active = [];
    const completed = [];

    for (const todo of todos) {
      if (todo.completed) {
        completed.push(todo);
      } else {
        active.push(todo);
      }
    }

    return { activeTodos: active, completedTodos: completed };
  }, [todos]);

  return (
    <div className="container">
      <h2>Todo App</h2>
      <TodoInput onAdd={handleAddTask} />

      <div className="tasks-wrapper">
        <Active
          todos={activeTodos}
          handleCompleteTask={handleCompleteTask}
          handleUpdateTask={handleUpdateTask}
          handleDeleteTask={handleDeleteTask}
        />
        <Completed todos={completedTodos} handleUndoTask={handleUndoTask} />
      </div>
    </div>
  );
}

export default App;
