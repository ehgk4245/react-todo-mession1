import { useTodos } from "../../hooks/useTodos";

function DetailItem({ detail, todoId }) {
  const { toggleDetail, removeDetail } = useTodos();

  return (
    <li>
      <input
        type="checkbox"
        checked={detail.checked}
        onChange={() => toggleDetail(todoId, detail.id)}
      />
      {detail.text}
      <button type="button" onClick={() => removeDetail(todoId, detail.id)}>
        삭제
      </button>
    </li>
  );
}

export default DetailItem;
