import { createContext, useEffect, useRef, useState } from 'react'
import { load, save } from '../utils/storage'
import { createNewDetails, createToggledDetails, createRemovedDetails } from '../utils/detailUtils'

export const TodoContext = createContext()
const KEY = 'todos'

export function TodoProvider({ children }) {
    const [todos, setTodos] = useState(() => load(KEY))
    const [openDetailId, setOpenDetailId] = useState(null)

    const nextTodoId = useRef(todos.length === 0 ? 1 : Math.max(...todos.map((todo) => todo.id)) + 1)

    useEffect(() => {
        save(KEY, todos)
    }, [todos])

    const addTodo = (text) => {
        const newTodo = {
            id: nextTodoId.current++,
            text,
            checked: false,
            details: [],
        }
        setTodos([...todos, newTodo])
    }

    const toggleTodo = (id) => {
        const nextTodos = todos.map((todo) => (todo.id === id ? { ...todo, checked: !todo.checked } : todo))
        setTodos(nextTodos)
    }

    const removeTodo = (id) => {
        const nextTodos = todos.filter((todo) => todo.id !== id)
        setTodos(nextTodos)
    }

    const addDetail = (text, todoId) => {
        const nextTodos = todos.map((todo) => {
            if (todo.id !== todoId) return todo

            return {
                ...todo,
                details: createNewDetails(todo.details, text),
            }
        })
        setTodos(nextTodos)
    }

    const toggleDetail = (todoId, detailId) => {
        const nextTodos = todos.map((todo) => {
            if (todo.id !== todoId) return todo

            return {
                ...todo,
                details: createToggledDetails(todo.details, detailId),
            }
        })
        setTodos(nextTodos)
    }

    const removeDetail = (todoId, detailId) => {
        const nextTodos = todos.map((todo) => {
            if (todo.id !== todoId) return todo

            return {
                ...todo,
                details: createRemovedDetails(todo.details, detailId),
            }
        })
        setTodos(nextTodos)
    }

    return (
        <TodoContext.Provider
            value={{
                todos,
                openDetailId,
                setOpenDetailId,
                addTodo,
                toggleTodo,
                removeTodo,
                addDetail,
                toggleDetail,
                removeDetail,
            }}
        >
            {children}
        </TodoContext.Provider>
    )
}
