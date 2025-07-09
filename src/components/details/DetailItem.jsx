import { useTodos } from '../../hooks/useTodos'

function DetailItem({ detail, todoId }) {
    const { toggleDetail, removeDetail } = useTodos()

    return (
        <li className="flex items-center justify-between bg-white px-3 py-2 rounded border border-gray-200">
            <div className="flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={detail.checked}
                    onChange={() => toggleDetail(todoId, detail.id)}
                    className="w-4 h-4"
                />
                <span className={`text-sm ${detail.checked ? 'line-through text-gray-400' : ''}`}>{detail.text}</span>
            </div>
            <button
                type="button"
                onClick={() => removeDetail(todoId, detail.id)}
                className="w-6 h-6 flex items-center justify-center text-white bg-red-500 rounded-full hover:bg-red-600 text-xs transition"
            >
                -
            </button>
        </li>
    )
}

export default DetailItem
