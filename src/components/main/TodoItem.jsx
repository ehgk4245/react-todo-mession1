import { useTodos } from "../../hooks/useTodos";
import TodoDetail from "../details/TodoDetail";

function TodoItem({ todo }) {
  const { toggleTodo, removeTodo, openDetailId, setOpenDetailId } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.checked}
        onChange={() => toggleTodo(todo.id)}
      />
      {todo.text}
      <button
        type="button"
        onClick={() => {
          openDetailId ? setOpenDetailId(null) : setOpenDetailId(todo.id);
        }}
      >
        세부사항
      </button>
      <button type="button" onClick={() => removeTodo(todo.id)}>
        삭제
      </button>
      {openDetailId && <TodoDetail todoId={todo.id} />}
    </li>
  );
}

export default TodoItem;
