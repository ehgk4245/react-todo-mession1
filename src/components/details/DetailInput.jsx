import { useTodos } from '../../hooks/useTodos'

function DetailInput({ todoId }) {
    const { addDetail } = useTodos()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addDetail(e.target.text.value, todoId)
        e.target.text.value = ''
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex gap-2 mb-3">
            <input
                type="text"
                name="text"
                placeholder="작업 나누기"
                required
                className="flex-1 px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-1 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="w-7 h-7 flex items-center justify-center text-white bg-blue-500 rounded-full hover:bg-blue-600 transition"
            >
                +
            </button>
        </form>
    )
}

export default DetailInput
