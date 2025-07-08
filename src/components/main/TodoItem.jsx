import { useTodos } from "../../hooks/useTodos";

function TodoItem({ todo }) {
  const { toggleTodo } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
    </li>
  );
}

export default TodoItem;
