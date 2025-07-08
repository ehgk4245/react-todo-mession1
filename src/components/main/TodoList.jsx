import { useTodos } from "../../hooks/useTodos";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useTodos();

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
