import DetailInput from './DetailInput'
import DetailList from './DetailList'

function TodoDetail({ todoId }) {
    return (
        <div className="bg-gray-50 border border-gray-300 rounded-md p-4 mt-3 ml-6">
            <DetailInput todoId={todoId} />
            <DetailList todoId={todoId} />
        </div>
    )
}

export default TodoDetail
