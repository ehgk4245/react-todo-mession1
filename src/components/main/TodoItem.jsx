import { useTodos } from "../../hooks/useTodos";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button type="button" onClick={() => removeTodo(todo.id)}>
        삭제
      </button>
    </li>
  );
}

export default TodoItem;
