import DetailInput from './DetailInput'
import DetailList from './DetailList'

function TodoDetail({ todoId }) {
    return (
        <>
            <DetailInput todoId={todoId} />
            <DetailList todoId={todoId} />
        </>
    )
}

export default TodoDetail
