import { useTodos } from '../../hooks/useTodos'

function TodoInput() {
    const { addTodo } = useTodos()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addTodo(e.target.text.value)
        e.target.text.value = ''
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex gap-2 mb-6">
            <input
                type="text"
                name="text"
                placeholder="할 일을 입력해 주세요."
                required
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition">
                추가
            </button>
        </form>
    )
}

export default TodoInput
