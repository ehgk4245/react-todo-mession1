import { createContext, useEffect, useRef, useState } from "react";
import { load, save } from "../utils/storage";

export const TodoContext = createContext();
const KEY = "todos";

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => load(KEY));
  const [openDetailId, setOpenDetailId] = useState();

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

  return (
    <TodoContext.Provider value={{ todos, openDetailId, addTodo }}>
      {children}
    </TodoContext.Provider>
  );
}
