import { useTodos } from '../../hooks/useTodos'
import TodoDetail from '../details/TodoDetail'

function TodoItem({ todo }) {
    const { toggleTodo, removeTodo, openDetailId, setOpenDetailId } = useTodos()

    return (
        <li className="bg-white p-4 rounded-md shadow mb-2">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <input
                        type="checkbox"
                        checked={todo.checked}
                        onChange={() => toggleTodo(todo.id)}
                        className="w-4 h-4"
                    />
                    <span className={`text-lg ${todo.checked ? 'line-through text-gray-400' : ''}`}>{todo.text}</span>
                </div>
                <div className="flex gap-2">
                    <button
                        type="button"
                        onClick={() => (openDetailId === todo.id ? setOpenDetailId(null) : setOpenDetailId(todo.id))}
                        className="text-sm bg-gray-200 hover:bg-gray-300 px-2 py-1 rounded"
                    >
                        내용
                    </button>
                    <button
                        type="button"
                        onClick={() => removeTodo(todo.id)}
                        className="text-sm bg-red-500 text-white hover:bg-red-600 px-2 py-1 rounded"
                    >
                        삭제
                    </button>
                </div>
            </div>
            {openDetailId === todo.id && (
                <div className="mt-3">
                    <TodoDetail todoId={todo.id} />
                </div>
            )}
        </li>
    )
}

export default TodoItem
