import { useTodos } from "../../hooks/useTodos";

function TodoInput() {
  const { addTodo } = useTodos();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addTodo(e.target.text.value);
    e.target.text.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type="text"
        name="text"
        placeholder="할 일을 입력해 주세요."
        required
      ></input>
      <button type="submit">추가</button>
    </form>
  );
}

export default TodoInput;
