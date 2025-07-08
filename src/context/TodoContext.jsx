import { createContext, useEffect, useRef, useState } from "react";
import { load, save } from "../utils/storage";

export const TodoContext = createContext();
const KEY = "todos";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => load(KEY));
  const [openDetailId, setOpenDetailId] = useState(null);

  const nextTodoId = useRef(
    todos.length === 0 ? 1 : Math.max(...todos.map((todo) => todo.id)) + 1
  );

  useEffect(() => {
    save(KEY, todos);
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: nextTodoId.current++,
      text,
      checked: false,
      details: [],
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    const nextTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo
    );
    setTodos(nextTodos);
  };

  const removeTodo = (id) => {
    const nextTodos = todos.filter((todo) => todo.id !== id);
    setTodos(nextTodos);
  };

  const createNewDetails = (details, text) => {
    const nextDetailId =
      details.length === 0 ? 1 : Math.max(...details.map((d) => d.id)) + 1;

    const newDetail = {
      id: nextDetailId,
      text,
      checked: false,
    };

    return [...details, newDetail];
  };

  const addDetail = (text, todoId) => {
    const nextTodos = todos.map((todo) => {
      if (todo.id !== todoId) return todo;

      return {
        ...todo,
        details: createNewDetails(todo.details, text),
      };
    });
    setTodos(nextTodos);
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        openDetailId,
        setOpenDetailId,
        addTodo,
        toggleTodo,
        removeTodo,
        addDetail,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
