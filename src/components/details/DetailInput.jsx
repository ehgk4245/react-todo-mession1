import { useTodos } from '../../hooks/useTodos'

function DetailInput({ todoId }) {
    const { addDetail } = useTodos()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        addDetail(e.target.text.value, todoId)
        e.target.text.value = ''
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <input type="text" name="text" placeholder="세부 사항" required />
            <button type="submit">추가</button>
        </form>
    )
}

export default DetailInput
