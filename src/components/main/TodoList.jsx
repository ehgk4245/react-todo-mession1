import { useTodos } from '../../hooks/useTodos'
import TodoItem from './TodoItem'

function TodoList() {
    const { todos } = useTodos()

    return (
        <ul className="space-y-2">
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </ul>
    )
}

export default TodoList
