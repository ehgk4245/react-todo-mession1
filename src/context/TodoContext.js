import { createContext, useRef, useState } from "react";

export const TodoContext = createContext();

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(); //storage에서 불러온 값 초기값으로
  const [openDetailId, setOpenDetailId] = useState();

  const nextTodoId = useRef(
    todos.length === 0 ? 1 : Math.max(...todos.map((todo) => todo.id)) + 1
  );

  useEffect(() => {
    //storage저장
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, openDetailId }}>
      {children}
    </TodoContext.Provider>
  );
}
