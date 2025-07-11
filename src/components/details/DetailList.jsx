import { useTodos } from '../../hooks/useTodos'
import DetailItem from './DetailItem'

function DetailList({ todoId }) {
    const { todos } = useTodos()
    const { details } = todos.find((todo) => todo.id === todoId)

    return (
        <ul className="space-y-1">
            {details.map((detail) => (
                <DetailItem key={detail.id} detail={detail} todoId={todoId} />
            ))}
        </ul>
    )
}

export default DetailList
